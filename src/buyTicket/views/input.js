import React from 'react'
import { connect } from 'react-redux'
import { List, InputItem, Checkbox, WhiteSpace, Button, WingBlank, DatePicker, Picker, Toast } from 'antd-mobile';
import moment from 'moment'
import { Link } from "react-router-dom";
import { setArgs, query } from '../action'

const AgreeItem = Checkbox.AgreeItem;


const iconStyle = {
    fontSize: '20px',
    color: '#827d7d'
}

const sczs = [
    { value: '许昌:C9A4EECB-E177-4AEF-8F52-32E8DE990DC3', label: '许昌' },
    { value: '许昌东站:2', label: '许昌东站' },
    { value: '许昌南站:3', label: '许昌南站' },
    { value: '禹州东站:4', label: '禹州东站' }
]

const initScz = '许昌:C9A4EECB-E177-4AEF-8F52-32E8DE990DC3';

class TicketInput extends React.Component {

    constructor(props) {
        super(props);
        this.query = this.query.bind(this);
    }

    query() {
        const { end = null, scz = initScz, date = moment(), query } = this.props;
        if (!scz) { Toast.fail('请选择上车站！'); return; }
        if (!end) { Toast.fail('请选择下车站！'); return; }
        if (!date) { Toast.fail('请选择发车日期！'); return; }

        query({ startSuid: scz.split(':')[1], endSuid: end.suid, date: moment(date).format('YYYY-MM-DD') });
        this.props.history.push('/standbus')
    }

    render() {
        const { end = {}, setArgs, scz = initScz, date = moment() } = this.props;
        return (
            <div>
                <List>

                    <Picker data={sczs} cols={1}
                        extra={<i className='iconfont icon-xiayiyeqianjinchakangengduo'></i>}
                        onChange={data => setArgs({ scz: data[0] })}>
                        <InputItem
                            type='text'
                            defaultValue={100}
                            placeholder="请输入上车站点"
                            clear
                            editable={false}
                            value={scz.split(':')[0]}
                        >
                            <i className='iconfont icon-weizhi-xianxing' style={iconStyle}></i> 上车站
                        </InputItem>
                    </Picker>
                    <Link to='/site'>
                        <InputItem
                            type='text'
                            placeholder="请输入下车站点"
                            clear
                            onChange={(v) => { console.log('onChange', v); }}
                            onBlur={(v) => { console.log('onBlur', v); }}
                            extra={<i className='iconfont icon-xiayiyeqianjinchakangengduo'></i>}
                            editable={false}
                            value={end.zdmc}
                        >
                            <i className='iconfont icon-weizhi' style={iconStyle}></i> 下车站
                    </InputItem>
                    </Link>
                    <DatePicker
                        mode="date"
                        title="请选择乘车日期"
                        extra={<i className='iconfont icon-xiayiyeqianjinchakangengduo'></i>}
                        onChange={date => setArgs({ date })}
                    >
                        <InputItem
                            type='text'
                            placeholder="请选择乘车日期"
                            clear
                            onChange={(v) => { console.log('onChange', v); }}
                            onBlur={(v) => { console.log('onBlur', v); }}
                            value={moment(date).format('YYYY-MM-DD')}
                            editable={false}
                        >
                            <i className='iconfont icon-rili' style={iconStyle}></i> 乘车日
                        </InputItem>
                    </DatePicker>


                </List>
                <WhiteSpace />
                <WhiteSpace />
                <WhiteSpace />
                <div>
                    <WingBlank style={{ marginTop: '1.5rem' }}>
                        <Button type='primary' onClick={this.query} >查询</Button>
                        <AgreeItem data-seed="logId" defaultChecked={true} onChange={e => console.log('checkbox', e)}>
                            我已同意 <a onClick={(e) => { e.preventDefault(); alert('agree it'); }}>《订票须知》</a> 的内容
                        </AgreeItem>
                    </WingBlank>
                </div>



            </div >
        );
    }
}

function mapStateToProps(state) {
    return {
        end: state.site.end,
        scz: state.buyTicket.scz,
        date: state.buyTicket.date
    }
}

export default connect(mapStateToProps, { setArgs, query })(TicketInput)