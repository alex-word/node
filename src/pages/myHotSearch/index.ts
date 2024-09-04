import express, { Request, Response } from 'express';
import uuid from 'node-uuid';
const cheerio = require('cheerio');
const https = require('https');
import commonRes from '../../../utils/commonRes';
import db from '../../../database'
import silentHandle from '../../../utils/silentHandle';
import { weiboConfig, baiduConfig, zhihuConfig, toutiaoConfig, sougouConfig, tengxunConfig, tiebaConfig, douyinConfig, bilibiliConfig } from './config'

const app = express();
const PORT = 3000;
interface ZhiHuItemProps {
    target: { link: { url: string; }; titleArea: { text: any; }; metricsArea: { text: any; }; };
}

// 爬取不同数据的函数
const handleHotSearch = function (req: Request) {
    const { source } = req.params

    return new Promise(async (resolve, reject) => {
        let config = {};
        let url = ''
        let selector = '';

        // 根据不同的 source 设置不同的 URL 和选择器
        switch (source) {
            case 'weibo':
                url = weiboConfig.url;
                config = weiboConfig.config
                selector = 'td.td-02'; // 微博热搜选择器
                break;
            case 'zhihu':
                url = zhihuConfig.url;
                config = zhihuConfig.config
                selector = '#js-initialData'; // 知乎热榜选择器
                break;
            case 'baidu':
                url = baiduConfig.url;
                config = baiduConfig.config
                selector = '.category-wrap_iQLoo'; // 百度热搜选择器
                break;
            case 'toutiao':
                url = toutiaoConfig.url;
                config = toutiaoConfig.config
                break;
            case 'tengxun':
                url = tengxunConfig.url;
                config = tengxunConfig.config
                break;
            case 'sougou':
                url = sougouConfig.url;
                config = sougouConfig.config
                break;
            case 'tieba':
                url = tiebaConfig.url;
                config = tiebaConfig.config
                break;
            case 'douyin':
                url = douyinConfig.url;
                config = douyinConfig.config
                break;
            case 'bilibili':
                url = bilibiliConfig.url;
                config = bilibiliConfig.config
                break;
            default:
                throw new Error('Invalid source parameter');
        }

        try {
            if (selector)
                // 获取网页数据
                fetch(url, config).then(res => res.text()).then(html => {
                    const hotSearches: object[] = [];
                    const $ = cheerio?.load(html);
                    $(selector).each((index: any, element: any) => {
                        switch (source) {
                            case 'weibo':
                                if ($(element).find('span').text().trim() !== '') {
                                    const titleElement = $(element).find('a')
                                    const id = uuid.v4(titleElement.text().trim());
                                    const hot_metrics = $(element).find('span').text().trim().split(' ')
                                    hotSearches.push({
                                        hot_search_id: id,
                                        hot_search_title: titleElement.text().trim(),
                                        hot_search_href: 'https://s.weibo.com' + titleElement[0].attribs.href,
                                        hot_metrics: hot_metrics[hot_metrics.length - 1],
                                        source: 'weibo'
                                    });
                                }
                                break;
                            case 'baidu':
                                const titleElement = $(element).find('.c-single-text-ellipsis')
                                hotSearches.push({
                                    hot_search_id: uuid.v4(titleElement.text().trim()),
                                    hot_search_title: titleElement.text().trim(),
                                    hot_search_href: titleElement[0].parent.attribs.href,
                                    hot_metrics: $(element).find('.hot-index_1Bl1a').text().trim(),
                                    source: 'baidu'
                                });
                                break;
                            case 'zhihu':
                                hotSearches.push(...JSON.parse(element.children[0].data).initialState.topstory.hotList?.map(
                                    (item: ZhiHuItemProps) => (
                                        {
                                            hot_search_id: item.target.link.url.substring(31,),
                                            hot_search_title: item.target.titleArea.text,
                                            hot_search_href: item.target.link.url,
                                            hot_metrics: item.target.metricsArea.text.substring(0, item.target.metricsArea.text.length - 2),
                                            source: 'zhihu'
                                        })))
                                break;
                            // hotSearches.push(...html.data?.map(
                            //     (item: any) => (
                            //         {
                            //             hot_search_id: item.ClusterId,
                            //             hot_search_title: item.Title,
                            //             hot_search_href: item.Url,
                            //             hot_metrics: item.HotValue,
                            //             source: 'toutiao'
                            //         })))
                            default:
                                break;
                        }
                    });
                    resolve(hotSearches)
                })
            else {
                fetch(url, config).then(res => res.text()).then(html => {
                    const hotSearches: object[] = [];
                    let hotList = []
                    switch (source) {
                        case 'toutiao':
                            hotSearches.push(...JSON.parse(html).data?.map(
                                (item: any) => (
                                    {
                                        hot_search_id: item.ClusterId,
                                        hot_search_title: item.Title,
                                        hot_search_href: item.Url,
                                        hot_metrics: item.HotValue,
                                        source: 'toutiao'
                                    })))
                        case 'tengxun':
                            hotList = JSON.parse(html).idlist?.[0]?.newslist?.slice(2)
                            hotSearches.push(...hotList?.map((item: { hotEvent: { id: any; title: any; hotScore: any; }; surl: any; }) => ({
                                hot_search_id: item.hotEvent.id,
                                hot_search_title: item.hotEvent.title,
                                hot_search_href: item.surl,
                                hot_metrics: item.hotEvent.hotScore,
                                source: 'sougou'
                            })))
                        case 'sougou':
                            hotSearches.push(...JSON.parse(html).main?.map(
                                (item: any) => (
                                    {
                                        hot_search_id: uuid.v4(item.title),
                                        hot_search_title: item.title,
                                        hot_search_href: item.url,
                                        hot_metrics: item.score,
                                        source: 'sougou'
                                    })))
                        case 'tieba':
                            hotSearches.push(...JSON.parse(html).data?.bang_topic?.topic_list?.map(
                                (item: any) => (
                                    {
                                        hot_search_id: uuid.v4(item.topic_id),
                                        hot_search_title: item.topic_name,
                                        hot_search_href: item.topic_url,
                                        hot_metrics: item.discuss_num,
                                        source: 'tieba'
                                    })))
                        case 'douyin':
                            hotList = JSON.parse(html).data?.word_list?.slice(1)
                            hotSearches.push(...hotList?.map(
                                (item: any) => (
                                    {
                                        hot_search_id: uuid.v4(item.word),
                                        hot_search_title: item.word,
                                        hot_search_href: `https://www.douyin.com/search/${item.word}?type=general`,
                                        hot_metrics: item.hot_value,
                                        source: 'douyin'
                                    })))
                        case 'bilibili':
                            hotList = JSON.parse(html).data?.list
                            // const sqlList =
                            //     [hotList?.map(item => ([item.title, item.short_link_v2, item.stat.view, 'bilibili']))]
                            hotSearches.push(...hotList?.map(
                                (item: any) => (
                                    {
                                        hot_search_id: uuid.v4(item.aid),
                                        hot_search_title: item.title,
                                        hot_search_href: item.short_link_v2,
                                        hot_metrics: item.stat.view,
                                        source: 'bilibili'
                                    })))
                        // db.query('TRUNCATE TABLE hot_search')
                        // db.query(
                        //     'INSERT INTO hot_search (hot_search_title, hot_search_href, hot_metrics,source) VALUES ?', sqlList
                        // ).then(() => {
                        //     console.log('插入成功');
                        // })
                        default:
                            break;
                    }
                    resolve(hotSearches)
                })
            }
        } catch (error) {
            reject(error)
        }
    })
}

export const fetchHotSearch = async (req: Request, res: Response) => {
    const [e, data] = await silentHandle(handleHotSearch, req)
    // console.log(e, data);

    e ? commonRes.error(res, null, e) : commonRes(res, data)

}