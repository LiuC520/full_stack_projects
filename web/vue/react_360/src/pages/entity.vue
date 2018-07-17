<template>
  <div class="containerFloatLeft">
    <h2 class="h2">实体</h2>
    <p class="mt20">实体允许您渲染三维物体，如<span class="goto" @click="toobjects3d">三维物体</span>文档中所述。 目前，React 360支持Wavefront OBJ文件和GLTF文件。 包含模型信息的外部资源（或资源）使用<span class='graybg'>source</span>属性提供，source属性是将资源类型映射到其位置的键值对的对象。</p>
    <p class="mt20">目前支持下面的几种格式：</p>
    <ol>
        <li><span class="graybg">obj</span>-OBJ格式模型的位置</li>
        <li><span class="graybg">mtl</span>-MTL格式材料的位置（OBJ配套使用）</li>
        <li><span class="graybg">gltf2</span>-独立的GLTF2模型</li>
      </ol>
    <p class="code1" v-cloak>
     // Entity with a material<br/>
    &lt;Entity<br/>
      &nbsp; source={{<br/>
        &nbsp; &nbsp; obj: asset('sculpture.obj'),<br/>
        &nbsp; &nbsp; mtl: asset('sculpture.mtl'),<br/>
      &nbsp; }}<br/>
    /><br/>

    // Entity without a material<br/>
    &lt;Entity<br/>
      &nbsp; source={{<br/>
        &nbsp; &nbsp; obj: asset('standalone.obj'),<br/>
      &nbsp; }}<br/>
    />
    </p>
    <h4>属性</h4>
    <p class='graybg'>source?: Object</p>
    <p class="mt20">如上所述，包含指向3D模型的资源的键的对象.</p>

    <p class='graybg'>style? Style | Object</p>
    <ol>
      <li><span class="graybg">transform</span>-转换数组，从最后一个到第一个一个个的应用，支持下面几种方式：
        <ol>
          <li><span class="graybg">{rotateX: number | string}</span></li>
          <li><span class="graybg">{rotateY: number | string}</span></li>
          <li><span class="graybg">{rotateZ: number | string} </span></li>
          <li><span class="graybg">{scaleX: number}</span></li>
          <li><span class="graybg">{scaleY: number}</span></li>
          <li><span class="graybg">{scaleZ: number}</span></li>
          <li><span class="graybg">{translateX: number}</span></li>
          <li><span class="graybg">{translateY: number}</span></li>
          <li><span class="graybg">{translateZ: number}</span></li>
        </ol>
      </li>
      <li><span class="graybg">color</span> 颜色</li>
      <li><span class="graybg">opacity</span> 数字</li>
    </ol>
    <p class="mt20"></p>

  </div>
</template>

<script>
export default {
  name: "view",
  mounted() {
    document.title = "view";
  },
  methods: {}
};
</script>

<style lang='less'>
@import "../styles/mixin";
[v-cloak] {
  display: none;
}
</style>
