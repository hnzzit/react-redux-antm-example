import React from 'react'
import { connect } from 'react-redux'
import { Grid, WhiteSpace, InputItem } from 'antd-mobile';


import { query, setArgs } from '../action'

const hotSites = [{ suid: '1', zdmc: '郑州' },
{ suid: '2', zdmc: '安阳' },
{ suid: '3', zdmc: '焦作' },
{ suid: '4', zdmc: '襄县' },
{ suid: '5', zdmc: '平顶山' },
{ suid: '94FED1BA-19A5-4F3C-AFAD-66614280E722', zdmc: '南阳' }]


class Site extends React.Component {

    constructor(props) {
        super(props);
        this.query = this.query.bind(this);
        this.onClick = this.onClick.bind(this);
    }

    componentDidMount() {
        this.inputRef.focus();
    }

    query(zdmc) {
        clearTimeout(this.timer)
        this.timer = setTimeout(() => {
            let { query, setArgs } = this.props;
            if (zdmc) {
                query({ zdmc })
            } else {
                setArgs({ datasouce: [] })
            }
        }, 200);
    }

    onClick(el) {
        let { setArgs } = this.props;
        setArgs({ end: el });
        this.props.history.push('/buyTicket');
    }

    render() {
        let { datasouce = [] } = this.props;

        return (
            <div >
                <div>
                    <WhiteSpace />
                    <WhiteSpace />
                    <WhiteSpace />
                    <InputItem
                        type='text'
                        placeholder="请输入上车站点首字母，如：zz"
                        clear
                        extra={<i className='iconfont icon-sousuo-xianxing' style={{ fontSize: '1.3rem' }}></i>}
                        ref={el => this.inputRef = el}
                        onChange={this.query}
                    >
                    </InputItem>
                </div>
                <div style={{ display: datasouce.length === 0 ? '' : 'none' }}>
                    <div style={{ fontSize: '1.8rem', padding: '1rem' }}>热门城市</div>
                    <div>
                        <Grid
                            data={hotSites}
                            columnNum={4}
                            square={false}
                            itemStyle={{ height: '3rem' }}
                            renderItem={(data) => (data.zdmc)}
                            onClick={this.onClick} />
                    </div>
                </div>
                <div style={{ display: datasouce.length > 0 ? '' : 'none' }}>
                    <div style={{ fontSize: '1.8rem', padding: '1rem' }}>查询结果</div>
                    <div>
                        <Grid
                            data={datasouce}
                            columnNum={4}
                            square={false}
                            itemStyle={{ height: '3rem' }}
                            renderItem={(data) => (data.zdmc)}
                            onClick={this.onClick} />
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        datasouce: state.site.datasouce
    }
}

export default connect(mapStateToProps, { query, setArgs })(Site)