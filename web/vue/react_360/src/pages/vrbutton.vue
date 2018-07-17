<template>
  <div class="containerFloatLeft">
    <h2 class="h2">vrbutton</h2>
    <p class="mt20">VrButton是一个实用的组件，可检测各种输入设备上的单击类型操作。 它通过实现一个内部状态机来监听关键事件，然后是键盘事件，同时光标保留在组件上。 默认情况下，VrButton没有外观，只能作为捕获事件的包装器，但可以采用与View相同的方式设置样式。</p>

    <h4>属性</h4>
    <p class='graybg'>source?: Object</p>
    <p class="mt20">如上所述，包含指向3D模型的资源的键的对象.</p>

    <p class='graybg'>style? Style | Object</p>
    <p class="goto"  @click="toview">View 样式...</p>
    <p class="mt20">如果为true，组件不能交互</p>
    <p class='graybg'>onButtonPress?: function</p>
    <p class="mt20">当按钮聚焦，而且按钮点击了的回调</p>
    <p class='graybg'>onButtonRelease?: function</p>
    <p class="mt20">当按钮聚焦，而且按钮释放了的回调</p>
    <p class='graybg'>onClick?: function</p>
    <p class="mt20">当按钮点击了，再释放，而且按钮依旧保持鼠标的焦点的回调</p>

    <p class='graybg'>onLongClick?: function</p>
    <p class="mt20">长按一段时间的回调</p>

  </div>
</template>

<script>
export default {
  name: "vrbutton",
  mounted() {
    document.title = "vrbutton";
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
