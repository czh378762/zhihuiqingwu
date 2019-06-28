<template>
  <div class="home_wrap">
    <div class="data_wrap box_back">
      <div class="top">
        <div class="lf">
          <div class="switch_item">
            <span>异常停车</span>
            <el-switch v-model="value1" active-color="#2ea4da" inactive-color="#999999"></el-switch>
          </div>
          <div class="switch_item">
            <span>越界巡逻</span>
            <el-switch v-model="value2" active-color="#2ea4da" inactive-color="#999999"></el-switch>
          </div>
          <div class="switch_item">
            <span>超速行驶</span>
            <el-switch v-model="value3" active-color="#2ea4da" inactive-color="#999999"></el-switch>
          </div>
        </div>
        <div class="rg">
          <div class="switch_item">
            <span>公里桩</span>
            <el-switch v-model="value4" active-color="#30d8a4" inactive-color="#999999"></el-switch>
          </div>
        </div>
      </div>
      <div class="select_wrap">
        <div class="select">
          <el-cascader
            v-model="selectOrg"
            :options="orgList"
            :props="{expandTrigger: 'hover'}"
            @change="selectOrgChange"
            placeholder="请选择机构">
          </el-cascader>
        </div>
        <div class="select">
          <el-input
            placeholder="请输入号牌号码"
            v-model="value6"
            clearable>
          </el-input>
        </div>
      </div>
      <div class="table_wrap">
        <div class="table_hd">
          <span class="ch">车号</span>
          <span>|</span>
          <span class="jg">机构</span>
          <span>|</span>
          <span class="zt">行驶状态</span>
          <span>|</span>
          <span class="dd">地点</span>
          <span>|</span>
          <span class="cz">操作</span>
        </div>
        <div class="table_bd">
          <ul>
            <li :class="index === listActive ? 'active' : ''" v-for="(item, index) in currentData" :key="index" @click="focusCar(item, index)">
              <span class="ch">{{item.carCode}}</span>
              <span class="jg">{{item.organization}}</span>
              <span :class="['zt', item.status ? 'green' : 'red']">{{item.status | formatterStatus}}</span>
              <span class="dd">{{item.address}}</span>
              <span class="cz">
                <img src="../../assets/播放.png" alt @click="handleClick(item, index)">
              </span>
            </li>
          </ul>
        </div>
        <div class="noData" v-if="!currentData.length">暂无数据！</div>
        <div class="pageBox">
          <el-pagination
            background
            small
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage"
            :page-size="8"
            layout="total, prev, pager, next, jumper"
            :total="400">
          </el-pagination>
        </div>
      </div>
    </div>
    <div class="detail_wrap box_back" v-show="showDetail">
      <div class="top">
        <div class="out">
          轨迹查询
          <div class="export_btn">
            <img src="../../assets/导出.png" alt>
            <span>导出</span>
          </div>
        </div>
        <div class="close_btn" @click="showDetail = false">x</div>
      </div>
      <div class="lf">
        <div class="mid">
          <span>浙O1173</span>
          <span>杭州支队一大队</span>
          <div class="timeSelecBox">
            <dateTime></dateTime>
          </div>
          <img src="../../assets/搜索.png" alt>
        </div>
        <div class="cont">
          <div class="cl">
            <div class="c_lf">
              <div>
                <span>起点终点</span>
                <p>1555 - 1542</p>
              </div>
              <div>
                <span>最大车速</span>
                <p>155km/h</p>
              </div>
              <div>
                <span>累计停车</span>
                <p>2次 23分56秒</p>
              </div>
            </div>
            <div class="c_md">
              <div>
                <span>里程</span>
                <p>1555km</p>
              </div>
              <div>
                <span>均速</span>
                <p>155km/h</p>
              </div>
              <div>
                <span>超速</span>
                <p>2次</p>
              </div>
            </div>
            <div class="c_rg">
              <ul>
                <li>
                  <span class="tit">违规停车</span>
                  <span class="ct">2019-5-5 10:20:56 9分12秒 1552</span>
                </li>
                <li>
                  <span class="tit">违规停车</span>
                  <span class="ct">2019-5-5 10:20:56 9分12秒 1552</span>
                </li>
                <li>
                  <span class="tit">违规停车</span>
                  <span class="ct">2019-5-5 10:20:56 9分12秒 1552</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="rg">
        <div class="rl">
          <h6>播放速度</h6>
          <div class="speed">
            <div class="item" v-for="(item, index) in speedList" :key="index" :class="speedActive === index ? 'active' : ''" @click="speedActive = index">{{item}}</div>
          </div>
          <el-progress :text-inside="true" :stroke-width="18" :percentage="50"></el-progress>
          <div class="cz_btn">
            <div class="item">
              <img src="../../assets/播放.png" alt>
              <span>播放</span>
            </div>
            <div class="item">
              <img src="../../assets/回放.png" alt>
              <span>回放</span>
            </div>
          </div>
        </div>
        <div class="rr">
          <div class="rr_hd">
            <span>民警</span>
            <span>现场纠违</span>
            <span>简易事故</span>
            <span>检查核录</span>
          </div>
          <ul>
            <li>
              <span>张三（001130）</span>
              <span>1</span>
              <span>1</span>
              <span>1</span>
            </li>
            <li>
              <span>张三（001130）</span>
              <span>1</span>
              <span>1</span>
              <span>1</span>
            </li>
            <li>
              <span>张三（001130）</span>
              <span>1</span>
              <span>1</span>
              <span>1</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import locusService from "@/api/locusService";
import dateTime from "@/components/dateTime";
export default {
  name: "current",
  data() {
    return {
      value1: null,
      value2: null,
      value3: null,
      value4: null,
      selectOrg: null,
      value6: null,
      value7: null,
      orgList: [],
      listActive: 0,
      showDetail: false,
      currentPage: 1,
      currentData: [
        {
          carCode: "浙OXXXXX警",
          organization: "杭州支队一大队",
          status: 1,
          address: "山柳县科研路与绿洲路十字路口"
        },
        {
          carCode: "浙OXXXXX警",
          organization: "杭州支队一大队",
          status: 0,
          address: "山柳县科研路与绿洲路十字路口"
        },
        {
          carCode: "浙OXXXXX警",
          organization: "杭州支队一大队",
          status: 1,
          address: "山柳县科研路与绿洲路十字路口"
        },
        {
          carCode: "浙OXXXXX警",
          organization: "杭州支队一大队",
          status: 0,
          address: "山柳县科研路与绿洲路十字路口"
        },
        {
          carCode: "浙OXXXXX警",
          organization: "杭州支队一大队",
          status: 1,
          address: "山柳县科研路与绿洲路十字路口"
        }
      ],
      speedList: ["x1", "x2", "x4", "x8", "x16"],
      speedActive: 0
    };
  },
  filters: {
    // 行车状态过滤
    formatterStatus(value) {
      if (value === 0) {
        return "行车异常";
      } else if (value === 1) {
        return "行车正常";
      }
    }
  },
  components: {
    dateTime
  },
  created() {
    this.getOrgList();
  },
  methods: {
    // 获取机构列表
    getOrgList() {
      locusService.getOrgList().then(res => {
        console.log(res);
        this.orgList = res.data || [];
      });
    },
    // 选择机构改变
    selectOrgChange() {},
    // 定位至车辆
    focusCar(item, index) {
      this.listActive = index;
    },
    // 显示轨迹详情
    handleClick(item, index) {
      this.listActive = index;
      this.showDetail = true;
    },
    handleSizeChange() {},
    handleCurrentChange() {}
  }
};
</script>
<style lang="scss" scoped>
.home_wrap {
  width: 0;
  height: 0;
  position: absolute;
  left: 30px;
  top: 156px;
  width: 690px;
  height: auto;
  .data_wrap {
    width: 100%;
    padding-bottom: 15px;
    .top {
      padding: 0 20px;
      overflow: hidden;
      margin: 30px 0 15px 0;
      .lf {
        float: left;
      }
      .rg {
        float: right;
      }
      .switch_item {
        display: inline-block;
        margin-right: 30px;
      }
      span {
        font-size: 14px;
        font-family: "MicrosoftYaHei";
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
        line-height: 22px;
        text-shadow: 0px 3px 3px rgba(18, 8, 116, 0.5);
        display: inline-block;
        margin-right: 10px;
      }
      /deep/ .el-switch__core {
        width: 32px !important;
        height: 14px;
      }
      /deep/ .el-switch__core:after {
        width: 14px;
        height: 13px;
        top: 0;
      }
      /deep/ .el-switch.is-checked .el-switch__core::after {
        margin-left: -14px;
      }
    }
    .select_wrap {
      display: flex;
      justify-content: space-between;
      padding: 0 20px;
      .select {
        width: 310px;
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
  }
  .table_wrap {
    .ch,
    .jg {
      width: 136px;
    }
    .zt {
      width: 100px;
    }
    .dd {
      width: 215px;
    }
    .cz {
      width: 46px;
    }
    .table_hd {
      width: 651px;
      height: 32px;
      background: rgba(52, 84, 117, 0.6);
      border-radius: 4px;
      margin: 10px auto 0;
      line-height: 32px;
      span {
        font-size: 14px;
        color: #11ebff;
        display: inline-block;
        text-align: center;
        font-family: "Microsoft YaHei";
        font-weight: 400;
        text-shadow: 0px 3px 3px rgba(18, 8, 116, 0.5);
        line-height: 22px;
      }
    }
    .table_bd {
      margin-bottom: 15px;
      li {
        height: 30px;
        width: 651px;
        margin: 6px auto;
        cursor: pointer;
        border: 1px solid transparent;
        span {
          font-size: 14px;
          font-family: "Microsoft YaHei";
          font-weight: 400;
          color: rgba(255, 255, 255, 1);
          line-height: 30px;
          text-shadow: 0px 3px 3px rgba(18, 8, 116, 0.5);
          display: inline-block;
          text-align: center;
          margin-right: 3px;
        }
        img {
          vertical-align: middle;
        }
        .green {
          color: green;
        }
        .red {
          color: red;
        }
      }
      li:nth-child(even) {
        background: rgba(230, 225, 225, 0.12);
        border-radius: 4px;
      }
      .active {
        background: rgba(25, 42, 60, 0.78) !important;
        border: 1px solid rgba(52, 113, 175, 1);
        border-radius: 4px;
        span {
          color: rgba(255, 204, 102, 1);
        }
      }
    }
    .noData {
      width: 100%;
      height: 16px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 16px;
      color: #c5d4e3;
      margin-bottom: 15px;
    }
    .pageBox {
      width: 100%;
      padding-left: 20px;
    }
  }
  .detail_wrap {
    position: absolute;
    left: 30;
    top: calc(100% + 10px);
    width: 1440px;
    height: 220px;
    box-shadow: 0px 2px 68px 0px rgba(0, 0, 0, 0.82);
    .top {
      padding: 10px 20px;
      overflow: hidden;
      .out {
        float: left;
        font-size: 14px;
        font-family: "Microsoft YaHei";
        font-weight: 400;
        color: rgba(255, 204, 102, 1);
        line-height: 22px;
        text-shadow: 0px 3px 3px rgba(18, 8, 116, 0.5);
        .export_btn {
          margin: 0 0 0 20px;
          display: inline-block;
          img {
            vertical-align: middle;
            margin-right: 5px;
          }
          span {
            font-size: 14px;
            font-family: "Microsoft YaHei";
            font-weight: 400;
            color: rgba(153, 204, 255, 1);
            line-height: 22px;
            text-decoration: underline;
            cursor: pointer;
          }
        }
      }
      .close_btn {
        float: right;
        width: 14px;
        height: 14px;
        color: #99ccff;
        cursor: pointer;
      }
    }
    .lf {
      float: left;
      .mid {
        padding: 0 20px;
        display: flex;
        align-items: center;
        img {
          cursor: pointer;
          vertical-align: middle;
          margin-left: 20px;
        }
        .timeSelecBox {
          width: 412px;
        }
        span {
          font-size: 15px;
          font-family: "Microsoft YaHei";
          font-weight: 400;
          color: rgba(255, 204, 102, 1);
          line-height: 22px;
          text-shadow: 0px 3px 3px rgba(18, 8, 116, 0.5);
          margin-right: 20px;
        }
        /deep/ .el-input__inner {
          height: 30px;
          background: rgba(6, 36, 61, 1);
          border: 1px solid rgba(52, 113, 175, 1);
        }
        /deep/ .el-range-editor.el-input__inner {
          padding: 0 5px;
        }
        /deep/ input {
          background: none;
        }
        /deep/ .el-date-editor .el-range-input {
          color: #ffcc66;
        }
        /deep/ .el-date-editor .el-range-separator {
          color: #ffcc66;
        }
      }
      .cont {
        padding: 0 20px;
        .cl {
          margin-top: 20px;
          .c_lf {
            display: inline-block;
            width: 200px;
            > div {
              margin: 8px 0;
              span {
                font-size: 13px;
                font-family: "Microsoft YaHei";
                font-weight: 400;
                color: rgba(153, 204, 255, 1);
                line-height: 22px;
                text-shadow: 0px 3px 3px rgba(18, 8, 116, 0.5);
                margin-right: 10px;
              }
              p {
                display: inline;
                font-size: 14px;
                font-family: "Microsoft YaHei";
                font-weight: 400;
                color: rgba(255, 255, 255, 1);
                line-height: 22px;
                text-shadow: 0px 3px 3px rgba(18, 8, 116, 0.5);
              }
            }
          }
          .c_md {
            display: inline-block;
            width: 170px;
            > div {
              margin: 8px 0;
              span {
                font-size: 13px;
                font-family: "Microsoft YaHei";
                font-weight: 400;
                color: rgba(153, 204, 255, 1);
                line-height: 22px;
                text-shadow: 0px 3px 3px rgba(18, 8, 116, 0.5);
                margin-right: 10px;
              }
              p {
                display: inline;
                font-size: 14px;
                font-family: "Microsoft YaHei";
                font-weight: 400;
                color: rgba(255, 255, 255, 1);
                line-height: 22px;
                text-shadow: 0px 3px 3px rgba(18, 8, 116, 0.5);
              }
            }
          }
          .c_rg {
            display: inline-block;
            width: 300px;
            li {
              margin: 8px 0;
              span {
                font-size: 14px;
                font-family: "Microsoft YaHei";
                font-weight: 400;
                line-height: 22px;
                text-shadow: 0px 3px 3px rgba(18, 8, 116, 0.5);
              }
              .tit {
                margin-right: 20px;
                color: rgba(255, 69, 69, 1);
              }
              .ct {
                color: rgba(255, 255, 255, 1);
              }
            }
          }
        }
      }
    }
    .rg {
      float: left;
      .rl {
        width: 320px;
        display: inline-block;
        h6 {
          font-size: 14px;
          font-family: "Microsoft YaHei";
          font-weight: 400;
          color: rgba(153, 204, 255, 1);
          line-height: 22px;
          text-shadow: 0px 3px 3px rgba(18, 8, 116, 0.5);
          margin-bottom: 10px;
        }
        .speed {
          width: 300px;
          height: 26px;
          background: rgba(41, 81, 121, 1);
          border: 1px solid rgba(89, 139, 190, 1);
          border-radius: 4px;
          margin-bottom: 20px;
          .item {
            display: inline-block;
            width: 20%;
            text-align: center;
            line-height: 24px;
            font-size: 14px;
            font-weight: 400;
            color: rgba(255, 255, 255, 1);
            text-shadow: 0px 1px 1px rgba(18, 8, 116, 0.8);
            border-right: 1px solid rgba(89, 139, 190, 1);
            box-sizing: border-box;
            cursor: pointer;
            &:last-child {
              border-right: none;
            }
          }
          .active {
            background: rgba(153, 204, 255, 1);
          }
        }
        /deep/ .el-progress-bar {
          width: 300px;
        }
        /deep/ .el-progress-bar__outer {
          border-radius: 5px;
          background: #598bbe;
        }
        .cz_btn {
          margin-top: 20px;
          text-align: center;
          .item {
            display: inline-block;
            img {
              vertical-align: middle;
              margin-right: 5px;
            }
            span {
              font-size: 14px;
              font-family: "Microsoft YaHei";
              font-weight: 400;
              color: rgba(153, 204, 255, 1);
              line-height: 22px;
              text-decoration: underline;
              cursor: pointer;
            }
            &:first-child {
              margin-right: 20px;
            }
          }
        }
      }
      .rr {
        display: inline-block;
        width: 350px;
        .rr_hd {
          margin-bottom: 10px;
          span {
            font-size: 14px;
            font-family: "Microsoft YaHei";
            font-weight: 400;
            color: rgba(153, 204, 255, 1);
            line-height: 22px;
            text-shadow: 0px 3px 3px rgba(18, 8, 116, 0.5);
            width: 70px;
            display: inline-block;
            text-align: center;
            &:first-child {
              width: 110px;
              text-align: left;
            }
          }
        }
        li {
          margin-bottom: 15px;
          span {
            font-size: 14px;
            font-family: "Microsoft YaHei";
            font-weight: 400;
            color: rgba(255, 255, 255, 1);
            line-height: 22px;
            text-shadow: 0px 3px 3px rgba(18, 8, 116, 0.5);
            width: 70px;
            display: inline-block;
            text-align: center;
            &:first-child {
              width: 110px;
            }
          }
        }
      }
    }
  }
}
/deep/ .el-select-dropdown__item.hover {
  background: none;
}
</style>
