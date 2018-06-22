
import fetch from 'isomorphic-fetch'

import { DOMAIN } from './config'

let requestConfig = {
    method: 'POST',
    headers: { "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8" },
    mode: 'cors',
    cache: 'default'
}

/**
 * 所有的请求后台接口的入口
 */
var API = {
    fetch: (name, params) => {
        var url = API.formatUrl(name);
        let config = API.formatConfig(params);

        return new Promise(function (resolve, reject) {
            fetch(url, config).then((response) => {
                //赋值 packet_token
                if (response.headers.get('packet_token')) {
                    // packet_token = response.headers.get('packet_token');
                    localStorage.setItem('packet_token', response.headers.get('packet_token'));
                }
                response.json().then((data) => {
                    //类似回调函数
                    resolve(data);
                });
            }, (e) => {
                reject(e)
            })
        })
    },

    formatUrl: (name) => {
        // let url = domain + URLTypes[name]
        let url = DOMAIN + name;
        return url;
    },

    formatConfig: (params) => {
        let dataSetBodyStr = null;
        let pageSetBodyStr = null;
        let bodyStr = null;

        if (params.dataSetBody) {
            //解析{dataSetBody:{},pageSetBody:{}}格式的对象
            dataSetBodyStr = JSON.stringify(params.dataSetBody);
        } else {
            //解析{name,pwd}格式的对象
            dataSetBodyStr = JSON.stringify(params);
        }
        bodyStr = 'dataSetBody=' + dataSetBodyStr
        //设置页码，暂时
        if (params.pageSetBody) {
            pageSetBodyStr = JSON.stringify(params.pageSetBody);
            bodyStr = bodyStr + '&pageSetBody=' + pageSetBodyStr
        }

        //设置token到头数据中
        requestConfig.headers.packet_token = localStorage.getItem("packet_token");
        return Object.assign({}, { body: bodyStr }, requestConfig)
    }
}

export default API;
