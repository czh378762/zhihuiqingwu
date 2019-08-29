<template>
  <div class="box-wp box_back thin calendar">
    <div class="police">
      <p class="title">民警</p>
      <div class="content">
        <div class="people">
          <div class="pic">
            <img src="../../assets/img/iconImg/p1.png" alt>
          </div>
          <div class="detail">
            <div class="el">
              <i class="ic">
                <img src="../../assets/img/iconImg/icon12.png" alt>
              </i>
              <span class="infos">{{policeData.mjxm || "暂无数据"}}</span>
            </div>
            <div class="el">
              <i class="ic">
                <img src="../../assets/img/iconImg/icon13.png" alt>
              </i>
              <span class="infos">{{policeData.mjjh || "暂无数据"}}</span>
            </div>
            <div class="el">
              <i class="ic">
                <img src="../../assets/img/iconImg/icon14.png" alt>
              </i>
              <span class="infos">{{policeData.bmmc || "暂无数据"}}</span>
            </div>
          </div>
        </div>
        <div class="time">
          <i class="ic">
            <img src="../../assets/img/iconImg/icon07.png" alt>
          </i>
          <span class="infos">{{policeData.occurTime || "暂无数据"}}</span>
        </div>
        <div class="btn">
          <div>非勤务时间处理{{policeData.typeName}}</div>
        </div>
      </div>
    </div>
    <div class="timeSelect">
      <Calendar
        ref="Calendar"
        @choseDay="clickDay"
        @changeMonth="changeMonth"
        :markDate="markArr"
        :sundayStart="false"></Calendar>
    </div>
    <div class="timeArea">
      <div class="shiduan">
        <div class="h">
          <span class="tit">执勤时段</span>
        </div>
        <div class="b">
          <div v-show="schedulingDetail.length" v-for="(item, index) in schedulingDetail" :key="index" class="list-e">
            <i>{{index + 1}}.</i>
            {{item}}
          </div>
          <div v-show="!schedulingDetail.length" class="list-e">
            暂无排班！
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Calendar from "@/components/vue-calendar/calendar.vue";
import abnormalDataService from "@/api/abnormalDataService.js";
export default {
  name: "calendar",
  props: {
    selectDate: {},
    policeData: {
      type: Object,
      default: () => {
        return {};
      }
    }
  },
  model: {
    prop: "selectDate",
    event: "changeDate"
  },
  data() {
    return {
      schedulingData: [],
      markArr: []
    };
  },
  components: {
    Calendar
  },
  watch: {
    policeData: {
      immediate: true,
      handler(newval) {
        if (newval.mjjh) {
          this.getSchedulingMsg();
        } else {
          this.schedulingData = [];
          this.markArr = [];
        }
      }
    },
    selectDate: {
      immediate: true,
      handler(newval) {
        if (newval && newval !== "Invalid date") {
          this.$nextTick(() => {
            this.$refs.Calendar.ChoseMonth(newval);
          });
        }
      }
    }
  },
  computed: {
    // 排班详情
    schedulingDetail() {
      let timeStr = "";
      this.schedulingData.forEach(item => {
        if (item.dutyDate === this.selectDate) {
          timeStr = item.dutyTime;
        }
      });
      if (timeStr) {
        return timeStr.split(",");
      } else {
        return [];
      }
    }
  },
  methods: {
    // 切换月份
    toChoseMonth() {
      this.$nextTick(() => {
        if (this.selectDate && this.selectDate !== "Invalid date") {
          this.$refs.Calendar.ChoseMonth(this.selectDate);
        }
      });
    },
    // 点击选中日期
    clickDay(date) {
      let arr = date.split("/");
      let y = arr[0];
      let m = arr[1] < 10 ? "0" + arr[1] : arr[1];
      let d = arr[2] < 10 ? "0" + arr[2] : arr[2];
      let cdate = `${y}-${m}-${d}`;
      cdate = this.$moment(cdate).format("YYYY-MM-DD");
      this.$emit("changeDate", cdate);
    },
    // 切换月份
    changeMonth(date) {
      let arr = date.split("/");
      let y = arr[0];
      let m = arr[1] < 10 ? "0" + arr[1] : arr[1];
      let d = arr[2] < 10 ? "0" + arr[2] : arr[2];
      let cdate = `${y}-${m}-${d}`;
      this.getSchedulingMsg(cdate);
    },
    // 获取排班信息
    getSchedulingMsg(date) {
      let params = {
        userId: this.policeData.mjjh,
        dutyDate: date || this.policeData.occurTime
      };
      abnormalDataService.getSchedulingMsg(params).then(res => {
        console.log(res);
        if (res.code === "0") {
          let data = res.data || [];
          this.schedulingData = data;
          let arr = [];
          data.forEach(item => {
            if (arr.indexOf(item.dutyDate) === -1) {
              arr.push(item.dutyDate);
            }
          });
          this.markArr = arr;
        }
      });
    }
  }
};
</script>
<style lang="scss"  scoped>
/deep/ .wh_content_all {
  background-color: transparent !important;
  padding-bottom: 0 !important;
}
/deep/ .wh_top_changge {
  margin-bottom: 8px;
  li {
    height: 30px !important;
  }
}
/deep/ .wh_content {
  .wh_content_item {
    width: 14.285% !important;
    .wh_item_date {
      &::before {
        content: "休";
        width: 18px;
        height: 18px;
        text-align: center;
        line-height: 18px;
        font-size: 12px !important;
        color: #fff;
        background: #328815;
        position: absolute;
        left: 0;
        top: 0;
      }
    }
    .wh_isMark {
      border-radius: 0;
      background: transparent;
      &:before {
        content: "";
        width: 0;
        height: 0;
      }
    }
  }
  &:last-child {
    .wh_content_item {
      border-left: 1px solid #4266af;
      border-top: 1px solid #4266af;
      .wh_item_date {
        width: 100% !important;
        &:hover {
          background: #f93;
        }
      }
      .wh_isToday {
        border-radius: 0;
        background: transparent;
      }
      .wh_chose_day {
        border-radius: 0;
        background: #f93;
      }
      &:nth-child(7n) {
        border-right: 1px solid #4266af;
      }
      &:nth-last-child(1) {
        border-bottom: 1px solid #4266af;
      }
      &:nth-last-child(2) {
        border-bottom: 1px solid #4266af;
      }
      &:nth-last-child(3) {
        border-bottom: 1px solid #4266af;
      }
      &:nth-last-child(4) {
        border-bottom: 1px solid #4266af;
      }
      &:nth-last-child(5) {
        border-bottom: 1px solid #4266af;
      }
      &:nth-last-child(6) {
        border-bottom: 1px solid #4266af;
      }
      &:nth-last-child(7) {
        border-bottom: 1px solid #4266af;
      }
    }
  }
}
.shiduan {
  background: #29588791;
  border-radius: 5px;
  border: 1px solid #4266af;
  height: 100%;
}
.shiduan .tit {
  color: #fff;
  display: inline-block;
  text-align: center;
}
.shiduan .h {
  padding: 12px;
  text-align: center;
  border-bottom: 1px solid #4266af;
}
.shiduan .b {
  padding: 12px;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
}
.list-e {
  margin-bottom: 20px;
  font-size: 14px;
  line-height: 14px;
  i {
    margin-right: 10px;
  }
}
.dangshiren-pic {
  text-align: center;
}
.image-wrapper {
  display: inline-block;
}
.image-wrapper img {
  width: 100%;
  object-fit: cover;
  height: 100%;
}
.ic {
  margin-right: 6px;
}
.box-tit {
  font-size: 14px;
  color: rgba(255, 204, 102, 1);
  display: inline-block;
}
.infos {
  font-size: 14px;
  display: inline-block;
  color: rgba(255, 255, 255, 1);
}
.info-label {
  width: 120px;
  font-size: 13px;
  display: inline-block;
  font-weight: 400;
  margin-right: 18px;
  color: rgba(3, 216, 234, 1);
}
.calendar {
  height: 415px;
}
.box-tit {
  font-size: 14px;

  color: rgba(255, 204, 102, 1);
}
.video-w {
  border-radius: 5px;
  overflow: hidden;

  width: 420px;
  height: 156px;
  margin-top: 27px;
}
.video-w .v-h {
  width: 420px;
  background: #1a416a;
  height: 30px;
}
.video-w .v-h span {
  color: #fff;
  display: inline-block;
  padding: 6px;
}
.video-content {
  height: 230px;
  width: 420px;
}
.main-info {
  margin-bottom: 15px;
}
.box-header {
  padding: 15px 10px 10px;
}
.box-content {
  padding: 0 35px 10px;
}
.u-bg {
  background: url("../../assets/img/iconImg/ubg.png") no-repeat center;
  background-size: 286px 334px !important;
  padding: 70px 35px 30px 35px;
  height: 337px;
}
.box-wp {
  width: 100%;
  height: 100%;
  padding: 20px;
  .police {
    width: calc(50% - 200px);
    height: 100%;
    float: left;
    .title {
      width: 100%;
      height: 30px;
      line-height: 30px;
      font-size: 14px;
      color: #fc6;
      margin-bottom: 8px;
    }
    .content {
      width: 100%;
      height: calc(100% - 30px);
      background: url("../../assets/img/iconImg/ubg.png") no-repeat center;
      background-size: 100% 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      .people {
        width: 100%;
        height: 120px;
        display: flex;
        justify-content: center;
        margin-bottom: 20px;
        padding: 0 20px;
        .detail {
          display: flex;
          flex-direction: column;
          justify-content: center;
          margin-left: 20px;
          .el {
            margin-bottom: 20px;
            &:last-child {
              margin-bottom: 0;
              align-items: flex-start;
            }
            display: flex;
            align-items: center;
            i {
              display: block;
              height: 18px;
              margin-right: 8px;
            }
            span {
              line-height: 18px;
            }
          }
        }
      }
      .time {
        width: 100%;
        display: flex;
        justify-content: center;
        height: 18px;
        align-items: center;
        margin-bottom: 20px;
        i {
          display: block;
          height: 18px;
        }
      }
      .btn {
        display: flex;
        justify-content: center;
        div {
          height: 30px;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 4px;
          background: #ff9933;
          font-size: 14px;
          letter-spacing: 2px;
          padding-left: 12px;
          padding-right: 10px;
        }
      }
    }
  }
  .timeSelect {
    width: 410px;
    height: 100%;
    // margin-right: 2.25%;
    margin: 0 30px;
    float: left;
    /deep/ .el-calendar__header {
      margin: 0;
      padding: 0;
      padding-bottom: 10px;
    }
    /deep/ .el-calendar__button-group {
      background: transparent;
      border: 1px solid #4266af;
      border-radius: 3px;
      .el-button {
        background: transparent;
        border: 0;
        color: #fff;
        border-right: 1px solid #4266af;
        &:last-child {
          border: 0;
        }
      }
    }
  }
  .timeArea {
    width: calc(50% - 270px);
    height: 100%;
    float: left;
  }
}
</style>
