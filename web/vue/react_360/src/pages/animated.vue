<template>
  <div class="containerFloatLeft">
    <h2 class="h2">vrbutton</h2>
    <p class="mt20">动画是现代用户体验的重要组成部分，动画库旨在使其流畅，强大且易于构建和维护。 动画可以以适合React的声明式样式切换场景中元素的大小，位置和外观。</p>
    <p class="mt20">动画库最初是从React Native实现的，这是我们使用的版本。 要了解它的工作原理，我们建议您阅读<a href="http://www.vr-react.com/Animat.html" target="_blank">React Native文档。</a></p>

  </div>
</template>

<script>
export default {
  name: "vrbutton",
  mounted() {
    document.title = "vrbutton";
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
