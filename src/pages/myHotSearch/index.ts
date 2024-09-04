import express, { Request, Response } from 'express';
import uuid from 'node-uuid';
const cheerio = require('cheerio');
const https = require('https');
import commonRes from '../../../utils/commonRes';
import silentHandle from '../../../utils/silentHandle';
import { weiboConfig, baiduConfig, zhihuConfig } from './config'

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
            default:
                throw new Error('Invalid source parameter');
        }

        try {
            // 获取网页数据
            fetch(url, config).then(res => res.text()).then(html => {
                const $ = cheerio?.load(html);
                const hotSearches: object[] = [];
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

                        default:
                            break;
                    }
                });
                resolve(hotSearches)
            })
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