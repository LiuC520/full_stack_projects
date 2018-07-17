<template>
  <div class="enjoyvr containerFloatLeft" >
         <h1>示例</h1>
            <ol>
              <li ><a href="./example/ControllerDemo/" target="_blank">戳我看下：ControllerDemo <br/><img class="firstimg" src="../assets/ControllerDemo.jpeg" alt='layoutexample'/></a></li><br/>
              <li ><a href="./example/NativeModules/" target="_blank">戳我看下：NativeModules,这个讲的是获取浏览器的电池信息、改变浏览器的标题，调用浏览器的alert等等 <br/><img class="firstimg" src="../assets/NativeModules.png" alt='layoutexample'/></a></li><br/>
              <li ><a href="./example/CylindricalPanel/" target="_blank">戳我看下：CylindricalPanel <br/><img class="firstimg" src="../assets/CylindricalPanelDemo.jpeg" alt='layoutexample'/></a></li><br/>
              <li ><a href="./example/DashSample/" target="_blank">戳我看下：DashSample，这个是自定义的播放器播放特定的格式的视频 <br/><img class="firstimg" src="../assets/DashSample.png" alt='layoutexample'/></a></li><br/>
              <li ><a href="./example/ModelSample/" target="_blank">戳我看下：ModelSample <br/><img class="firstimg" src="../assets/meshexample.png" alt='meshexample'/></a></li><br/>
              <li ><a href="./example/VideoSample/" target="_blank">戳我看下：VideoSample,和DashSample一样的，只不过里面的视频格式不一样而已 <br/><img class="firstimg" src="../assets/DashSample.png" alt='layoutexample'/></a></li><br/>
              <li ><a href="./example/VideoSample360/" target="_blank">戳我看下：VideoSample360 ，这个是360度的视频哦<br/><img class="firstimg" src="../assets/VideoSample360.png" alt='layoutexample'/></a></li><br/>
              <!-- <li ><a href="./example/MultiRoot/" target="_blank">戳我看下：MultiRoot 多个文件注册入口<br/><img class="firstimg" src="../assets/multiroot.png" alt='layoutexample'/></a></li><br/> -->

              <li ><a href="./example/layoutexample/" target="_blank">戳我看下：Layout <br/><img class="firstimg" src="../assets/layoutexample.png" alt='layoutexample'/></a></li><br/>
              <li><a href="./example/meshexample/" target="_blank">戳我看下：Mesh </a><br/><img class="firstimg" src='../assets/meshexample.png' alt='meshexample'/></li><br/>
              <li ><a href="./example/cubeexample/" target="_blank">戳我看下：Cube </a><br/><img class="firstimg" src='../assets/cubeexample.png' alt='cubeexample'/></li><br/>
              <li ><a href="./example/tourexample/" target="_blank">戳我看下：Tour </a><br/><img class="firstimg" src='./../assets/tourexample.png' alt='tourexample'/></li>
          </ol>

  </div>
</template>

<script>
export default {
  name: "enjoyvr",
  mounted() {
    document.title = "react 360中文网";
  }
};
</script>

<style lang='less'>
ol {
  display: flex;
  flex-direction: column;
}

.enjoyvr {
  max-width: 920px;
}
</style>
