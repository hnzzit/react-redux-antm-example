# react-redux-saga-antm 
本项目集成了 react、redux、saga及 Ant Design Mobile，旨在供有这方面学习需求的朋友学习交流。

---

## 快速启动

- 安装项目依赖

```
npm install
```

- 运行启动脚本

```
npm start
```

> 注：没有特别说明时，命令都是在项目根目录下执行，即在 react-redux-saga-antm 目录下执行。

## 主要依赖
- react

不多说，看官方文档：https://github.com/facebook/react ； 英文不好又想快手入门，建议看阮一峰的简单教程：http://www.ruanyifeng.com/blog/2015/03/react.html ； 或者看下我之前项目的简单讲解：https://github.com/hnzzit/react-redux-example ；

- redux

我的理解是为了解决 react 组件间的数据传输问题产生的框架。将单页应用中的所有需要流通的数据挂在“一棵大树下”（store）,通过这样的流程 page -> action -> reducer -> state -> props -> render 。这样保证了 react 各组件间数据的体外循环，避免多层传值的问题。需要提到的是 reducer 必须为纯函数。入门教程：http://www.ruanyifeng.com/blog/2016/09/redux_tutorial_part_one_basic_usages.html

- redux-saga

为解决 redux 数据流中的 “effect” 而产生，为一种 redux 的中间件。特别实用于某些异步请求的场景，如：page -> action -> reducer -> state -> props -> render ,如果 action 中的要求是需要请求后台服务器，那么这个请求后台服务器的动作并不适合在 reducer 中操作，以为 reducer 必要为纯函数，这点很重要。这时候就需要 saga，流程变为：page -> action -> saga -> 服务器请求 -> new action -> reducer -> state -> props -> render 。


- antd-mobile

基于 react 的 UI 框架，移动 UI 框架，antd-mobile 之于 react 犹如 bootstrap 之于 html 一般。这是蚂蚁金服的开源项目，有详细的中英文资料，主页：https://mobile.ant.design/index-cn 。 github 地址：https://github.com/ant-design/ant-design-mobile 。

## 目录结构

```

--react-redux-saga-antm
    |
    |--public       //public 目录下主要放静态文件及主页 index.html
    |   |--imgs
    |   |--index.html
    |
    |--src          //src 目录主要放 react 模块，及 js 代码
    |   |--index.js
    |   |--index.css
    |   |--global   //放置业务相关的配置文件、工具模块
    |   |   |--config.js
    |   |   |--tools.js
    |   |   |--api.js
    |   |   
    |   |--booking  //业务模块，所有的目录结构大体如此，以后会讲这样的好处
    |   |   |--views
    |   |   |   |--container.js
    |   |   |   |--other.js
    |   |   |
    |   |   |--action.js
    |   |   |--actionType.js
    |   |   |--index.js
    |   |   |--reducer.js
    |   |   |--saga.js
    |   |
    |   |--buzz...  //其他业务模块，类似 booking
    |
    |--config-overrides.js  //项目构建的配置文件
    |--package.json //项目依赖
    |--README.md    //本文

```


## 约定

### 目录结构约定

本项目的目录几乎覆盖了所有实际应用中的需求。这里需要强调的是一定要以业务模块来划分目录结构。每个业务模块需要包含以下目录或文件：index.js、views、[action.js]、[actionType.js]、[reducer.js]、[saga.js] 

### index.js 约定

上面已经说过以业务模块划分目录结构，并且每个目录结构的内容。这样的好处是保证该模块的闭包、统一、一致。index.js 需要将其他文件或者目录引入并统一导出提供服务，减少内部模块与外部模块的耦合。index.js 需要暴露这些内容：view、actions、actionType、reducer、saga。在没有特殊情况下，这些模块需要以这样的名字导出，这样外部模块能很轻松的使用这个模块提供的功能。

### action 约定
- action 结构约定

- 默认 setArgs 约定

### reducer 约定


### saga 约定