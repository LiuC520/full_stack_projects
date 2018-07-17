<template>
  <div class="containerFloatLeft">
    <h2 class="h2">在2D和3D空间布局</h2>
    <h4>在2D空间布局</h4>
    <p class="mt20">在2D表面的上下文中，React 360使用称为Flexbox的布局技术。 这种基于约束的布局系统最初是为Web开发的，但它代表许多不同布局类型的能力和能力使其成为React的声明性质。 它被React Native采用，React 360从中借用了它的实现。 React Native文档很好地介绍了这些主题，应该用于了解如何<a href="http://facebook.github.io/react-native/docs/height-and-width.html" target="_blank">调整对象的大小</a>并将它们<a href="http://facebook.github.io/react-native/docs/flexbox.html" target="_blank">放在2D空间</a>中。</p>

    <h4>在3D空间布局</h4>
    <p class="mt20">当挂载到<span class="goto" @click="tolocation">Location 位置</span>而不是Surface时，React 360会切换到基于米为单位的三维坐标系。 这是典型的3D建模程序和游戏引擎 - 一旦您切换到将物体放置到物理空间，您需要使用基于物理的测量系统。</p>
    <p class="mt20">在该坐标系中，有三个轴：x轴指向用户右侧，y轴指向上方，z轴指向用户后方。 3D对象的放置是通过transform style属性完成的，该属性采用应用于对象的转换数组。 您可以使用以下选项在3D空间中平移和旋转对象：</p>
    <ol>
      <li><span class="graybg">{rotateX: x}</span>-x轴旋转多少角度</li>
      <li><span class="graybg">{rotateY: y}</span>-y轴旋转多少角度</li>
      <li><span class="graybg">{rotateZ: z}</span>-z轴旋转多少角度</li>
      <li><span class="graybg">{translate: [x, y, z]}</span>-相对与父控件移动</li>
    </ol>
    <p class="mt20">多个转换可以应用于单个对象，并且它们从右到左应用。 这很重要，因为先移动再旋转和先旋转再移动是不一样的！</p>
    <p class="mt20">转换是相对于父级的 - 当您沿着React树向下移动时，它们会从父级添加到子级。 您可以使用3D空间中的&lt;View>元素将3D元素组合在一起，并将移动应用于整个组。</p>



    <p class="code1" v-cloak>
        <span class="gray">// 放置两个实体</span> <br/>
        <span class="gray">// 放置在用户前面2米，每一个左右间距1米</span> <br/>
        &lt;View<br/>
        &nbsp;&nbsp; style={{transform: [<br/>
          &nbsp;&nbsp;&nbsp; {translate: [<span class="red">0</span> , <span class="red">0</span> , <span class="red">-2</span> ]}<br/>
        &nbsp;&nbsp; ]}}><br/>
<br/>
        &nbsp;&nbsp; &lt;Entity<br/>
          &nbsp;&nbsp;&nbsp; style=<span class="red">{{transform:</span>  [<br/>
            &nbsp;&nbsp;&nbsp;&nbsp; {translate: [1, 0, 0]}<br/>
          &nbsp;&nbsp;&nbsp; ]}}<br/>
          &nbsp;&nbsp;&nbsp; { /* ... */ }<br/>
        &nbsp;&nbsp; /><br/>
<br/>
        &nbsp;&nbsp; &lt;Entity<br/>
          &nbsp;&nbsp;&nbsp; style=<span class="red">{{transform:</span>  [<br/>
            &nbsp;&nbsp;&nbsp;&nbsp; {translate: [-1, 0, 0]}<br/>
          &nbsp;&nbsp;&nbsp; ]}}<br/>
          &nbsp;&nbsp;&nbsp; { /* ... */ }<br/>
        &nbsp;&nbsp; /><br/>
<br/>
      &lt;/View><br/>
    </p>

  </div>
</template>

<script>
export default {
  name: "layout",
  mounted() {
    document.title = "布局";
  },
  methods: {
    tolocation() {
      this.$router.push({
        path: "objects3d"
      });
    }
  }
};
</script>

<style lang='less'>
@import "../styles/mixin";
</style>
