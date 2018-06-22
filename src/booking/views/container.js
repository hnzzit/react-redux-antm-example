import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { Flex, WingBlank, Button, Toast } from 'antd-mobile'
import { actions, passenger } from '../../linkman';
import { tools } from '../../global/index';
import { preOrderWs } from '../action'


class container extends React.Component {
    constructor(props) {
        super(props);
        this.deletePassenger = this.deletePassenger.bind(this);
        this.preOrder = this.preOrder.bind(this);
    }

    deletePassenger(obj) {
        let { passengers = new Set(), setPassengerArgs } = this.props;
        tools.SetDel(passengers, obj, 'suid');
        let newPa = new Set();
        passengers.forEach(pa => newPa.add(pa));
        setPassengerArgs({ passengers: newPa })
    }

    /**
     * 预约
     */
    preOrder() {
        let { standbus = {}, passengers = new Set(), preOrderWs } = this.props;
        if (passengers.size == 0) { Toast.fail('请选择乘车人！'); return; }

        let userName = '', userCardId = '';
        passengers.forEach((obj, index) => {
            userName += obj.username + ',';
            userCardId += obj.sfz + ',';
        });

        preOrderWs({ startNo: standbus.CarryStaId, endNo: standbus.StopId, total1: passengers.size, total2: 0, startbc: standbus.SchId, startdate: standbus.DrvDate, userName, userCardId, history: this.props.history });
    }

    render() {
        let { passengers = new Set(), standbus = {} } = this.props;
        return (
            <div  >
                <Flex justify='center' align="center" style={{ height: '100px' }}>
                    <i className="iconfont icon-xiadan" style={{ fontSize: '60px' }} />
                </Flex>
                <div style={{ backgroundColor: '#fff' }}>
                    <div style={{ borderBottom: '1px solid #ddd', overflow: 'hidden', paddingTop: '1rem', paddingBottom: '0.2rem', }}>
                        <div>
                            <div className='listLeft'> {standbus.DrvDate} {standbus.DrvTime} </div><div className='listRight'>班次：{standbus.SchId}</div>
                        </div>
                        < div >
                            <div className='listLeft'>
                                <i className="iconfont icon-pic_yongcheqidian" style={{ fontSize: '1.2rem', color: 'rgb(47, 191, 60)' }} /> {standbus.CarryStaIdName}
                            </div>
                            <div className='listRight zw'>余座：{standbus.SeatAmount}</div>
                        </div>
                        <div>
                            <div className='listLeft'> <i className="iconfont icon-zhongdian" style={{ fontSize: '1.2rem', color: '#e43535' }} /> {standbus.RouteName}</div>
                            <div className='listRight pj'>票价：￥{standbus.FullPrice}</div>
                        </div>
                    </div>
                    <div>
                        <div style={{ padding: '1rem', overflow: 'hidden' }}>
                            <div className='ccrxx'>乘车人信息</div>
                            <div className='zjccr'> <Link to='/passenger'>
                                <i className="iconfont icon-jia-xianxingyuankuang zjccri" ></i>增加</Link>
                            </div>
                        </div>
                        <div>
                            {Array.from(passengers).map((pa) => {
                                return (
                                    <div className='ccr' key={pa.suid}>
                                        <div className="name">{pa.username}</div>
                                        <div className="sfz">{pa.sfz}</div>
                                        <div className="delete"> <i className="iconfont icon-shanchu1"
                                            onClick={() => this.deletePassenger(pa)}></i> </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div>
                        <WingBlank style={{ marginTop: '1.5rem', marginBottom: '1.5rem' }}>
                            <Button type='primary' onClick={this.preOrder} >下单（￥{(standbus.FullPrice * passengers.size).toFixed(1)}）</Button>
                        </WingBlank>
                    </div>
                </div>

            </div>
        )
    }
}


function mapStateToProps(state) {
    return {
        standbus: state.standbus.standbus,
        passengers: state.linkman.passengers,

    }
}

export default connect(mapStateToProps, { setPassengerArgs: actions.setArgs, preOrderWs })(container)
