import { Accordion, List, Card, Flex  } from 'antd-mobile';
import React from 'react'

// const img = <i style={{ fontSize: 30 }} className=' iconfont icon-wenhao-xianxingyuankuang' />;
const img = <i style={{ fontSize: 13, padding: "2px",  fontStyle: "normal", color: "red", border: '1px solid red', borderRadius: "5px" }}  >问</i>;
const imgda = <i style={{ fontSize: 13, padding:"2px", fontStyle: "normal", color: "blue", border: '1px solid blue', borderRadius: "5px" }}  >答</i>;
const daziti={
  lineHeight: "23px",
  float: 'left' 
}
class Question extends React.Component {
  onChange = (key) => {
    console.log(key);
  }
  render() {
    return (
      <div style={{ marginTop: 10, marginBottom: 10 }}>
        <Flex justify='center' align="center" style={{ height: '100px' }}>
          <icon className="iconfont icon-wenhao-xianxingyuankuang" style={{ fontSize: '60px' }} />
        </Flex>
        <Accordion className="my-accordion" style={{ textAlign:"left" }} onChange={this.onChange}>
          <Accordion.Panel    header="车票预订">
            <List className="my-list">
            
              <Card>
                <Card.Header thumb={img} title=" 一般可以提前几天购票？" />
                <Card.Body>
                  <div style={daziti}>{imgda}  一般可提前1-7天购票，具体以系统查询到班次为准，节假日的预售期可及时关注万里运业微信最新公告</div>
                </Card.Body>
              </Card>

              <Card>
                <Card.Header thumb={img} title=" 可以办理退票吗？" />
                <Card.Body>
                  <div style={daziti}>{imgda}  暂不提供网上退票和改签服务，旅客如需退票或改签，请凭取票信息在发车前至乘车站取出纸质车票后按车站退票或改签规定办理。</div>
                </Card.Body>
              </Card>

              <Card>
                <Card.Header thumb={img} title=" 儿童乘车购票有什么规定？" />
                <Card.Body>
                  <div style={daziti}>{imgda}   儿童身高1.20-1.50米需购买儿童票，提供座位，超过1.50米应购买全价票。儿童票不可单独购买,须有成人陪同，是否可售以系统显示为准。</div>
                </Card.Body>
              </Card>

              <Card>
                <Card.Header thumb={img} title=" 如何购携童票 " />
                <Card.Body>
                  <div style={daziti}>{imgda}  各客运站对携童票规定不同，携童票一般不超过车载人数的10%，持携童票旅客可免费携带1名1.20米以下儿童乘车，不供给座位，是否可售携童票以系统显示为准。携带免费乘车儿童超过1人或要求供给座位时，须购买儿童票。</div>
                </Card.Body>
              </Card>

              <Card>
                <Card.Header thumb={img} title="购买儿童票、价格可以优惠吗？" />
                <Card.Body>
                  <div style={daziti}>{imgda}   目前网络售票可售全价票，暂不可售儿童票，请至相关客运站咨询。 </div>
                </Card.Body>
              </Card>

              <Card>
                <Card.Header thumb={img} title="购票时是否可以自己选择座位？" />
                <Card.Body>
                  <div style={daziti}>{imgda}  旅客购票时，座位号和卧铺的位置是系统随机生成的，不能人工选择。</div>
                </Card.Body>
              </Card>

              <Card>
                <Card.Header thumb={img} title="网上购票需要支付手续费吗？" />
                <Card.Body>
                  <div style={daziti}>{imgda}  网上购票除需支付票款和保险费外，不收取其他手续费用。票价与客运站实时同步。</div>
                </Card.Body>
              </Card>

              <Card>
                <Card.Header thumb={img} title="外国国籍是否可以购票?" />
                <Card.Body>
                  <div style={daziti}>{imgda}  目前万里运业网络售票只支持18位身份证号码预订车票，外国友人可让朋友代订。</div>
                </Card.Body>
              </Card>
              <Card>
                <Card.Header thumb={img} title="购票成功后可以取消订单吗？" />
                <Card.Body>
                  <div style={daziti}>{imgda}  预订成功后，无法取消订单，请尽早在发车前去始发站取票后办理退票或改签。</div>
                </Card.Body>
              </Card>

            </List>
          </Accordion.Panel>

          <Accordion.Panel header="支付问题"   className="pad">
            <List className="my-list">
              <Card>
                <Card.Header thumb={img} title="目前有哪些支付方式？" />
                <Card.Body>
                  <div style={daziti}>{imgda}  目前支持微信支付。</div>
                </Card.Body>
              </Card>
              <Card>
                <Card.Header thumb={img} title="提交订单后必须要立即支付吗？" />
                <Card.Body>
                  <div style={daziti}>{imgda}  提交订单后请务必在系统提示时间内完成支付，支付超时，订单会自动取消。</div>
                </Card.Body>
              </Card>
              <Card>
                <Card.Header thumb={img} title="正常提交订单、支付票款，系统提示购票失败，怎么办？" />
                <Card.Body>
                  <div style={daziti}>{imgda}  目前提供的是联网车站实时在线购票服务，售票高峰期可能会遇到网络繁忙、余票不足等异常，造成款已支付、购票失败的情况，票款将在1-10个工作日内返回到您的支付账户中。</div>
                </Card.Body>
              </Card>

            </List>
          </Accordion.Panel>
          <Accordion.Panel   header="取票问题" className="pad">
            <List className="my-list">
              <Card>
                <Card.Header thumb={img} title="购票成功后如何取票？" />
                <Card.Body>
                  <div style={daziti}>{imgda}  旅客需凭取票信息和身份证件在乘车站自助取票机取票，具体以万里运业网络售票短信或订票页面提示为准。例如，您购买的是在许昌中心站始发的车票，则必须到许昌中心站进行取票乘车，如超时未取，万里运业不承担责任，请您预留充足时间提前至始发站取票。</div>
                </Card.Body>
              </Card>
              <Card>
                <Card.Header thumb={img} title="订票成功后什么时间可以取票？" />
                <Card.Body>
                  <div style={daziti}>{imgda}  购票成功后即可到乘车站取票，请您预留充足时间去客运站取票，建议平时提前1小时到达乘车站取票，节假日高峰期至少提前2小时到达乘车站取票。</div>
                </Card.Body>
              </Card>
              <Card>
                <Card.Header thumb={img} title="取票遇到异常，怎么办？" />
                <Card.Body>
                  <div style={daziti}>{imgda}  如果旅客取票遇到问题请及时咨询站内工作人员，非旅客自身原因可以办理退款。</div>
                </Card.Body>
              </Card>


            </List>
          </Accordion.Panel>

          <Accordion.Panel  header="线路问题" className="pad">
            <List className="my-list">
              <Card>
                <Card.Header thumb={img} title="为什么有的班次线路相同，票价却不一样？" />
                <Card.Body>
                  <div style={daziti}>{imgda}  由于发车时间，始发站，车型、里程数等差异会引起车票价格的不同。</div>
                </Card.Body>
              </Card>
              <Card>
                <Card.Header thumb={img} title="什么是直达车，什么是过路车？" />
                <Card.Body>
                  <div style={daziti}>{imgda} 直达车是指由始发站直接到达终点站，中途只作必要停歇，但不上下旅客的班车；过路车是指在始发站和终点站之间沿途有若干个途经站点，供旅客上下车，部分过路车在途经站点不进站停靠，可能会在高速路口停车下客，请您谨慎选择。</div>
                </Card.Body>
              </Card>
              <Card>
                <Card.Header thumb={img} title="行驶时间如何了解？" />
                <Card.Body>
                  <div style={daziti}>{imgda} 因为公路交通存在一定不确定因素，行驶时间可按里程数进行推算（80公里/小时），此推算仅供参考。</div>
                </Card.Body>
              </Card>
            </List>
          </Accordion.Panel>
          <Accordion.Panel    header="取票问题" className="pad">
            <List className="my-list">
              <Card>
                <Card.Header thumb={img} title="注册填写的信息必须要真实么？" />
                <Card.Body>
                  <div style={daziti}>{imgda} 注册时认真填写各项信息，万里运业将提供多元化的信息提示，需确认填写的电话号码准确无误，并保持通讯畅通，以便特殊情况下畅途网客服人员能及时与您联系。因电话长时间处于无人接听、忙音等状况而使万里运业客服人员不能及时联系到您，由此造成的一系列损失，万里运业不承担责任</div>
                </Card.Body>
              </Card>
              <Card>
                <Card.Header thumb={img} title="购买成功后，号码留错，可否更改号码" />
                <Card.Body>
                  <div style={daziti}>{imgda} 购票成功后无法修改任何信息，可登录“我的订单”中查询取票信息，凭取票信息至乘车站取票。</div>
                </Card.Body>
              </Card>
              <Card>
                <Card.Header thumb={img} title="车票潮湿或者损坏怎么办？" />
                <Card.Body>
                  <div style={daziti}>{imgda} 原则上车票限乘当日当次车，过期、涂改、污损即失效，不能使用。如车票有损坏，请持票到乘车站，由车站工作人员来辨别是否能够继续使用。</div>
                </Card.Body>
              </Card>
              <Card>
                <Card.Header thumb={img} title="是否可以携带白酒、鞭炮上车？" />
                <Card.Body>
                  <div style={daziti}>{imgda} 按照客运站规定，易燃易爆的物品是不能带上车的，具体请您咨询相关客运站。</div>
                </Card.Body>
              </Card>
              <Card>
                <Card.Header thumb={img} title="上车携带物品的标准及托运如何收费？" />
                <Card.Body>
                  <div style={daziti}>{imgda} 根据客运站规定：乘车随身携带物品，每一张全价票免费携带10千克物品，每一张儿童票免费携带5千克物品，体积不能超过0.02立方米，长度不超过1.8米，以能放在本人座位下，或车内行李架上为限。超过规定时，其超过部分按快件行包标准收费，占用座位时，须按实际占用座位数购票。托运：如需办理托运，建议咨询客运站</div>
                </Card.Body>
              </Card>
              <Card>
                <Card.Header thumb={img} title="是否可以带宠物上车?" />
                <Card.Body>
                  <div style={daziti}>{imgda} 根据客运站规定：乘车随身携带物品，每一张全价票免费携带10千克物品，每张儿童票免费携带5千克物品，体积不能超过0.02立方米，长度不超过1.8米，以能放在本人座位下，或车内行李架上为限。超过规定时，其超过部分按快件行包标准收费，占用座位时，需按实际占用座位数购票。托运：如需办理托运，建议咨询相关客运站。以上信息由于各地区标准存在差异，信息仅供参考。</div>
                </Card.Body>
              </Card>
              <Card>
                <Card.Header thumb={img} title="不同的车型，具体指什么？" />
                <Card.Body>
                  <div style={daziti}>{imgda} 车型车款分类如下：1.大型客车：车长大于9米的客车。中型客车：车型小于或等于9米的客车。2.大型客车分高三级、高二级、高一级、中级和普通级等五个等级。3.例如大型高一卧代表高一级卧铺车，而大型高一座代表高一级座位车。</div>
                </Card.Body>
              </Card>
              <Card>
                <Card.Header thumb={img} title="遇到司机超载或半路加价等情况怎么办？" />
                <Card.Body>
                  <div style={daziti}>{imgda} 司机超载、半路加价等行为属于司机个人的违规行为，旅客可以保留证据，向乘车站或当地客运主管部门投诉。</div>
                </Card.Body>
              </Card>
              <Card>

              </Card>

            </List>
          </Accordion.Panel>

        </Accordion>
      </div>
    );
  }
}

export default Question;