
export const weiboConfig = {
    url: 'https://s.weibo.com/top/summary',
    config: {
        "headers": {
            "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
            "accept-language": "zh-CN,zh;q=0.9",
            "cache-control": "max-age=0",
            "priority": "u=0, i",
            "sec-ch-ua": "\"Not)A;Brand\";v=\"99\", \"Google Chrome\";v=\"127\", \"Chromium\";v=\"127\"",
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": "\"macOS\"",
            "sec-fetch-dest": "document",
            "sec-fetch-mode": "navigate",
            "sec-fetch-site": "none",
            "sec-fetch-user": "?1",
            "upgrade-insecure-requests": "1",
            "cookie": "SUB=_2AkMRl3hof8NxqwFRmf0Qzm7lZIVxyArEieKny4mzJRMxHRl-yT9yqkdftRB6OhdWuYq0LAPqv6ivZdQHhs65yS4LEBg0; SUBP=0033WrSXqPxfM72-Ws9jqgMF55529P9D9WW12Wfvz-TYIsxhAAyWGJf1; _s_tentry=-; Apache=5322148437825.065.1724919488220; SINAGLOBAL=5322148437825.065.1724919488220; ULV=1724919488230:1:1:1:5322148437825.065.1724919488220:; UOR=,,chatgpt.com"
        },
        "referrerPolicy": "strict-origin-when-cross-origin",
        "body": null,
        "method": "GET"
    }
}

export const zhihuConfig = {
    url: 'https://www.zhihu.com/billboard',
    // url:'https://www.zhihu.com/api/v3/feed/topstory/hot-lists/total', // 获取知乎热榜
    config: {
        "headers": {
            "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
            "accept-language": "zh-CN,zh;q=0.9",
            "cache-control": "max-age=0",
            "priority": "u=0, i",
            "sec-ch-ua": "\"Not)A;Brand\";v=\"99\", \"Google Chrome\";v=\"127\", \"Chromium\";v=\"127\"",
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": "\"macOS\"",
            "sec-fetch-dest": "document",
            "sec-fetch-mode": "navigate",
            "sec-fetch-site": "none",
            "sec-fetch-user": "?1",
            "upgrade-insecure-requests": "1",
            "cookie": "_zap=82a3e4f3-547e-4321-8413-f85bf04ed46e; _xsrf=8c6f668f-046e-4440-a836-bd6edc0e9362; d_c0=AABSGS6PBBmPTuDapaTsGEin-aFHntSNbGw=|1722582698; __snaker__id=9X42WKUcOdcFVHgI; q_c1=2ad452122adb439ba6665cfe0ae34799|1722582749000|1722582749000; __zse_ck=001_gjwu53T7=ZLeOvqwZdS7iguItBN7WQdCyFUdXFcTu=CBaq38xYkL5ZwHqHsHdKaO7gNGgmufO5L4UD8KiL=rNG+mUuy+uGB7Wh3u0HXps71vU5P0CrDfD3ufk7Wu3fpS; tst=h; z_c0=2|1:0|10:1725420271|4:z_c0|80:MS4xLW5ZZFZBQUFBQUFtQUFBQVlBSlZUZThneFdkdXBSVUh3elpYRWFBNG9tZU96c2dBSWZwX1lBPT0=|c5633237479adc3a6d51d2691f5dfd265e2061897e5d15916efcf25cd18219de; BEC=5ee33e0856ed13c879689106c041a08d; unlock_ticket=ACBS0U0B6BgmAAAAYAJVTSfe12YF4uaT3BBhlZYh-1E5aJveL8XkZQ==; SESSIONID=NCM3duRaFVWGKPvJ4mVIpwnq3Xsb6tpC6WU6apOP8Gi"
        },
        "referrerPolicy": "strict-origin-when-cross-origin",
        "body": null,
        "method": "GET"
    }
}

export const baiduConfig = {
    url: "https://top.baidu.com/board?tab=realtime&sa=fyb_realtime_31065",
    config: {
        "headers": {
            "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
            "accept-language": "zh-CN,zh;q=0.9",
            "cache-control": "max-age=0",
            "sec-ch-ua": "\"Not)A;Brand\";v=\"99\", \"Google Chrome\";v=\"127\", \"Chromium\";v=\"127\"",
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": "\"macOS\"",
            "sec-fetch-dest": "document",
            "sec-fetch-mode": "navigate",
            "sec-fetch-site": "none",
            "sec-fetch-user": "?1",
            "upgrade-insecure-requests": "1",
            "cookie": "BAIDUID=1002E2FB9EB44025F59ED3D646924F38:FG=1; BAIDUID_BFESS=1002E2FB9EB44025F59ED3D646924F38:FG=1; BAIDU_WISE_UID=wapp_1722849985057_752; ZD_ENTRY=google; ZFY=xXKlwQIuqGHfmXpPMp:BlMWXIpq8RDPkNutGPmXNWAGs:C; newlogin=1; ppfuid=FOCoIC3q5fKa8fgJnwzbE0LGziLN3VHbX8wfShDP6RCsfXQp/69CStRUAcn/QmhIlFDxPrAc/s5tJmCocrihdwitHd04Lvs3Nfz26Zt2holplnIKVacidp8Sue4dMTyfg65BJnOFhn1HthtSiwtygiD7piS4vjG/W9dLb1VAdqMruOyYxu8xgrK49GD5UPdKO0V6uxgO+hV7+7wZFfXG0MSpuMmh7GsZ4C7fF/kTgmvq/k11nkKpEvJu9aKoOwiuNqiSlcS58Ly9mjkdbS+gNuLgcrFRyrB1NUhD+vuUH5U1v2iwj13daM+9aWJ5GJCQu/SUbF5jV5AUyz/jBiIgKVObaDCHgWJZH3ZrTGYHmi7XJB9z3y2o8Kqxep5XBCsugNOW5C73e/g54kuY4PKIS71ZI76Ek4aqBDEnUMj+O8679rCuwgzS80wwjQEaGzjcnvNXIEW2pwj4BXINSNFrPHuvVnM4vTcb6V/jfwuIbTeIGhYqrYfhHGZqJNx2uWmglAIQEZY21OyYDgpfKN3zxRn6ONqHK83MkBENWBMWSAwea/+1VSNUTGfIG+NKu2s+g28sOzjnLUnUE9KukMAMTPZYfT79sbFYuntY0Ry6GX3OsRAJVdXPXKlPRQiighN2h3utZNfUsAGL2WWa3tubT9td9rGfOenGkLOGCRladXTg1IKPDQ9z3/DiqHtAIbmyu3emEg6nEYu6lQuvYr6/UJpAq7e+CnVRC2DzwICP6cu9A5mNm34ZPuoRV+zY3FkhPEmPisglEK3LGhqrsO4/LHScN/HRAriUwmhXeCraGsUi8LtN30AMu+G7KnIfghM2dRGSluqM4FuAgHCvdnqfGnnbe3vsHq3LuF7pombT65cVprejPaivGVaWugm+VA1kVl5OE/aBXOg67P9UlCyJKVyutwgoMp5Aa/ZkjblrEvPdXZFhAgvw25kAwV0TwSXSkTCwPr2BOulFwE9QqeU6hK8/4gXL7D1yhOWYXNZvRaSNIhIuBVe4+Jop0oczpupZGEQw3OLo5dsSUeQDd6vDni1evF/M7yvmL+FUAwPmWZFbvNq69O2z3wBW+ogxJUDy9IDhObhno4D7MBZG4B+pNlhGWn0jikQ5zzmAASlnix3V2XtmwNAzvtRZUfKm/j5ohXGVaLqOQwr5UIY0Yb6SLY1Idv8jX8h4522dQP4UUSOwRVQ7btSmic48edZ0zdfs3/Nuh02ISWqx07kkZMfmdnyOb+SUndpETWRO7Om0KwOcjCN9Un1A4MQ67HepT7VF; BIDUPSID=1002E2FB9EB44025F59ED3D646924F38; PSTM=1724914378; BA_HECTOR=0420808h2k8lala520000g2h3cqmki1jd06ma1u; BDORZ=FAE1F8CFA4E8841CC28A015FEAEE495D; delPer=0; PSINO=5; H_PS_PSSID=60278_60359_60601_60665_60677"
        },
        "referrerPolicy": "strict-origin-when-cross-origin",
        "body": null,
        "method": "GET"
    }
}

export const toutiaoConfig = {
    url: "https://www.toutiao.com/hot-event/hot-board/?origin=toutiao_pc&_signature=_02B4Z6wo00101IX8.KwAAIDD1wPctztkfhiF2PgAAEetND23C2dtf.6GgF4lXIpkEvJCoRMrRNxPrK0-.hhbZiqcw093hOHz4EtrLSImL1fhNZWpQlXqx7P6RxnbqXnsoIRYGRxoCOedce1ocf",
    config: {
        "headers": {
            "accept": "application/json, text/plain, */*",
            "accept-language": "zh-CN,zh;q=0.9",
            "priority": "u=1, i",
            "sec-ch-ua": "\"Not)A;Brand\";v=\"99\", \"Google Chrome\";v=\"127\", \"Chromium\";v=\"127\"",
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": "\"macOS\"",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin",
            "cookie": "__ac_nonce=066d7f14800d260f78504; __ac_signature=_02B4Z6wo00f01SmuRhwAAIDCe1FmB2KPveUpjkKAACy.62; tt_webid=7397681176716494348; gfkadpd=24,6457; ttcid=a1c96a4fd3754974b97706c085c03abd10; x-web-secsdk-uid=9aa05d19-b5f7-4529-901c-4c383a646b0c; local_city_cache=%E6%9D%AD%E5%B7%9E; s_v_web_id=verify_m0nfb2of_rTl4qjSK_HBXb_42NA_81Qe_sgyT0F62AVTx; csrftoken=acde349ab023268d6656449ab88738c7; tt_scid=0lt3ilsHvCJiuQPm3orzA9l28avOg8a6-sE5jFpBPH45PeRKKlck94JOzSJMDAC77e73; ttwid=1%7CvMFfX7bcpiRsYk7SfV9RYLBDTEKx-Yrj3ezkeLDUkaY%7C1725428704%7Ca2edad35448dd391954146fe79b121fbc6dbf637b0ef1128e002d97b8955d7f8",
            "Referer": "https://www.toutiao.com/?&source=m_redirect",
            "Referrer-Policy": "strict-origin-when-cross-origin"
        },
        "body": null,
        "method": "GET"
    }
}

export const tengxunConfig = {
    url: "https://i.news.qq.com/gw/event/pc_hot_ranking_list?ids_hash=&offset=0&page_size=51&appver=15.5_qqnews_7.1.60&rank_id=hot",
    config: {
        "headers": {
            "accept": "application/json, text/plain, */*",
            "accept-language": "zh-CN,zh;q=0.9",
            "priority": "u=1, i",
            "sec-ch-ua": "\"Not)A;Brand\";v=\"99\", \"Google Chrome\";v=\"127\", \"Chromium\";v=\"127\"",
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": "\"macOS\"",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-site",
            "Referer": "https://news.qq.com/",
            "Referrer-Policy": "strict-origin-when-cross-origin"
        },
        "body": null,
        "method": "GET"
    }
}

export const sougouConfig = {
    url: "https://hotlist.imtt.qq.com/Fetch",
    config: {
        "headers": {
            "accept": "*/*",
            "accept-language": "zh-CN,zh;q=0.9",
            "content-type": "application/json",
            "sec-ch-ua": "\"Not)A;Brand\";v=\"99\", \"Google Chrome\";v=\"127\", \"Chromium\";v=\"127\"",
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": "\"macOS\"",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "cross-site",
            "x-requested-with": "XMLHttpRequest",
            "Referer": "https://123.sogou.com/",
            "Referrer-Policy": "unsafe-url"
        },
        "body": "{\"md5s\":{\"main_md5\":\"14575d67715c3ac2b0cd9ddb4161f62178a9954a\",\"tencent_md5\":\"538532a03ff976e55ff0180a123496df4dc24b24\",\"weibo_md5\":\"ea2f99f00ba0e082a6491b06a57be08fa6dc9026\"}}",
        "method": "POST"
    }
}
export const tiebaConfig = {
    url: "https://tieba.baidu.com/hottopic/browse/topicList",
    config: {
        "headers": {
            "accept": "application/json, text/javascript, */*; q=0.01",
            "accept-language": "zh-CN,zh;q=0.9",
            "sec-ch-ua": "\"Not)A;Brand\";v=\"99\", \"Google Chrome\";v=\"127\", \"Chromium\";v=\"127\"",
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": "\"macOS\"",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin",
            "x-requested-with": "XMLHttpRequest",
            "cookie": "XFI=e04f9370-6a89-11ef-8276-59465eefc8a0; XFCS=1F3FE390D82B9C928E5154CDE81C963A60F079992F4B672519F8465E63AB2080; XFT=ixW2VoLXdC3xChngTvw4V/GdchcvOBJyQ8wPZlOwKHs=; BAIDUID=1002E2FB9EB44025F59ED3D646924F38:FG=1; USER_JUMP=-1; Hm_lvt_292b2e1608b0823c1cb6beef7243ef34=1722849985; HMACCOUNT=E4F96E009E0C4907; video_bubble0=1; wise_device=0; newlogin=1; BIDUPSID=1002E2FB9EB44025F59ED3D646924F38; PSTM=1724914378; H_PS_PSSID=60278_60359_60601_60665_60677; BAIDUID_BFESS=1002E2FB9EB44025F59ED3D646924F38:FG=1; delPer=0; PSINO=5; BA_HECTOR=2l850h240k05848lahak0l0k3m2uia1jdfk721u; ZFY=VGyPfXUWNbq8krMNzbawJytCKD0lH4scN4lcAfQ2ZZQ:C; BAIDU_WISE_UID=wapp_1725432571963_600; ppfuid=undefined; XFI=d8ea6b00-6a89-11ef-b516-c548bed799f4; arialoadData=false; XFCS=EB982FFE05CD8927B34DFF043511C36BB65EF36874F183FCC99CEAE5B299B934; XFT=HBCb2cjxJok3mF9vHj2AMJm4rFckvXo+horD0LXv1EY=; Hm_lpvt_292b2e1608b0823c1cb6beef7243ef34=1725432588; RT=\"z=1&dm=baidu.com&si=027d228d-c09a-4919-99c5-67781ce5806b&ss=m0ni07hl&sl=3&tt=y7&bcn=https%3A%2F%2Ffclog.baidu.com%2Flog%2Fweirwood%3Ftype%3Dperf&ld=27q&nu=2gks0cx0&cl=4gy&ul=toj&hd=u18\"",
            "Referer": "https://tieba.baidu.com/",
            "Referrer-Policy": "strict-origin-when-cross-origin"
        },
        "body": null,
        "method": "GET"
    }
}
export const douyinConfig = {
    url: "https://www.douyin.com/aweme/v1/web/hot/search/list/?device_platform=webapp&aid=6383&channel=channel_pc_web&detail_list=1&source=6&pc_client_type=1&version_code=170400&version_name=17.4.0&cookie_enabled=true&screen_width=1920&screen_height=1080&browser_language=zh-CN&browser_platform=MacIntel&browser_name=Chrome&browser_version=127.0.0.0&browser_online=true&engine_name=Blink&engine_version=127.0.0.0&os_name=Mac+OS&os_version=10.15.7&cpu_core_num=8&device_memory=8&platform=PC&downlink=10&effective_type=4g&round_trip_time=100&webid=7402865880620746240&verifyFp=verify_lztfayrm_IG4pYQ13_1HbF_45k0_AwDQ_xYTyEbx4HL1X&fp=verify_lztfayrm_IG4pYQ13_1HbF_45k0_AwDQ_xYTyEbx4HL1X&msToken=w38z5gMxjBtKjtg0c8TfdkV22XRQFCVngsyMhyiuf5zBx_mR07WIXs1oEUVRH4li194L6i6KucnAAq01z_Odg5V9q9Zg2LwkeB3r5namaVNY3wq0mYvOp_Xzc4gclg%3D%3D&a_bogus=EymhQf0vdkgPvfyf53CLfY3q6vr3Yh%2Fs0trEMD2fmVV%2Fqy39HMY%2F9exoBQhvXbbjN4%2FkIeyjy4hbO3xprQA701wf7Wsx%2F2CZQg00t-P2so0j53intL6mE0hN4kb3SFlm5XNAEOJ0y75nFY00AocrmhK4bfebYyDWxp6Fa31o9E%3D%3D",
    config: {
        "headers": {
            "accept": "*/*",
            "accept-language": "zh-CN,zh;q=0.9",
            "priority": "u=1, i",
            "sec-ch-ua": "\"Not)A;Brand\";v=\"99\", \"Google Chrome\";v=\"127\", \"Chromium\";v=\"127\"",
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": "\"macOS\"",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin",
            "cookie": "ttwid=1%7CAC-Vmkp6Hcf7fcbSxkVYuwwcLflK4UmqIdfL5ELonMg%7C1723614051%7C3271ae9e716a36e42b705d5d2cd1c5662155afdfaeb83697242feb2059b73a3c; UIFID_TEMP=04334f064e21198b2492613256b037a8641b36104347f0fcdf493d9e3675e398f5c2701f8b804f692b2d2f1fdf73d88277117ae1ee4c9fe34b5891f6933831e2697ef3e6d6e0c046f1ce0cb9ebe6b11c; csrf_session_id=094f2a637c200f6ac351c2313eb44619; s_v_web_id=verify_lztfayrm_IG4pYQ13_1HbF_45k0_AwDQ_xYTyEbx4HL1X; fpk1=U2FsdGVkX1++gsruPfCPOZPB0sdMWU2JHH8sN5uzU7ASRr4qBNZ3uL8AoV2Jxv/rH3vHO4zCarxXeK5Sg6g0dw==; fpk2=6a23775729fd6c068d20d383cbe27f9b; passport_csrf_token=e7f2ebf5d51a1bed0ada19c86a7e6698; passport_csrf_token_default=e7f2ebf5d51a1bed0ada19c86a7e6698; bd_ticket_guard_client_web_domain=2; UIFID=04334f064e21198b2492613256b037a8641b36104347f0fcdf493d9e3675e398b0ba6643a5f8e4e6fc7eaa46783c3b4b815c7c13c7ca464266f613705b7159c0ce11438e603ba6f7f324490fcb6ad1c370e7937a44f3d5cc20c1dbf2962836969f62fbfe249405a1987311e29faeb352a41b8649c033c9b1d96f13ddb677a9f038fcaa5a1cc3e1162a40d3ab8f190953b32f9eb5572ccb5a9eadc68e5641ab14; hevc_supported=true; dy_swidth=1920; dy_sheight=1080; FORCE_LOGIN=%7B%22videoConsumedRemainSeconds%22%3A180%7D; volume_info=%7B%22isUserMute%22%3Afalse%2C%22isMute%22%3Atrue%2C%22volume%22%3A0.5%7D; douyin.com; device_web_cpu_core=8; device_web_memory_size=8; stream_player_status_params=%22%7B%5C%22is_auto_play%5C%22%3A0%2C%5C%22is_full_screen%5C%22%3A0%2C%5C%22is_full_webscreen%5C%22%3A0%2C%5C%22is_mute%5C%22%3A1%2C%5C%22is_speed%5C%22%3A1%2C%5C%22is_visible%5C%22%3A1%7D%22; odin_tt=90dcf0f3cff03b0481ea90018d787c97adfaceffaa6c26304cfa180eb1c316d47ca6167ca663256caae1bef84fc068db2308dd77cc9ce5a13e83b8235a2d05c53312d16ec2d7e58a5abd4d5497e451cf; SEARCH_RESULT_LIST_TYPE=%22single%22; x-web-secsdk-uid=97c28d5e-65ed-4369-b817-95abe432e7b0; __ac_nonce=066d80c640053bb5a6f8b; __ac_signature=_02B4Z6wo00f01GV-K-wAAIDDN4EL9hZvmcRlXi9AAH-P5d; strategyABtestKey=%221725434992.996%22; xgplayer_user_id=295945264529; xg_device_score=7.409489771033123; xgplayer_device_id=47630001144; pwa2=%220%7C0%7C1%7C1%22; stream_recommend_feed_params=%22%7B%5C%22cookie_enabled%5C%22%3Atrue%2C%5C%22screen_width%5C%22%3A1920%2C%5C%22screen_height%5C%22%3A1080%2C%5C%22browser_online%5C%22%3Atrue%2C%5C%22cpu_core_num%5C%22%3A8%2C%5C%22device_memory%5C%22%3A8%2C%5C%22downlink%5C%22%3A10%2C%5C%22effective_type%5C%22%3A%5C%224g%5C%22%2C%5C%22round_trip_time%5C%22%3A50%7D%22; WallpaperGuide=%7B%22showTime%22%3A1725435188883%2C%22closeTime%22%3A0%2C%22showCount%22%3A1%2C%22cursor1%22%3A21%2C%22cursor2%22%3A2%7D; biz_trace_id=12738adf; bd_ticket_guard_client_data=eyJiZC10aWNrZXQtZ3VhcmQtdmVyc2lvbiI6MiwiYmQtdGlja2V0LWd1YXJkLWl0ZXJhdGlvbi12ZXJzaW9uIjoxLCJiZC10aWNrZXQtZ3VhcmQtcmVlLXB1YmxpYy1rZXkiOiJCQ0Z3OFlrWEdzNDNPYkFUbkdwWTZ3T3RhTTJ6R0pabXhCVG1ZS2hGS1h4eENFVHJBZ1QzSkE5dGJNaEhhTDVCR3BMeGY0NWI2UGtvQlFQalNzejVpbVU9IiwiYmQtdGlja2V0LWd1YXJkLXdlYi12ZXJzaW9uIjoxfQ%3D%3D; download_guide=%223%2F20240904%2F0%22; IsDouyinActive=true; home_can_add_dy_2_desktop=%220%22",
            "Referer": "https://www.douyin.com/hot",
            "Referrer-Policy": "strict-origin-when-cross-origin"
        },
        "body": null,
        "method": "GET"
    }
}
export const bilibiliConfig = {
    url: "https://api.bilibili.com/x/web-interface/ranking/v2?rid=0&type=all",
    config: {
        "headers": {
            "accept": "application/json, text/plain, */*",
            "accept-language": "zh-CN,zh;q=0.9",
            "priority": "u=1, i",
            "sec-ch-ua": "\"Not)A;Brand\";v=\"99\", \"Google Chrome\";v=\"127\", \"Chromium\";v=\"127\"",
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": "\"macOS\"",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-site",
            "cookie": "buvid3=61535143-6732-EEC3-0494-409642DAAEA417395infoc; b_nut=1722318717; _uuid=6ED2D216-A234-6210B-A963-D23D28FF3DC317681infoc; home_feed_column=5; buvid_fp=bc0b2b49e5e6aa2e8d95254fd2579c94; buvid4=C87D61CF-8C80-EE20-35F3-79BBAE2EF4DA18549-024073005-MjWjeWCDLQ63Ww7T6Z8Ztg%3D%3D; rpdid=|(umRk~mkJuu0J'u~kkJkuRkk; header_theme_version=CLOSE; DedeUserID=3546565690002243; DedeUserID__ckMd5=f333c97f9e8348bb; CURRENT_QUALITY=80; enable_web_push=ENABLE; iflogin_when_web_push=1; SESSDATA=e147dbed%2C1739676157%2C229b0%2A81CjB8f21ZPj5LzJpl_evCoKJXP1YmOxXdwjExQNSv6eZb4GnE2yp4ZvkYSDMCxhYpIrQSVlFYOUZKd0t1RjRlMjNEMHZvR2V5SEIwak9fYU9iVEE2Vm5RMVFUNTZydG9mXy03d05wVTNzU3lZZXVKRFFhM1dEdkNjUHZobzJCVG95b213X1VLWUNRIIEC; bili_jct=81025bb3d636451b1dc52c7db2fe3762; sid=7efmdnpi; LIVE_BUVID=AUTO9317241241665563; is-2022-channel=1; bsource=search_google; CURRENT_FNVAL=4048; bili_ticket=eyJhbGciOiJIUzI1NiIsImtpZCI6InMwMyIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MjU1MjUxODEsImlhdCI6MTcyNTI2NTkyMSwicGx0IjotMX0.bk2_8ySjUGobWvOfqDb0-hiSpUxwlP8D3PGMN700TkI; bili_ticket_expires=1725525121; b_lsid=88151EAC_191BC093AE3; bp_t_offset_3546565690002243=973231892692205568; browser_resolution=1920-150",
            "Referer": "https://www.bilibili.com/",
            "Referrer-Policy": "no-referrer-when-downgrade"
        },
        "body": null,
        "method": "GET"
    }
}