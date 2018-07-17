<template>
  <div>
    <div>
      <EachNav class="nav" ref="nav"
      v-for="(value,key,index) in Data"
      :key="index"
      :title="value.title"
      :subTitles="value.each"
      />
    </div>
  </div>

</template>

<script>
import EachNav from "./eachNav.vue";
import Data from "./nav";

export default {
  name: "Nav",
  components: {
    EachNav
  },
  data() {
    return {
      Data: Data,
      changeStyle: "flex-end",
      rightWidth: "250px" //最小宽度
    };
  },
  methods: {},
  mounted() {}
};
</script>

<style lang='less'>
.nav {
  margin-right: 3rem;
  max-width: 240px;
}
</style>
