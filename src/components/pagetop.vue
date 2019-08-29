<template>
    <div class="pagetop-wp">
        <span class="tit">{{$route.meta.title}}</span>
    </div>
</template>

<script>
export default {
  name: "pagetop",
  data() {
    return {};
  }
};
</script>
<style lang="scss" scoped>
.pagetop-wp {
  z-index: 1;
  text-align: center;
  padding: 7px 0 38px;
  position: fixed;
  width: 100%;
  top: 0;
  background-image: url("../assets/img/headerImg/top-bg.png");
  background-position: center;
  background-repeat: no-repeat;
}
.tit {
  color: #fff;
  font-size: 24px;
}
</style>
