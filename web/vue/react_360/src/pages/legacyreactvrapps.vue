<template>
  <div class="containerFloatLeft">
    <h2 class="h2">迁移react vr项目</h2>
    <p class="mt20">如果您在React VR下构建了一个应用程序，则可以将其移植到新的React 360运行时以获得一些性能优势。 首先要做的是查看代码并用新的<span class="graybg">react-360</span>软件包替换对<span class="graybg">react-vr</span>软件包的所有引用。 目前，该软件包仍然会导出所有遗留组件，但这可能会在未来发生变化。</p>

    <h4>在新运行时安装旧应用程序</h4>
    <p class="mt20">您需要更新才能使用新的运行时。 建议您使用CLI创建新的React 360项目，然后将React代码复制到生成的<span class="graybg">index.js</span>中。 由于所有React VR代码都是在围绕（0,0,0）的3D坐标系中构建的，因此您应该将遗留应用程序安装到系统的默认3D位置。</p>

    <p class="code1" v-cloak>
      r360.renderToLocation(<br/>
        &nbsp; r360.createRoot(<span class="red">'MyLegacyApp'</span>),<br/>
        &nbsp; r360.getDefaultLocation(),<br/>
      );
    </p>
    <p class="mt20">这将为您提供改进的渲染路径和可配置输入方案的好处。 一旦完成这项工作，我们建议您进一步采取措施，并迁移应用程序的UI以使用Surfaces。</p>
    <h4>移动到曲面上</h4>
    <p class="mt20">
      如果您曾经使用空间中的视图和文本来布局UI，并且以米为单位测量所有内容，您会发现Surfaces更易于使用。 它们允许您以像素为单位进行思考，并简化在用户周围布置内容的过程。 例如，Surfaces及其内容始终面向用户，因此您不再需要考虑空间中的旋转。
    </p>

    <p class="mt20">
      目前，表面以4米的固定距离实现，初始像素密度旨在优化清晰度。 密度可以调整，但我们建议在大多数情况下使用默认值。
    </p>
    <h5>公共样式</h5>
    <p class="mt20">
      对于早期版本的React VR，开发人员通常通过在360张照片周围的特定位置放置链接或门道入口来构建互连房间的概念。 您仍然可以通过扩展圆柱曲面以环绕场景来实现相同的效果，并使用绝对定位放置链接。
    </p>

  </div>
</template>

<script>
export default {
  name: "legacyreactvrapps",
  mounted() {
    document.title = "迁移react vr项目";
  }
};
</script>

<style lang='less'>
@import "../styles/mixin";
</style>
