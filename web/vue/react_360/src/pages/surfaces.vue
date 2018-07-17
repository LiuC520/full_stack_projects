<template>
  <div class="containerFloatLeft">
    <h2 class="h2">面</h2>

    <p>曲面允许您在3D空间中添加2D界面，让您以像素而不是物理尺寸工作。 它们针对易读性进行了优化，并依赖于Oculus用于其用户界面的相同原则。 表面根据像素内容的高度和宽度以及物理空间中这些像素的密度来定义。 React 360获取所有这些信息并生成具有适当尺寸的3D对象。 目前有两种不同形状的Surface：Cylinder和Flat。</p>
    <h4>圆柱形曲面</h4>
    <p class="mt20">圆柱表面将您的2D内容投射到半径为4米的圆柱体内部。 圆柱体非常适合显示2D内容，因为无论您转向哪儿，您都可以直接查看内容。</p>
    <p class="code1">
        <span class="gray">// 在运行时环境中创建一个圆柱形曲面</span> <br/>
       import {Surface} from <span class="red">'react-360-web'</span>;<br/>
        const myCylinderSurface = new Surface(<br/>
       &nbsp;&nbsp; <span class="red">1000</span>, <span class="gray">/* 宽 */ </span> <br/>
       &nbsp;&nbsp; <span class="red">600</span>, <span class="gray">/* 高 */ </span> <br/>
       &nbsp;&nbsp; Surface.SurfaceShape.Cylinder <span class="gray">/* 形状 */ </span> <br/>
        );
    </p>
    <p class="mt20">根据内容的大小，它可能不会环绕圆柱体的整个内部 - 而是仅覆盖在用户前方居中的部分。 随着您增加Surface的宽度，内容将覆盖越来越多的圆柱体。 覆盖的角度是Surface的宽度和密度的函数。 具体而言，密度以每360度像素为单位测量：宽度等于密度一半的圆柱表面将覆盖圆柱体的一半。 默认密度为4680，这个值在各种显示器上看起来都很好。 这意味着宽度为1170像素（4680除以4）的Surface将覆盖用户前方的90度弧。 需要注意的一点是：由于WebGL的限制，Surface内容的数据最多只能是4096像素！ 如果您确实需要用表面覆盖整个圆柱体，请将其密度降低至4096。</p>
    <p class="mt20">我们建议您使用720的最大曲面高度 - 超出此范围的任何东西都很难让您的用户看到。</p>
    <h4>平面</h4>
    <p class="mt20">平面将2D界面放置在空间中的平面上，就像虚拟屏幕一样。 虽然圆柱面始终位于用户面前，但平面可以在空间中移动 - 这对于您希望在用户周围布置多个面板的情况非常有用，例如虚拟空间中的多显示器设置。</p>
    <p class="code1">
        <span class="gray">// 在运行时环境中创建一个平面</span> <br/>
       import {Surface} from <span class="red">'react-360-web'</span>;<br/>
        const myFlatSurface = new Surface(<br/>
       &nbsp;&nbsp; <span class="red">300</span>, <span class="gray">/* 宽 */ </span> <br/>
       &nbsp;&nbsp; <span class="red">600</span>, <span class="gray">/* 高 */ </span> <br/>
       &nbsp;&nbsp; Surface.SurfaceShape.Flat <span class="gray">/* 形状 */ </span> <br/>
        );
    </p>

    <p class="mt20">平面位于假想球体的外侧，半径为4米 - 这使它们与圆柱面的距离相同。 曲面在该球体上的位置可以通过两个角度来控制，这两个角度可以左右旋转，也可以向上和向下旋转。</p>

     <p class="code1">
        <span class="gray">// 在你的左侧旋转一个90度的平面</span> <br/>
        leftPanel.setAngle(<br/>
        &nbsp;&nbsp;-Math.<span class="green">PI</span>  / <span class="red">2</span>, <span class="gray">/* 水平角度 */ </span> <br/>
        &nbsp;&nbsp; <span class="red">0</span>, <span class="gray">/* 垂直角度 */ </span> <br/>
        );
        <br/>
        <span class="gray">// 在水平面下旋转一个30度的平面</span> <br/>
        lowPanel.setAngle(<br/>
        &nbsp;&nbsp; <span class="red">0</span>, <span class="gray">/* 水平角度 */ </span> <br/>
        &nbsp;&nbsp;-Math.<span class="green">PI</span>  / <span class="red">6</span>, <span class="gray">/* 垂直角度 */ </span> <br/>
        );
        <br/>
        <span class="gray">// 向右移动45度，向上移动45度</span> <br/>
        highPanel.setAngle(<br/>
        &nbsp;&nbsp;Math.<span class="green">PI</span>  / <span class="red">4</span>, <span class="gray">/* 水平角度 */ </span> <br/>
        &nbsp;&nbsp;Math.<span class="green">PI</span>  / <span class="red">4</span>, <span class="gray">/* 垂直角度 */ </span> <br/>
        );
    </p>
    <h4>渲染到曲面</h4>

    <p class="mt20">曲面就是把2D的内容渲染到3D空间中，为了把React组件依附到曲面上，必须用AppRegistry注册，在你的index.js的文件的底部，你会发现下面一行代码：</p>
    <p class="code1">
       AppRegistry.registerComponent(<span class="red">'MyAppName'</span>, () => MyAppName);<br/>
    </p>
    <p class="mt20">这告诉运行时可以通过此字符串ID标识您的组件。 在client.js中可以找到将React组件附加到应用程序表面的相应代码。</p>
    <p class="code1">
       r360.<span class="red">'renderToSurface'</span>(<br/>
       &nbsp;&nbsp;r360.createRoot(<span class="red">'MyAppName'</span>),<br/>
       &nbsp;&nbsp;r360.getDefaultSurface() <br/>
       );
    </p>
    <p class="mt20">这指示运行时将我们上面引用的组件附加到应用程序的默认表面。 这个默认表面只是一个已经为你创建的Surface实例 - 你可以像上面描述的Surface一样改变它。 您也可以创建自己的表面并向其呈现React组件，只要该React组件已添加到<span class="graybg">AppRegistry</span>即可。</p>

    <h4>修改一个曲面</h4>
    <p class="mt20">您可以更改已创建的Surface的属性，从而允许您动态地重新整形和调整其大小。 要更改形状，请在现有曲面上调用<span class="graybg">setShape（newShape）</span> - 它使用创建时使用的相同<span class="graybg">SurfaceShape</span>常量。 要更改曲面的高度和宽度，可以调用<span class="graybg">resize（newWidth，newHeight）</span>。 最常见的用法是在初始化时修改默认表面。</p>
    <p class="code1">
        <span class="gray">// 把默认的曲面修改成200*200的大小</span> <br/>
       const s = r360.getDefaultSurface();<br/>
       s.setShape(Surface.SurfaceShape.Flat);<br/>
       s.resize(<span class="red">200</span>,<span class="red"> 200</span>);
    </p>
    <h4>用多个曲面</h4>

    <p class="mt20">有时您需要在应用中添加多个曲面，例如在用户周围安排一系列平板。 如果您使用AppRegistry注册多个React组件，则可以将每个组件附加到不同的表面。 您还可以将同一组件的多个副本放到不同的表面 - 在渲染逻辑相同时很有用，但传递给每个表面的初始属性是不同的。</p>
    <p class="code1">
      <span class="gray">// 挂载不同的组件到不同的曲面上</span> <br/>
       r360.<span class="red">'renderToSurface'</span>(<br/>
       &nbsp;&nbsp;r360.createRoot(<span class="red">'ComponentOne'</span>),<br/>
       &nbsp;&nbsp;firstSurface, <br/>
       );<br/>
       r360.<span class="red">'renderToSurface'</span>(<br/>
       &nbsp;&nbsp;r360.createRoot(<span class="red">'ComponentTwo'</span>),<br/>
       &nbsp;&nbsp;secondSurface, <br/>
       );<br/>

      <span class="gray">// 挂载相同的组件到不同的曲面上</span> <br/>
       r360.<span class="red">'renderToSurface'</span>(<br/>
       &nbsp;&nbsp;r360.createRoot(<span class="red">'SharedComponent'</span>),<br/>
       &nbsp;&nbsp;firstSurface, <br/>
       );<br/>
       r360.<span class="red">'renderToSurface'</span>(<br/>
       &nbsp;&nbsp;r360.createRoot(<span class="red">'SharedComponent'</span>),<br/>
       &nbsp;&nbsp;secondSurface, <br/>
       );<br/>
    </p>
    <p class="mt20">在此设置中，如何在不同的React组件之间共享数据？ 它们在共享的JavaScript环境中运行，因此任何全局存储（例如Redux）都在所有组件之间共享。 您可以使用此技术在应用的不同2D和3D方面之间同步数据。 在<a href="https://facebook.github.io/react-360/docs/example-multisurface.html" target="_blank">多表面示例</a>中演示了此版本。</p>

  </div>
</template>

<script>
export default {
  name: "surfaces",
  mounted() {
    document.title = "曲面";
  }
};
</script>

<style lang='less'>
@import "../styles/mixin";
</style>
