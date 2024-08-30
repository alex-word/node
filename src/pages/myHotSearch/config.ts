
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
            "cookie": "_zap=82a3e4f3-547e-4321-8413-f85bf04ed46e; _xsrf=8c6f668f-046e-4440-a836-bd6edc0e9362; d_c0=AABSGS6PBBmPTuDapaTsGEin-aFHntSNbGw=|1722582698; captcha_session_v2=2|1:0|10:1722582699|18:captcha_session_v2|88:WXczblB3cnRBblJKKy9OVzZJMTVXWU9BdUxUMTNmSXJpbEszTmF1ajVMZC9LOGNaczdnR1pZVks5d3FvaW5jRA==|31abe892edc819b6b5f9efbc2e973b0ed43ce3d770680285a5b18cae24272c9f; __snaker__id=9X42WKUcOdcFVHgI; gdxidpyhxdE=2E%2BJTB6o%2FTCd2AMaTH41Q6s2u8Bj%2FH2rX9znXfDMGODjVl8y3wElAG%2Byu9z9eMIS%2FJOsX82aqjSHcoI7YfVaX%5CUO0R%5CQ2hcqVMLk%2BkVN%5CRxVPVXY43E2AJtm7C%2F6uakupGft9b%2BM%5Cbtp3%2BOaQRGZM5EppLVtb2i3I4129WAVZYEY6Dls%3A1722583599961; captcha_ticket_v2=2|1:0|10:1722582709|17:captcha_ticket_v2|728:eyJ2YWxpZGF0ZSI6IkNOMzFfRUwweE9xOGxRYkhxVk9Wd1NPU1ZuM1IxblF1RXp4c1lzYkt5WmFia1B4c3RYZ1dDOEIxR2U1WjNlNSpqTGtRTk10TTlDRGhSVFFXSjB4QzMuY2xFU29hRCpqRGg2XzllTk5jcGROZVRHSGEwZXBtZGpwNFJ4NE1WdWZGMGxYbk9CSDhZdE93c3BzeGMzNkZxTk5paFBycFZaUGU0emhBcnNTcmI5bGs4NFhvM0xqS0J2S0Uzd21nczFkeExUVDJQWDVlc2o0M0M1KjBGVUNSSlZ6cktaSm1OWm9aVGUxKjFBMEVtMXdhYmEuOVFFTE5zKlpPVXNic2FzT3hyOGl3cDZpdko1YXl1RjF3OHpUajZnaG54RlpSM01TTEgqSEpjczFLakF6cVF3ZVVSZlN2eDJ6cnJhNjlrRSpxcnJjNUFpUk5kWTh4SnBNd1hQeHg0SGxBbWM2cnhwSDFvREt5a2gwOXdJNHdFSmZ5MGdoRDJzaGFHdU05aHBfU1JqdWo2Snpad3p5WFA2b1N6Qk8xQUlXV1JlQjhZaTFfSGJJM2l2ZmpySVkwckVJR3pEU3lQU1cyYWt0akwwUUZoWjVNV1RDQ3dEKldzVmN3SFFqNkVzWk5LUipOQWVSRGdEZmJMLlJRVFlQWk92bkxQZXZvLlV1bi5PaVFMeV9qXzlQMypURHZhMVk3N192X2lfMSJ9|8a91b8b24f712a65301572accade9e75409617113c3f466c5803deb176ee0c96; q_c1=2ad452122adb439ba6665cfe0ae34799|1722582749000|1722582749000; z_c0=2|1:0|10:1723441014|4:z_c0|92:Mi4xLW5ZZFZBQUFBQUFBQUZJWkxvOEVHU1lBQUFCZ0FsVk4zZFNaWndBRnZzZnRzSWd6OThFQWlpUFdYQ2RaajdFUHB3|21d795bf63810fc96299d987894a4be8736bd2eab6496126bc133ed5e2cb0ce7; tst=h; __zse_ck=001_gjwu53T7=ZLeOvqwZdS7iguItBN7WQdCyFUdXFcTu=CBaq38xYkL5ZwHqHsHdKaO7gNGgmufO5L4UD8KiL=rNG+mUuy+uGB7Wh3u0HXps71vU5P0CrDfD3ufk7Wu3fpS; BEC=738c6d0432e7aaf738ea36855cdce904; unlock_ticket=ACBS0U0B6BgmAAAAYAJVTQtv0WaL8VFzVCAEles4-RT1GSg3KnkvtQ==; SESSIONID=6vxIoHcf3bmpKRS359YnAP8itFfjmjx3xWlwAZSRdKi"
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