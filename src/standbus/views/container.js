import React from 'react'
import { connect } from 'react-redux'
import { Toast, Calendar } from 'antd-mobile'
import moment from 'moment'

import { setArgs } from '../action'
import { actions } from '../../buyTicket'

const initScz = '许昌:C9A4EECB-E177-4AEF-8F52-32E8DE990DC3';

class container extends React.Component {
    constructor(props) {
        super(props);
        this.pre = this.pre.bind(this);
        this.next = this.next.bind(this);
        this.selectDate = this.selectDate.bind(this);
        this.selectStandbus = this.selectStandbus.bind(this);
        this.state = {}
    }

    /**
     * 前一天
     */
    pre() {
        const { end = null, scz = initScz, date = moment(), query, buyTicketSetArgs } = this.props;
        let curdatestr = moment().format('YYYY-MM-DD');
        let datestr = moment(date).format('YYYY-MM-DD');
        if (curdatestr === datestr) return;

        if (!scz) { Toast.fail('请选择上车站！'); return; }
        if (!end) { Toast.fail('请选择下车站！'); return; }
        if (!date) { Toast.fail('请选择发车日期！'); return; }

        query({ startSuid: scz.split(':')[1], endSuid: end.suid, date: date.subtract(1, 'days').format('YYYY-MM-DD') });
        buyTicketSetArgs({ date })
    }

    /**
     * 后一天
     */
    next() {
        const { end = null, scz = initScz, date = moment(), query, buyTicketSetArgs } = this.props;
        if (!scz) { Toast.fail('请选择上车站！'); return; }
        if (!end) { Toast.fail('请选择下车站！'); return; }
        if (!date) { Toast.fail('请选择发车日期！'); return; }

        query({ startSuid: scz.split(':')[1], endSuid: end.suid, date: date.add(1, 'days').format('YYYY-MM-DD') });
        buyTicketSetArgs({ date })
    }

    selectDate(el) {
        this.setState({ showCalendar: false });

        const { end = null, scz = initScz, query, buyTicketSetArgs } = this.props;
        if (!scz) { Toast.fail('请选择上车站！'); return; }
        if (!end) { Toast.fail('请选择下车站！'); return; }

        query({ startSuid: scz.split(':')[1], endSuid: end.suid, date: moment(el).format('YYYY-MM-DD') });
        buyTicketSetArgs({ date: moment(el) })
    }


    /**
     * 用户选中某个班次
     * @param {*} obj 
     */
    selectStandbus(obj) {
        let { setArgs, history } = this.props;
        setArgs({ standbus: obj });
        setTimeout(() => history.push('/booking'), 100);
    }

    render() {
        let { date = moment(), dataSource = [] } = this.props;
        let { showCalendar = false, selected = '' } = this.state;

        let curdatestr = moment().format('YYYY-MM-DD');
        let datestr = moment(date).format('YYYY-MM-DD');
        return (
            <div >

                <div style={{ overflow: 'hidden', position: 'fixed', top: '0px', left: '0px', right: '0px' }} >
                    <div className='preBtn' onClick={this.pre} style={{ color: curdatestr === datestr ? '#bbb' : '#000' }} >
                        <i className='icon iconfont icon-shangyiyehoutuifanhui' style={{ float: 'left' }} /> 前一天
                    </div>

                    <div className='dateBtn' onClick={() => this.setState({ showCalendar: true })} >
                        <i className='icon iconfont icon-rili-xianxing-xi' style={{ color: '#000' }} /> {moment(date).format('YYYY-MM-DD')}

                    </div>
                    <div className='nextBtn' onClick={this.next}  >
                        后一天 <i className='icon iconfont icon-xiayiyeqianjinchakangengduo' style={{ float: 'right' }} />
                    </div>
                </div>
                <div style={{ paddingTop: '2rem', paddingBottom: '4rem' }}>
                    {dataSource.map(obj => (
                        <div
                            key={obj.SchId + obj.DrvTime}
                            style={{ borderBottom: '1px solid #ddd', overflow: 'hidden', paddingTop: '1rem', paddingBottom: '0.2rem', backgroundColor: selected === obj.SchId ? '#ccc' : '#fff' }}
                            onClick={() => {
                                this.setState({ selected: obj.SchId });
                                this.selectStandbus(obj);
                            }}
                        >
                            <div>
                                <div className='listLeft'> {obj.DrvDate + ' ' + obj.DrvTime} </div><div className='listRight'>班次：{obj.SchId}</div>
                            </div>
                            < div >
                                <div className='listLeft'>
                                    <i className="iconfont icon-pic_yongcheqidian" style={{ fontSize: '1.2rem', color: 'rgb(47, 191, 60)' }} /> {obj.CarryStaIdName}
                                </div>
                                <div className='listRight zw'>余座：{obj.SeatAmount}</div>
                            </div>
                            <div>
                                <div className='listLeft'> <i className="iconfont icon-zhongdian" style={{ fontSize: '1.2rem', color: '#e43535' }} /> {obj.RouteName}</div>
                                <div className='listRight pj'>票价：￥{obj.FullPrice}</div>
                            </div>
                        </div>
                    ))}

                </div>
                <Calendar
                    visible={showCalendar}
                    type='one'
                    maxDate={moment().add(15, 'days').toDate()}
                    minDate={moment().toDate()}
                    onSelect={this.selectDate}
                    defaultValue={[moment(date).toDate()]}
                />
            </div >
        )
    }
}


function mapStateToProps(state) {
    return {
        dataSource: state.buyTicket.dataSource,
        end: state.site.end,
        scz: state.buyTicket.scz,
        date: state.buyTicket.date,
    }
}

export default connect(mapStateToProps, { query: actions.query, setArgs, buyTicketSetArgs: actions.setArgs })(container)
