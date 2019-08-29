<template>
  <div class="dateTime">
    <div class="startTime">
      <el-date-picker
        class="common-focus"
        :clearable="false"
        :editable="false"
        v-model="startTime"
        type="datetime"
        placeholder="选择起始时间"
        :default-value="defaultstart"
        default-time="00:00:00"
        :picker-options="startOptions"
        @change="startChange"
        :value-format="type === 'date' ? 'yyyy-MM-dd' : 'yyyy-MM-dd HH:mm:ss'"
        >
      </el-date-picker>
    </div>
    <span class="to"></span>
    <div class="endTime">
      <el-date-picker
        class="common-focus"
        :clearable="false"
        :editable="false"
        v-model="endTime"
        type="datetime"
        placeholder="选择结束时间"
        :default-value="defaultend"
        default-time="00:00:00"
        :picker-options="endOptions"
        @change="endChange"
        :value-format="type === 'date' ? 'yyyy-MM-dd' : 'yyyy-MM-dd HH:mm:ss'"
        >
      </el-date-picker>
    </div>
  </div>
</template>

<script>
export default {
  name: "dateTime",
  props: {
    value: {},
    type: {
      default: "datetime"
    },
    defaultstart: {},
    defaultend: {}
  },
  data() {
    return {
      startTime: "",
      endTime: ""
    };
  },
  watch: {
    defaultstart: {
      immediate: true,
      handler(newval) {
        this.startTime = newval;
      }
    },
    defaultend: {
      immediate: true,
      handler(newval) {
        this.endTime = newval;
      }
    },
    value(val) {
      if (val) {
        let time = val.split("&");
        this.startTime = time[0];
        this.endTime = time[1];
      }
    }
  },
  computed: {
    startOptions() {
      let self = this;
      return {
        disabledDate(time) {
          if (self.endTime) {
            return time.getTime() > new Date(self.endTime).getTime();
          }
        }
      };
    },
    endOptions() {
      let self = this;
      return {
        disabledDate(time) {
          if (self.startTime) {
            return new Date(self.startTime).getTime() > time.getTime();
          }
        }
      };
    }
  },
  methods: {
    // 获取时间段
    getDateTime() {
      return {
        startTime: this.startTime,
        endTime: this.endTime
      };
    },
    // 开始时间改变
    startChange(value) {
      this.$emit("input", value + "&" + this.endTime);
      this.$emit("change", value + "&" + this.endTime);
    },
    // 结束时间改变
    endChange(value) {
      this.$emit("input", this.startTime + "&" + value);
      this.$emit("change", this.startTime + "&" + value);
    }
  }
};
</script>

<style lang="scss" scoped>
.el-date-editor.el-input,
.el-date-editor.el-input__inner {
  width: 100%;
}
/deep/ .el-input__inner {
  color: #fff;
}
/deep/ .el-input__icon {
  line-height: 30px !important;
}
.dateTime {
  width: 100%;
  display: flex;
  align-items: center;
  .startTime,
  .endTime {
    flex: 1;
    height: 100%;
  }
  .to {
    display: block;
    width: 8px;
    height: 1px;
    background: #308eba;
    margin: 0 6px;
  }
}
</style>
