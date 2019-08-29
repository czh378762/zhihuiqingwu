<template>
  <div class="yichangKadian_wrap">
    <div class="top">
      <div class="top_lf">
        <img src="../../assets/img/iconImg/data.png" alt>
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
                    <img src="../../assets/img/iconImg/icon03.png" alt>
                  </i>
                  <span class="label">号牌号码</span>
                  <span class="infos">-</span>
                </div>
                <div class="el">
                  <i class="ic">
                    <img src="../../assets/img/iconImg/icon04.png" alt>
                  </i>
                  <span class="label">号牌种类</span>
                  <span class="infos">-</span>
                </div>
              </div>
              <div class="common2">
                <div class="img">
                  <img src="../../assets/img/iconImg/card-pic.png" alt >
                </div>
                <div class="el">
                  <i class="ic">
                    <img src="../../assets/img/iconImg/icon04.png" alt>
                  </i>
                  <span class="label">车身颜色</span>
                  <span class="infos">-</span>
                </div>
              </div>
              <div class="common">
                <div class="el">
                  <i class="ic">
                    <img src="../../assets/img/iconImg/icon02.png" alt>
                  </i>
                  <span class="label">车辆状态</span>
                  <span class="infos">-</span>
                </div>
                <div class="el">
                  <i class="ic">
                    <img src="../../assets/img/iconImg/icon04.png" alt>
                  </i>
                  <span class="label">车辆类型</span>
                  <span class="infos">-</span>
                </div>
              </div>
              <div class="common">
                <div class="el">
                  <i class="ic">
                    <img src="../../assets/img/iconImg/icon07.png" alt>
                  </i>
                  <span class="label">年审期限</span>
                  <span class="infos">-</span>
                </div>
                <div class="el">
                  <i class="ic">
                    <img src="../../assets/img/iconImg/icon04.png" alt>
                  </i>
                  <span class="label">车辆品牌</span>
                  <span class="infos">-</span>
                </div>
              </div>
              <div class="common3">
                <div class="el">
                  <i class="ic">
                    <img src="../../assets/img/iconImg/icon12.png" alt>
                  </i>
                  <span class="label">车辆所有人</span>
                  <span class="infos">-</span>
                </div>
              </div>
              <div class="common3">
                <div class="el">
                  <i class="ic">
                    <img src="../../assets/img/iconImg/icon09.png" alt>
                  </i>
                  <span class="label">身份证号码</span>
                  <span class="infos">-</span>
                </div>
              </div>
              <div class="common3">
                <div class="el">
                  <i class="ic">
                    <img src="../../assets/img/iconImg/icon10.png" alt>
                  </i>
                  <span class="label">手机号码</span>
                  <span class="infos">-</span>
                </div>
              </div>
              <div class="common3">
                <div class="el">
                  <i class="ic">
                    <img src="../../assets/img/iconImg/icon08.png" alt>
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
                <img src="../../assets/img/iconImg/p2.png" alt="">
              </div>
              <div class="infoBox">
                <div class="common">
                  <div class="el">
                    <i class="ic">
                      <img src="../../assets/img/iconImg/icon12.png" alt>
                    </i>
                    <span class="label">当事人</span>
                    <span class="infos">-</span>
                  </div>
                </div>
                <div class="common">
                  <div class="el">
                    <i class="ic">
                      <img src="../../assets/img/iconImg/icon09.png" alt>
                    </i>
                    <span class="label">身份证号码</span>
                    <span class="infos">-</span>
                  </div>
                </div>
                <div class="common">
                  <div class="el">
                    <i class="ic">
                      <img src="../../assets/img/iconImg/icon08.png" alt>
                    </i>
                    <span class="label">联系方式</span>
                    <span class="infos">-</span>
                  </div>
                </div>
                <div class="common">
                  <div class="el">
                    <i class="ic">
                      <img src="../../assets/img/iconImg/icon01.png" alt>
                    </i>
                    <span class="label">驾驶证档案编号</span>
                    <span class="infos">-</span>
                  </div>
                </div>
                <div class="common">
                  <div class="el">
                    <i class="ic">
                      <img src="../../assets/img/iconImg/icon13.png" alt>
                    </i>
                    <span class="label">准驾车型</span>
                    <span class="infos">-</span>
                  </div>
                </div>
                <div class="common">
                  <div class="el">
                    <i class="ic">
                      <img src="../../assets/img/iconImg/icon07.png" alt>
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
                    <img src="../../assets/img/iconImg/icon07.png" alt>
                  </i>
                  <span class="label">处理时间</span>
                  <span class="infos">-</span>
                </div>
              </div>
              <div class="common">
                <div class="el">
                  <i class="ic">
                    <img src="../../assets/img/iconImg/icon06.png" alt>
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
                    <img src="../../assets/img/iconImg/icon04.png" alt>
                  </i>
                  <span class="label">违法代码</span>
                  <span class="infos">-</span>
                </div>
              </div>
              <div class="common">
                <div class="el">
                  <i class="ic">
                    <img src="../../assets/img/iconImg/icon04.png" alt>
                  </i>
                  <span class="label">违法类别</span>
                  <span class="infos">-</span>
                </div>
              </div>
              <div class="common">
                <div class="el">
                  <i class="ic">
                    <img src="../../assets/img/iconImg/icon07.png" alt>
                  </i>
                  <span class="label">违法时间</span>
                  <span class="infos">-</span>
                </div>
              </div>
              <div class="common">
                <div class="el">
                  <i class="ic">
                    <img src="../../assets/img/iconImg/icon06.png" alt>
                  </i>
                  <span class="label">违法地点</span>
                  <span class="infos">-</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="detail_right2" v-show="showTab === '2'">
        <p class="title">当事车辆</p>
        <div class="carContent">
          <div class="common">
            <div class="el">
              <i class="ic">
                <img src="../../assets/img/iconImg/icon03.png" alt>
              </i>
              <span class="label">号牌号码</span>
              <span class="infos">-</span>
            </div>
            <div class="el">
              <i class="ic">
                <img src="../../assets/img/iconImg/icon04.png" alt>
              </i>
              <span class="label">号牌种类</span>
              <span class="infos">-</span>
            </div>
          </div>
          <div class="common2">
            <div class="img">
              <img src="../../assets/img/iconImg/card-pic.png" alt >
            </div>
            <div class="el">
              <i class="ic">
                <img src="../../assets/img/iconImg/icon04.png" alt>
              </i>
              <span class="label">车身颜色</span>
              <span class="infos">-</span>
            </div>
          </div>
          <div class="common">
            <div class="el">
              <i class="ic">
                <img src="../../assets/img/iconImg/icon02.png" alt>
              </i>
              <span class="label">车辆状态</span>
              <span class="infos">-</span>
            </div>
            <div class="el">
              <i class="ic">
                <img src="../../assets/img/iconImg/icon04.png" alt>
              </i>
              <span class="label">车辆类型</span>
              <span class="infos">-</span>
            </div>
          </div>
          <div class="common" style="margin-bottom: 40px;">
            <div class="el">
              <i class="ic">
                <img src="../../assets/img/iconImg/icon07.png" alt>
              </i>
              <span class="label">年审期限</span>
              <span class="infos">-</span>
            </div>
            <div class="el">
              <i class="ic">
                <img src="../../assets/img/iconImg/icon04.png" alt>
              </i>
              <span class="label">车辆品牌</span>
              <span class="infos">-</span>
            </div>
          </div>
          <div class="common">
            <div class="el">
              <i class="ic">
                <img src="../../assets/img/iconImg/icon12.png" alt>
              </i>
              <span class="label">车辆所有人</span>
              <span class="infos">-</span>
            </div>
          </div>
          <div class="common">
            <div class="el">
              <i class="ic">
                <img src="../../assets/img/iconImg/icon09.png" alt>
              </i>
              <span class="label">身份证号码</span>
              <span class="infos">-</span>
            </div>
          </div>
          <div class="common">
            <div class="el">
              <i class="ic">
                <img src="../../assets/img/iconImg/icon10.png" alt>
              </i>
              <span class="label">手机号码</span>
              <span class="infos">-</span>
            </div>
          </div>
          <div class="common">
            <div class="el">
              <i class="ic">
                <img src="../../assets/img/iconImg/icon08.png" alt>
              </i>
              <span class="label">联系方式</span>
              <span class="infos">-</span>
            </div>
          </div>
        </div>
        <p class="title">报警</p>
        <div class="policeContent">
          <div class="common">
            <div class="el">
              <i class="ic">
                <img src="../../assets/img/iconImg/icon17.png" alt>
              </i>
              <span class="label">报警地点</span>
              <span class="infos">G50沪渝高速K198(主线)</span>
            </div>
          </div>
          <div class="common">
            <div class="el">
              <i class="ic">
                <img src="../../assets/img/iconImg/icon18.png" alt>
              </i>
              <span class="label">报警类型</span>
              <span class="infos">XXXXXXXXXX</span>
            </div>
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
      tabName: "2",
      showTab: "2",
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
    padding: 10px 20px 0 86px;
    display: flex;
    .top_lf {
      width: 13%;
      color: #ffcc66;
      font-size: 14px;
      font-weight: 400;
      display: flex;
      align-items: center;
      img {
        display: block;
        margin-right: 10px;
      }
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
    height: calc(100% - 112px);
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
              justify-content: space-around;
              flex-direction: column;
              align-items: center;
              margin-top: 15px;
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
                    width: 92px;
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
    .detail_right2 {
      width: calc(70% - 20px);
      height: 100%;
      float: left;
      border: 1px solid #4266af;
      border-radius: 4px;
      padding: 20px 32px;
      .title {
        width: 100%;
        height: 14px;
        font-size: 14px;
        color: #fc6;
        line-height: 14px;
        margin-bottom: 20px;
      }
      .carContent {
        width: 60%;
        padding-left: 45px;
        margin-bottom: 60px;
        .common {
          width: 100%;
          display: flex;
          margin-bottom: 20px;
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
              width: 66px;
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
          margin-bottom: 20px;
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
              width: 66px;
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
      .policeContent {
        width: 100%;
        padding-left: 45px;
        .common {
          width: 100%;
          display: flex;
          margin-bottom: 20px;
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
              width: 66px;
              font-size: 13px;
              line-height: 18px;
              color: #ff5460;
              margin: 0 20px 0 10px;
            }
            .infos {
              font-size: 13px;
              line-height: 18px;
              color: #ff5460;
              flex: 1;
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
