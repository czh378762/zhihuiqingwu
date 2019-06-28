<template>
  <div class="rb_detail flex clearfix">
    <div class="rb_det">
      <div class="box-content" style="padding-bottom:0;margin-bottom:0;">
        <h6>违法内容</h6>
        <div class="el" style="padding-left: 20px;">
          <i class="ic">
            <img src="../assets/img/icon/time.png" alt>处理时间
          </i>
          <span class="infos">2019-5-5 05:26</span>
        </div>
        <div class="el" style="padding-left: 20px;">
          <i class="ic">
            <img src="../assets/img/icon/local.png" alt>违法代码
          </i>
          <span class="infos">G50沪渝高速K198(主线)</span>
        </div>
        <h6>违法内容</h6>
        <div class="els">
          <div class="el">
            <i class="ic">
              <img src="../assets/img/icon/haopaihaoma.png" alt>号牌号码
            </i>
            <span class="infos">浙HBC823</span>
          </div>
          <div class="el">
            <i class="ic">
              <img src="../assets/img/icon/common.png" alt>号牌种类
            </i>
            <span class="infos">蓝</span>
          </div>
        </div>
        <div class="els els2">
          <div class="img">
            <img src="../assets/img/minjing/card-pic.png" alt >
          </div>
          <div class="el">
            <i class="ic">
              <img src="../assets/img/icon/carnum.png" alt>车身颜色
            </i>
            <span class="infos">黑</span>
          </div>
        </div>
        <div class="els">
          <div class="el">
            <i class="ic">
              <img src="../assets/img/icon/carstatus.png" alt>车辆状态
            </i>
            <span class="infos">无数据</span>
          </div>
          <div class="el">
            <i class="ic">
              <img src="../assets/img/icon/common.png" alt>车辆类型
            </i>
            <span class="infos">小型客车</span>
          </div>
        </div>
        <div class="els">
          <div class="el">
            <i class="ic">
              <img src="../assets/img/icon/time.png" alt>年审期限
            </i>
            <span class="infos">2010-3-10</span>
          </div>
          <div class="el">
            <i class="ic">
              <img src="../assets/img/icon/common.png" alt>车辆平台
            </i>
            <span class="infos">奥迪</span>
          </div>
        </div>
      </div>
    </div>
    <div class="line"></div>
    <div class="rb_det">
      <h6>当事人</h6>
      <div class="rightcontent">
        <div class="image-wrapper">
          <img src="../assets/img/minjing/p2.png" alt>
        </div>
        <div class="p_cont">
          <div class="el">
            <i class="ic">
              <img src="../assets/img/icon/usrname.png" alt>
            </i>
            <span class="info-label">车辆所有人</span>
            <span class="infos">赵东东</span>
            <i class="ic">
              <img src="../assets/img/icon/girl.png" alt>
            </i>
          </div>
          <div class="el">
            <i class="ic">
              <img src="../assets/img/icon/idcard.png" alt>
            </i>
            <span class="info-label">身份证证件号</span>
            <span class="infos">320223199612031526</span>
          </div>
          <div class="el">
            <i class="ic">
              <img src="../assets/img/icon/tel2.png" alt>
            </i>
            <span class="info-label">联系方式</span>
            <span class="infos">321312312</span>
          </div>
          <div class="el">
            <i class="ic">
              <img src="../assets/img/icon/cardnumber.png" alt>
            </i>
            <span class="info-label">驾驶证档案编号</span>
            <span class="infos">321312312</span>
          </div>
          <div class="el">
            <i class="ic">
              <img src="../assets/img/icon/haopaihaoma.png" alt>
            </i>
            <span class="info-label">准驾车型</span>
            <span class="infos">C2</span>
          </div>
          <div class="el">
            <i class="ic">
              <img src="../assets/img/icon/time.png" alt>
            </i>
            <span class="info-label">积分情况</span>
            <span class="infos">0分</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "fqw",
  components: {},
  data() {
    return {};
  }
};
</script>
<style lang="scss" scoped>
.rb_detail {
  width: 100%;
  height: 100%;
  padding: 20px;
  .line {
    width: 1px;
    height: 100%;
    background: linear-gradient(
      0deg,
      rgba(7, 33, 62, 1) 0%,
      rgba(73, 175, 208, 1) 28.000000000000004%,
      rgba(110, 103, 232, 1) 71%,
      rgba(19, 35, 77, 1) 100%
    );
    margin: 0 30px 0 0;
  }
  .rb_det {
    flex: 1;
    height: 100%;
    .box-content {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    .rightcontent {
      width: 100%;
      height: calc(100% - 34px);
      margin-top: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        display: block;
      }
      .ic {
        margin-right: 10px;
        &:last-child {
          margin-right: 0;
          margin-left: 10px;
        }
        img {
          margin-right: 0;
        }
      }
      .info-label {
        width: 100px;
      }
      .p_cont {
        height: 100%;
        display: flex;
        justify-content: space-between;
        flex-direction: column;
      }
    }
  }
  h6 {
    font-size: 14px;
    color: #ffcc66;
    height: 14px;
    line-height: 14px;
  }
  .image-wrapper {
    width: 100px;
    margin-right: 50px;
    img {
      width: 100px;
    }
  }
  .ic {
    margin-right: 6px;
    font-size: 13px;
    color: #03d8ea;
    display: inline-block;
    img {
      margin-right: 10px;
    }
  }
  .els2 {
    height: 27px;
    .el {
      margin-bottom: 0;
    }
  }
  .els {
    display: flex;
    width: 100%;
    align-items: center;
    padding-left: 20px;
    .img {
      flex: 1;
      height: 27px;
    }
    .el {
      flex: 1;
      margin-bottom: 0;
    }
  }
  .el {
    // margin-top: 13px;
    display: flex;
    align-items: center;
    height: 18px;
    i {
      display: flex;
      height: 18px;
      line-height: 18px;
      align-items: center;
      margin-right: 15px;
    }
    span {
      line-height: 18px;
    }
  }
  .infos {
    font-size: 14px;
    display: inline-block;
    color: rgba(255, 255, 255, 1);
  }
  .info-label {
    font-size: 13px;
    display: inline-block;
    font-weight: 400;
    margin-right: 7px;
    color: rgba(3, 216, 234, 1);
  }
}
</style>
