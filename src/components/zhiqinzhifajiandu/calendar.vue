<template>
  <div class="box-wp box_back thin calendar">
    <div class="police">
      <p class="title">民警</p>
      <div class="content">
        <div class="people">
          <div class="pic">
            <img src="../../assets/img/minjing/p1.png" alt>
          </div>
          <div class="detail">
            <div class="el">
              <i class="ic">
                <img src="../../assets/img/icon/usrname.png" alt>
              </i>
              <span class="infos">张全单</span>
            </div>
            <div class="el">
              <i class="ic">
                <img src="../../assets/img/icon/carnum.png" alt>
              </i>
              <span class="infos">001123</span>
            </div>
            <div class="el">
              <i class="ic">
                <img src="../../assets/img/icon/flag.png" alt>
              </i>
              <span class="infos">杭州支队</span>
            </div>
          </div>
        </div>
        <div class="time">
          <i class="ic">
            <img src="../../assets/img/icon/time.png" alt>
          </i>
          <span class="infos">2011-11-12 02:02:21</span>
        </div>
        <div class="btn">
          <el-button type="success" size="small">勤务时间处理违法</el-button>
        </div>
      </div>
    </div>
    <div class="timeSelect">
      <el-calendar v-model="value"></el-calendar>
    </div>
    <div class="timeArea">
      <div class="shiduan">
        <div class="h">
          <span class="tit">执勤时段</span>
        </div>
        <div class="b">
          <div class="list-e">
            <i>1</i>
            08:00 - 10:00
          </div>
          <div class="list-e">
            <i>2</i>
            08:00 - 10:00
          </div>
          <div class="list-e">
            <i>3</i>
            08:00 - 10:00
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "calendar",
  components: {},
  mouted() {},
  data() {
    return {
      value: new Date()
    };
  }
};
</script>
<style lang="scss"  scoped>
/deep/ .el-calendar-day {
  position: relative;
  text-align: center;
}
/deep/ .el-calendar-day span {
  text-align: center;
  line-height: 52px;
}
/deep/.calendar-wp .el-button {
  color: #fff;
  background: transparent;
  border: 1px solid #4266af;
}
/deep/ .el-calendar-table td.is-selected {
  background-color: #ff9933;
}
/deep/ .el-calendar-table .el-calendar-day:hover {
  border: 1px solid #fff;
  background-color: #ff9933;
}
/deep/ .el-calendar-table tr td:first-child {
  border-left: 1px solid #4266af;
}
/deep/ .el-calendar-table thead th {
  color: #fff;
}
/deep/ .el-calendar-table tr:first-child td {
  border-top: 1px solid #4266af;
}
/deep/ .el-calendar-table td {
  color: #fff;
}
/deep/ .el-calendar__title {
  color: #fff;
}
/deep/ .el-calendar-table td {
  border-bottom: 1px solid #4266af;
  border-right: 1px solid #4266af;
}
/deep/ .el-calendar-table thead th {
  padding: 0 0 11px;
}
/deep/ .el-calendar__header {
  margin: 0 18px;
  padding: 10px 0px;
  border-bottom: 1px solid #4266af;
}
/deep/ .el-calendar-table .el-calendar-day {
  height: 44px;
  padding: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.el-calendar {
  background-color: transparent;
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
    margin-right: 6px;
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
  background: url("../../assets/img/minjing/ubg.png") no-repeat center;
  background-size: 286px 334px !important;
  padding: 70px 35px 30px 35px;
  height: 337px;
}
.box-wp {
  width: 100%;
  height: 100%;
  padding: 20px;
  .police {
    width: 30%;
    height: 100%;
    margin-right: 2.25%;
    float: left;
    .title {
      width: 100%;
      height: 30px;
      line-height: 30px;
      font-size: 14px;
      color: #fc6;
    }
    .content {
      width: 100%;
      height: calc(100% - 30px);
      background: url("../../assets/img/minjing/ubg.png") no-repeat center;
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
        .detail {
          display: flex;
          flex-direction: column;
          justify-content: center;
          margin-left: 20px;
          .el {
            margin-bottom: 20px;
            &:last-child {
              margin-bottom: 0;
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
      }
    }
  }
  .timeSelect {
    width: 47.5%;
    height: 100%;
    margin-right: 2.25%;
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
    width: 18%;
    height: 100%;
    float: left;
  }
}
</style>
