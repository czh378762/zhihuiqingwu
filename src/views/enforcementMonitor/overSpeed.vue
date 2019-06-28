<template>
  <div class="yichangQinwu_wrap">
    <div class="top">
      <div class="top_lf">超速</div>
    </div>
    <div class="content clearfix">
      <div class="c_lf">
        <div class="select_wrap">
          <div class="select">
            <el-select v-model="value" placeholder="请选择机构">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </div>
          <div class="select">
            <el-input
              placeholder="请输入号牌号码"
              v-model="value1"
              clearable>
            </el-input>
          </div>
        </div>
        <div class="select_wrap" style="margin:10px 0;">
          <dateTime></dateTime>
        </div>
        <div class="cont box_back">
          <tables :tableData="tableData" :tableColumns="tableColumns"></tables>
          <div class="pageBox" style="margin-bottom: 15px;">
            <el-pagination
              background
              small
              @current-change="handleCurrentChange11"
              :current-page="currentPage1"
              :page-size="8"
              layout="total, prev, pager, next"
              :total="400">
            </el-pagination>
          </div>
        </div>
      </div>
      <div class="c_rg">
        <zhuapai></zhuapai>
      </div>
    </div>
  </div>
</template>
<script>
import tables from "@/components/tables";
import dateTime from "@/components/dateTime"
// import pagination from "@/components/pagination";
// import timeSwiper from "@/components/timeSwiper";
import zhuapai from "@/components/zhiqinzhifajiandu/zhuapai";

export default {
  data() {
    return {
      mjStyle: {
        padding: "0",
        height: "390px",
        "margin-bottom": "0"
      },
      tableData: [
        {
          carCode: "浙OXXXX警",
          organization: "杭州支队一大队",
          time: "2019-05-05 12:12:12",
          address: "G50沪渝高速K198",
          source: "抓拍"
        },
        {
          carCode: "浙OXXXX警",
          organization: "杭州支队一大队",
          time: "2019-05-05 12:12:12",
          address: "G50沪渝高速K198(主线)",
          source: "GPS"
        },
        {
          carCode: "浙OXXXX警",
          organization: "杭州支队一大队",
          time: "2019-05-05 12:12:12",
          address: "G50沪渝高速K198(主线)",
          source: "抓拍"
        }
      ],
      tableColumns: [
        {
          title: "车号",
          key: "carCode",
          width: "20%"
        },
        {
          title: "机构",
          key: "organization",
          width: "20%"
        },
        {
          title: "时间",
          key: "time",
          width: "20%"
        },
        {
          title: "地点",
          key: "address",
          width: "28%"
        },
        {
          title: "来源",
          key: "source",
          width: "12%"
        }
      ],
      showtype: "shigu",
      value: null,
      value1: "",
      value7: null,
      options: [{ value: "123", label: "123" }]
    };
  },
  components: {
    zhuapai,
    tables,
    dateTime
  },
  methods: {
    changes(value) {
      if (!value) return;
      this.showtype = value;
    }
  }
};
</script>
<style lang="scss" scoped>
.yichangQinwu_wrap {
  height: 100%;
  box-sizing: border-box;
  .top {
    padding: 30px 0 0 100px;
    .top_lf {
      display: inline-block;
      width: 13%;
      color: #ffcc66;
      font-size: 14px;
      font-weight: 400;
    }
  }
  .content {
    margin-top: 10px;
    padding-left: 86px;
    padding-right: 20px;
    height: 85%;
    .c_lf {
      float: left;
      width: 44%;
      height: 100%;
      margin-right: 20px;
      display: flex;
      flex-direction: column;
      .cont {
        flex: 1;
        border: 1px solid #4266af;
        overflow: hidden;
      }
      .select_wrap {
        display: flex;
      }
      .select {
        flex: 1;
        &:first-child {
          margin-right: 20px;
        }
      }
    }
    .c_rg {
      float: left;
      width: calc(56% - 20px);
      display: flex;
      flex-direction: column;
      height: 100%;
      //   overflow: hidden;
      .rb {
        padding: 20px;
        border: 1px solid #4266af;
        flex: 1;
        margin-top: 20px;
        .rb_detail {
          .line {
            width: 1px;
            height: 280px;
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
          }
          h6 {
            font-size: 14px;
            color: #ffcc66;
          }
          .image-wrapper {
            width: 100px;
            margin-right: 50px;
            img {
              width: 100px;
            }
          }
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
      .minjing {
        padding: 20px 40px;
        border: 1px solid #4266af;
        margin-bottom: 20px;
      }
      .minjing .l .image-wrapper {
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
  /deep/ .el-select {
    width: 100%;
  }
  /deep/ .el-input__inner {
    background: #06243d;
    height: 30px;
    border: 1px solid rgba(52, 113, 175, 1);
    color: #ffcc66;
  }
  /deep/ .el-input__icon {
    line-height: 20px;
  }
  /deep/ .el-select-dropdown {
    background-color: #06243d;
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
  /deep/ input {
    background: none;
  }
  /deep/ .el-date-editor--datetimerange.el-input__inner {
    width: 100%;
  }
  /deep/ .el-date-editor .el-range-input {
    color: #ffcc66;
  }
  /deep/ .el-date-editor .el-range-separator {
    color: #ffffff;
    line-height: 20px;
  }
}
</style>
