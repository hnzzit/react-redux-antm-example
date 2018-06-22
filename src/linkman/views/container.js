import React from 'react'
import { connect } from 'react-redux';
import { WhiteSpace, Card, WingBlank, Button, Flex } from 'antd-mobile';

import Editor from './editor'
import Add from './add'
import { add, alter, del, query, setArgs } from '../action'


const iconStyle = {
    fontSize: '20px'
}


class LinkMan extends React.Component {
    componentDidMount() {
        const { query } = this.props;
        setTimeout(() => {
            query({})
        }, 200);
    }

    render() {
        let { setArgs, datasouce = [] } = this.props;
        return (
            <div >
                <Flex justify='center' align="center" style={{ height: '100px' }}>
                    <i className="iconfont icon-yonghuqun" style={{ fontSize: '60px' }} />
                </Flex>

                <Editor tilte='修改联系人' />
                <Add title='添加联系人' />

                {datasouce.map((obj) => (
                    <div key={obj.suid}>
                        <WingBlank>
                            <Card>
                                <Card.Header
                                    title={obj.username}
                                    thumbStyle={{ height: '30px' }}
                                    extra={<i className='iconfont icon-bianjishuru-xianxing' style={iconStyle} onClick={() => { setArgs({ edit_xm: obj.username, edit_sfz: obj.sfz, edit_suid: obj.suid, editorVisible: true }) }}></i>}
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
                    <Button type='primary' onClick={() => { setArgs({ addVisible: true }) }}>添加联系人</Button>
                </WingBlank>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        datasouce: state.linkman.datasouce
    }
}

export default connect(mapStateToProps, { add, alter, del, query, setArgs })(LinkMan)