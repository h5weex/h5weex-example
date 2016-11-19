# h5weex项目（h5weex-example）

### 如何开始

```bash
tnpm install
```


### 浏览器端运行模块

```bash
gulp
```

然后会自动打开浏览器：http://localhost:3000/index.html

**如果需要打开项目中其他的页面,请在url后面加上: ?_wx_tpl=build/xxx.bundle.js （其中xxx就是目标页面名称）**

### 发布前需要打包

```bash
fie build
```

### 项目中包含的页面

| 页面        | 说明           | 备注  |
| ---------- | :------------- | :------------- |
| datalist   | 数据列表        | 具备下拉刷新，上拉加载更多          |
| lazyload   | 模块懒加载       | 实现一个页面中多个组件的懒加载      |
| require    | 包含子组件       | 页面中如何包含多个子组件           |
| sticky     | header触顶后自动fix | 一个结构化页面中不同模块之间的切换，类似面板 |
| iconfont   | text中的图片字体 | 实现iconfont功能      |
