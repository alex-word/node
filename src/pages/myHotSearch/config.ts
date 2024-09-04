
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

export const douyinConfig = {
    url: "https://www.iesdouyin.com/web/api/v2/hotsearch/billboard/word/",
    config: {
    }
}