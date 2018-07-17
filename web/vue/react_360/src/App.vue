<template>
  <div id="app">
    <Header msg="Welcome to Your Vue.js App"/>
    <div class="app_header_container" >
      <Nav v-show="!isChnage || showBig"/>
      <div>
        <div class="smallView"  v-show="isChnage" :class="isChnage? 'mt3' : 'mt0'" @click="showBigNav">
          <img src="./assets/arrow.png" class="navImg"/>
          <span class="smallText"> / {{this.title}}</span>
        </div>
        <router-view/>
      </div>

    </div>
  </div>
</template>

<script>
import Header from "./components/header.vue";
import Nav from "./components/nav/nav.vue";
export default {
  name: "app",
  components: {
    Header,
    Nav
  },
  data() {
    return {
      isChnage: false,
      showBig: false,
      title: document.title
    };
  },
  watch: {
    //监听路由
    $route(to, from) {
      this.title = to.name;
      if (this.showBig) {
        this.change(true);
        this.showBig = false;
      }
      // console.log(to);
      // console.log(from);
    }
  },
  methods: {
    change(isreturn) {
      this.isChnage = isreturn;
    },
    showBigNav() {
      this.showBig = !this.showBig;
    },
    isMobile() {
      let flag = navigator.userAgent.match(
        /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
      );
      return flag;
    }
  },
  mounted() {
    if (this.isMobile()) {
      this.change(true);
      return;
    }
    window.addEventListener("resize", () => {
      if (window.innerWidth < 783) {
        this.change(true);
      } else {
        this.change(false);
      }
    });
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.app_header_container {
  display: flex;
  flex-direction: row;
}
.mt3 {
  margin-top: 3rem;
}
.mt0 {
  margin-top: 0rem;
}
.smallView {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.smallText {
  margin-left: 0.5rem;
  line-height: 3rem;
  font-size: 2rem;
}
.navImg {
  width: 3rem;
  height: 3rem;
}
</style>
