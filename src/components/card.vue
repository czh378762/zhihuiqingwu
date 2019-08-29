<template>
  <div class="platBox">
    {{platNum}}
  </div>
</template>

<script>
export default {
  name: "card",
  props: ["platNum"]
};
</script>

<style lang="scss" scoped>
.platBox {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  background: #0a5eef;
  border-radius: 1px;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
  color: #fff;
  letter-spacing: 2px;
  padding-left: 2px;
}
</style>
