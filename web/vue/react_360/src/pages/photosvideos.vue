<template>
  <div class="containerFloatLeft">
    <h2 class="h2">360度照片和视频</h2>

    <p>React 360针对360（和180）度照片和视频的呈现进行了优化。 这些对于创建沉浸式环境至关重要，并且允许您将用户放到虚拟位置。 因为它们是交互式360体验的重要组成部分，所以有很多方法可以控制当前的背景。</p>
    <h4>支持的格式</h4>
    <h6>照片</h6>
    <ol>
      <li>360度单一equirectangular</li>
      <li>360度立体equirectangular(顶部和底部)</li>
      <li>180度单一equirectangular</li>
      <li>180度立体equirectangular(顶部和底部)</li>
      <li>180度立体equirectangular(左右)</li>
    </ol>
    <h6>视频</h6>
    <ol>
      <li>360度单一equirectangular</li>
      <li>360度立体equirectangular(顶部和底部)</li>
      <li>180度单一equirectangular</li>
      <li>180度立体equirectangular(左右)</li>
    </ol>
    <h4>展示全景照片</h4>
    <h6>从运行时（clent.js）</h6>
    <p class="code1">
      r360.compositor.setBackground(<span class="red">'./static_assets/360_world.jpg'</span>);<br/>
    </p>

    <p class="mt20">这会立即将背景设置为特定的180或360图像。 此技术的好处是可以在React bundle包下载时立即获取图像，因此您可以更快地向用户显示内容。 您还可以在运行React代码时立即替换的加载屏幕。</p>

    <p class="mt20">根据图像的尺寸，React 360会尝试自动确定格式（180或360，单声道或3D）。 但是，有些配置无法区分，因此您需要使用第二个选项参数明确指定背景图像的布局。</p>
    <p class="code1">
      r360.compositor.setBackground(<span class="red">'./static_assets/180_mono_image.jpg'</span>,<br/> &nbsp;&nbsp;format: <span class="red">'2D'</span>,<br/> });
    </p>


    <h6>单一和立体格式</h6>
    <p class="mt20">当前支持的格式如下：</p>
    <ol>
      <li><span class="graybg">'2D'</span>-单声道图像</li>
      <li><span class="graybg">'3DTB'</span>-左视口位于顶部的立体图像，右视口位于底部</li>
      <li><span class="graybg">'3DBT'</span>-左视口位于底部的立体图像，右视口位于顶部</li>
      <li><span class="graybg">'3DLR'</span>-用于左视口位于左半部分，右视口位于右侧的立体图像</li>
    </ol>
    <p class="mt20"> 使用3D背景时，只有在VR头显中观看时才能看到深度效果。 左视口将用于桌面和移动显示。 </p>

    <h6>从React</h6>

    <p class="mt20">如果你的背景是动态的，比如多房间环境，你想从React这一侧控制他，可以用Environment组件</p>
    <p class="code1">
      import {Environment} from <span class="red">'react-360'</span>;<br/>
        <span class="gray">// Set the background to a 360 or 180 image</span> <br/>

       Environment.setBackground(<br/>
       &nbsp; asset(<span class="red">'path/to/image.jpg'</span>),<br/>
       &nbsp;  {format: <span class="red">'2D'</span>},<span class="gray"> /* one of the formats mentioned above */</span><br/>
      );
    </p>

    <h4>展示全景视频</h4>
    <p class="mt20">视频全景图分为两部分：首先，创建视频播放器，然后将该播放器映射到您的环境。 视频播放与环境本身的分离使您可以控制代码库中不同位置的视频进度。</p>

    <h6>从运行时（clent.js）</h6>
    <p class="mt20">视频播放的步骤在Runtime和React应用程序中非常相似。 首先，必须创建一个视频播放器。 视频播放器以其唯一名称引用，可以在React端使用它来在播放器创建后控制播放器。</p>
    <p class="code1">
        <span class="gray">// 创建视频播放器</span> <br/>
       const player = r360.compositor.createVideoPlayer(<span class="red">'myplayer'</span>),<br/>
        <span class="gray">// 设置视频，视频格式</span> <br/>

      player.setSource(<span class="red">'path/to/video.mp4', '2D'</span>);<br/>
    </p>
    <p class="mt20">视频支持的格式与上面列出的全景照片格式相同。 创建播放器后，您可以对其进行配置并控制其播放。 Player对象支持以下方法：</p>
    <ol>
      <li><span class="graybg">play() </span>-播放</li>
      <li><span class="graybg">pause() </span>-暂停，保持之前的播放位置</li>
      <li><span class="graybg">seekTo(position: number)  </span>-找到特定时间的位置，单位是ms</li>
      <li><span class="graybg">setLoop(loop: boolean)  </span>-视频播放完毕是否可以循环播放</li>
      <li><span class="graybg">setMuted(muted: boolean)  </span>-静音与否</li>
      <li><span class="graybg">setVolume(volume: number)  </span>-设置音量，从0-1</li>
      <li><span class="graybg">destroy() </span>-清除视频清理视频资源</li>
    </ol>
    <p class="mt20">一旦视频播放器创建，源设置好了，在的环境中就可以用了</p>
    <p class="code1">
        <span class="gray">//要将视频作为背景播放，请使用其唯一ID进行引用 </span> <br/>
       r360.compositor.setBackgroundVideo(<span class="red">'myplayer'</span>);<br/>
    </p>
    <h6>从React</h6>

    <p class="mt20">要从React端创建视频播放器，请使用VideoModule。 同样，必须先设置播放器才能将其设置为环境。 创建后，可以使用Environment模块将其附加到后台。</p>
    <p class="code1">
      import {Environment, NativeModules, staticResourceURL} from <span class="red">'react-360'</span>; <br/>
      const {VideoModule} = NativeModules; <br/>


        <span class="gray">//创建播放器 </span> <br/>
        VideoModule.createPlayer(<span class="red">'myplayer'</span>);

       <span class="gray"> // 播放指定的视频</span><br/>
        VideoModule.play(<span class="red">'myplayer'</span>, {<br/>
          &nbsp;&nbsp;source: {url: staticResourceURL(<span class="red">'path/to/video.mp4'</span>)}, <span class="gray">// 视频路径</span><br/>
          &nbsp;&nbsp;stereo: <span class="red">'3DTB'</span>, <span class="gray">// 可选的，指定视频格式</span><br/>
        });<br/>
        <span class="gray">// Display the video on the Environment</span><br/>
        Environment.setBackgroundVideo(<span class="red">'myplayer'</span>);<br/>
    </p>
    <p class="mt20">你也可以再运行时里面创建视频，然后在react代码里面控制播放</p>
     <p class="code1">
        <span class="gray">//在 client.js </span> <br/>
       r360.compositor.setBackgroundVideo(<span class="red">'myplayer'</span>);<br/>
       <span class="gray">//初始化视频，但是不播放 </span> <br/>
       player.setSource(<span class="red">'path/to/video.mp4', '2D''</span>);<br/>
    </p>
     <p class="code1">
      <span class="gray">//在index.js中 </span> <br/>
       Environment.setBackgroundVideo(<span class="red">'myplayer'</span>);<br/>
       VideoModule.resume(<span class="red">'myplayer'</span>);<span class="gray">//开始播放 </span> <br/>
    </p>
    <p class="mt20"><span class="graybg">VideoModule</span>有以下的方法暴露出来：</p>
    <ol>
      <li><span class="graybg">createPlayer(handle: string) </span>-创建指定id的播放器</li>
      <li><span class="graybg">destroyPlayer(handle: string) </span>-销毁handle引用的播放器</li>
      <li><span class="graybg">play(handle: string, options: VideoOptions) </span>-在指定的播放器上播放视频，可选的参数如下：
        <ol>
          <li><span class="graybg">source</span>-这是包含视频url的对象，格式是:<span class="graybg">{url: string}</span></li>
          <li><span class="graybg">stereo </span>-可选的，指定视频的2D/3D格式的</li>
          <li><span class="graybg">volume</span>-可选的，指定视频音量，从0到1</li>
          <li><span class="graybg">muted</span>-可选的，静音与否</li>
        </ol>
      </li>
      <li><span class="graybg">pause(handle: string) </span>-暂停</li>
      <li><span class="graybg">resume(handle: string) </span>-恢复播放</li>
      <li><span class="graybg">stop(handle: string) </span>-停止，时间回到0：00</li>
      <li><span class="graybg">seek(handle: string, timeMs: number) </span>-找到指定时间内的位置进行播放</li>
      <li><span class="graybg">setParams(handle: string, options: VideoPlayOptions) </span>-设置播放器的播放回调参数，
        <ol>
            <li><span class="graybg">volume</span>-可选的，指定视频音量，从0到1</li>
            <li><span class="graybg">muted</span>-可选的，静音与否</li>
          </ol>
      </li>
    </ol>
    <h2 class="h2">清除背景</h2>

    <p class="mt20">可以移除所有的背景，退回环境成黑色的，从运行时可以把<span class="graybg">setBackground</span>设置为<span class="graybg">null</span></p>
    <p class="code1">
        r360.compositor.setBackground(<span class="green">null</span>);<br/>
      </p>
    <p class="mt20">从React侧，可以使用<span class="graybg">Environment</span>的<span class="graybg">clearBackground()</span>方法。</p>
    <p class="code1">
       import {Environment} from <span class="red">'react-360'</span>;<br/>
        <span class="gray">//消退到黑色 </span> <br/>
        Environment.clearBackground();
    </p>

  </div>
</template>

<script>
export default {
  name: "photosvideos",
  mounted() {
    document.title = "360度照片和视频";
  }
};
</script>

<style lang='less'>
@import "../styles/mixin";
</style>
