<template>
  <div class="containerFloatLeft">
    <h2 class="h2">View</h2>
    <p class="mt20">构建UI的最基本组件是View，它是一个支持Flexbox布局，外观样式和输入事件的容器。 在2D空间中，“视图”是用于空间元素或创建边框和背景颜色。 在3D空间中，view用于对实体或其他视图进行分组，在3D空间中应用变换。</p>
    <p class="mt20">下面的例子是创建一个View包含了两个颜色的盒子，一个有内边距的Text组件</p>

    <p class="code1" v-cloak>
      class <span class="red">ViewColoredBoxesWithText</span> extends <span class="red">Component</span> {<br/>
        &nbsp;render() {<br/>
          &nbsp; return (<br/>
            &nbsp; &nbsp; &lt;View :style={{flexDirection: 'row', height: 100, padding: 20}'}'><br/>
              &nbsp; &nbsp; &nbsp; &lt;View style={{backgroundColor: 'blue', flex: 0.3}'}' /><br/>
              &nbsp; &nbsp; &nbsp; &lt;View style={{backgroundColor: 'red', flex: 0.5}'}' /><br/>
              &nbsp; &nbsp; &nbsp; &lt;Text>Hello World!&lt;/Text><br/>
            &nbsp; &nbsp; &lt;/View><br/>
          &nbsp; );<br/>
        &nbsp; }<br/>
      }
    </p>
    <h4>属性</h4>
    <p class='graybg'>hitSlop?: number</p>
    <p class="mt20">这定义了触摸事件开始时离组件之间的距离。 在创建使用VR控制器单击的小型交互式目标时，这一点变得非常重要</p>
    <p class='graybg'>onEnter?: function</p>
    <p class="mt20">当鼠标开始和view交互时的回调</p>
    <p class='graybg'>onExit?: function</p>
    <p class="mt20">当鼠标离开view时的回调</p>
    <p class='graybg'>onInput?: number</p>
    <p class="mt20">当用户在光标位于视图上方时按下输入按钮时调用。 <span class="goto" @click="toinputhandle">有关输入处理文档的更多信息。</span></p>
    <p class='graybg'>pointerEvents?: 'box-none' | 'none' | 'box-only' | 'auto'</p>
    <p class="mt20">控制View是否可以作为输入事件的目标。
      <ol>
        <li><span class="graybg">auto</span>-view可以成为事件的目标</li>
        <li><span class="graybg">none</span>-view不可以成为事件的目标</li>
        <li><span class="graybg">box-none</span>-view不可以成为事件的目标，但是它的子View可以</li>
        <li><span class="graybg">box-only</span>-view可以成为事件的目标，但是它的子View不可以</li>
      </ol>
    </p>

    <p class='graybg'>style? Style | Object</p>
    <ol>
      <li><span class="goto" @click="tolayout">Layout 布局属性...</span></li>
      <li><a href='https://facebook.github.io/react-native/docs/shadow-props'  target="_blank">Shadow 阴影属性...</a></li>
      <li><span class="graybg">transform</span>-转换数组，从最后一个到第一个一个个的应用，支持下面几种方式：
        <ol>
          <li><span class="graybg">{rotateX: number | string}</span></li>
          <li><span class="graybg">{rotateY: number | string}</span></li>
          <li><span class="graybg">{rotateZ: number | string} </span>-在曲面是不支持的</li>
          <li><span class="graybg">{scaleX: number}</span></li>
          <li><span class="graybg">{scaleY: number}</span></li>
          <li><span class="graybg">{scaleZ: number}</span>-在曲面是不支持的</li>
          <li><span class="graybg">{translateX: number}</span></li>
          <li><span class="graybg">{translateY: number}</span></li>
          <li><span class="graybg">{translateZ: number}</span>-在曲面是不支持的</li>
        </ol>
      </li>
      <li><span class="graybg">backgroundColor</span> 颜色</li>
      <li><span class="graybg">borderBottomLeftRadius</span> 数字</li>
      <li><span class="graybg">borderBottomRightRadius</span> 数字</li>
      <li><span class="graybg">borderBottomWidth</span> 数字</li>
      <li><span class="graybg">borderColor</span> 颜色</li>

      <li><span class="graybg">borderLeftWidth</span> 数字</li>
      <li><span class="graybg">borderRadius</span> 数字</li>
      <li><span class="graybg">borderRightWidth</span> 数字</li>
      <li><span class="graybg">borderTopLeftRadius</span> 数字</li>
      <li><span class="graybg">borderTopRightRadius</span> 数字</li>
      <li><span class="graybg">borderTopWidth</span> 数字</li>
      <li><span class="graybg">borderWidth</span> 数字</li>
      <li><span class="graybg">opacity</span> 数字</li>
      <li><span class="graybg">overflow</span> 'visible' | 'hidden'</li>
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
  methods: {
    toinputhandle() {
      this.$router.push({
        path: "inputhandle"
      });
    },
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
[v-cloak] {
  display: none;
}
</style>
