<template>
    <div class="table_wrap">
        <div class="table_hd">
            <p v-for="(item, index) in tableColumns" :key="index" :style="{width: item.width}">{{item.title}}</p>
        </div>
        <div class="table_bd">
            <ul>
                <li :class="activeIndex === index ? 'active' : ''" v-for="(item, index) in tableData" :key="index" @click="handleClick(item, index)">
                    <p class="ellipsis" v-for="(item2, index2) in tableColumns" :key="'index' + index2" :style="{width: item2.width}">
                      <span class="ellipsis" :title="getHtmlContent(item2.render(item))" v-if="item2.render" v-html="item2.render(item)"></span>
                      <span class="ellipsis" :title="item[item2.key]" v-else>{{item[item2.key]}}</span>
                    </p>
                </li>
            </ul>
        </div>
        <div class="noData" v-show="!tableData.length">暂无数据！</div>
    </div>
</template>

<script>
export default {
  name: "tables",
  props: {
    tableData: {
      type: Array,
      default: () => {
        return [];
      }
    },
    tableColumns: {
      type: Array,
      default: () => {
        return [];
      }
    }
  },
  data() {
    return {
      activeIndex: 0
    };
  },
  watch: {
    tableData() {
      this.activeIndex = 0;
    }
  },
  methods: {
    handleClick(item, index) {
      this.activeIndex = index;
      this.$emit("change", item);
    },
    getHtmlContent(str) {
      let arr1 = str.split("</");
      let arr2 = arr1[0].split(">");
      return arr2[1];
    }
  }
};
</script>
<style lang="scss" scoped>
.table_wrap {
  width: 100%;
  padding: 20px;
  flex: 1;
  .xm {
    width: 25%;
  }
  .xb {
    width: 10%;
  }
  .card {
    width: 38%;
  }
  .cl {
    width: 23%;
  }
  .table_hd {
    height: 32px;
    background: rgba(52, 84, 117, 0.6);
    border-radius: 4px;
    padding-top: 8px;
    p {
      height: 16px;
      display: flex;
      justify-content: center;
      align-items: center;
      float: left;
      font-size: 14px;
      color: #11ebff;
      text-align: center;
      font-family: "Microsoft YaHei";
      font-weight: 400;
      text-shadow: 0px 3px 3px rgba(18, 8, 116, 0.5);
      border-right: solid 1px #5f8baf;
      padding: 0 10px;
      &:last-child {
        border-right: none;
      }
    }
  }
  .table_bd {
    li {
      height: 32px;
      cursor: pointer;
      border: 1px solid transparent;
      border-radius: 4px;
      margin: 6px 0;
      &:last-child {
        margin-bottom: 0;
      }
      p {
        height: 100%;
        font-size: 14px;
        font-family: "Microsoft YaHei";
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
        line-height: 30px;
        text-shadow: 0px 3px 3px rgba(18, 8, 116, 0.5);
        text-align: center;
        float: left;
        overflow: hidden;
        padding: 0 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        span {
          display: block;
          width: 100%;
          font-size: 14px;
          font-family: "Microsoft YaHei";
          font-weight: 400;
          color: rgba(255, 255, 255, 1);
        }
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
      p {
        span {
          color: rgba(255, 204, 102, 1);
        }
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
    margin-top: 20px;
  }
}
</style>
