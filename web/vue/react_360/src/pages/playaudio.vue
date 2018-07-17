<template>
  <div class="containerFloatLeft">
    <h2 class="h2">播放音频</h2>
    <p class="mt20">React 360为您提供了多种播放音频的方式，包括背景音乐，单声道音效和多声道音频。 所有音频播放都通过<span class="graybg">AudioModule</span>进行控制。</p>
    <h4>背景音乐</h4>
    <p class="mt20">背景音乐用于在您的应用中产生背景噪音：音乐，熙熙攘攘的城市噪音，湍急的水，或其他任何可以确定您场景情绪的东西。</p>
    <p class="mt20">
      <span class="graybg">AudioModule</span>
      提供了一个
      <span class="graybg">playEnvironmental() </span>
      方法来触发背景音乐，默认情况下，背景音乐是循环播放的。
    </p>
    <p class="mt20">
      <span class="graybg">playEnvironmental() </span>
      有一个可配置的包含下面的2个参数的obejct
      <ol>
        <li><span class="graybg">source</span>-音频的路径</li>
        <li><span class="graybg">volume</span>-音量，从0到1</li>
      </ol>
    </p>
    <p class="mt20">一旦背景音乐开始，你可以通过
      <span class="graybg">AudioModule.setEnvironmentalParams() </span>
      方法改变播放参数，也有一个可配置的包含下面参数的obejct
      <ol>
        <li><span class="graybg">loop</span>-循环</li>
        <li><span class="graybg">muted</span>-音频是否静音，当设置成不静音，会恢复到静音前的音量</li>
        <li><span class="graybg">volume</span>-音量，从0到1</li>
        <li><span class="graybg">fadeTime</span>-音量的平滑过渡的时间间隔，毫秒为单位</li>
      </ol>
    </p>
    <p class="mt20">
      背景音乐可以通过
      <span class="graybg">playEnvironmental() </span>
      来停止。
    </p>
    <p class="mt20">
      一次只有一个背景音乐触发播放，如果背景音乐已经播放了，你可以再次用
      <span class="graybg">playEnvironmental </span>
      ，这会取消前面的音乐，然后播放下一个。
    </p>
    <p class="code1" v-cloak>
        <span class="gray">// 播放背景音乐</span> <br/>
        import {asset, NativeModules} from '<span class="red">react-360</span>';<br/>
        const {AudioModule} = NativeModules;<br/>

        AudioModule.playEnvironmental({<br/>
          &nbsp;&nbsp; source: asset(<span class="red">'path/to/audio.mp3'</span>),<br/>
          &nbsp;&nbsp; volume:<span class="red"> 0.3</span>,<span class="gray"> // play at 3/10 original volume</span><br/>
        });
    </p>
    <h4>音效</h4>
    <p class="mt20">要播放一次声音，例如单击按钮时，可以使用<span class="graybg">lAudioModule.playOneShot（）</span>。 一次性音频意味着简单且无配置，通过单个方法调用加载和播放音频。 一旦一次性音频开始，就无法停止。 播放这些声音效果时，<span class="graybg">lplayOneShot（）</span>接受一个包含以下值的配置对象：</p>
    <ol>
      <li><span class="graybg">source</span>-音频的路径</li>
      <li><span class="graybg">volume</span>-音量，从0到1</li>
    </ol>

    <p class="code1" v-cloak>
      import {asset, NativeModules, VrButton} from 'react-360'; <br/>
      const {AudioModule} = NativeModules; <br/>

      // Play a sound when the button is clicked <br/>
      &lt;VrButton <br/>
        &nbsp;&nbsp; onClick={() => { <br/>
          &nbsp;&nbsp; &nbsp; AudioModule.playOneShot({ <br/>
            &nbsp;&nbsp; &nbsp;&nbsp; source: asset('click.wav'), <br/>
          &nbsp;&nbsp; &nbsp; }); <br/>
        &nbsp;&nbsp; &nbsp; }}> <br/>
        &nbsp;&nbsp; { /* ... */ } <br/>
      &lt;/VrButton> <br/>
    </p>
    <h4>指定和控制音频</h4>
    <p class="mt20"><span class="graybg">playOneShot</span>是一种触发单个声音效果的简单方法，但它不能让您控制声音的生命周期。 使用AudioModule上提供的其他方法，您可以预先加载声音，播放和暂停它们，并在它们开始后控制它们的播放参数。</p>
    <h5>创建音频</h5>
    <p class="mt20">首先需要创建一个音频实例。</p>
    <p class="mt20"><span class="graybg">AudioModule.createAudio(handle: string, options: AudioOptions)</span>创建一个指定名字和配置的音频实例，可配置的参数如下：</p>
    <ol>
        <li><span class="graybg">source</span>-音频的路径</li>
        <li><span class="graybg">autoPlay</span>-音频加载完毕是否自动播放</li>
        <li><span class="graybg">is3d</span>-音频是否是立体的，并且听起来好像它位于相对于用户的特定位置</li>
        <li><span class="graybg">muted</span>-静音与否</li>
        <li><span class="graybg">volume</span>-音量，从0到1</li>
        <li><span class="graybg">loop</span>-循环云否</li>
    </ol>
    <h5>控制音频</h5>


    <p class="mt20">一旦音频实例创建，它的配置和回调都可以通过它的句柄来控制。音频模块支持下面的方法来控制音频实例</p>
    <ol>
        <li><span class="graybg">setParams(handle: string, options: AudioPlayOptions)</span>-音频创建后的配置，参数如下：
          <ol>
              <li><span class="graybg">muted</span>-静音与否</li>
              <li><span class="graybg">loop</span>-循环云否</li>
              <li><span class="graybg">volume</span>-音量，从0到1</li>
              <li><span class="graybg">fadeTime</span>-音量的平滑过渡的时间间隔，毫秒为单位</li>
              <li><span class="graybg">position</span>-一个三元素数组，指定音频的位置，如果它是在<span class="graybg">is3d</span>设置为true的情况下创建的。 这将在下面的部分中进一步讨论。</li>
          </ol>
        </li>
        <li><span class="graybg">play(handle: string, options: AudioPlayOptions)</span>-开始播放音频，参数和上面的<span class="graybg">setParams</span>一样</li>
        <li><span class="graybg">stop(handle: string)</span>-停止播放</li>
        <li><span class="graybg">destroy(handle: string)</span>-销毁音频实例，清理依赖的资源文件</li>
    </ol>
    <h5>放置音频，指定位置</h5>

    <p class="mt20">使用<span class="graybg">is3d</span>设置为true创建的音频可以放置在虚拟世界中。 当用户在场景中移动和旋转时，音频将显示为从空间中的特定位置播放。 您可以在调用<span class="graybg">setParams</span>或<span class="graybg">play</span>时使用<span class="graybg">position</span>属性设置此位置。 此属性是一个三元素数组，指定声音的绝对x，y和z坐标。</p>

    <p class="code1" v-cloak>
      import {asset, NativeModules} from <span class="red">'react-360'</span>;<br/>
      const {AudioModule} = NativeModules;<br/>

       <span class="gray">// 在用户右侧3米的位置播放音频 (x轴 3米)</span><br/>
      AudioModule.createAudio( <span class="red">'bird'</span>, {<br/>
        &nbsp; &nbsp; source: asset( <span class="red">'chirp.mp3'</span>),<br/>
        &nbsp; &nbsp; is3d: <span class="green"> true</span>,<br/>
      });<br/>
      AudioModule.play( <span class="red">'bird'</span>, {<br/>
        &nbsp; &nbsp; position: [ <span class="red">3</span>,  <span class="red">0</span>,  <span class="red">0</span>],<br/>
      });
    </p>


  </div>
</template>

<script>
export default {
  name: "playaudio",
  mounted() {
    document.title = "播放音频";
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
