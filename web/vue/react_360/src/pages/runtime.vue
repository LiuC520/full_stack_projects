<template>
  <div class="containerFloatLeft">
    <h2 class="h2">运行时</h2>
    <h4>什么是运行时？</h4>

    <p>每个React 360应用程序由两部分组成：您的React应用程序，以及将您的React组件转换为屏幕上的3D元素的代码。 我们将后者称为“运行时”。这种角色划分直接来自React Native，并且由于非常相似的原因而被使用。</p>

    <p class="mt20">为了一个关键目的，我们将您的应用程序代码与呈现代码分开：Web浏览器是单线程的，并且应用程序中的任何阻止行为都可能导致呈现停止。 对于在VR头显上观看360体验的用户而言，这尤其成问题，因为显着的渲染延迟会打破沉浸感。 通过在单独的上下文中运行您的应用程序代码，我们允许渲染循环以高帧速率持续更新。</p>
    <p class="mt20">当React代码创建新元素时，它会让运行时将它们添加到3D场景中。 当用户提供输入时，它将作为事件传递回React。 这两个部分合作创建一个有凝聚力的系统。 如果要在系统之间传递其他数据，可以依赖<span class="goto" @click="tonativemodules">原生模块。</span></p>
    <h4>Executors 执行者</h4>
    <p class="mt20">执行者是运行时的一部分，它在与主浏览器窗口不同的进程中运行React应用程序。 React 360虽然有两个不同的执行者，但是您不必担心配置这个问题。</p>
    <h6>Web Worker 执行者</h6>
    <p class="mt20">Web Workers是一种现代浏览器功能，允许代码在主窗口上下文之外运行。 这非常适合高成本操作，或者在我们的情况下，在不中断requestAnimationFrame循环的情况下运行代码。 默认情况下，React 360使用Web Worker来执行您的React代码。 这意味着在index.js中找到的任何代码都在Web Worker环境中运行，而不是在标准浏览器窗口中运行。 因此，您可能会发现某些API（例如window.location）无法访问 - 这可以通过Native Modules轻松解决。 事实上，已经为您提供了许多常见的API，如Location 位置和History  历史记录。</p>

    <h6>Iframe 执行者</h6>
    <p class="mt20">有时您的环境不支持Web Workers。 虽然这不太可能，但我们提供了一种通过<span class="graybg">&lt;iframe></span>模拟单独执行环境的解决方法。 要使用它而不是Web Worker，请初始化<span class="graybg">ReactExecutorIframe</span>并在初始化时提供它。</p>
    <p class="code1">
      import {ReactExecutorIframe} from <span class="red">'react-360-web'</span>;<br/>
       const r360 = new ReactInstance(bundle, parent, {<br/>
       &nbsp;executor: new ReactExecutorIframe(),<br/>
       &nbsp;...options,<br/>
      });

    </p>

  </div>
</template>

<script>
export default {
  name: "runtime",
  mounted() {
    document.title = "Runtime运行时";
  },
  methods: {
    tonativemodules() {
      this.$router.push({ path: "nativemodules" });
    }
  }
};
</script>

<style lang='less'>
@import "../styles/mixin";
</style>
