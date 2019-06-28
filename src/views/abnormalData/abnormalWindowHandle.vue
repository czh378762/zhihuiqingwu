<template>
  <div class="yichangCar_wrap">
    <div class="content_wrap">
      <div class="topTab">
        <ul class="clearfix">
          <li :class="activeIndex === 0 ? 'active' : ''" @click="activeIndex = 0">
            <span>异常处理人</span>
          </li>
          <li :class="activeIndex === 1 ? 'active' : ''" @click="activeIndex = 1">
            <span>异常处理车</span>
          </li>
          <li :class="activeIndex === 2 ? 'active' : ''" @click="activeIndex = 2">
            <span>异常免积分</span>
          </li>
        </ul>
      </div>
      <div class="top">
        <div class="top_lf">
          <img src="../../assets/img/icon/执勤执法数据.png" alt>
          30天
        </div>
        <div class="select">
          <el-select v-model="value" placeholder="请输入姓名或身份证号">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </div>
      </div>
      <div class="content clearfix" v-show="activeIndex === 0">
        <div class="c_lf box_back">
          <tables></tables>
          <pagination></pagination>
        </div>
        <div class="c_rg">
          <div class="box-content box_back" style="border: 1px solid #4266af;">
            <div class="clearfix">
              <el-row>
                <el-col :span="6">
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
                      <img src="../../assets/img/icon/usrname.png" alt>车身颜色
                    </i>
                    <span class="infos">黑</span>
                  </div>
                </el-col>
                <el-col :span="6">
                  <div class="el">
                    <i class="ic">
                      <img src="../../assets/img/icon/usrname.png" alt>号牌种类
                    </i>
                    <span class="infos">蓝</span>
                  </div>
                  <div class="el">
                    <i class="ic">
                      <img src="../../assets/img/icon/usrname.png" alt>车辆类型
                    </i>
                    <span class="infos">小型客车</span>
                  </div>
                  <div class="el">
                    <i class="ic">
                      <img src="../../assets/img/icon/usrname.png" alt>车辆平台
                    </i>
                    <span class="infos">奥迪</span>
                  </div>
                </el-col>
                <el-col :span="10">
                  <div class="el">
                    <i class="ic">
                      <img src="../../assets/img/icon/usrname.png" alt>车辆所有人
                    </i>
                    <span class="infos">蓝</span>
                  </div>
                  <div class="el">
                    <i class="ic">
                      <img src="../../assets/img/icon/idcard.png" alt>身份证证件号
                    </i>
                    <span class="infos">001123</span>
                  </div>
                </el-col>
              </el-row>
            </div>
          </div>
          <div class="rb box_back">
            <weifa></weifa>
            <div class="rb_detail clearfix">
              <div class="rb_menu">
                <timeSwiper></timeSwiper>
              </div>
              <div class="rb_det">
                <div class="el" style="margin-top:0;margin-bottom:10px;">
                  <i class="ic" style="width:13%;">
                    <img src="../../assets/img/icon/usrname.png" alt>处理时间
                  </i>
                  <span class="infos">2019-5-5 05:26</span>
                </div>
                <div class="box-content" style="padding-bottom:0;margin-bottom:0;">
                  <div class="clearfix">
                    <el-row>
                      <el-col :span="4">
                        <div class="image-wrapper">
                          <img src="../../assets/img/minjing/p1.png" alt>
                        </div>
                      </el-col>
                      <el-col :span="10">
                        <div class="el">
                          <i class="ic">
                            <img src="../../assets/img/icon/usrname.png" alt>当事人
                          </i>
                          <span class="infos">张全单</span>
                        </div>
                        <div class="el">
                          <i class="ic">
                            <img src="../../assets/img/icon/idcard.png" alt>身份证证件号
                          </i>
                          <span class="infos">001123</span>
                        </div>
                        <div class="el">
                          <i class="ic">
                            <img src="../../assets/img/icon/tel2.png" alt>联系方式
                          </i>
                          <span class="infos">1111111111111</span>
                        </div>
                      </el-col>
                      <el-col :span="10">
                        <div class="el">
                          <i class="ic" style="width:55%">
                            <img src="../../assets/img/icon/cardnumber.png" alt>机动车驾驶证档案编号
                          </i>
                          <span class="infos" style="width:30%">张全单</span>
                        </div>
                        <div class="el">
                          <i class="ic" style="width:55%">
                            <img src="../../assets/img/icon/time.png" alt>发证机关
                          </i>
                          <span class="infos" style="width:30%">5</span>
                        </div>
                        <div class="el">
                          <i class="ic" style="width:55%">
                            <img src="../../assets/img/icon/carnum.png" alt>准驾车型
                          </i>
                          <span class="infos" style="width:30%">001123</span>
                        </div>
                      </el-col>
                    </el-row>
                  </div>
                </div>
                <div class="box-content" style="padding-bottom:0;margin-bottom:0;">
                  <div class="clearfix">
                    <el-row>
                      <el-col :span="4">
                        <div class="image-wrapper"></div>
                      </el-col>
                      <el-col :span="10">
                        <div class="el">
                          <i class="ic">
                            <img src="../../assets/img/icon/usrname.png" alt>违法代码
                          </i>
                          <span class="infos">G50沪渝高速K198(主线)</span>
                        </div>
                        <div class="el">
                          <i class="ic">
                            <img src="../../assets/img/icon/usrname.png" alt>违法时间
                          </i>
                          <span class="infos">2019-5-5 05:26</span>
                        </div>
                        <div class="el">
                          <i class="ic">
                            <img src="../../assets/img/icon/usrname.png" alt>违法地点
                          </i>
                          <span class="infos">G50沪渝高速K198(主线)</span>
                        </div>
                      </el-col>
                      <el-col :span="10">
                        <div class="ts">
                          <i class="ic">
                            <img src="../../assets/img/icon/usrname.png" alt>
                          </i>
                          <span class="infos" style="width:70%;">
                            处以
                            <small>200</small>元罚款,记
                            <small>200</small>分,
                            <br>并处
                            <small style="width:70%"></small>
                          </span>
                        </div>
                      </el-col>
                    </el-row>
                  </div>
                </div>
                <zhuapai></zhuapai>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="content clearfix" v-show="activeIndex === 1">
        <div class="c_lf box_back">
          <tables></tables>
          <pagination></pagination>
        </div>
        <div class="c_rg">
          <div class="box-content box_back" style="border: 1px solid #4266af;">
            <div class="clearfix">
              <el-row>
                <el-col :span="6">
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
                      <img src="../../assets/img/icon/usrname.png" alt>车身颜色
                    </i>
                    <span class="infos">黑</span>
                  </div>
                </el-col>
                <el-col :span="6">
                  <div class="el">
                    <i class="ic">
                      <img src="../../assets/img/icon/usrname.png" alt>号牌种类
                    </i>
                    <span class="infos">蓝</span>
                  </div>
                  <div class="el">
                    <i class="ic">
                      <img src="../../assets/img/icon/usrname.png" alt>车辆类型
                    </i>
                    <span class="infos">小型客车</span>
                  </div>
                  <div class="el">
                    <i class="ic">
                      <img src="../../assets/img/icon/usrname.png" alt>车辆平台
                    </i>
                    <span class="infos">奥迪</span>
                  </div>
                </el-col>
                <el-col :span="10">
                  <div class="el">
                    <i class="ic">
                      <img src="../../assets/img/icon/usrname.png" alt>车辆所有人
                    </i>
                    <span class="infos">蓝</span>
                  </div>
                  <div class="el">
                    <i class="ic">
                      <img src="../../assets/img/icon/idcard.png" alt>身份证证件号
                    </i>
                    <span class="infos">001123</span>
                  </div>
                </el-col>
              </el-row>
            </div>
          </div>
          <div class="rb box_back">
            <weifa></weifa>
            <div class="rb_detail clearfix">
              <div class="rb_menu">
                <timeSwiper></timeSwiper>
              </div>
              <div class="rb_det">
                <div class="el" style="margin-top:0;margin-bottom:10px;">
                  <i class="ic" style="width:13%;">
                    <img src="../../assets/img/icon/usrname.png" alt>处理时间
                  </i>
                  <span class="infos">2019-5-5 05:26</span>
                </div>
                <div class="box-content" style="padding-bottom:0;margin-bottom:0;">
                  <div class="clearfix">
                    <el-row>
                      <el-col :span="4">
                        <div class="image-wrapper">
                          <img src="../../assets/img/minjing/p1.png" alt>
                        </div>
                      </el-col>
                      <el-col :span="10">
                        <div class="el">
                          <i class="ic">
                            <img src="../../assets/img/icon/usrname.png" alt>当事人
                          </i>
                          <span class="infos">张全单</span>
                        </div>
                        <div class="el">
                          <i class="ic">
                            <img src="../../assets/img/icon/idcard.png" alt>身份证证件号
                          </i>
                          <span class="infos">001123</span>
                        </div>
                        <div class="el">
                          <i class="ic">
                            <img src="../../assets/img/icon/tel2.png" alt>联系方式
                          </i>
                          <span class="infos">1111111111111</span>
                        </div>
                      </el-col>
                      <el-col :span="10">
                        <div class="el">
                          <i class="ic" style="width:55%">
                            <img src="../../assets/img/icon/cardnumber.png" alt>机动车驾驶证档案编号
                          </i>
                          <span class="infos" style="width:30%">张全单</span>
                        </div>
                        <div class="el">
                          <i class="ic" style="width:55%">
                            <img src="../../assets/img/icon/time.png" alt>发证机关
                          </i>
                          <span class="infos" style="width:30%">5</span>
                        </div>
                        <div class="el">
                          <i class="ic" style="width:55%">
                            <img src="../../assets/img/icon/carnum.png" alt>准驾车型
                          </i>
                          <span class="infos" style="width:30%">001123</span>
                        </div>
                      </el-col>
                    </el-row>
                  </div>
                </div>
                <div class="box-content" style="padding-bottom:0;margin-bottom:0;">
                  <div class="clearfix">
                    <el-row>
                      <el-col :span="4">
                        <div class="image-wrapper"></div>
                      </el-col>
                      <el-col :span="10">
                        <div class="el">
                          <i class="ic">
                            <img src="../../assets/img/icon/usrname.png" alt>违法代码
                          </i>
                          <span class="infos">G50沪渝高速K198(主线)</span>
                        </div>
                        <div class="el">
                          <i class="ic">
                            <img src="../../assets/img/icon/usrname.png" alt>违法时间
                          </i>
                          <span class="infos">2019-5-5 05:26</span>
                        </div>
                        <div class="el">
                          <i class="ic">
                            <img src="../../assets/img/icon/usrname.png" alt>违法地点
                          </i>
                          <span class="infos">G50沪渝高速K198(主线)</span>
                        </div>
                      </el-col>
                      <el-col :span="10">
                        <div class="ts">
                          <i class="ic">
                            <img src="../../assets/img/icon/usrname.png" alt>
                          </i>
                          <span class="infos" style="width:70%;">
                            处以
                            <small>200</small>元罚款,记
                            <small>200</small>分,
                            <br>并处
                            <small style="width:70%"></small>
                          </span>
                        </div>
                      </el-col>
                    </el-row>
                  </div>
                </div>
                <zhuapai></zhuapai>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="content clearfix" v-show="activeIndex === 2">
        <div class="c_lf box_back">
          <tables></tables>
          <pagination></pagination>
        </div>
        <div class="c_rg">
          <div class="box-content box_back" style="border: 1px solid #4266af;">
            <div class="clearfix">
              <el-row>
                <el-col :span="6">
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
                      <img src="../../assets/img/icon/usrname.png" alt>车身颜色
                    </i>
                    <span class="infos">黑</span>
                  </div>
                </el-col>
                <el-col :span="6">
                  <div class="el">
                    <i class="ic">
                      <img src="../../assets/img/icon/usrname.png" alt>号牌种类
                    </i>
                    <span class="infos">蓝</span>
                  </div>
                  <div class="el">
                    <i class="ic">
                      <img src="../../assets/img/icon/usrname.png" alt>车辆类型
                    </i>
                    <span class="infos">小型客车</span>
                  </div>
                  <div class="el">
                    <i class="ic">
                      <img src="../../assets/img/icon/usrname.png" alt>车辆平台
                    </i>
                    <span class="infos">奥迪</span>
                  </div>
                </el-col>
                <el-col :span="10">
                  <div class="el">
                    <i class="ic">
                      <img src="../../assets/img/icon/usrname.png" alt>车辆所有人
                    </i>
                    <span class="infos">蓝</span>
                  </div>
                  <div class="el">
                    <i class="ic">
                      <img src="../../assets/img/icon/idcard.png" alt>身份证证件号
                    </i>
                    <span class="infos">001123</span>
                  </div>
                </el-col>
              </el-row>
            </div>
          </div>
          <div class="rb box_back">
            <weifa></weifa>
            <div class="rb_detail clearfix">
              <div class="rb_menu">
                <timeSwiper></timeSwiper>
              </div>
              <div class="rb_det">
                <div class="el" style="margin-top:0;margin-bottom:10px;">
                  <i class="ic" style="width:13%;">
                    <img src="../../assets/img/icon/usrname.png" alt>处理时间
                  </i>
                  <span class="infos">2019-5-5 05:26</span>
                </div>
                <div class="box-content" style="padding-bottom:0;margin-bottom:0;">
                  <div class="clearfix">
                    <el-row>
                      <el-col :span="4">
                        <div class="image-wrapper">
                          <img src="../../assets/img/minjing/p1.png" alt>
                        </div>
                      </el-col>
                      <el-col :span="10">
                        <div class="el">
                          <i class="ic">
                            <img src="../../assets/img/icon/usrname.png" alt>当事人
                          </i>
                          <span class="infos">张全单</span>
                        </div>
                        <div class="el">
                          <i class="ic">
                            <img src="../../assets/img/icon/idcard.png" alt>身份证证件号
                          </i>
                          <span class="infos">001123</span>
                        </div>
                        <div class="el">
                          <i class="ic">
                            <img src="../../assets/img/icon/tel2.png" alt>联系方式
                          </i>
                          <span class="infos">1111111111111</span>
                        </div>
                      </el-col>
                      <el-col :span="10">
                        <div class="el">
                          <i class="ic" style="width:55%">
                            <img src="../../assets/img/icon/cardnumber.png" alt>机动车驾驶证档案编号
                          </i>
                          <span class="infos" style="width:30%">张全单</span>
                        </div>
                        <div class="el">
                          <i class="ic" style="width:55%">
                            <img src="../../assets/img/icon/time.png" alt>发证机关
                          </i>
                          <span class="infos" style="width:30%">5</span>
                        </div>
                        <div class="el">
                          <i class="ic" style="width:55%">
                            <img src="../../assets/img/icon/carnum.png" alt>准驾车型
                          </i>
                          <span class="infos" style="width:30%">001123</span>
                        </div>
                      </el-col>
                    </el-row>
                  </div>
                </div>
                <div class="box-content" style="padding-bottom:0;margin-bottom:0;">
                  <div class="clearfix">
                    <el-row>
                      <el-col :span="4">
                        <div class="image-wrapper"></div>
                      </el-col>
                      <el-col :span="10">
                        <div class="el">
                          <i class="ic">
                            <img src="../../assets/img/icon/usrname.png" alt>违法代码
                          </i>
                          <span class="infos">G50沪渝高速K198(主线)</span>
                        </div>
                        <div class="el">
                          <i class="ic">
                            <img src="../../assets/img/icon/usrname.png" alt>违法时间
                          </i>
                          <span class="infos">2019-5-5 05:26</span>
                        </div>
                        <div class="el">
                          <i class="ic">
                            <img src="../../assets/img/icon/usrname.png" alt>违法地点
                          </i>
                          <span class="infos">G50沪渝高速K198(主线)</span>
                        </div>
                      </el-col>
                      <el-col :span="10">
                        <div class="ts">
                          <i class="ic">
                            <img src="../../assets/img/icon/usrname.png" alt>
                          </i>
                          <span class="infos" style="width:70%;">
                            处以
                            <small>200</small>元罚款,记
                            <small>200</small>分,
                            <br>并处
                            <small style="width:70%"></small>
                          </span>
                        </div>
                      </el-col>
                    </el-row>
                  </div>
                </div>
                <zhuapai></zhuapai>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import weifa from "@/components/weifa";
import tables from "@/components/tables";
import zhuapai from "@/components/zhuapai";
import pagination from "@/components/pagination";
import timeSwiper from "@/components/timeSwiper";
export default {
  name: "abnormalWindowHandle",
  data() {
    return {
      value: null,
      options: [{ value: "123", label: "123" }],
      currentPage3: 1,
      activeIndex: 0
    };
  },
  components: {
    weifa,
    tables,
    zhuapai,
    pagination,
    timeSwiper
  },
  methods: {}
};
</script>
<style lang="scss" scoped>
.yichangCar_wrap {
  height: 100%;
  box-sizing: border-box;
  .content_wrap {
    height: 93%;
    .topTab {
      position: absolute;
      left: 37%;
      top: -18px;
      li {
        float: left;
        width: 140px;
        height: 36px;
        background: linear-gradient(
          -39deg,
          rgba(7, 34, 62, 1),
          rgba(32, 87, 144, 1)
        );
        border: 1px solid rgba(52, 113, 175, 1);
        opacity: 1;
        border-radius: 4px;
        text-align: center;
        margin-right: 10px;
        cursor: pointer;
        span {
          font-size: 16px;
          color: rgba(150, 209, 233, 1);
          line-height: 36px;
        }
        &:last-child {
          margin-right: 0;
        }
      }
      .active {
        background: linear-gradient(
          90deg,
          rgba(24, 67, 113, 1),
          rgba(55, 196, 255, 1),
          rgba(24, 67, 113, 1)
        );
        border: 1px solid rgba(226, 175, 74, 1);
        box-shadow: 0px 2px 30px 0px rgba(0, 10, 49, 0.8);
        opacity: 1;
        span {
          font-weight: bold;
          color: #ffffff;
          font-size: 16px;
          text-shadow: 0px 1px 1px rgba(21, 17, 64, 0.75);
        }
      }
    }
    .top {
      padding: 30px 0 0 100px;
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
      padding-left: 100px;
      height: 91.5%;
      .c_lf {
        float: left;
        width: 30%;
        height: 100%;
        margin-right: 20px;
        border: 1px solid #4266af;
        display: flex;
        flex-direction: column;
      }
      .c_rg {
        float: left;
        width: 66%;
        display: flex;
        flex-direction: column;
        height: 100%;
        overflow: hidden;
        .box-content {
          padding: 0 0 20px 30px;
          margin-bottom: 20px;
        }
        .rb {
          padding: 20px;
          border: 1px solid #4266af;
          flex: 1;
          .rb_detail {
            padding: 20px 0;

            .rb_menu {
              float: left;
              width: 20%;
              li {
                width: 180px;
                height: 30px;
                background: linear-gradient(
                  -39deg,
                  rgba(7, 34, 62, 1),
                  rgba(32, 87, 144, 1)
                );
                border: 1px solid rgba(52, 113, 175, 1);
                opacity: 0.6;
                border-radius: 4px;
                margin-bottom: 10px;
                text-align: center;
                cursor: pointer;
                span {
                  font-size: 14px;
                  font-weight: 400;
                  color: rgba(150, 209, 233, 1);
                  line-height: 30px;
                  text-shadow: 0px 3px 3px rgba(18, 8, 116, 0.5);
                }
              }
              .active {
                background: linear-gradient(
                  90deg,
                  rgba(24, 67, 113, 1),
                  rgba(55, 196, 255, 1),
                  rgba(24, 67, 113, 1)
                );
                border: 1px solid rgba(255, 117, 106, 1);
              }
            }
            .rb_det {
              float: left;
              width: 80%;
              .det {
                float: left;
                width: 50%;
                .el {
                  margin-top: 20px;
                }
              }
            }
          }
        }
        .ic {
          margin-right: 6px;
          font-size: 13px;
          color: #03d8ea;
          width: 40%;
          display: inline-block;
          img {
            margin-right: 10px;
          }
        }
        .el {
          margin-top: 13px;
        }
        .infos {
          font-size: 14px;
          display: inline-block;
          color: rgba(255, 255, 255, 1);
          width: 50%;
        }
        .info-label {
          font-size: 13px;
          display: inline-block;
          font-weight: 400;
          margin-right: 7px;
          color: rgba(3, 216, 234, 1);
        }
        .image-wrapper {
          width: 100px;
          height: 120px;
        }
        .ts {
          margin-top: 10px;
          display: flex;
          align-items: flex-start;
          .ic {
            width: auto;
            img {
              vertical-align: top;
            }
          }
          span {
            line-height: 20px;
            small {
              display: inline-block;
              padding: 0 10px;
              margin: 2px 2px 0 2px;
              border-bottom: solid 1px #ffffff;
              text-align: center;
            }
          }
        }
      }
    }
  }
}
</style>
