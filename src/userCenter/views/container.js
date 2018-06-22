import React from 'react'
import { Link } from 'react-router-dom'

import { List, Flex, WingBlank, Button, WhiteSpace } from 'antd-mobile'

const { Item } = List;

class containaer extends React.Component {

    render() {

        return (
            <div>
                <Flex justify='center' align="center" style={{ height: '100px' }}>
                    <i className="iconfont icon-unie64d" style={{ fontSize: '60px' }} />
                </Flex>
                <List className="my-list">
                    <Item extra={'wangao'}>昵称</Item>
                    <Item extra={'13083838922'}>电话号码</Item>
                    <Item extra={'41082319******0490'}>身份证号</Item>
                </List>
                <WhiteSpace />
                <List className="my-list">
                    <Link to='/linkMan'><Item extra={'查看'} arrow="horizontal">常用联系人</Item></Link>
                </List>
                <WhiteSpace />
                <List className="my-list">
                    <Link to='/payment'><Item extra={'查看'} arrow="horizontal">常见问题</Item></Link>
                </List>

                <WingBlank style={{ marginTop: '100px' }}>
                    <Button type='primary'>修改信息</Button>
                </WingBlank>
            </div>
        )
    }
}



export default containaer;