import React from 'react'
import { Card, WingBlank, WhiteSpace } from 'antd-mobile'

class Orderlist extends React.Component {

    render() {
        return (
            <div style={{ width: '100%', backgroundColor: '#f5f5f9' }}>
                <WhiteSpace />
                <WingBlank  >
                    <Card>
                        <Card.Header
                            title=" 订单号：201806142232 "
                            thumb={<i className='iconfont icon-chepiao1' style={{ fontSize: '1.5rem', marginRight: '0.5rem' }} />}
                            thumbStyle={{ height: '30px' }}
                            extra={<span>已支付</span>}
                        />
                        <Card.Body>
                            <div style={{ float: 'left' }}>许昌-郑州</div>
                            <br />
                            <div style={{ float: 'left' }}>2018-12-08 9:00 发车</div>
                            <br />
                            <div style={{ float: 'left' }}>wangao</div>
                        </Card.Body>
                        <Card.Footer extra={<div>2018-06-14 12:10</div>} />
                    </Card>
                </WingBlank>

                <WhiteSpace />
                <WingBlank >
                    <Card>
                        <Card.Header
                            title="订单号：201806142232"
                            thumb={<i className='iconfont icon-chepiao1' style={{ fontSize: '1.5rem', marginRight: '0.5rem' }} />}
                            thumbStyle={{ height: '30px' }}
                            extra={<span>已支付</span>}
                        />
                        <Card.Body>
                            <div style={{ float: 'left' }}>许昌-郑州</div>
                            <br />
                            <div style={{ float: 'left' }}>2018-12-08 9:00 发车</div>
                            <br />
                            <div style={{ float: 'left' }}>wangao</div>
                        </Card.Body>
                        <Card.Footer extra={<div>2018-06-14 12:10</div>} />
                    </Card>
                </WingBlank>
                <WhiteSpace />
                <WingBlank >
                    <Card>
                        <Card.Header
                            title="订单号：201806142232"
                            thumb={<i className='iconfont icon-chepiao1' style={{ fontSize: '1.5rem', marginRight: '0.5rem' }} />}
                            thumbStyle={{ height: '30px' }}
                            extra={<span>已支付</span>}
                        />
                        <Card.Body>
                            <div style={{ float: 'left' }}>许昌-郑州</div>
                            <br />
                            <div style={{ float: 'left' }}>2018-12-08 9:00 发车</div>
                            <br />
                            <div style={{ float: 'left' }}>wangao</div>
                        </Card.Body>
                        <Card.Footer extra={<div>2018-06-14 12:10</div>} />
                    </Card>
                </WingBlank>
                <WhiteSpace />
                <WingBlank>
                    <Card>
                        <Card.Header
                            title="订单号：201806142232"
                            thumb={<i className='iconfont icon-chepiao1' style={{ fontSize: '1.5rem', marginRight: '0.5rem' }} />}
                            thumbStyle={{ height: '30px' }}
                            extra={<span>已支付</span>}
                        />
                        <Card.Body>
                            <div style={{ float: 'left' }}>许昌-郑州</div>
                            <br />
                            <div style={{ float: 'left' }}>2018-12-08 9:00 发车</div>
                            <br />
                            <div style={{ float: 'left' }}>wangao</div>
                        </Card.Body>
                        <Card.Footer extra={<div>2018-06-14 12:10</div>} />
                    </Card>
                </WingBlank>
            </div>

        )
    }
}

export default Orderlist;