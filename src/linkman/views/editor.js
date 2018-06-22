import React from 'react'

import { Modal, List, InputItem, Toast } from 'antd-mobile';

import { alter, del, setArgs } from '../action'

import { connect } from 'react-redux'

const iconStyle = {
    fontSize: '20px',
    color: '#827d7d'
}

class Editor extends React.Component {

    constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
        this.editor = this.editor.bind(this);
    }

    delete() {
        let { del, edit_suid } = this.props;
        del({ suid: edit_suid });
    }

    editor() {
        let { edit_xm, edit_sfz, edit_suid, alter } = this.props;
        if (!edit_xm) { Toast.fail('姓名不能为空！'); return; }
        if (!edit_sfz) { Toast.fail('身份证不能为空！'); return; }
        if (!edit_suid) { Toast.fail('数据异常！'); return; }
        alter({ username: edit_xm, sfz: edit_sfz, suid: edit_suid })
    }

    render() {

        let { editorVisible = false, edit_xm = '', edit_sfz = '', setArgs } = this.props
        return (
            <Modal
                visible={editorVisible}
                transparent
                maskClosable={false}
                onClose={() => { }}
                title='修改联系人'
                footer={[{ text: '取消', onPress: () => { setArgs({ editorVisible: false }) } }, { text: '删除', onPress: this.delete }, { text: '保存', onPress: this.editor }]}
                style={{ width: '90%' }}
            >
                <List>
                    <InputItem
                        name='edit_xm'
                        type='text'
                        placeholder="请输入联系人真实姓名"
                        clear
                        value={edit_xm}
                        onChange={(v) => { setArgs({ edit_xm: v }) }}

                    >
                        <i className='iconfont icon-yonghu-xianxing' style={iconStyle}></i> 姓名
                    </InputItem>
                    <InputItem
                        name='edit_sfz'
                        type='text'
                        placeholder="请输入身份证号用于购票信息"
                        clear
                        value={edit_sfz}
                        onChange={(v) => { setArgs({ edit_sfz: v }) }}
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
        msg: state.linkman.msg,
        editObj: state.linkman.editObj,
        editorVisible: state.linkman.editorVisible,
        edit_xm: state.linkman.edit_xm,
        edit_sfz: state.linkman.edit_sfz,
        edit_suid: state.linkman.edit_suid

    }
}

export default connect(mapStateToProps, { alter, del, setArgs })(Editor)