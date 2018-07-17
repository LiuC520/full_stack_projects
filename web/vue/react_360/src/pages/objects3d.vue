<template>
  <div class="containerFloatLeft">
    <h2 class="h2">三维物体</h2>

    <p>React 360应用程序不仅限于空间中的2D面板 - 您还可以引入3D元素。 可以将在3D建模或雕刻软件中创建的预构建对象引入您的应用程序。 React 360故意不包含像框和球体这样的原始元素 - 而是设计用于导入准备好的对象。 您可以从这些元素构建更大的场景。</p>
    <h4>实体 Entity</h4>
    <p class="mt20">你可以用<span class="graybg">&lt;Entity></span>组件在你的场景中放置3D物体，实体允许您引入3D模型，并对其进行转换和缩放。实体有一个<span class="graybg">source</span>属性，可以指定一个GLTF2或者OBJ模型。</p>
    <p class="code1" v-cloak>
        <span class="gray">// 应用GLTF2模型</span> <br/>
        &lt;Entity source={{gltf2: asset(<span class="red">'myModel.gltf'</span>)}} /><br/>

        <span class="gray">// 没有纹理的OBJ模型</span> <br/>
        &lt;Entity source={{gltf2: asset(<span class="red">'myModel.obj'</span>)}} /><br/>

        <span class="gray">// 应用GLTF2模型</span> <br/>
        &lt;Entity source={{gltf2: asset(<span class="red">'myModel.obj'</span>),mtl: asset(<span class="red">'myModel.mtl'</span>)}} />
    </p>
    <p class="mt20">你可以用<span class="graybg">transform</span>样式属性来设置实体相对与它父控件的位置，<span class="goto" @click="tolayout">具体可以看布局这块的内容</span>。</p>
    <h4>位置 Locations</h4>
    <h5>挂载3D物体</h5>

    <p class="mt20">3D物体不能添加到曲面上，面上的元素仅限于2D内容，为了将3D树添加到场景中，你需要挂载到一个<span class="graybg">Location</span>上,
    Location在物理空间里表示原点，3D场景可以从中扩展。 在client.js代码中挂载到位置上，非常类似于挂载到Surface。
    </p>
    <p class="code1">
      r360.renderToLocation(<br/>
      &nbsp;&nbsp; r360.createRoot(<span class="red">'React3DView'</span>),<br/>
      &nbsp;&nbsp; r360.getDefaultLocation(),<br/>
      );
    </p>
    <p class="mt20">您的元素将相对于此位置布局，并使用基于米为单位的测量系统。 默认位置为（0,0,0），这是摄像机的默认位置。 在此位置周围布置内容允许您在用户周围布置元素，但您也可以相对于其他来源定位对象。</p>
    <h5>创建位置</h5>

    <p class="mt20">您可以使用位置构造函数创建自己的<span class="graybg">Location</span>以放置3D场景。 它需要一个参数，一个描述原点在3D空间中位置的三元素数组。</p>
    <p class="code1">
       import {Location} from <span class="red">'react-360-web'</span>;<br/>
        <span class="gray">// 创建一个离用户前面2米，下面1米</span> <br/>
        const location = new Location([<span class="red">0</span>, <span class="red">-1</span>, <span class="red">-2</span>]); <br/>
        <span class="gray">// 渲染这个位置</span> <br/>
        vr.renderToLocation(<br/>
       &nbsp;&nbsp; vr.createRoot(<span class="red">My3DView</span> ), <br/>
       &nbsp;&nbsp; location,<br/>
        );
    </p>
    <p class="mt20">挂载到某个位置的场景也可以用第二个参数进行初始旋转。 它是一个数组，表示围绕x，y和z轴的以弧度表示的旋转。</p>
    <p class="code1">
        <span class="gray">// 创建一个离用户前面2米的位置</span> <br/>
        <span class="gray">// 沿着y轴旋转90度</span> <br/>
        new Location([<span class="red">0</span>, <span class="red">0</span>, <span class="red">-2</span>], [<span class="red">0</span>, <span class="green">Math</span>.PI / <span class="red">2</span>, <span class="red">0</span>]); <br/>
    </p>
    <h5>移动位置</h5>

    <p class="mt20">位置是可移动的。 这允许您创建这样的效果，例如原点以预定义模式移动的场景，或遵循不断更新的值，如VR控制器的位置。 这可以使用<span class="graybg">setWorldPosition（x，y，z）</span>和<span class="graybg">setWorldRotation（x，y，z）</span>方法来完成，这些方法更新构造时提供的参数。 使用这些，您可以有效地更改3D场景的位置，而无需通过您的React代码。</p>
    <p class="mt20"></p>
    <p class="mt20"></p>
  </div>
</template>

<script>
export default {
  name: "objects3d",
  mounted() {
    document.title = "三维模型";
  },
  methods: {
    tolayout() {
      this.$router.push({
        path: "layout"
      });
    }
  }
};
</script>

<style lang='less'>
@import "../styles/mixin";
</style>
