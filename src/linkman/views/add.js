import React from 'react'
import { connect } from 'react-redux';
import { Modal, List, InputItem, Toast } from 'antd-mobile';

import { add, setArgs } from '../action'

const iconStyle = {
    fontSize: '20px',
    color: '#827d7d'
}

class Add extends React.Component {

    constructor(props) {
        super(props);
        this.add = this.add.bind(this);
    }

    add() {
        let { add_xm, add_sfz, add } = this.props;
        if (!add_xm) { Toast.fail('姓名不能为空！'); return; }
        if (!add_xm) { Toast.fail('身份证不能为空！'); return; }
        add({ username: add_xm, sfz: add_sfz })
    }

    render() {

        let { addVisible = false, setArgs } = this.props
        return (
            <Modal
                visible={addVisible}
                transparent
                maskClosable={false}
                onClose={() => { }}
                title='添加联系人'
                footer={[{ text: '取消', onPress: () => { setArgs({ addVisible: false }) } }, { text: '保存', onPress: this.add },]}
                style={{ width: '90%' }}
            >
                <List>
                    <InputItem
                        name='add_xm'
                        type='text'
                        placeholder="请输入联系人真实姓名"
                        clear
                        onChange={(v) => { setArgs({ add_xm: v }) }}
                    >
                        <i className='iconfont icon-yonghu-xianxing' style={iconStyle}></i> 姓名
                    </InputItem>
                    <InputItem
                        type='text'
                        placeholder="请输入身份证号用于购票信息"
                        clear
                        onChange={(v) => { setArgs({ add_sfz: v }) }}
                    >
                        <i className='iconfont icon-yonghuziliao-xianxing' style={iconStyle}></i> 身份证
                    </InputItem>
                </List>
            </Modal>
        );
    }
}


function mapStateToProps(state) {
    return {
        addVisible: state.linkman.addVisible,
        add_xm: state.linkman.add_xm,
        add_sfz: state.linkman.add_sfz
    }
}

export default connect(mapStateToProps, { add, setArgs })(Add)