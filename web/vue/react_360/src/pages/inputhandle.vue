<template>
  <div class="containerFloatLeft">
    <h2 class="h2">输入控制</h2>
    <p class="mt20">您的用户通过各种设备体验您的应用，每种设备都有自己的输入配置。 React 360旨在支持这种硬件多样性，使您可以专注于应用程序的逻辑，而不是特殊的外壳不同输入。。</p>
    <h4>按钮输入</h4>
    <p class="mt20">用户与应用程序交互的最常用方法是按下物理按钮：键盘按键，鼠标单击，游戏手柄按钮或类似按钮。 React 360旨在收集来自各种设备的输入，并以易于使用的格式将其发送到您的React代码。 当您创建新的React 360应用程序时，它已配置为从鼠标，触摸屏，键盘或游戏手柄收集输入。 要在React中开始处理事件，请将onInput回调添加到其中一个组件。 当光标位于您的组件上并且用户触发输入事件时，它将被发送到该回调。</p>

    <p class="code1" v-cloak>
      &lt;View onInput={e => {<br/>
        const event = e.nativeEvent; <span class="gray">// 从运行时事件中提取值包含实际的有效事件，以及有关用户正在使用哪个光标以及针对哪个React标记的信息</span><br/>
        const inputEvent = event.inputEvent;<span class="gray"> // 提取有效负载inputEvent.button是原始按钮索引，用于确定按下的内容inputEvent.buttonClass是添加到某些按钮的字段，用于常见操作，如“确认”，“返回”，“向上”，“向下”等 .inputEvent.action是'up'，'down'或'repeat'inputEvent.source标识按钮设备，如键盘，鼠标等</span><br/>
      }}><br/>
        { /* ... */ }<br/>
      &lt;/View>
    </p>
    <p class="mt20">
      开箱即用，React 360支持从四个常用界面收集输入：鼠标，触摸屏，键盘和游戏手柄。 在其中四个之间，应涵盖大多数用户输入系统。 这些输入系统本身具有高度可配置性，可以扩展或覆盖以与您的应用程序行为保持一致。 例如，Gamepad界面设计用于处理传统游戏手柄和跟踪的VR输入。 它包含常用输入的预设，例如Xbox控制器，Oculus Touch设备，Oculus Go控制器和Microsoft混合现实控制器。 它还允许您定义自己的自定义映射，以防您要覆盖预设或添加对新设备的支持。
    </p>
    <p class="mt20">如果您想在每次按下确认按钮时捕获，它将按如下方式实现：</p>
    <p class="code1" v-cloak>


      onInput={e => {<br/>
        const inputEvent = e.nativeEvent.inputEvent;<br/>
        if (inputEvent.action === <span class="red">'down'</span> && inputEvent.buttonClass ===<span class="red"> 'confirm'</span>) {<br/>
          <span class="gray">&nbsp; // do something</span><br/>
        }<br/>
      }}<br/>
    </p>
    <h5>VrButton 点击</h5>
    <p class="mt20">输入事件允许您响应原始信号，但是您经常希望响应正在按下和释放的确认键，表示单击事件。 我们提供了一个组件，其中包含跟踪这些复杂事件所需的状态机逻辑：<span class="graybg">VrButton</span>。 除了现有的<span class="graybg">onEnter</span>，<span class="graybg">onExit</span>和<span class="graybg">onInput</span>处理程序之外，VrButton还提供了<span class="graybg">onClick</span>事件处理程序。 当光标放在VrButton上，并且在任何输入设备上按下并释放确认类型按钮时，将触发此回调。 VrButtons是在您的应用中构建点击驱动效果的最简单方法。 因为它们包含通用逻辑，所以它们没有自己的任何样式。 您可以根据需要制作VrButton外观，或将其与某些进入和退出高亮效果组合以为您的应用程序创建自定义可视Button组件。</p>
    <h4>Cursors</h4>
    <p class="mt20">输入，退出和输入事件将根据光标指向的位置发送到React。 光标也是高度可配置的，以支持多种输入方案。 开箱即用，React 360支持鼠标和触摸输入，以及3DoF和6DoF VR控制器。 这些输入通过将虚拟激光束投射到屏幕中来工作 - 光束被绘制在光束与场景元素相交的位置。</p>
    <p class="mt20">组件可以使用<span class="graybg">onEnter</span>和<span class="graybg">onExit</span>回调来监听进入和退出事件。 当光标开始与元素相交时，将触发其<span class="graybg">onEnter</span>处理; 当光标稍后离开元素时，将调用其<span class="graybg">onExit</span>处理。</p>
    <p class="mt20">目前，光标按照注册的顺序进行测试，成功返回光线的第一个光标将用于确定光标的位置。 React 360的未来迭代将为使用Oculus Touch等双手输入的用户启用多个光标。</p>
    <h5>自定义射线</h5>
    <p class="mt20">如果要实现自己的光标系统，则需要构建一个<strong>Raycaster</strong> - 一段可以连续告诉应用程序虚拟激光束所在的位置的代码。 射线束必须实现此处描述的<a href="https://github.com/facebook/react-360/blob/master/React360/js/Controls/Types.js" target="_blank">特定接口</a>。</p>
    <p class="mt20">最简单的是，Raycasters描述了与场景相交的3D射线：射线投射的起点和方向。 通过<span class="graybg">fillOrigin</span>和<span class="graybg">fillDirection</span>方法每帧收集此信息。 这些都采用3元素数组作为参数，并可选择用当前原点位置或方向（作为三维向量）填充它。 如果已插入值，则返回true; 否则，他们返回false。 这些方法填充预先分配的数组，而不是创建新的数组，以避免不断创建新的JS对象。</p>
    <p class="mt20">根据您的输入数据，您的射线可能相对于相机（例如使用鼠标光标）或绝对世界坐标（如控制器射线中所示，它从Gamepad API获取绝对位置）。 Raycasters实现了一个<span class="graybg">hasAbsoluteCoordinates（）</span>方法，该方法返回一个布尔值，告诉Runtime方向和方向是绝对的还是相对于相机的。 如果它返回false，则在React 360使用之前，光线数据将被转换为相机的参照系。</p>
  </div>
</template>

<script>
export default {
  name: "inputhandle",
  mounted() {
    document.title = "输入控制";
  }
};
</script>

<style lang='less'>
@import "../styles/mixin";
</style>
