<template>
  <div class="containerFloatLeft">
    <h2 class="h2">静态文件</h2>

    <p>虽然您可以基于React 360的基本文本和矩形组件构建整个应用程序，但您可能希望为应用程序添加外部资源。 无论是图像，全景图，声音还是3D模型，都可以增加360体验的丰富性。 这些资源可以通过两种方式进入您的应用：它们可以托管在外部服务上，也可以自己托管。</p>

    <p class="mt20">当您从开发应用程序转移到发布应用程序时，会出现两个选项之间的差异。 外部托管资源始终位于同一位置，您可以直接引用这些资源。 您自己的资源需要以不同方式处理。 部署到生产环境时，资源在开发模式下的位置（可能是生成项目时创建的<span class="graybg">static_assets</span>目录）可能会有所不同。 如果将所有文件作为单个目录复制到服务器，则可能不需要更改任何内容。 但是，如果您希望将静态资源部署到单独的域或CDN，则需要配置应用程序以适应这些更改。</p>

    <h4>静态文件的引用</h4>
    <p class="mt20">要创建可在生产时移动的资源的引用，应避免编写相对URL路径，而应使用<span class="graybg">asset（）</span>方法。 默认情况下，此方法将指向static_assets目录，但可以在运行时重写以指向CDN，即使其URL是动态生成的。</p>
    <p class="code1">
        <span class="gray">// asset（）示例</span> <br/>
        <span class="gray">// 默认情况下，图片指向static_assets/myImage.png</span> <br/>

      &lt;Image source={asset(<span class="red">'myImage.png'</span>)} />
      );
    </p>

    <p class="mt20"><span class="graybg">asset（）</span>方法创建包含URI路径的资源对象。 有时您可能需要生成资源的字符串路径。 您可以在这些情况下使用<span class="graybg">staticResourceURL（）</span> - 它采用本地资源路径，并在静态资源移动时对其进行转换。</p>
    <h4>指定资源路径</h4>
    <p class="mt20">发布应用程序后，可以通过在初始化时传递<span class="graybg">assetRoot</span>来配置静态资源位置。</p>
    <p class="code1">
      const r360 = new ReactInstance(<br/>
        &nbsp;<span class="red">'MyReact360App.bundle.js'</span>,<br/>
        &nbsp;<span class="green">document</span>.getElementById(<span class="red">'container'</span>),<br/>
        &nbsp;{<br/>
        &nbsp; &nbsp; <span class="gray">//自定义资源路径 </span> <br/>
          &nbsp; &nbsp; assetRoot: <span class="red">'https://mycdn.example.net/myapp/'</span>,<br/>
        &nbsp;},<br/>
      );
    </p>

    <p class="mt20">如果你使用<span class="graybg">npm run bundle</span>打包应用，你可以通过<span class="graybg">--assets</span>标签自定义路径</p>
    <p class="code">
      npm run bundle -- --assets <span class="red">"https://mycdn.example.net/myapp/"</span> <br/>
      # OR<br/>
      yarn bundle --assets <span class="red">"https://mycdn.example.net/myapp/"</span> <br/>

    </p>

  </div>
</template>

<script>
export default {
  name: "staticassets",
  mounted() {
    document.title = "静态文件";
  }
};
</script>

<style lang='less'>
@import "../styles/mixin";
</style>
