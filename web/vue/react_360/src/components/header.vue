<template>
  <div class="header" id="header"  ref="header">
    <div class="left">
      <img src="../assets/logo.svg" class="img"/>
      <span class="margin_right">React 360</span>
    </div>
    <div class="right" :class="changeStyle? 'rightContentAround': 'rightContentEnd'">
      <a class="margin_right" href='http://www.vr-react.com/oldindex.html' target='_blank'>React VR中文网</a>
      <a class="margin_right" href='https://github.com/facebook/react-vr' target='_blank'>github</a>
      <a class="margin_right" href='https://facebook.github.io/react-vr/' target='_blank'>英文版</a>
      <a class="margin_right" href='http://www.vr-react.com/forum/' target='_blank'>中文论坛</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {
    msg: String
  },

  data() {
    return {
      changeStyle: false,
      rightWidth: "250px" //最小宽度
    };
  },
  methods: {
    changeStyleFun(isreturn) {
      this.changeStyle = isreturn;
    },
    isMobile() {
      let flag = navigator.userAgent.match(
        /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
      );
      return flag;
    }
  },
  mounted() {
    let that = this;
    /**
     * 监听浏览器窗口的变化，
     * 如果头部高度大于52，就意味着已经换行了，
     * 就需要把下一行的布局变成平分宽度
     */
    if (this.isMobile()) {
      that.changeStyleFun(true);
      return;
    }
    window.addEventListener("resize", () => {
      // console.log(document.getElementById('header').clientHeight)
      if (window.innerWidth < 783) {
        if (!that.changeStyle) {
          that.changeStyleFun(true);
        }
      } else {
        if (that.changeStyle) {
          that.changeStyleFun(false);
        }
      }
    });
  }
};
</script>

<style lang='less'>
@import "../styles/mixin";
.header {
  background-color: rgb(21, 23, 26);
  min-height: 52px;
  width: 100%;
  padding-left: 0;
  margin-left: 0;
  position: fixed;
  top: 0;
  color: white;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  font-size: 2rem;
}
.margin_right {
  margin-right: 1rem;
}
.left {
  flex: 1;
  min-width: 20rem;
  display: flex;
  align-items: center;
}
.right {
  flex: 1;
  min-width: 20rem;
  max-width: 50rem;
  display: flex;
  align-items: center;
  margin-right: 1rem;
}
.rightContentEnd {
  font-size: 2rem;
  justify-content: flex-end;
  margin-bottom: 0;
  margin-top: 0;
}
.rightContentAround {
  font-size: 1rem;
  justify-content: space-around;
  margin-bottom: 0.5rem;
  margin-top: 0.5rem;
}
.img {
  width: 5rem;
  height: 100%;
}
</style>
