import React from 'react'
import { connect } from 'react-redux'
import { List, WingBlank, Button, WhiteSpace, Flex } from 'antd-mobile';

const Item = List.Item;
const ddhimg = <i style={{ fontSize: 20 }} className=' iconfont icon-dingdanhao' />
const qjimg = <i style={{ fontSize: 20 }} className=' iconfont icon-chufadaodaxiao' />
const sjimg = <i style={{ fontSize: 20 }} className=' iconfont icon-shijian1' />
const ccrimg = <i style={{ fontSize: 20 }} className=' iconfont icon-user' />
const djimg = <i style={{ fontSize: 20 }} className=' iconfont icon-amount1' />
const zzsimg = <i style={{ fontSize: 20 }} className=' iconfont icon-shuju' />
const zjeimg = <i style={{ fontSize: 20 }} className=' iconfont icon-jine' />


/**
 * 支付页面
 */
class containaer extends React.Component {

    render() {
        let { datasource = {}, bookingArgs = {}, standbus = {} } = this.props;
        console.log(datasource)
        return (
            <div>
                <Flex justify='center' align="center" style={{ height: '100px' }}>
                    <i className="iconfont icon-zhifu" style={{ fontSize: '60px' }} />
                </Flex>
                <List className="my-list">
                    <Item>{ddhimg}&nbsp;订单号：{datasource.ddh}</Item>
                    <Item>{qjimg}&nbsp;区&nbsp;间：{datasource.start}-{datasource.target}</Item>
                    <Item>{sjimg}&nbsp;时&nbsp;间：{standbus.DrvDate} {standbus.DrvTime}</Item>
                    <Item>{ccrimg}&nbsp;乘车人：{bookingArgs.userName ? bookingArgs.userName.substr(0, bookingArgs.userName.length - 1) : ''}</Item>
                    <Item>{djimg}&nbsp;单&nbsp;价：￥{datasource.price1 ? datasource.price1.toFixed(1) : ''}</Item>
                    <Item>{zzsimg}&nbsp;总张数：{datasource.total1}</Item>
                    <Item>{zjeimg}&nbsp;总金额：￥{datasource.price1 ? (datasource.price1 * datasource.total1).toFixed(1) : ''}</Item>
                </List>
                <WingBlank>
                    <Button type="primary" style={{ marginTop: '20px', backgroundColor: 'green' }}>立即支付</Button><WhiteSpace />
                </WingBlank>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        datasource: state.booking.datasource,
        bookingArgs: state.booking.args,
        standbus: state.standbus.standbus,
    }
}

export default connect(mapStateToProps, {})(containaer)