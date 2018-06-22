import React from 'react'
import { connect } from 'react-redux';
import { WhiteSpace, Card, WingBlank, Button, Flex, Switch } from 'antd-mobile';
import { Link } from 'react-router-dom'

import { query, setArgs } from '../action'
import { tools } from '../../global'


class Passenger extends React.Component {

    constructor(props) {
        super(props);
        this.changePassengers = this.changePassengers.bind(this);
    }

    componentDidMount() {
        const { query } = this.props;
        setTimeout(() => {
            query({})
        }, 200);
    }

    changePassengers(obj, checked) {
        let { passengers = new Set(), setArgs } = this.props;

        if (checked && !tools.SetHas(passengers, obj, 'suid')) passengers.add(obj)
        if (!checked) tools.SetDel(passengers, obj, 'suid');

        let newpassengers = new Set();
        passengers.forEach((value, key) => newpassengers.add(value))
        setArgs({ passengers: newpassengers });
    }

    render() {
        let { datasouce = [], passengers = new Set() } = this.props;
        return (
            <div >
                <Flex justify='center' align="center" style={{ height: '100px' }}>
                    <i className="iconfont icon-zhucetianjiahaoyou" style={{ fontSize: '60px' }} />
                </Flex>

                {datasouce.map((obj) => (
                    <div key={obj.suid}>
                        <WingBlank>
                            <Card>
                                <Card.Header
                                    title={obj.username}
                                    thumbStyle={{ height: '30px' }}
                                    extra={<Switch
                                        platform="ios"
                                        onChange={checked => {
                                            this.changePassengers(obj, checked);
                                        }}
                                        checked={tools.SetHas(passengers, obj, 'suid') ? true : false}

                                    />}
                                />
                                <Card.Body>
                                    <div style={{ float: 'left' }}>身份证号：</div>
                                    <div style={{ float: 'right' }}>{obj.sfz}</div>
                                </Card.Body>
                            </Card>
                        </WingBlank>
                        <WhiteSpace />
                    </div>
                ))}

                <WingBlank style={{ marginTop: '3rem' }}>
                    <Link to='/booking'>
                        <Button type='primary'>确定</Button>
                    </Link>

                </WingBlank>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        passengers: state.linkman.passengers,
        datasouce: state.linkman.datasouce
    }
}

export default connect(mapStateToProps, { query, setArgs })(Passenger)