<template>
    <div class="weifa-wp">
        <h6>违法处理</h6>
        <ul class="wf clearfix">
            <li>
                <img src="../assets/img/icon/weifa.png" alt="">
                <p>2019年4月6日 至 2019年5月5日</p>
            </li>
            <li>
                <img src="../assets/img/icon/weifa.png" alt="">
                <p>处理车辆<span>5</span>辆</p>
            </li>
            <li>
                <img src="../assets/img/icon/weifa.png" alt="">
                <p>处理违法次数<span>4</span>次</p>
            </li>
            <li>
                <img src="../assets/img/icon/weifa.png" alt="">
                <p>累计处理分值<span>13</span>分</p>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  name: "weifa",
  components: {},
  data() {
    return {};
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
    li {
      float: left;
      width: 35%;
      margin: 10px 0;
      img {
        display: inline-block;
        margin-right: 20px;
      }
      p {
        display: inline-block;
        font-size: 14px;
        color: #ffffff;
        span {
          font-size: 18px;
          color: #ffcc66;
          display: inline-block;
          margin: 0 5px;
        }
      }
    }
  }
}
</style>
