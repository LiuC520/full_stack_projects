<template>
  <div class="containerFloatLeft">
    <h2 class="h2">什么是React 360？</h2>
    <h4>关于React 360</h4>

    <p>React 360是一个创建3D和VR用户交互的框架.构建在React的基础之上，React是一个简化复杂UI创建的库，React 360可以让你用相似的工具和概念在网页上创建沉浸式的360度的内容。</p>
    <h6>它是为了干啥的？</h6>
    <p class="mt20">React 360针对创建支持丰富多媒体体验的用户界面进行了优化，它提供了创建高质量界面所需的工具，并为围绕360和3D内容构建的应用程序提供了坚实的基础。React 360中使用的技术和工具类似于Oculus和Facebook在移动和PC平台上开发VR应用程序时使用的技术和工具，是多年研究最佳实践的结果。</p>
    <p class="mt20">React 360旨在将交互性带入360空间。 结合2D或3D界面的应用程序很容易实现。 照片和视频，360游览，经典冒险游戏和3D棋盘游戏都是迄今为止用React 360构建的例子。</p>
    <h6>React 360和React VR有啥区别？</h6>
    <p class="mt20">早在2017年，Facebook和Oculus开源了一个叫React VR的js库，用来在浏览器上创建3D和VR内容的。与此同时，Oculus开始使用该框架的原生C ++版本来构建自己的第一方应用程序。随着时间的推移，两个项目的API在我们解决框架的不同需求时出现了分歧。
      为了避免两个系统之间的混淆，开源框架已经更名为“React 360”，它更好地反映了它的用例：可以在PC，移动和VR设备上使用的沉浸式360体验。
    </p>
    <p class="mt20">如果您以前使用过React VR，那么您应该会发现React 360非常相似。 我们简化了许多更常见的工作流程，例如在3D空间中放置2D UI元素，以及优化这些用例的性能。 如果您要迁移旧版React VR应用程序以使用新工具，<span class="goto" @click="tolegacyreactvrapps">请按照本指南进行操作。</span></p>
    <h6>React 360和A-frame有啥区别？</h6>
    <p class="mt20">A-Frame是一个使用声明性HTML类组件构建VR世界的框架。 它拥有来自充满活力的社区，也有丰富可用组件，非常适合创建可在VR中查看的复杂3D场景。 我们相信React 360提供了一个不同的方向，它围绕依赖用户界面的应用程序进行了优化，或者本质上是事件驱动的。 查看我们的示例，使用React 360可以轻松构建的内容类型。</p>
    <p class="mt20">要找出适合您的框架？  如果您的应用程序由用户交互驱动，并且具有许多2D或3D UI元素，React 360会比较适合。 如果您的应用程序包含许多3D对象，或依赖于着色器和后处理等复杂效果，A-Frame会更好些。 无论哪种方式，您都将构建具有VR功能的极佳沉浸式体验！</p>
    <h6>React 360和Three.js有啥区别？</h6>
    <p class="mt20">Three.js是用于在Web浏览器中进行3D渲染的库。 它是比React 360更低级别的工具，需要控制原始3D网格和纹理。 除非需要，否则React 360旨在隐藏大部分内容，以便您可以专注于应用程序的行为和外观。</p>
    <p class="mt20">目前，React 360依赖于Three.js来完成一些渲染工作。 但是，我们正在打开相关的API，以便React 360开发人员可以很快使用他们选择的3D渲染库，包括原始WebGL调用。</p>


  </div>
</template>

<script>
export default {
  name: "whatisreact360",
  mounted() {
    document.title = "什么是React 360";
  },
  methods: {
    tolegacyreactvrapps() {
      this.$router.push({ path: "legacyreactvrapps" });
    }
  }
};
</script>

<style lang='less'>
@import "../styles/mixin";
</style>
