<template>
  <div class="containerFloatLeft">
    <h2 class="h2">和现有的网页交互</h2>
    <p class="mt20">在构建应用程序时，您有一个HTML页面，允许您自己查看项目。 许多体验最好全屏查看，特别是在移动设备上，最简单的方法是将用户直接发送到此HTML页面。 但是，有时您可能希望将其嵌入到更大的页面中。 这有两种技巧。</p>

    <h4>包裹在iframe里面</h4>
    <p class="mt20">将React 360内容嵌入到更大的网页中的推荐方式是使用Iframe。 将<span class="graybg">&lt;iframe></span>标记的<span class="graybg">src</span>属性指向项目的索引HTML文件。 此技术可确保您的应用程序不会干扰父网页，并且父网页将无法减慢应用程序的呈现速度。 这还允许您从单个端点提供内容，并使用嵌入式和全屏体验。</p>

    <h4>添加到大型js应用中</h4>
    <p class="mt20">如果要将运行时代码添加到更大的JS应用程序的一部分中，可以使用<span class="graybg">client.js</span>文件中的代码将其放入应用程序中。 虽然应用程序的React部分（<span class="graybg">index.js</span>）需要内置的bundle来编译其代码，但运行时（<span class="graybg">client.js</span>）却没有，并且可以集成到由Webpack或类似技术构建的更大的项目中。</p>
    <p class="mt20">当您的React 360代码初始化时，它声明DOM节点将其自身附加到其上。 如果将代码从启动项目中取出，则可以将其替换为任何DOM节点。 如果这样做，您还需要禁用<span class="graybg">fullScreen</span>标志 - 否则它将呈现在您的其他内容上。</p>

  </div>
</template>

<script>
export default {
  name: "integrateothersite",
  mounted() {
    document.title = "和现有的网页交互";
  }
};
</script>

<style lang='less'>
@import "../styles/mixin";
</style>
