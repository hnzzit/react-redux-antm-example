import React from 'react'
import { List, Result, Icon, WhiteSpace } from 'antd-mobile';
const Item = List.Item;
const img = <i style={{ fontSize: 80, color: '#1C86EE', paddingRight: "30px" }} className='iconfont icon-chenggong' />;
class succeed extends React.Component {
    /**
     * 支付页面
     */
    render() {

        return (
            <div  >
                <div className="sub-title" ></div>
                <Result
                    style={{ paddingTop: "50%", paddingBottom: "20%"  }}
                    img={img}
                    title="支付成功"
                    message="所提交内容已成功完成验证"
                />
                <WhiteSpace />
            </div>
        )
    }
}



export default succeed;