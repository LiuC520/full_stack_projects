<template>
  <div class="each_nav_left" ref="left">
    <p class="each_nav_title">{{title}}</p>
    <p class="each_nav_subtitle" v-for="(value, key,index) in subTitles" :key="value.key" @click="onClick(value.key)">{{value.title}}</p>
  </div>
</template>

<script>
export default {
  name: "EachNav",
  props: {
    title: String,
    subTitles: Array
  },
  methods: {
    onClick(key) {
      this.$router.push({ path: key, query: { key: key } });
    }
  }
};
</script>

<style lang='less'>
.each_nav_left {
  max-width: 240px;
  min-width: 240px;
}

.each_nav_title {
  background-color: rgb(21, 23, 26);
  margin-bottom: 0;
  padding-left: 0.5rem;
  height: 4rem;
  color: white;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
}

.each_nav_subtitle {
  margin: 0;
  background-color: rgb(217, 217, 217);
  padding-left: 0.5rem;
  height: 4rem;
  color: black;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
}
</style>
