<template>
  <div id="all-wp">
    <bigmap></bigmap>
    <pagetop></pagetop>
    <handlebanner></handlebanner>
    <router-view></router-view>
  </div>
</template>
<script>
import bigmap from "@/components/bigmap";
import handlebanner from "@/components/handlebanner";
import pagetop from "@/components/pagetop";
export default {
  name: "home",
  components: {
    bigmap,
    pagetop,
    handlebanner
  },
  data() {
    return {};
  }
};
</script>
<style lang="scss">
#all-wp {
  position: absolute;
  height: 100%;
  width: 100%;
  // overflow: hidden;
  .allmap {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
  }
}
* {
  box-sizing: border-box;
}
.flex {
  display: flex;
}
.flex-align-center {
  align-items: center;
}
.flex1 {
  flex: 1;
}
.flex-align-top {
  align-items: flex-start;
}
</style>
