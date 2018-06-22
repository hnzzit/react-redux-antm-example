import React from 'react'

import { TabBar } from 'antd-mobile'
import { Link } from 'react-router-dom';

class menu extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
        this.onPress = this.onPress.bind(this);
    }

    onPress(item) {
        this.setState({ selected: item })
    }

    render(match) {
        let { selected = 'gmcp' } = this.state;
        return (
            <div className='tabbar'>
                <TabBar >
                    <TabBar.Item
                        title="购买车票"
                        key="gmcp"
                        icon={<Link to='/buyTicket'><i className='iconfont icon-youhuijuan tabbarIcon' ></i> </Link>}
                        selectedIcon={<Link to='/buyTicket'><i className='iconfont icon-youhuijuan selectedTabbarIcon' ></i> </Link>}
                        selected={selected === 'gmcp' ? true : false}
                        onPress={() => { this.onPress('gmcp') }}
                    />
                    <TabBar.Item
                        title="我的订单"
                        key="wddd"
                        icon={<Link to='/order'><i className='iconfont icon-zhangdan-xianxing tabbarIcon' ></i></Link>}
                        selectedIcon={<Link to='/buyTicket'><i className='iconfont icon-zhangdan-xianxing selectedTabbarIcon' ></i> </Link>}
                        selected={selected === 'wddd' ? true : false}
                        onPress={() => { this.onPress('wddd') }}
                    />
                    <TabBar.Item
                        title="个人中心"
                        key="grzx"
                        icon={<Link to='/userCenter'><i className='iconfont icon-yonghu-xianxing tabbarIcon' ></i></Link>}
                        selectedIcon={<Link to='/buyTicket'><i className='iconfont icon-yonghu-xianxing selectedTabbarIcon' ></i> </Link>}
                        selected={selected === 'grzx' ? true : false}
                        onPress={() => { this.onPress('grzx') }}
                    />
                </TabBar>
            </div>

        )
    }

}


export default menu;