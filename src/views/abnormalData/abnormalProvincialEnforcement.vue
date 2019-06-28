<template>
  <div class="yichangKadian_wrap">
    <div class="top">
      <div class="top_lf">
        <img src="../../assets/img/icon/执勤执法数据.png" alt>
        省际卡点执法异常
      </div>
      <div class="select">
        <el-select v-model="value" placeholder="请选择省际卡点">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </div>
    </div>
    <div class="content clearfix">
      <div class="c_lf box_back">
        <el-collapse accordion v-model="tabName" @change="tabChange">
          <el-collapse-item title="货车未积分" name="1">
            <tables></tables>
            <pagination></pagination>
          </el-collapse-item>
          <el-collapse-item title="报警未处理" name="2"></el-collapse-item>
        </el-collapse>
      </div>
      <div class="detail_right" v-show="showTab === '1'">
        <div class="detail_top">
          <div class="curCar">
            <p class="title">当事车辆</p>
            <div class="carContent">
              <div class="common">
                <div class="el">
                  <i class="ic">
                    <img src="../../assets/img/icon/haopaihaoma.png" alt>
                  </i>
                  <span class="label">号牌号码</span>
                  <span class="infos">-</span>
                </div>
                <div class="el">
                  <i class="ic">
                    <img src="../../assets/img/icon/common.png" alt>
                  </i>
                  <span class="label">号牌种类</span>
                  <span class="infos">-</span>
                </div>
              </div>
              <div class="common2">
                <div class="img">
                  <img src="../../assets/img/minjing/card-pic.png" alt >
                </div>
                <div class="el">
                  <i class="ic">
                    <img src="../../assets/img/icon/common.png" alt>
                  </i>
                  <span class="label">车身颜色</span>
                  <span class="infos">-</span>
                </div>
              </div>
              <div class="common">
                <div class="el">
                  <i class="ic">
                    <img src="../../assets/img/icon/carstatus.png" alt>
                  </i>
                  <span class="label">车辆状态</span>
                  <span class="infos">-</span>
                </div>
                <div class="el">
                  <i class="ic">
                    <img src="../../assets/img/icon/common.png" alt>
                  </i>
                  <span class="label">车辆类型</span>
                  <span class="infos">-</span>
                </div>
              </div>
              <div class="common">
                <div class="el">
                  <i class="ic">
                    <img src="../../assets/img/icon/time.png" alt>
                  </i>
                  <span class="label">年审期限</span>
                  <span class="infos">-</span>
                </div>
                <div class="el">
                  <i class="ic">
                    <img src="../../assets/img/icon/common.png" alt>
                  </i>
                  <span class="label">车辆品牌</span>
                  <span class="infos">-</span>
                </div>
              </div>
              <div class="common3">
                <div class="el">
                  <i class="ic">
                    <img src="../../assets/img/icon/usrname.png" alt>
                  </i>
                  <span class="label">车辆所有人</span>
                  <span class="infos">-</span>
                </div>
              </div>
              <div class="common3">
                <div class="el">
                  <i class="ic">
                    <img src="../../assets/img/icon/idcard.png" alt>
                  </i>
                  <span class="label">身份证号码</span>
                  <span class="infos">-</span>
                </div>
              </div>
              <div class="common3">
                <div class="el">
                  <i class="ic">
                    <img src="../../assets/img/icon/tel.png" alt>
                  </i>
                  <span class="label">手机号码</span>
                  <span class="infos">-</span>
                </div>
              </div>
              <div class="common3">
                <div class="el">
                  <i class="ic">
                    <img src="../../assets/img/icon/tel2.png" alt>
                  </i>
                  <span class="label">联系方式</span>
                  <span class="infos">-</span>
                </div>
              </div>
            </div>
          </div>
          <div class="curPerson">
            <p class="title">当事车辆</p>
            <div class="pContent">
              <div class="img">
                <img src="../../assets/img/minjing/p2.png" alt="">
              </div>
              <div class="infoBox">
                <div class="common">
                  <div class="el">
                    <i class="ic">
                      <img src="../../assets/img/icon/usrname.png" alt>
                    </i>
                    <span class="label">当事人</span>
                    <span class="infos">-</span>
                  </div>
                </div>
                <div class="common">
                  <div class="el">
                    <i class="ic">
                      <img src="../../assets/img/icon/idcard.png" alt>
                    </i>
                    <span class="label">身份证号码</span>
                    <span class="infos">-</span>
                  </div>
                </div>
                <div class="common">
                  <div class="el">
                    <i class="ic">
                      <img src="../../assets/img/icon/tel2.png" alt>
                    </i>
                    <span class="label">联系方式</span>
                    <span class="infos">-</span>
                  </div>
                </div>
                <div class="common">
                  <div class="el">
                    <i class="ic">
                      <img src="../../assets/img/icon/cardnumber.png" alt>
                    </i>
                    <span class="label">驾驶证档案编号</span>
                    <span class="infos">-</span>
                  </div>
                </div>
                <div class="common">
                  <div class="el">
                    <i class="ic">
                      <img src="../../assets/img/icon/carnum.png" alt>
                    </i>
                    <span class="label">准驾车型</span>
                    <span class="infos">-</span>
                  </div>
                </div>
                <div class="common">
                  <div class="el">
                    <i class="ic">
                      <img src="../../assets/img/icon/time.png" alt>
                    </i>
                    <span class="label">计分情况</span>
                    <span class="infos">-</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="detail_bot">
          <div class="deal">
            <p class="title">违法处理</p>
            <div class="conBox">
              <div class="common">
                <div class="el">
                  <i class="ic">
                    <img src="../../assets/img/icon/time.png" alt>
                  </i>
                  <span class="label">处理时间</span>
                  <span class="infos">-</span>
                </div>
              </div>
              <div class="common">
                <div class="el">
                  <i class="ic">
                    <img src="../../assets/img/icon/local.png" alt>
                  </i>
                  <span class="label">处理地点</span>
                  <span class="infos">-</span>
                </div>
              </div>
            </div>
          </div>
          <div class="con">
            <p class="title">违法内容</p>
            <div class="conBox">
              <div class="common">
                <div class="el">
                  <i class="ic">
                    <img src="../../assets/img/icon/common.png" alt>
                  </i>
                  <span class="label">违法代码</span>
                  <span class="infos">-</span>
                </div>
              </div>
              <div class="common">
                <div class="el">
                  <i class="ic">
                    <img src="../../assets/img/icon/common.png" alt>
                  </i>
                  <span class="label">违法类别</span>
                  <span class="infos">-</span>
                </div>
              </div>
              <div class="common">
                <div class="el">
                  <i class="ic">
                    <img src="../../assets/img/icon/time.png" alt>
                  </i>
                  <span class="label">违法时间</span>
                  <span class="infos">-</span>
                </div>
              </div>
              <div class="common">
                <div class="el">
                  <i class="ic">
                    <img src="../../assets/img/icon/local.png" alt>
                  </i>
                  <span class="label">违法地点</span>
                  <span class="infos">-</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="c_rg" v-show="showTab === '2'">
        <div class="box-content">
          <div class="clearfix">
            <h6>当事车辆</h6>
            <el-row style="margin-left:50px">
              <el-col>
                <div class="el">
                  <i class="ic">
                    <img src="../../assets/img/icon/usrname.png" alt>号牌号码
                  </i>
                  <span class="infos">浙HBC823</span>
                  <img
                    style="width:138px;height:27px;margin:10px 0 0 30px;"
                    src="../../assets/img/minjing/card-pic.png"
                    alt
                  >
                </div>
                <div class="el">
                  <i class="ic">
                    <img src="../../assets/img/icon/usrname.png" alt>车辆状态
                  </i>
                  <span class="infos">无数据</span>
                </div>
                <div class="el">
                  <i class="ic">
                    <img src="../../assets/img/icon/tel2.png" alt>年审期限
                  </i>
                  <span class="infos">2010-3-10</span>
                </div>
              </el-col>
              <el-col>
                <div class="el">
                  <i class="ic">
                    <img src="../../assets/img/icon/cardnumber.png" alt>号牌种类
                  </i>
                  <span class="infos">蓝</span>
                </div>
                <div class="el">
                  <i class="ic">
                    <img src="../../assets/img/icon/carnum.png" alt>车身颜色
                  </i>
                  <span class="infos">黑</span>
                </div>
                <div class="el">
                  <i class="ic">
                    <img src="../../assets/img/icon/time.png" alt>车辆类型
                  </i>
                  <span class="infos">小型客车</span>
                </div>
                <div class="el">
                  <i class="ic">
                    <img src="../../assets/img/icon/time.png" alt>车辆平台
                  </i>
                  <span class="infos">奥迪</span>
                </div>
              </el-col>
            </el-row>
            <el-row style="margin-left:50px;margin-top:40px;">
              <el-col :span="7">
                <div class="el">
                  <i class="ic">
                    <img src="../../assets/img/icon/usrname.png" alt>车辆所有人
                  </i>
                  <span class="infos">无数据</span>
                </div>
                <div class="el">
                  <i class="ic">
                    <img src="../../assets/img/icon/tel2.png" alt>身份证证件号
                  </i>
                  <span class="infos">320223199612031526</span>
                </div>
                <div class="el">
                  <i class="ic">
                    <img src="../../assets/img/icon/tel2.png" alt>手机号码
                  </i>
                  <span class="infos">135****5631</span>
                </div>
                <div class="el">
                  <i class="ic">
                    <img src="../../assets/img/icon/tel2.png" alt>联系方式
                  </i>
                  <span class="infos">0574****5835</span>
                </div>
              </el-col>
            </el-row>
            <h6 style="margin-top:50px;">报警</h6>
            <el-row style="margin-left:50px;margin-top:40px;">
              <el-col :span="7">
                <div class="el">
                  <i class="ic">
                    <img src="../../assets/img/icon/tel2.png" alt>报警地点
                  </i>
                  <span class="infos">G50沪渝高速K198(主线)</span>
                </div>
                <div class="el">
                  <i class="ic">
                    <img src="../../assets/img/icon/tel2.png" alt>报警类型
                  </i>
                  <span class="infos">XXXXXXXXXX</span>
                </div>
              </el-col>
            </el-row>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import tables from "@/components/tables";
import pagination from "@/components/pagination";
export default {
  name: "abnormalProvincialEnforcement",
  data() {
    return {
      tabName: "1",
      showTab: "1",
      value: null,
      options: [{ value: "123", label: "123" }]
    };
  },
  components: {
    tables,
    pagination
  },
  methods: {
    // tab切换
    tabChange(value) {
      if (value) {
        this.showTab = value;
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.yichangKadian_wrap {
  height: 100%;
  box-sizing: border-box;
  .top {
    padding: 30px 0 0 86;
    .top_lf {
      display: inline-block;
      width: 13%;
      color: #ffcc66;
      font-size: 14px;
      font-weight: 400;
    }
    .select {
      display: inline-block;
      width: 17%;
    }
    /deep/ .el-select {
      width: 100%;
    }
    /deep/ .el-input__inner {
      background: #06243d;
      height: 30px;
      border: 1px solid rgba(52, 113, 175, 1);
    }
    /deep/ .el-input__icon {
      line-height: 30px;
    }
    /deep/ .el-select-dropdown {
      background-color: #06243d;
    }
  }
  .content {
    margin-top: 10px;
    padding-left: 86px;
    padding-right: 20px;
    height: 85%;
    .c_lf {
      float: left;
      width: 30%;
      height: 100%;
      margin-right: 20px;
      border: 1px solid #4266af;
    }
    .detail_right {
      width: calc(70% - 20px);
      height: 100%;
      float: left;
      .detail_top {
        width: 100%;
        height: 56%;
        margin-bottom: 20px;
        .curCar {
          width: 57%;
          height: 100%;
          margin-right: 20px;
          border: 1px solid #4266af;
          border-radius: 4px;
          float: left;
          padding: 20px 16px;
          .title {
            width: 100%;
            height: 14px;
            font-size: 14px;
            color: #fc6;
            line-height: 14px;
            margin-bottom: 20px;
          }
          .carContent {
            width: 100%;
            height: calc(100% - 34px);
            padding-left: 50px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            .common {
              width: 100%;
              display: flex;
              &:last-child {
                margin-bottom: 0;
              }
              .el {
                width: 50%;
                display: flex;
                img {
                  display: block;
                }
                .label {
                  font-size: 13px;
                  line-height: 18px;
                  color: #03d8ea;
                  margin: 0 20px 0 10px;
                }
                .infos {
                  font-size: 13px;
                  line-height: 18px;
                  color: #fff;
                  flex: 1;
                }
              }
            }
            .common2 {
              width: 100%;
              display: flex;
              .img {
                width: 50%;
                height: 27px;
                padding-left: 28px;
                img {
                  display: block;
                }
              }
              .el {
                width: 50%;
                height: 27px;
                align-items: center;
                display: flex;
                .label {
                  font-size: 13px;
                  line-height: 18px;
                  color: #03d8ea;
                  margin: 0 20px 0 10px;
                }
                .infos {
                  font-size: 13px;
                  line-height: 18px;
                  color: #fff;
                  flex: 1;
                }
              }
            }
            .common3 {
              width: 100%;
              display: flex;
              &:last-child {
                margin-bottom: 0;
              }
              .el {
                flex: 1;
                display: flex;
                img {
                  display: block;
                }
                .label {
                  font-size: 13px;
                  line-height: 18px;
                  color: #03d8ea;
                  margin: 0 20px 0 10px;
                }
                .infos {
                  font-size: 13px;
                  line-height: 18px;
                  color: #fff;
                  flex: 1;
                }
              }
            }
          }
        }
        .curPerson {
          width: calc(43% - 20px);
          height: 100%;
          border: 1px solid #4266af;
          border-radius: 4px;
          float: left;
          padding: 20px 16px;
          .title {
            width: 100%;
            height: 14px;
            font-size: 14px;
            color: #fc6;
            line-height: 14px;
            margin-bottom: 20px;
          }
          .pContent {
            width: 100%;
            height: calc(100% - 34px);
            .img {
              width: 100%;
              display: flex;
              justify-content: center;
              img {
                display: block;
              }
            }
            .infoBox {
              width: 100%;
              height: calc(100% - 127px);
              display: flex;
              justify-content: space-between;
              flex-direction: column;
              align-items: center;
              .common {
                width: 180px;
                display: flex;
                &:last-child {
                  margin-bottom: 0;
                }
                .el {
                  flex: 1;
                  display: flex;
                  img {
                    display: block;
                  }
                  .label {
                    font-size: 13px;
                    line-height: 18px;
                    color: #03d8ea;
                    margin: 0 60px 0 10px;
                    width: 66px;
                  }
                  .infos {
                    font-size: 13px;
                    line-height: 18px;
                    color: #fff;
                    flex: 1;
                  }
                }
              }
            }
          }
        }
      }
      .detail_bot {
        width: 100%;
        height: calc(44% - 20px);
        border: 1px solid #4266af;
        border-radius: 4px;
        padding: 20px 16px;
        .deal {
          width: 40%;
          height: 100%;
          float: left;
          .title {
            width: 100%;
            height: 14px;
            font-size: 14px;
            color: #fc6;
            line-height: 14px;
            margin-bottom: 20px;
          }
          .conBox {
            width: 100%;
            height: calc(100% - 127px);
            padding-left: 15px;
            .common {
              display: flex;
              margin-bottom: 25px;
              &:last-child {
                margin-bottom: 0;
              }
              .el {
                flex: 1;
                display: flex;
                img {
                  display: block;
                }
                .label {
                  font-size: 13px;
                  line-height: 18px;
                  color: #03d8ea;
                  margin: 0 60px 0 10px;
                  width: 66px;
                }
                .infos {
                  font-size: 13px;
                  line-height: 18px;
                  color: #fff;
                  flex: 1;
                }
              }
            }
          }
        }
        .con {
          width: 60%;
          height: 100%;
          float: left;
          .title {
            width: 100%;
            height: 14px;
            font-size: 14px;
            color: #fc6;
            line-height: 14px;
            margin-bottom: 20px;
          }
          .conBox {
            width: 100%;
            height: calc(100% - 127px);
            padding-left: 15px;
            .common {
              display: flex;
              margin-bottom: 25px;
              &:last-child {
                margin-bottom: 0;
              }
              .el {
                flex: 1;
                display: flex;
                img {
                  display: block;
                }
                .label {
                  font-size: 13px;
                  line-height: 18px;
                  color: #03d8ea;
                  margin: 0 60px 0 10px;
                  width: 66px;
                }
                .infos {
                  font-size: 13px;
                  line-height: 18px;
                  color: #fff;
                  flex: 1;
                }
              }
            }
          }
        }
      }
    }
  }
  /deep/ .el-collapse-item__content {
    padding-bottom: 0;
    border: none;
  }
  /deep/ .el-collapse-item__header {
    background: none;
    border-bottom: 1px solid #366492;
    color: #ffcc66;
    padding-left: 20px;
  }
  /deep/ .el-collapse-item__wrap {
    background: none;
    border-bottom: 1px solid #366492;
  }
}
</style>
