import React from 'react'
import { WhiteSpace } from 'antd-mobile'


import Header from './header'
import Body from './input'

class containaer extends React.Component {

    render() {
        return (
            <div >
                <Header />

                <WhiteSpace />
                <WhiteSpace />
                <WhiteSpace />
                <Body history={this.props.history} />

            </div >
        )
    }
}



export default containaer;