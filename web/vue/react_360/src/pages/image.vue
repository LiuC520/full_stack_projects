<template>
  <div class="containerFloatLeft">
    <h2 class="h2">图片</h2>
    <p class="mt20">用于在曲面上显示2D图像的React组件。 图片源可以是外部托管的资源，也可以从<span class="graybg">static_assets</span>目录引用，并与应用程序一起托管。</p>
    <h4 class="h2">布局</h4>
    <p class="mt20">在布局方面，Text组件是特殊的。 Text元素中的所有内容都使用文本布局而不是flexbox布局。 这意味着Text内部的元素不是长矩形，而是在它们到达行尾时换行。</p>

    <p class="code1" v-cloak>
     renderImages() {<br/>
     &nbsp; return (<br/>
        &nbsp; &nbsp; &lt;View><br/>
          &nbsp; &nbsp; &nbsp; &lt;Image source={{uri: 'http://example.net/externally/hosted/image.png'}'}' /><br/>
          &nbsp; &nbsp; &nbsp; &lt;Image source={asset('image-in-static-assets.jpg') /><br/>
        &nbsp; &nbsp; &lt;/View><br/>
      &nbsp; );<br/>
    }
    </p>
    <p class="mt20">图像不会根据其内容自动调整大小，因为它会阻止网络请求的布局。 为了渲染图像，它们必须通过宽度和高度样式或Flexbox属性显式声明其形状。</p>

    <h4>属性</h4>
    <p class='graybg'>crop?: [number, number]</p>
    <p class="mt20">指定要显示的UV坐标的扩展</p>

    <p class='graybg'>onLoad?: function</p>
    <p class="mt20">图片成功加载后的回调</p>

    <p class='graybg'>onLoadEnd?: function</p>
    <p class="mt20">图片加载完毕后不管成功还是失败的回调</p>

    <p class='graybg'>onLoadStart?: function</p>
    <p class="mt20">图片加载开始的回调</p>

    <p class='graybg'>source: {uri: string}</p>
    <p class="mt20">uri是表示图像URI的字符串，可以是绝对或相对HTTP路径。 对于您在应用程序内的资源，建议您使用<span class="goto"  @click="tostaticassets">asset（）帮助者</span>导入它们，后者会为您生成源对象。</p>

    <p class='graybg'>style? Style | Object</p>
    <ol>
      <li><span class="goto"  @click="toview">View 样式...</span></li>
      <li><span class="graybg">tintColor</span> 颜色</li>
    </ol>
  </div>
</template>

<script>
export default {
  name: "image",
  mounted() {
    document.title = "image";
  },
  methods: {
    toview() {
      this.$router.push({
        path: "view"
      });
    },
    tostaticassets(){
      this.$router.push({
        path: "staticassets"
      });
    }
  }
};
</script>

<style lang='less'>
@import "../styles/mixin";
[v-cloak] {
  display: none;
}
</style>
