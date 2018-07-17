<template>
  <div class="containerFloatLeft">
    <h2 class="h2">原生模块</h2>
    <p class="mt20">原生模块使React代码能够回调到运行时，并提供仅在主浏览器环境中可用的功能。 <a href="https://facebook.github.io/react-360/docs/example-native-modules.html" target="_blank">示例</a>包括在负载之间存储值，请求有关连接的控制器的信息或操纵渲染的环境。</p>

    <h4>自定义原生模块</h4>

    <h5>创建一个新的原生模块</h5>
    <p class="mt20">原生模块是在运行时代码（client.js）中创建的，需要在启动时注册，然后React才能使用它们。 此处提供了演示Native Modules的许多用途的示例应用程序。 原生模块的每个方面将在下面描述。</p>
    <p class="mt20">要创建原生模块，您需要扩展<span class="graybg">Module</span>并在初始化时注册它。</p>
    <p class="code1" v-cloak>
      import {Module} from <span class="red">'react-360-web'</span>;<br/>

      class <span class="red">MyModule</span> extends <span class="red">Module</span> {<br/>
        constructor() {<br/>
          &nbsp; super(<span class="red">'MyModule'</span>); <span class="gray">// Makes this module available at NativeModules.MyModule</span><br/>
        }<br/>

        <span class="gray">// This method will be exposed to the React app</span><br/>
        doSomething() {<br/>

        }<br/>
      }<br/>

      const r360 = new ReactInstance(<br/>
        <span class="red">'MyApp.bundle?platform=vr'</span>,<br/>
        <span class="green">document</span>.getElementById(<span class="red">'container'</span>),<br/>
        {<br/>
          &nbsp; <span class="gray">// Register custom modules at init time</span><br/>
          &nbsp; nativeModules: [<br/>
            &nbsp; &nbsp; new MyModule(),<br/>
          &nbsp; ]<br/>
        }<br/>
      );
    </p>
    <p class="mt20"><span class="graybg">nativeModules</span>数组可以直接接受原生模块的实例，也可以是返回原生模块实例的方法，当你需要在构造函数提供这些值时，第二种会有帮助的。</p>
    <h5>暴露常量给React</h5>
    <p class="mt20">
      Native Modules最简单的用例是将常量值从主浏览器窗口传递给React。 这些是在初始化时已知的值，不会更改，例如浏览器的语言或用户代理字符串。 在React中可以使用在构造函数中附加到Native Module的任何不以下划线开头的值。
    </p>
    <p class="code1" v-cloak>
      <span class="gray">// in client.js</span><br/>
      class <span class="red">MyModule</span> extends <span class="red">Module</span> {<br/>
        constructor() {<br/>
          &nbsp; super(<span class="red">'MyModule'</span>);<br/>
          &nbsp; someConstant = <span class="red">42</span>;<br/>
        }<br/>
      }<br/>
    </p>
    <p class="code1" v-cloak>
     <span class="gray"> // in index.js</span><br/>
      import {NativeModules} from <span class="red">'react-360'</span>;<br/>
      const {MyModule} = NativeModules;<br/>

      assert(MyModule.someConstant === <span class="red">42</span>);<br/>

    </p>
    <h5>简单的方法</h5>
    <p class="mt20">
      要在主浏览器窗口中触发不需要任何反馈的效果，只需在Native Module类中添加一个方法即可。 它可以在React端调用，参数将被复制到Runtime。 使用设置浏览器窗口标题的方法可以在Native Modules示例中看到此效果。
    </p>
    <p class="mt20">
      <strong>注意：</strong>如果您需要向Native Module类添加一个您不希望在React端访问的方法，请在其前面添加下划线。
    </p>
    <h5>带有回调的方法</h5>

    <p class="mt20">
      通常，使用Native Module方法从主浏览器窗口检索数据。 由于React代码和运行时之间的异步通信，无法从Native Module方法返回值。 相反，需要将值传递给回调方法，这是一种用于异步通信的标准JavaScript技术。
    </p>
    <p class="mt20">
      一旦Native Module获取了必要的数据，它就需要使用ReactNativeContext来调用回调。 这需要引用该上下文，该上下文可以在初始化时提供。
    </p>
    <p class="code1" v-cloak>
      <span class="gray">// in client.js</span><br/>

      import {Module} from <span class="red">'react-360-web'</span>; <br/>

      class <span class="red">MyModule</span> extends <span class="red">Module </span>{ <br/>
        constructor(ctx) { <br/>
          &nbsp; super(<span class="red">'MyModule'</span>); <br/>
<br/>
          &nbsp; this._ctx = ctx;<br/>
        }<br/>

        getValueWithCallback(id) {<br/>
          &nbsp; ctx.invokeCallback(<br/>
            &nbsp; &nbsp; id, <span class="gray">// callback id, passed to the method</span><br/>
            &nbsp; &nbsp; [<span class="red">42</span>, <span class="red">'hello'</span>] <span class="gray">// array of arguments passed to callback</span><br/>
          &nbsp; );<br/>
        }<br/>
      }<br/>

      const r360 = new ReactInstance(<br/>
        <span class="red">'MyApp.bundle?platform=vr'</span>,<br/>
        <span class="green">document</span>.getElementById(<span class="red">'container'</span>),<br/>
        {<br/>
          &nbsp; <span class="gray">// Register custom modules at init time</span><br/>
          &nbsp; nativeModules: [<br/>
            &nbsp; &nbsp; ctx => new MyModule(ctx), <span class="gray">// Use the function initializer</span><br/>
                                     &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span class="gray"> // to get the context</span><br/>
          &nbsp; ]<br/>
        }<br/>
      );
    </p>

    <p class="code1" v-cloak>
      <span class="gray">// in index.js</span><br/>
      import {NativeModules} from<span class="red"> 'react-360'</span>;<br/>
      const {MyModule} = NativeModules;<br/>

      MyModule.getValueWithCallback((a, b) => {<br/>
        &nbsp; assert(a === <span class="red">42</span>);<br/>
         &nbsp; assert(b === <span class="red">'hello'</span>);<br/>
      });
    </p>
    <h5>返回Promises的方法</h5>


    <p class="mt20">
      在现代JavaScript中，Promise通常被视为异步通信的一种方法。 您可以通过使用美元符号（$）附加其名称来创建返回Promise的原生模块方法，而不是直接使用回调。 调用方法时，React端将忽略美元符号。 两个回调ID将自动传递给Runtime，表示Promise的resolve和reject方法。
    </p>

    <p class="code1" v-cloak>
      <span class="gray">// in client.js</span><br/>

      import {Module} from <span class="red">'react-360-web'</span>; <br/>

      class <span class="red">MyModule</span> extends <span class="red">Module </span>{ <br/>
        constructor(ctx) { <br/>
          &nbsp; super(<span class="red">'MyModule'</span>); <br/>
<br/>
          &nbsp; this._ctx = ctx;<br/>
        }<br/>

        $getValueWithCallback(resolveID, rejectID) {<br/>
          &nbsp; ctx.invokeCallback(<br/>
            &nbsp; &nbsp; resoleID, <br/>
            &nbsp; &nbsp; [<span class="red">42</span>] <span class="gray">// array of arguments passed to callback</span><br/>
          &nbsp; );<br/>
        }<br/>
      }<br/>

      const r360 = new ReactInstance(<br/>
        <span class="red">'MyApp.bundle?platform=vr'</span>,<br/>
        <span class="green">document</span>.getElementById(<span class="red">'container'</span>),<br/>
        {<br/>
          &nbsp; <span class="gray">// Register custom modules at init time</span><br/>
          &nbsp; nativeModules: [<br/>
            &nbsp; &nbsp; ctx => new MyModule(ctx),
            &nbsp; ]<br/>
        }<br/>
      );
    </p>

    <p class="code1" v-cloak>
      <span class="gray">// in index.js</span><br/>
      import {NativeModules} from<span class="red"> 'react-360'</span>;<br/>
      const {MyModule} = NativeModules;<br/>

      MyModule.getValueWithPromise().then(value => {<br/>
        &nbsp; assert(a === <span class="red">42</span>);<br/>
      });
    </p>
  </div>
</template>

<script>
export default {
  name: "nativemodules",
  mounted() {
    document.title = "原生模块";
  },
  methods: {
    tolocation() {
      this.$router.push({
        path: "objects3d"
      });
    }
  }
};
</script>

<style lang='less'>
@import "../styles/mixin";
</style>
