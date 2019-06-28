<template>
  <div class="yichangQinwu_wrap">
    <div class="top">
      <div class="top_lf">执勤执法数据</div>
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
          <dateTime defaultstart="2019-05-12 00:00:00" defaultend="2019-05-12 00:00:00" v-model="searchTime"></dateTime>
        </div>
        <div class="cont box_back">
          <el-scrollbar style="height: 100%;">
            <el-collapse v-model="activeName" accordion @change="change">
              <el-collapse-item title="非勤务时间处理违法" name="1">
                <tables :tableData="tableData" :tableColumns="tableColumns"></tables>
                <pagination></pagination>
              </el-collapse-item>
              <el-collapse-item title="非勤务时间处理事故" name="2"></el-collapse-item>
              <el-collapse-item title="非勤务时间检查核录" name="3"></el-collapse-item>
            </el-collapse>
          </el-scrollbar>
        </div>
      </div>
      <div class="c_rg">
        <div class="c_rg_top">
          <calendar></calendar>
        </div>
        <div class="c_rg_bot">
          <feiqinwuTime v-show="activeName == '1'"></feiqinwuTime>
          <el-scrollbar style="height: 100%;" ref="scrollBar">
            <feiqinwuShigu v-show="activeName == '2'"></feiqinwuShigu>
          </el-scrollbar>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import weifa from "@/components/weifa";
import tables from "@/components/tables";
// import zhuapai from "@/components/zhuapai";
import pagination from "@/components/pagination";
// import timeSwiper from "@/components/timeSwiper";
import calendar from "@/components/zhiqinzhifajiandu/calendar.vue";
import feiqinwuTime from "@/components/feiqinwuTime";
import feiqinwuShigu from "@/components/feiqinwuShigu";
import dateTime from "@/components/dateTime";
export default {
  name: "overtimeEnforcement",
  data() {
    return {
      activeName: "2",
      value: null,
      value1: "",
      value7: null,
      options: [{ value: "123", label: "123" }],
      type: 1,
      searchTime: "",
      tableData: [
        {
          police: "张全单",
          organization: "杭州支队一大队",
          time: "2019-05-05 12:12:12"
        },
        {
          police: "张全单",
          organization: "杭州支队一大队",
          time: "2019-05-05 12:12:12"
        },
        {
          police: "张全单",
          organization: "杭州支队一大队",
          time: "2019-05-05 12:12:12"
        }
      ],
      tableColumns: [
        {
          title: "民警",
          key: "police",
          width: "33.33%"
        },
        {
          title: "机构",
          key: "organization",
          width: "33.33%"
        },
        {
          title: "时间",
          key: "time",
          width: "33.33%"
        }
      ]
    };
  },
  components: {
    tables,
    pagination,
    calendar,
    feiqinwuTime,
    feiqinwuShigu,
    dateTime
  },
  mounted() {
    window.addEventListener("resize", () => {
      this.$nextTick(() => {
        let dom1 = document.getElementsByClassName("el-scrollbar__wrap")[0];
        let dom2 = document.getElementsByClassName("box_back")[0];

        let dom3 = document.getElementsByClassName("el-scrollbar__thumb")[0];
        console.log(dom1.offsetHeight);
        console.log(dom2.offsetHeight);
        setTimeout(() => {
          if (dom1.offsetHeight > dom2.offsetHeight) {
            dom3.style.height = 0;
            console.log(dom3);
          }
        }, 1000);
      });
    });
  },
  methods: {
    change(value) {
      if (!value) return;
      this.type = value;
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
    padding-left: 100px;
    height: 85%;
    .c_lf {
      float: left;
      width: 30%;
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
          margin-right: 40px;
        }
      }
    }
    .c_rg {
      float: left;
      width: 66%;
      display: flex;
      flex-direction: column;
      height: 100%;
      overflow: hidden;
      .c_rg_top {
        width: 100%;
        height: 390px;
        margin-bottom: 20px;
      }
      .c_rg_bot {
        width: 100%;
        height: calc(100% - 410px);
        border: 1px solid #4266af;
        border-radius: 4px;
      }
      .rb {
        padding: 20px;
        border: 1px solid #4266af;
        flex: 1;
        margin-top: 20px;
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
  /deep/ .el-collapse-item {
    &:last-child {
      .el-collapse-item__wrap {
        border-bottom: 0 !important;
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
