<template>
  <div class="containerFloatLeft">
    <h2 class="h2">探索代码</h2>
    <h4>项目组成部分</h4>

    <p>打开工程可以看到已经有一些文件创建好了，下面将介绍每一个文件是干嘛用的.</p>
    <strong class="graybg mt20">index.js</strong>
    <p>这个里面是项目的主要代码，也就是所有的react代码的入口，任何添加进来的代码都是你的应用的一部分，同时允许你将应用组织到许多不同的文件中.</p>

    <strong class="graybg mt20">client.js</strong>
    <p>这个是连接浏览器到你的react应用的代码，也就是运行时<span class="goto" @click="toRuntime">Runtime.</span></p>
    <p>这个文件做了三件事：</p>
    <p>1、创建一个React 360的实例，加载而react代码，同时依附在DOM的一个特殊地方（节点div等），这里你还可以传递一些初始化属性，稍后再讨论.</p>
    <p class="mt20">2、这个文件还将你的React代码放置到场景(scece)中,在index.js中声明的挂载点被依附在你的app的默认表面上，这个表面是一个圆柱型的曲面，可以放2D的ui</p>
    <p class="mt20">3、启动项目会立即家在一个360度的背景图，这部分是可选的，如果设置了背景图，可以在你的React代码还在加载中的时候就显示这个图片，让用户可以立即看到一些东西，不至于出现白屏等情况。</p>
    <strong class="graybg mt20">index.html</strong>
    <p class="mt20">这是你的应用的web页面，它的作用是为你的js代码提供一个挂载点，而且这个文件是全局的，你还可以和其他的web页面进行交互</p>

    <h2 class="h2">探索入门项目</h2>
    <p class="mt20">打开<span class="graybg">index.js</span>,可以看到react 代码是如何展示在你的屏幕上的，如果你不熟悉React是如何工作的，请先看<a href="https://reactjs.org/" target="_blank">react的开发文档</a></p>

    <p class="mt20"><span class="graybg">View</span>和<span class="graybg">Text</span></p>
    <p class="mt20">
      <span class="graybg">index.js</span>分为几个不同的部分。
      最主要的一块是创建一个新的React组件，用在你的应用的最上层的元素，包含两个<span class="graybg">&lt;View></span>元素,一个<span class="graybg">&lt;Text></span>元素.
      第一个View填充整个面板，默认大小是1000px * 600px，而且这些表面可以<span class="goto" @click="toRuntime">配置成多种不同的大小和形状</span>
      第二个View给包含的Text提供边框和背景。最里面的Text元素将一个字符串转换成字符渲染在屏幕上，欢迎第一次来到React 360的世界。
    </p>
    <p class="mt20">你可以改变<span class="graybg">&lt;Text></span>里面的内容，改变<span class="graybg">'Welcome to React 360'</span>成其他的字符串，保存文件，刷新下web页面就可以看到改变后的内容了。</p>
    <p class="mt20">View和Text在React360里面是最简单的两个交互工具了，View用来包裹其他的内容，或者在屏幕上提供可见的盒子形状，你也可以用来布局可以不渲染任何内容，也可以创建一些列不同的带有边框和背景的效果在简单的应用里面。</p>
    <p class="mt20">Text是在屏幕上画字符的，如果你创建了一个2D的UI，这是向用户显示信息，标记UI元素等的关键元素。</p>

    <h4>样式</h4>
    <p class="mt20">下一块代码是创建样式的，<span class="graybg">StyleSheet</span>是直接从<a href="http://facebook.github.io/react-native/docs/style.html" target="_blank">React Native拿过来的改变</a>
      React 360支持和React Native一样的样式属性，在代码底部创建的<span class="graybg">style</span>对象会直接影响你的React cdoe，也即是说样式可以通过这个控制
    </p>
    <h4>导出React组件</h4>
    <p class="mt20">最后一行是用AppRegistry注册你的项目，允许React 360挂载到一个表面上，这个为一个标识符和<strong class="graybg mt20">client.js</strong>一样的</p>


    <h2 class="h2">添加状态</h2>
    <p class="mt20">React擅长定义依赖于不断变化的状态的应用程序，以某种最引人注目的体验方式使用它。</p>
    <h4>创建一个简单的计数器</h4>
    <p class="mt20">state可以用来自定时器或者网络来驱动，我们来重写app，创建一个逐渐增加的计数器，替换下面的代码</p>

      <p class="code1">
        <span class="gray">// Our component will keep track of this state</span> <br/>
        state = { <br/>
          &nbsp; count : <span class="red">0</span>,<br/>
        };<br/>
        <span class="gray">// This method increments our count, triggering a re-render</span> <br/>
        _incrementCount = () => {<br/>
        &nbsp;this.setState({count: this.state.count + <span class="red">1</span>});<br/>
        };<br/>
        <span class="gray">// Once the component mounts, run the increment method every second</span> <br/>
        componentDidMount() {<br/>
        &nbsp;setInterval(this._incrementCount,  <span class="red">1000</span>);<br/>
        };<br/>

        render() {<br/>
        <span class="gray">// Reference the count in our UI</span> <br/>
        &nbsp;return (<br/>
        &nbsp;&nbsp; &lt;View style={<span class="red">styles.panel</span>}><br/>
        &nbsp;&nbsp;&nbsp; &lt;View style={<span class="red">styles.greetingBox</span>}><br/>
        &nbsp;&nbsp;&nbsp;&nbsp; &lt;Text style={<span class="red">styles.greeting</span>}><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {`Count: ${this.state.count}`} <br/>
        &nbsp;&nbsp;&nbsp;&nbsp; &lt;/Text><br/>
        &nbsp;&nbsp;&nbsp; &lt;/View><br/>
        &nbsp;&nbsp; &lt;/View><br/>
        &nbsp;);<br/>
        }<br/>
      </p>
    <p class="mt20">刷新应用，你会看到每隔一秒计数就会增加，在React的内容部，每秒状态都会改变，然后你的UI就会重新渲染。</p>
    <h4>增加用户输入</h4>
    <p class="mt20">大多数状态都不是自动的，都是来自用户的交互。再来改变下我们的应用，用户点击一次计数增加一次，为了手机用户的点击，我们用一个新的组件，<strong class="graybg">VrButton</strong>.VrButton内部包裹了桌面、移动端、VR等设备的点击事件，是React 360中用户交互的核心构建块</p>
    <p class="mt20">需要从React-360包里面导入VrButton</p>
    <p class="code1">
      import {<br/>
       &nbsp;AppRegistry,<br/>
       &nbsp;StyleSheet,<br/>
       &nbsp;Text,<br/>
       &nbsp;View,<br/>
       &nbsp;VrButton,<br/>
      } from 'react-360';
    </p>
    <p class="mt20">下一步移除<strong class="graybg mt20">componentDidMount() </strong>方法，不再使用定时器了，同时还需要修改render的方法。</p>
    <p class="code1">
        render() {<br/>
        &nbsp;return (<br/>
        &nbsp;&nbsp; &lt;View style={<span class="red">styles.panel</span>}><br/>
        &nbsp;&nbsp;&nbsp; &lt;VrButton<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;onClick={<span class="red">this._incrementCount</span>}<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; style={<span class="red">styles.greetingBox</span>}><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  &lt;Text style={<span class="red">styles.greeting</span>}><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {`Count: ${this.state.count}`} <br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;/Text><br/>
        &nbsp;&nbsp;&nbsp;&nbsp; &lt;/VrButton><br/>
        &nbsp;&nbsp;&nbsp; &lt;/View><br/>
        &nbsp;&nbsp;);<br/>
        }<br/>
    </p>
    <p class="mt20">刷新应用，点击按钮，点击一次数字增加一，你还可以扩展，当鼠标移到按钮上，按钮高亮显示，还可以增加<strong class="graybg">onEnter、onExit</strong>事件，这两个事件在大多数组件上都可以使用，用这些组件，你可以创建出复杂的可交互的应用。</p>

  </div>
</template>

<script>
export default {
  name: "enjoyvr",
  mounted() {
    document.title = "代码探索";
  },
  methods: {
    toRuntime() {
      this.$router.push({ path: "runtime" });
    },
    toSurface() {
      this.$router.push({ path: "surfaces" });
    }
  }
};
</script>

<style lang='less'>
@import "../styles/mixin";
</style>
