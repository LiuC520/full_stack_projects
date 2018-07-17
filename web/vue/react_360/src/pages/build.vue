<template>
  <div class="containerFloatLeft">
    <h2 class="h2">构建生产版本的app</h2>
    <p class="mt20">在本地服务器上运行仅用于开发。 准备好发布应用程序后，您需要构建代码的生产版本。</p>
    <p class="mt20">React 360包含一个命令，可以将所有内容打包到一个文件夹中。 从项目的根目录运行<span class="graybg">npm run bundle</span>将创建JS的生成版本，创建指向生产JS的<span class="graybg">index.html</span>文件的副本，并将其全部放在新的构建目录中。 要发布应用程序，请将此目录的内容复制到您的服务器。 如果您使用<span class="graybg">static_assets</span>目录中的任何文件，则还应将此文件夹复制到服务器。 文件的布局应类似于以下结构：</p>

    <p class="code1" v-cloak>
      Web <span class="green">Server</span> <br/>
      |-- static_assets/<br/>
      |<br/>
      |-- index.html<br/>
      |__ index.bundle.js<br/>
      L client.bundle.js<br/>
    </p>

    <p class="mt20">
      可以在在不同的地方防止静态资源文件，具体看下一节内容。
    </p>

  </div>
</template>

<script>
export default {
  name: "build",
  mounted() {
    document.title = "构建你的项目";
  }
};
</script>

<style lang='less'>
@import "../styles/mixin";
</style>
