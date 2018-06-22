
import React from 'react';
import { Toast } from 'antd-mobile';

class View extends React.Component {

    componentWillReceiveProps(nextProps) {
        if (!this.props.visible && nextProps.visible) {
            let { type, duration = 2 } = this.props;
            let { content } = nextProps;

            if (type === 'success') {
                Toast.success(content, duration)
            } else if (type === 'fail') {
                Toast.fail(content, duration)
            } else if (type === 'info') {
                Toast.info(content, duration)
            } else if (type === 'loading') {
                Toast.loading(content, duration)
            } else if (type === 'offline') {
                Toast.offline(content, duration)
            }
        }

        if (this.props.visible && !nextProps.visible) {
            Toast.hide()
        }
    }

    render() {
        return (<div></div>)
    }

}

export default View;