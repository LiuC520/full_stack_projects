<template>
  <div class="containerFloatLeft">
    <h2 class="h2">控制器信息</h2>
    <p class="mt20">ControllerInfo公开有关连接的游戏手柄和控制器的信息。 它可用于响应控制器连接/断开事件，并提取有关控制器的静态信息（唯一标识符，按钮和轴计数，左手与右手等）。 要监听控制器按钮状态和姿势，您应该依赖React 360的输入事件</p>
    <h4>方法</h4>
    <p class='graybg'>getControllers(): Promise</p>
    <p class="mt20">从所有连接的控制器获取当前信息，返回使用控制器对象数组解析的Promise。</p>

  </div>
</template>

<script>
export default {
  name: "controllerinfo",
  mounted() {
    document.title = "controllerinfo";
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
