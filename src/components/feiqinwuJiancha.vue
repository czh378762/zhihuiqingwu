<template>
    <div class="jiancha flex">
        <div class="lf">
            <h6 style="margin-bottom:20px;">核录内容</h6>
            <div class="el flex">
                <div class="info flex-align-top flex flex-align-center">
                    <img class="ic" src="../assets/img/icon/idcard.png" alt="">     
                    <span class="info-label">核录地点</span>
                </div>
                <span class="infos">G50沪渝高速K198 (主线)沪渝高速</span>
            </div>
            <div class="el flex">
               <div class="info flex-align-top flex flex-align-center">
                    <img class="ic" src="../assets/img/icon/idcard.png" alt="">
                    <span class="info-label">事故地点</span>  
                </div>
                <span class="infos">G50沪渝高速K198(主线)</span>
            </div>
            <div class="el flex">
                <div class="info flex-align-top flex flex-align-center">
                    <img class="ic" src="../assets/img/icon/idcard.png" alt="">
                    <span class="info-label">事故内容</span>    
                </div>
                <span class="infos">位于泸定县城南面17公里处的 杵坭乡，比邻大渡河，平均海 拔1310米，年均气温15.5℃</span>
            </div>
            <div class="el flex">
                <div class="info flex-align-top flex flex-align-center">
                    <img class="ic" src="../assets/img/icon/idcard.png" alt="">
                    <span class="info-label">身份证证件号</span> 
                </div>
                <span class="infos">320223199612031526</span>
            </div>
        </div>
        <div class="rg flex1">
            <div class="box_back">
                <div class="rg_cont flex">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "feiqinwujiancha",
  components: {},
  data() {
    return {};
  }
};
</script>
<style lang="scss" scoped>
.shigu {
  h6 {
    font-size: 14px;
    color: #ffcc66;
  }
  .lf {
    width: 310px;
    .info {
      min-width: 130px;
    }
  }
  .el {
    margin-bottom: 8px;
  }
  .infos {
    font-size: 14px;
    color: #ffffff;
    line-height: 22px;
  }
  .ic {
    margin-right: 10px;
  }
  .info-label {
    font-size: 14px;
    color: #03d8ea;
  }
  .rg {
    margin-left: 50px;
    > div {
      border: 1px solid #4266af;
      height: 100%;
      position: relative;
    }
  }
}
</style>
