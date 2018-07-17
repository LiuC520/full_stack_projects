<template>
  <div class="containerFloatLeft">
    <h2 class="h2">环境</h2>
    <p class="mt20">环境是用来改变场景背景的，像<span class="goto"  @click="tophotosvideos">360度照片和视频</span> 中描述的那样</p>
    <p class='code1'>
      Environment.setBackgroundImage(asset(<span class="red">'city-pano.jpg'</span>), {<br/>
        format: <span class="red">'3DTB'</span>,<br/>
      });<br/>
    </p>
    <h4>方法</h4>
    <p class='graybg'>clearBackground()</p>
    <p class="mt20">回退当前背景到黑色。</p>

    <p class='graybg'>setBackgroundImage(url: {uri: string}, options?: Object)</p>
    <p class="mt20">使用<span class="graybg">uri</span>对象或<span class="graybg">asset（）</span>将当前背景图像设置为指定资源。 options对象是可选的，并支持以下字段：</p>
    <ol>
      <li><span class="graybg">format</span>-像<span class="goto"  @click="tophotosvideos">360度照片和视频</span>中的格式一样，'2D' | '3DTB' | '3DBT' | '3DLR' </li>
    </ol>
    <p class='graybg'>setBackgroundVideo(handle: string)</p>
    <p class="mt20">将当前背景设置为视频，由指定的句柄引用。 必须先将视频播放器初始化，然后才能将其设置为背景。</p>
    <p class='code1'>
        VideoModule.createPlayer(<span class="red">'myplayer'</span>);<br/>
       <span class="gray"> // Play a specific video</span><br/>
        VideoModule.play(<span class="red">'myplayer'</span>, {<br/>
          &nbsp; source: {url: staticResourceURL(<span class="red">'path/to/video.mp4'</span>)}, <span class="gray">// provide the path to the video</span><br/>
           &nbsp; stereo: <span class="red">'3DTB'</span>, <span class="gray">// optionally, supply the format of the video</span><br/>
        });<br/>
        <span class="gray">// Display the video on the Environment</span><br/>
        Environment.setBackgroundVideo(<span class="red">'myplayer'</span>);

    </p>
  </div>
</template>

<script>
export default {
  name: "enviroment",
  mounted() {
    document.title = "enviroment";
  },
  methods: {
    tophotosvideos() {
      this.$router.push({
        path: "photosvideos"
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
