<template>
  <div class="yichangCar_wrap">
    <div class="content_wrap">
      <div class="topTab">
        <ul class="clearfix">
          <li :class="activeIndex === 0 ? 'active' : ''" @click="tabChange(0)">
            <span>异常处理人</span>
          </li>
          <li :class="activeIndex === 1 ? 'active' : ''" @click="tabChange(1)">
            <span>异常处理车</span>
          </li>
          <li :class="activeIndex === 2 ? 'active' : ''" @click="tabChange(2)">
            <span>异常免积分</span>
          </li>
        </ul>
      </div>
      <div class="top">
        <div class="top_lf">
          <img src="../../assets/img/iconImg/data.png" alt>
          30日内
        </div>
        <div class="select">
          <el-input
            :placeholder="holder"
            v-model="personal"
            class="common-focus"
            @keyup.enter.native="changeSearch">
            <i 
              slot="suffix"
              class="el-input_icon el-icon-search"
              style="line-height: 30px;margin-right: 2px;cursor: pointer;"
              @click="changeSearch">
            </i>
          </el-input>
        </div>
      </div>
      <div class="content clearfix" v-show="activeIndex === 0">
        <div class="c_lf box_back">
          <tables :tableData="tableData1" :tableColumns="tableColumns1" @change="tableChange1"></tables>
          <div class="pageBox">
            <el-pagination
              background
              small
              @current-change="handleCurrentChange1"
              :current-page="currentPage1"
              :page-size="10"
              layout="total, prev, pager, next, jumper"
              :total="totalCount1"
              :pager-count="5">
            </el-pagination>
          </div>
        </div>
        <div class="c_rg">
          <div class="box-content box_back" style="border: 1px solid #4266af;">
            <div class="peopleDetail">
              <div class="img">
                <img src="../../assets/img/iconImg/p2.png" alt="">
              </div>
              <div class="d_c">
                <div class="el">
                  <i class="ic">
                    <img src="../../assets/img/iconImg/icon12.png" alt>当事人
                  </i>
                  <span class="infos">-</span>
                </div>
                <div class="el">
                  <i class="ic">
                    <img src="../../assets/img/iconImg/icon09.png" alt>身份证证件号
                  </i>
                  <span class="infos">-</span>
                </div>
                <div class="el">
                  <i class="ic">
                    <img src="../../assets/img/iconImg/icon08.png" alt>联系方式
                  </i>
                  <span class="infos">-</span>
                </div>
              </div>
              <div class="d_r">
                <div class="el">
                  <i class="ic">
                    <img src="../../assets/img/iconImg/icon01.png" alt>驾驶证档案编号
                  </i>
                  <span class="infos">-</span>
                </div>
                <div class="el">
                  <i class="ic">
                    <img src="../../assets/img/iconImg/icon13.png" alt>准驾车型
                  </i>
                  <span class="infos">-</span>
                </div>
                <div class="el">
                  <i class="ic">
                    <img src="../../assets/img/iconImg/icon05.png" alt>计分情况
                  </i>
                  <span class="infos">-</span>
                </div>
              </div>
            </div>
          </div>
          <div class="rb box_back rb2">
            <el-scrollbar style="height: 100%;" ref="">
              <weifa :weifaData="weifaData"></weifa>
              <div class="rb_detail clearfix">
                <div class="rb_menu">
                  <timeSwiper :list="detailData" @change="changeCar"></timeSwiper>
                </div>
                <div class="rb_det">
                  <div class="dataBox">
                    <div class="b_l">
                      <div class="el">
                        <i class="ic">
                          <img src="../../assets/img/iconImg/icon07.png" alt>处理时间
                        </i>
                        <span class="infos">{{activeCarData.clsj || "暂无数据"}}</span>
                      </div>
                      <div class="el">
                        <i class="ic">
                          <img src="../../assets/img/iconImg/icon16.png" alt>违法代码
                        </i>
                        <span class="infos">{{activeCarData.wfxw  || "暂无数据"}}</span>
                      </div>
                      <div class="el">
                        <i class="ic">
                          <img src="../../assets/img/iconImg/icon07.png" alt>违法时间
                        </i>
                        <span class="infos">{{activeCarData.wfsj  || "暂无数据"}}</span>
                      </div>
                      <div class="el">
                        <i class="ic" style="align-items: flex-start;">
                          <img src="../../assets/img/iconImg/icon06.png" alt>违法地点
                        </i>
                        <span class="infos">{{activeCarData.wfdz  || "暂无数据"}}</span>
                      </div>
                    </div>
                    <div class="b_r">
                      <div class="common2">
                        <div class="el">
                          <i class="ic">
                            <img src="../../assets/img/iconImg/icon03.png" alt>号牌号码
                          </i>
                          <span class="infos">{{activeCarData.hphm  || "暂无数据"}}</span>
                        </div>
                        <div class="el">
                          <i class="ic">
                            <img src="../../assets/img/iconImg/icon04.png" alt>号牌种类
                          </i>
                          <span class="infos">{{activeCarData.hpzl  || "暂无数据"}}</span>
                        </div>
                      </div>
                      <div class="common2">
                        <div class="image">
                          <div class="cardBox">{{activeCarData.hphm  || "暂无数据"}}</div>
                        </div>
                        <div class="el">
                          <i class="ic">
                            <img src="../../assets/img/iconImg/icon04.png" alt>车辆类型
                          </i>
                          <span class="infos">-</span>
                        </div>
                      </div>
                      <div class="common2">
                        <div class="el">
                          <i class="ic">
                            <img src="../../assets/img/iconImg/icon04.png" alt>车身颜色
                          </i>
                          <span class="infos">-</span>
                        </div>
                        <div class="el">
                          <i class="ic">
                            <img src="../../assets/img/iconImg/icon04.png" alt>车辆品牌
                          </i>
                          <span class="infos">-</span>
                        </div>
                      </div>
                      <div class="common2">
                        <div class="ts">
                          <i class="ic">
                            <img src="../../assets/img/iconImg/icon04.png" alt>
                          </i>
                          <span class="infos" style="width:70%;">
                            处以
                            <small></small>元罚款,记
                            <small>{{activeCarData.wfjfs || 0}}</small>分,
                            <br>并处
                            <small style="width:70%"></small>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- <div class="box-content" style="padding-bottom:0;margin-bottom:0;">
                    <div class="clearfix">
                      <el-row>
                        <el-col :span="4">
                          <div class="image-wrapper">
                            <img src="../../assets/img/iconImg/p1.png" alt>
                          </div>
                        </el-col>
                        <el-col :span="10">
                          <div class="el">
                            <i class="ic">
                              <img src="../../assets/img/iconImg/icon12.png" alt>当事人
                            </i>
                            <span class="infos">张全单</span>
                          </div>
                          <div class="el">
                            <i class="ic">
                              <img src="../../assets/img/iconImg/icon09.png" alt>身份证证件号
                            </i>
                            <span class="infos">001123</span>
                          </div>
                          <div class="el">
                            <i class="ic">
                              <img src="../../assets/img/iconImg/icon08.png" alt>联系方式
                            </i>
                            <span class="infos">1111111111111</span>
                          </div>
                        </el-col>
                        <el-col :span="10">
                          <div class="el">
                            <i class="ic" style="width:55%">
                              <img src="../../assets/img/iconImg/icon01.png" alt>机动车驾驶证档案编号
                            </i>
                            <span class="infos" style="width:30%">张全单</span>
                          </div>
                          <div class="el">
                            <i class="ic" style="width:55%">
                              <img src="../../assets/img/iconImg/icon15.png" alt>发证机关
                            </i>
                            <span class="infos" style="width:30%">5</span>
                          </div>
                          <div class="el">
                            <i class="ic" style="width:55%">
                              <img src="../../assets/img/iconImg/icon13.png" alt>准驾车型
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
                              <img src="../../assets/img/iconImg/icon16.png" alt>违法代码
                            </i>
                            <span class="infos">G50沪渝高速K198(主线)</span>
                          </div>
                          <div class="el">
                            <i class="ic">
                              <img src="../../assets/img/iconImg/icon07.png" alt>违法时间
                            </i>
                            <span class="infos">2019-5-5 05:26</span>
                          </div>
                          <div class="el">
                            <i class="ic">
                              <img src="../../assets/img/iconImg/icon06.png" alt>违法地点
                            </i>
                            <span class="infos">G50沪渝高速K198(主线)</span>
                          </div>
                        </el-col>
                        <el-col :span="10">
                          <div class="ts">
                            <i class="ic">
                              <img src="../../assets/img/iconImg/icon04.png" alt>
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
                  </div> -->
                  <zhuapai></zhuapai>
                </div>
              </div>
            </el-scrollbar>
          </div>
        </div>
      </div>
      <div class="content clearfix" v-show="activeIndex === 1">
        <div class="c_lf box_back">
          <tables :tableData="tableData2" :tableColumns="tableColumns2" @change="tableChange2"></tables>
          <div class="pageBox">
            <el-pagination
              background
              small
              @current-change="handleCurrentChange2"
              :current-page="currentPage2"
              :page-size="10"
              layout="total, prev, pager, next, jumper"
              :total="totalCount2"
              :pager-count="5">
            </el-pagination>
          </div>
        </div>
        <div class="c_rg">
          <div class="box-content box_back" style="border: 1px solid #4266af;">
            <div class="clearfix">
              <el-row>
                <el-col :span="7">
                  <div class="el">
                    <i class="ic">
                      <img src="../../assets/img/iconImg/icon03.png" alt>号牌号码
                    </i>
                    <span class="infos">{{carDetail.hphm || "暂无数据"}}</span>
                  </div>
                  <div class="img">
                    <img
                      src="../../assets/img/iconImg/card-pic.png"
                      alt
                    >
                  </div>
                  <div class="el">
                    <i class="ic">
                      <img src="../../assets/img/iconImg/icon04.png" alt>车身颜色
                    </i>
                    <span class="infos">{{carDetail.csys || "暂无数据"}}</span>
                  </div>
                </el-col>
                <el-col :span="7">
                  <div class="el">
                    <i class="ic">
                      <img src="../../assets/img/iconImg/icon04.png" alt>号牌种类
                    </i>
                    <span class="infos">{{carDetail.hpzl || "暂无数据"}}</span>
                  </div>
                  <div class="el" style="height: 27px;">
                    <i class="ic">
                      <img src="../../assets/img/iconImg/icon04.png" alt>车辆类型
                    </i>
                    <span class="infos" style="line-height: 27px;">{{carDetail.cllx || "暂无数据"}}</span>
                  </div>
                  <div class="el">
                    <i class="ic">
                      <img src="../../assets/img/iconImg/icon04.png" alt>车辆品牌
                    </i>
                    <span class="infos">{{carDetail.clpp1 || "暂无数据"}}</span>
                  </div>
                </el-col>
                <el-col :span="10">
                  <div class="el">
                    <i class="ic">
                      <img src="../../assets/img/iconImg/icon12.png" alt>车辆所有人
                    </i>
                    <span class="infos">{{carDetail.syr || "暂无数据"}}</span>
                  </div>
                  <div class="el" style="height: 27px;">
                    <i class="ic">
                      <img src="../../assets/img/iconImg/icon09.png" alt>身份证证件号
                    </i>
                    <span class="infos" style="line-height: 27px;">-</span>
                  </div>
                </el-col>
              </el-row>
            </div>
          </div>
          <div class="rb box_back">
            <el-scrollbar style="height: 100%;">
              <weifa :weifaData="weifaData"></weifa>
              <div class="rb_detail clearfix">
                <div class="rb_menu">
                  <timeSwiper :list="detailData" @change="changeCar"></timeSwiper>
                </div>
                <div class="rb_det">
                  <div class="el" style="margin-top:0;margin-bottom:10px;">
                    <i class="ic" style="width:13%;">
                      <img src="../../assets/img/iconImg/icon07.png" alt>处理时间
                    </i>
                    <span class="infos">{{activeCarData.clsj || "暂无数据"}}</span>
                  </div>
                  <div class="box-content" style="padding-bottom:0;margin-bottom:0;">
                    <div class="clearfix">
                      <el-row>
                        <el-col :span="4">
                          <div class="image-wrapper">
                            <img src="../../assets/img/iconImg/p1.png" alt>
                          </div>
                        </el-col>
                        <el-col :span="10">
                          <div class="el">
                            <i class="ic">
                              <img src="../../assets/img/iconImg/icon12.png" alt>当事人
                            </i>
                            <span class="infos">{{activeCarData.dsr || "暂无数据"}}</span>
                          </div>
                          <div class="el" style="height: 27px;">
                            <i class="ic">
                              <img src="../../assets/img/iconImg/icon09.png" alt>身份证证件号
                            </i>
                            <span class="infos" style="line-height: 27px;">{{activeCarData.jszh || "暂无数据"}}</span>
                          </div>
                          <div class="el">
                            <i class="ic">
                              <img src="../../assets/img/iconImg/icon08.png" alt>联系方式
                            </i>
                            <span class="infos">{{activeCarData.lxfs || "暂无数据"}}</span>
                          </div>
                        </el-col>
                        <el-col :span="10">
                          <div class="el">
                            <i class="ic" style="width:55%">
                              <img src="../../assets/img/iconImg/icon01.png" alt>机动车驾驶证档案编号
                            </i>
                            <span class="infos" style="width:30%">-</span>
                          </div>
                          <div class="el">
                            <i class="ic" style="width:55%">
                              <img src="../../assets/img/iconImg/icon15.png" alt>发证机关
                            </i>
                            <span class="infos" style="width:30%">-</span>
                          </div>
                          <div class="el">
                            <i class="ic" style="width:55%">
                              <img src="../../assets/img/iconImg/icon13.png" alt>准驾车型
                            </i>
                            <span class="infos" style="width:30%">{{activeCarData.zjcx || "暂无数据"}}</span>
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
                              <img src="../../assets/img/iconImg/icon16.png" alt>违法代码
                            </i>
                            <span class="infos">{{activeCarData.wfdd || "暂无数据"}}</span>
                          </div>
                          <div class="el">
                            <i class="ic">
                              <img src="../../assets/img/iconImg/icon07.png" alt>违法时间
                            </i>
                            <span class="infos">{{activeCarData.wfsj || "暂无数据"}}</span>
                          </div>
                          <div class="el">
                            <i class="ic">
                              <img src="../../assets/img/iconImg/icon06.png" alt>违法地点
                            </i>
                            <span class="infos">{{activeCarData.wfdz || "暂无数据"}}</span>
                          </div>
                        </el-col>
                        <el-col :span="10">
                          <div class="ts">
                            <i class="ic">
                              <img src="../../assets/img/iconImg/icon04.png" alt>
                            </i>
                            <span class="infos" style="width:70%;">
                              处以
                              <small></small>元罚款,记
                              <small>{{activeCarData.wfjfs || 0}}</small>分,
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
            </el-scrollbar>
          </div>
        </div>
      </div>
      <div class="content clearfix" v-show="activeIndex === 2">
        <div class="c_lf box_back">
          <tables :tableData="tableData3" :tableColumns="tableColumns3" @change="tableChange3"></tables>
          <div class="pageBox">
            <el-pagination
              background
              small
              @current-change="handleCurrentChange3"
              :current-page="currentPage3"
              :page-size="10"
              layout="total, prev, pager, next, jumper"
              :total="totalCount3"
              :pager-count="5">
            </el-pagination>
          </div>
        </div>
        <div class="c_rg">
          <div class="box-content box_back" style="border: 1px solid #4266af;">
            <div class="clearfix">
              <el-row>
                <el-col :span="7">
                  <div class="el">
                    <i class="ic">
                      <img src="../../assets/img/iconImg/icon03.png" alt>号牌号码
                    </i>
                    <span class="infos">-</span>
                  </div>
                  <div class="img">
                    <img
                      src="../../assets/img/iconImg/card-pic.png"
                      alt
                    >
                  </div>
                  <div class="el">
                    <i class="ic">
                      <img src="../../assets/img/iconImg/icon04.png" alt>车身颜色
                    </i>
                    <span class="infos">-</span>
                  </div>
                </el-col>
                <el-col :span="7">
                  <div class="el">
                    <i class="ic">
                      <img src="../../assets/img/iconImg/icon04.png" alt>号牌种类
                    </i>
                    <span class="infos">-</span>
                  </div>
                  <div class="el" style="height: 27px;">
                    <i class="ic">
                      <img src="../../assets/img/iconImg/icon04.png" alt>车辆类型
                    </i>
                    <span class="infos" style="line-height: 27px;">-</span>
                  </div>
                  <div class="el">
                    <i class="ic">
                      <img src="../../assets/img/iconImg/icon04.png" alt>车辆品牌
                    </i>
                    <span class="infos">-</span>
                  </div>
                </el-col>
                <el-col :span="10">
                  <div class="el">
                    <i class="ic">
                      <img src="../../assets/img/iconImg/icon12.png" alt>车辆所有人
                    </i>
                    <span class="infos">-</span>
                  </div>
                  <div class="el" style="height: 27px;">
                    <i class="ic">
                      <img src="../../assets/img/iconImg/icon09.png" alt>身份证证件号
                    </i>
                    <span class="infos" style="line-height: 27px;">-</span>
                  </div>
                </el-col>
              </el-row>
            </div>
          </div>
          <div class="rb box_back">
            <el-scrollbar style="height: 100%;">
              <p class="boxTitle">违法处理</p>
              <!-- <weifa></weifa> -->
              <div class="rb_detail clearfix">
                <div class="rb_menu">
                  <timeSwiper></timeSwiper>
                </div>
                <div class="rb_det">
                  <div class="el" style="margin-top:0;margin-bottom:10px;">
                    <i class="ic" style="width:13%;">
                      <img src="../../assets/img/iconImg/icon07.png" alt>处理时间
                    </i>
                    <span class="infos">{{activeCarData.clsj || "暂无数据"}}</span>
                  </div>
                  <div class="box-content" style="padding-bottom:0;margin-bottom:0;">
                    <div class="clearfix">
                      <el-row>
                        <el-col :span="4">
                          <div class="image-wrapper">
                            <img src="../../assets/img/iconImg/p1.png" alt>
                          </div>
                        </el-col>
                        <el-col :span="10">
                          <div class="el">
                            <i class="ic">
                              <img src="../../assets/img/iconImg/icon12.png" alt>当事人
                            </i>
                            <span class="infos">{{activeCarData.dsr || "暂无数据"}}</span>
                          </div>
                          <div class="el">
                            <i class="ic">
                              <img src="../../assets/img/iconImg/icon09.png" alt>身份证证件号
                            </i>
                            <span class="infos">{{activeCarData.jszh || "暂无数据"}}</span>
                          </div>
                          <div class="el">
                            <i class="ic">
                              <img src="../../assets/img/iconImg/icon08.png" alt>联系方式
                            </i>
                            <span class="infos">{{activeCarData.lxfs || "暂无数据"}}</span>
                          </div>
                        </el-col>
                        <el-col :span="10">
                          <div class="el">
                            <i class="ic" style="width:55%">
                              <img src="../../assets/img/iconImg/icon01.png" alt>机动车驾驶证档案编号
                            </i>
                            <span class="infos" style="width:30%">-</span>
                          </div>
                          <div class="el">
                            <i class="ic" style="width:55%">
                              <img src="../../assets/img/iconImg/icon15.png" alt>发证机关
                            </i>
                            <span class="infos" style="width:30%">-</span>
                          </div>
                          <div class="el">
                            <i class="ic" style="width:55%">
                              <img src="../../assets/img/iconImg/icon13.png" alt>准驾车型
                            </i>
                            <span class="infos" style="width:30%">{{activeCarData.zjcx || "暂无数据"}}</span>
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
                              <img src="../../assets/img/iconImg/icon16.png" alt>违法代码
                            </i>
                            <span class="infos">{{activeCarData.wfdd || "暂无数据"}}</span>
                          </div>
                          <div class="el">
                            <i class="ic">
                              <img src="../../assets/img/iconImg/icon07.png" alt>违法时间
                            </i>
                            <span class="infos">{{activeCarData.wfsj || "暂无数据"}}</span>
                          </div>
                          <div class="el">
                            <i class="ic">
                              <img src="../../assets/img/iconImg/icon06.png" alt>违法地点
                            </i>
                            <span class="infos">{{activeCarData.wfdz || "暂无数据"}}</span>
                          </div>
                        </el-col>
                        <el-col :span="10">
                          <div class="ts">
                            <i class="ic">
                              <img src="../../assets/img/iconImg/icon04.png" alt>
                            </i>
                            <span class="infos" style="width:70%;">
                              处以
                              <small></small>元罚款,记
                              <small>{{activeCarData.wfjfs || 0}}</small>分,
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
            </el-scrollbar>
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
import timeSwiper from "@/components/timeSwiper";
import abnormalDataService from "@/api/abnormalDataService";
export default {
  name: "abnormalWindowHandle",
  data() {
    return {
      activeIndex: 0,
      holder: "请输入姓名或身份证号",
      personal: "",
      currentPage1: 1,
      totalCount1: 0,
      personDetail: {},
      tableData1: [],
      tableColumns1: [
        {
          title: "姓名",
          key: "dsr",
          width: "20%"
        },
        {
          title: "性别",
          key: "sexy",
          width: "15%"
        },
        {
          title: "身份证号",
          key: "jszh",
          width: "40%"
        },
        {
          title: "处理车辆数",
          key: "clclsl",
          width: "25%"
        }
      ],
      currentPage2: 1,
      totalCount2: 0,
      carDetail: {},
      tableData2: [],
      tableColumns2: [
        {
          title: "车辆号牌",
          key: "hphm",
          width: "33.33%"
        },
        {
          title: "处理人数",
          key: "clrs",
          width: "33.33%"
        },
        {
          title: "处理次数",
          key: "clcs",
          width: "33.33%"
        }
      ],
      currentPage3: 1,
      totalCount3: 0,
      tableData3: [],
      tableColumns3: [
        {
          title: "车辆号牌",
          key: "hphm",
          width: "50%"
        },
        {
          title: "免积分次数",
          key: "mjfcs",
          width: "50%"
        }
      ],
      weifaData: {
        time: "",
        handleTimes: 0,
        carCount: 0,
        card: 0
      },
      detailData: [],
      activeCarData: {}
    };
  },
  created() {
    this.getHandlePersonList();
  },
  components: {
    weifa,
    tables,
    zhuapai,
    timeSwiper
  },
  methods: {
    // tab切换
    tabChange(index) {
      if (this.activeIndex === index) {
        return false;
      }
      this.activeIndex = index;
      if (index === 0) {
        this.currentPage1 = 1;
        this.personal = "";
        this.getHandlePersonList();
        this.holder = "请输入姓名或身份证号";
      } else if (index === 1) {
        this.currentPage2 = 1;
        this.personal = "";
        this.getHandleCarList();
        this.holder = "请输入车辆号牌";
      } else if (index === 2) {
        this.currentPage3 = 1;
        this.personal = "";
        this.getHandlePointsList();
        this.holder = "请输入车辆号牌";
      }
    },
    // 查找
    changeSearch() {
      if (this.activeIndex === 0) {
        this.currentPage1 = 1;
        this.getHandlePersonList();
      } else if (this.activeIndex === 1) {
        this.currentPage2 = 1;
        this.getHandleCarList();
      } else if (this.activeIndex === 2) {
        this.currentPage3 = 1;
        this.getHandlePointsList();
      }
    },
    // 获取处理人列表
    getHandlePersonList() {
      let params = {
        startRow: (this.currentPage1 - 1) * 10,
        endRow: 10
      };
      if (this.personal) {
        params.JSZHDSR = this.personal;
      }
      abnormalDataService.getHandlePersonList(params).then(res => {
        if (res.code === "0") {
          this.totalCount1 = res.data.count || 0;
          let data = res.data.list || [];
          data.forEach(item => {
            if (item.xb === "1") {
              item.sexy = "男";
            } else {
              item.sexy = "女";
            }
          });
          this.tableData1 = data;
          if (data[0]) {
            this.getHandlePersonDetail(data[0]);
            this.getHandleDetail(data[0]);
          } else {
            this.personDetail = {};
            this.weifaData = {
              time: "",
              handleTimes: 0,
              carCount: 0,
              card: 0
            };
            this.activeCarData = [];
            this.detailData = [];
          }
        } else {
          this.totalCount1 = 0;
          this.tableData1 = [];
          this.personDetail = {};
          this.weifaData = {
            time: "",
            handleTimes: 0,
            carCount: 0,
            card: 0
          };
          this.activeCarData = [];
          this.detailData = [];
        }
      });
    },
    // 获取处理人详细信息
    getHandlePersonDetail(item) {
      abnormalDataService
        .getPersonDetail({
          hphm: item.hphm,
          hpzl: item.hpzl
        })
        .then(res => {
          if (res.code === "0") {
            this.personDetail = res.data.query6h1 || {};
            this.carDetail = res.data.query6h1 || {};
          } else {
            this.personDetail = {};
            this.carDetail = {};
          }
        });
    },
    // 获取处理详情
    getHandleDetail(item) {
      let params = {};
      let date = new Date();
      let startTime = "";
      let endTime = "";
      if (this.activeIndex === 0) {
        startTime = this.$moment(date)
          .subtract(30, "days")
          .format("YYYY-MM-DD HH:mm:ss");
        endTime = this.$moment(date).format("YYYY-MM-DD HH:mm:ss");
        params.JSZHDSR = item.jszh;
      } else if (this.activeIndex === 1) {
        startTime = this.$moment(date)
          .subtract(30, "days")
          .format("YYYY-MM-DD HH:mm:ss");
        endTime = this.$moment(date).format("YYYY-MM-DD HH:mm:ss");
        params.hphm = item.hphm;
      } else if (this.activeIndex === 2) {
        startTime = this.$moment(date)
          .subtract(6, "months")
          .format("YYYY-MM-DD HH:mm:ss");
        endTime = this.$moment(date).format("YYYY-MM-DD HH:mm:ss");
        params.hphm = item.hphm;
      }
      params.startTime = startTime;
      params.endTime = endTime;
      if (!(params.JSZHDSR || params.hphm)) {
        this.weifaData = {
          time: "",
          handleTimes: 0,
          carCount: 0,
          card: 0
        };
        this.activeCarData = [];
        return false;
      }
      abnormalDataService.getHandleDetail(params).then(res => {
        if (res.code === "0") {
          this.detailData = res.data.list || [];
          let handleTimes = res.data.list.length;
          let count = item.clclsl;
          let num = 0;
          this.detailData.forEach(item => {
            num += item.wfjfs * 1;
          });
          this.weifaData = {
            time: "",
            handleTimes: handleTimes,
            carCount: count,
            card: num
          };
          this.activeCarData = this.detailData[0] || {};
        } else {
          this.detailData = [];
          this.weifaData = {
            time: "",
            handleTimes: 0,
            carCount: 0,
            card: 0
          };
          this.activeCarData = {};
        }
      });
    },
    // 获取处理车列表
    getHandleCarList() {
      let params = {
        startRow: (this.currentPage2 - 1) * 10,
        endRow: 10
      };
      if (this.personal) {
        params.hphm = this.personal;
      }
      abnormalDataService.getHandleCarList(params).then(res => {
        if (res.code === "0") {
          this.tableData2 = res.data.list || [];
          this.totalCount2 = res.data.count || 0;
          if (res.data.list[0]) {
            this.getHandlePersonDetail(res.data.list[0]);
            this.getHandleDetail(res.data.list[0]);
          } else {
            this.carDetail = {};
            this.weifaData = {
              time: "",
              handleTimes: 0,
              carCount: 0,
              card: 0
            };
            this.activeCarData = [];
            this.detailData = [];
          }
        } else {
          this.tableData2 = [];
          this.totalCount2 = 0;
          this.carDetail = {};
          this.weifaData = {
            time: "",
            handleTimes: 0,
            carCount: 0,
            card: 0
          };
          this.activeCarData = [];
          this.detailData = [];
        }
      });
    },
    // 获取免积分列表
    getHandlePointsList() {
      let params = {
        startRow: (this.currentPage3 - 1) * 10,
        endRow: 10
      };
      if (this.personal) {
        params.hphm = this.personal;
      }
      abnormalDataService.getHandlePointsList(params).then(res => {
        if (res.code === "0") {
          this.tableData3 = res.data.list || [];
          this.totalCount3 = res.data.count || 0;
          if (res.data.list[0]) {
            this.getHandlePersonDetail(res.data.list[0]);
            this.getHandleDetail(res.data.list[0]);
          } else {
            this.carDetail = {};
            this.weifaData = {
              time: "",
              handleTimes: 0,
              carCount: 0,
              card: 0
            };
            this.activeCarData = [];
            this.detailData = [];
          }
        } else {
          this.tableData3 = [];
          this.totalCount3 = 0;
          this.carDetail = {};
          this.weifaData = {
            time: "",
            handleTimes: 0,
            carCount: 0,
            card: 0
          };
          this.activeCarData = [];
          this.detailData = [];
        }
      });
    },
    // 列表点击
    tableChange1(item) {
      this.getHandlePersonDetail(item);
      this.getHandleDetail(item);
    },
    // 翻页
    handleCurrentChange1(page) {
      this.currentPage1 = page;
      this.getHandlePersonList();
    },
    // 列表点击
    tableChange2(item) {
      this.getHandlePersonDetail(item);
      this.getHandleDetail(item);
    },
    // 翻页
    handleCurrentChange2(page) {
      this.currentPage2 = page;
      this.getHandleCarList();
    },
    // 列表点击
    tableChange3() {},
    // 翻页
    handleCurrentChange3() {},
    // 车辆切换
    changeCar(index) {
      this.activeCarData = this.detailData[index];
    }
  }
};
</script>
<style lang="scss" scoped>
.yichangCar_wrap {
  height: 100%;
  box-sizing: border-box;
  .content_wrap {
    height: calc(100% - 42px);
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
        width: 17%;
        /deep/ .el-input__inner {
          color: #fc6;
        }
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
      height: calc(100% - 70px);
      .c_lf {
        float: left;
        width: 30%;
        height: 100%;
        margin-right: 20px;
        border: 1px solid #4266af;
      }
      .c_rg {
        float: left;
        width: calc(70% - 20px);
        height: 100%;
        .box-content {
          width: 100%;
          padding: 20px;
          margin-bottom: 20px;
          .peopleDetail {
            display: flex;
            width: 100%;
            height: 127px;
            .d_c {
              width: 30%;
              height: 100%;
              display: flex;
              flex-direction: column;
              justify-content: space-around;
              margin: 0 50px;
              padding: 10px 0;
              .ic {
                display: flex;
                width: 140px;
              }
            }
            .d_r {
              flex: 1;
              height: 100%;
              display: flex;
              flex-direction: column;
              justify-content: space-around;
              padding: 10px 0;
              .ic {
                display: flex;
                width: 160px;
              }
            }
          }
          .el {
            margin-bottom: 15px;
            &:last-child {
              margin-bottom: 0;
            }
          }
          .img {
            padding-left: 28px;
            img {
              display: block;
            }
            margin-bottom: 15px;
          }
        }
        .rb {
          padding: 20px;
          border: 1px solid #4266af;
          flex: 1;
          height: calc(100% - 155px);
          .boxTitle {
            width: 100%;
            font-size: 14px;
            line-height: 14px;
            color: #fc6;
          }
          .rb_detail {
            padding: 20px 0;
            .dataBox {
              width: 100%;
              display: flex;
              .b_l {
                width: 34%;
                .el {
                  margin-bottom: 30px;
                  .ic {
                    width: 120px;
                  }
                }
              }
              .b_r {
                width: 66%;
                .common2 {
                  display: flex;
                  margin-bottom: 30px;
                  align-items: center;
                  .ts {
                    margin-top: 0;
                  }
                  &:nth-child(1) {
                    margin-bottom: 25.5px;
                  }
                  &:nth-child(2) {
                    margin-bottom: 25.5px;
                  }
                  .el {
                    flex: 1;
                    .ic {
                      width: 120px;
                    }
                  }
                  .image {
                    flex: 1;
                    .cardBox {
                      width: 130px;
                      height: 27px;
                      display: flex;
                      justify-content: center;
                      align-items: center;
                      color: #fff;
                      font-size: 16px;
                      background: #0092fe;
                    }
                  }
                }
              }
            }
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
        .rb2 {
          height: calc(100% - 189px);
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
          display: flex;
          .ic {
            display: flex;
            align-items: center;
            font-size: 14px;
            color: #03d8ea;
            line-height: 18px;
            img {
              display: block;
            }
          }
        }
        .infos {
          font-size: 14px;
          display: inline-block;
          color: rgba(255, 255, 255, 1);
          flex: 1;
          line-height: 18px;
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
          height: 100px;
        }
        .ts {
          margin-top: 10px;
          display: flex;
          align-items: flex-start;
          .ic {
            width: auto;
            img {
              display: block;
            }
          }
          span {
            line-height: 18px;
            small {
              display: inline-block;
              padding: 0 10px;
              margin: 2px 2px 0 2px;
              border-bottom: solid 1px #ffffff;
              text-align: center;
              line-height: 18px;
            }
          }
        }
      }
    }
  }
}
</style>
