<template>
    <div class="weifa-wp">
        <h6>违法处理</h6>
        <ul class="wf clearfix">
            <li>
                <img src="../assets/img/iconImg/point.png" alt="">
                <p>-</p>
            </li>
            <li>
                <img src="../assets/img/iconImg/point.png" alt="">
                <p>处理车辆<span>{{weifaData.carCount}}</span>辆</p>
            </li>
            <li>
                <img src="../assets/img/iconImg/point.png" alt="">
                <p>处理违法次数<span>{{weifaData.handleTimes}}</span>次</p>
            </li>
            <li>
                <img src="../assets/img/iconImg/point.png" alt="">
                <p>累计处理分值<span>{{weifaData.card}}</span>分</p>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  props: {
    weifaData: {
      type: Object,
      default() {
        return {
          time: "",
          handleTimes: 0,
          carCount: 0,
          card: 0
        };
      }
    }
  },
  name: "weifa",
  components: {},
  data() {
    return {};
  },
  mounted() {
    console.log(this.weifaData);
  }
};
</script>
<style lang="scss" scoped>
.weifa-wp {
  h6 {
    color: #ffcc66;
    font-size: 14px;
  }
  .wf {
    padding: 0 0 10px 20px;
    border-bottom: solid 1px #366492;
    padding-top: 20px;
    li {
      float: left;
      width: 35%;
      display: flex;
      align-items: center;
      margin-bottom: 20px;
      &:nth-child(3) {
        margin-bottom: 10px;
      }
      &:nth-child(4) {
        margin-bottom: 10px;
      }
      img {
        display: block;
        margin-right: 20px;
      }
      p {
        display: inline-block;
        font-size: 14px;
        color: #ffffff;
        line-height: 16px;
        span {
          font-size: 18px;
          color: #ffcc66;
          display: inline-block;
          margin: 0 5px;
          line-height: 16px;
        }
      }
    }
  }
}
</style>
