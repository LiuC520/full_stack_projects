<template>
  <div class="containerFloatLeft">
    <h2 class="h2">安装工具，创建你的第一个项目</h2>
      <p>这里为你创建react 360 安装必要的工具.</p>
      <p>开始之前，你需要安装node.js，因为react 360是运行在浏览器上的，打包代码是要依赖node的.</p>
      <ol>
        <li><strong>Mac:</strong> mac上推荐使用<a href="http://brew.sh/" target="_blank">homebrew</a>来安装ndoe</li>
        <li><strong>Windows:</strong> 推荐使用<a href="https://nodejs.org/en/download/" target="_blank">nodejs.org</a>下载安装</li>
        <li><strong>Linux:</strong> 推荐使用<a href="https://nodejs.org/en/download/package-manager/" target="_blank">nodejs.org package manager页面</a>，找到对应你的linux版本的node</li>
      </ol>
      <p class="mt20">一旦你的node安装完成，就可以安装<strong>React 360 Cli</strong> 了,这个工具可以创建和管理你的react 360项目，打开终端，安装下面的命令:</p>
      <p class="code">npm install -g react-360-cli</p>

      <p>上面的命令会将最新版的CLI安装到你的电脑上.安装完成就可以生成初始的项目代码了，进入到你要创建项目的文件夹下面，然后运行下面的代码，就可以创建一个名字为Hello360的项目了.</p>
      <p class="code">react-360 init Hello360</p>
      <p>上面项目创建完毕了，你就可以直接进入项目下面看代码了.</p>
      <p class="code">cd Hello360</p>

      <p>当我们打包react 360的项目时，会自动把源码和依赖文件打包成一个文件。如果你比较熟悉web开发，可能遇到到一写打包工具，react 360自带了打包工具.
        <a href="https://github.com/facebook/metro" target="_blank">Metro</a>
        是js的打包工具，可以用来打包React 360和React Native.
      </p>
      <p class="mt20">在开发环境下，打包工具会启动一个本地服务允许你进入自己的项目.它可以在需要的使用用来编译和处理你的代码。当你准备好要发布代码，还可以用来打包生产环境的代码。这些代码可以放到任何一个web服务器上。至此，你可以用下面的命令开启开发环境的服务：</p>
      <p class="code">npm start</p>

      <p>这个服务器将检查您的项目并收集提供JavaScript文件所需的所有数据.为了看你的项目，打开浏览器输入下面的地址就可以看到效果了。
        <a href="http://localhost:8081/index.html" target="_blank">http://localhost:8081/index.html</a>.
        第一次加载需要点儿时间，打包工具在做初始化操作，第一次加载完成，后面即使你修改了代码再加载也会快很多。你可以在终端里面看到项目的加载进度，加载完了，你就可以看到下面的示例
        <img class="firstimg" src="../assets/starter_project.jpg" alt='layoutexample'/>
      </p>


  </div>
</template>

<script>
export default {
  name: "enjoyvr",
  mounted() {
    document.title = "创建第一个项目";
  }
};
</script>

<style lang='less'>
@import "../styles/mixin";
</style>
