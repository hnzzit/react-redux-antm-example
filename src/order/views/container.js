import React from 'react'
import { Tabs } from 'antd-mobile'

import Orderlist from './orderlist'

const tabs = [
    { title: '未支付订单' },
    { title: '未出行订单' },
    { title: '历史订单' },
];


class container extends React.Component {

    render() {
        return (
            <div style={{ height: '100%' }}>
                <Tabs tabs={tabs}
                    initialPage={1}
                    onChange={(tab, index) => { }}
                    onTabClick={(tab, index) => { }}
                >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px' }}>
                        您没有为支付订单！
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', height: '1000px' }}>
                        <Orderlist ></Orderlist>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', height: '1000px' }}>
                        <Orderlist ></Orderlist>
                    </div>
                </Tabs>
            </div>
        )
    }
}



export default container;