<template>
  <div class="containerFloatLeft">
    <h2 class="h2">Text</h2>
    <p class="mt20">Text是用于显示字符串的React组件。 它支持嵌套，并通过尺寸，weight和颜色设计样式。 应用程序显示的所有字符串必须包含在Text组件中 - 您不能将字符串作为View的直接子项。</p>
    <h4 class="h2">布局</h4>
    <p class="mt20">在布局方面，Text组件是特殊的。 Text元素中的所有内容都使用文本布局而不是flexbox布局。 这意味着Text内部的元素不是长矩形，而是在它们到达行尾时换行。</p>

    <p class="code1" v-cloak>
      &lt;Text><br/>
        &nbsp; &lt;Text>First part and &lt;/Text><br/>
        &nbsp; &lt;Text>second part&lt;/Text><br/>
      &lt;/Text><br/>
      // Text container: all the text flows as if it was one<br/>
      // |First part |<br/>
      // |and second |<br/>
      // |part       |<br/>
    </p>
    <p class="mt20">相反</p>

    <p class="code1" v-cloak>
      &lt;View><br/>
        &nbsp; &lt;Text>First part and &lt;/Text><br/>
        &nbsp; &lt;Text>second part&lt;/Text><br/>
      &lt;/View><br/>
      // View container: each text is its own block<br/>
      // |First part |<br/>
      // |and        |<br/>
      // |second part|<br/>
    </p>
    <h4>属性</h4>
    <p class='graybg'>style? Style | Object</p>
    <ol>
      <li><span class="goto"  @click="toview">View 样式...</span></li>
      <li><span class="graybg">color</span> 颜色</li>
      <li><span class="graybg">fontSize</span>-数字</li>
      <li><span class="graybg">fontWeight</span>-'normal' | 'bold' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900'</li>
      <li><span class="graybg">lineHeight</span>-数字</li>
      <li><span class="graybg">textAlign</span>-'auto' | 'left' | 'center' | 'right' | 'justify'</li>
    </ol>
  </div>
</template>

<script>
export default {
  name: "text",
  mounted() {
    document.title = "text";
  },
  methods: {
    toview() {
      this.$router.push({
        path: "view"
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
