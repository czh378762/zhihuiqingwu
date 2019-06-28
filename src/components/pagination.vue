<template>
    <div class="pagination_wrap">
        <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page.sync="currentPage3"
            :page-size="10"
            layout="prev, pager, next, jumper,total"
            :total="20">
        </el-pagination>
    </div>
</template>

<script>
export default {
  name: "pagetop",
  components: {},
  data() {
    return {
      currentPage3: 1
    };
  },
  methods: {
    handleSizeChange(val) {
      // console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      // console.log(`当前页: ${val}`);
    }
  }
};
</script>
<style lang="scss" scoped>
.pagination_wrap {
  height: 30px;
  margin: 20px;
  background: rgba(52, 84, 117, 0.6);
  border-radius: 4px;
  /deep/ .el-pagination__editor.el-input {
    width: 30px;
  }
  /deep/ .el-pagination__editor.el-input .el-input__inner {
    height: 20px;
  }
  /deep/ .el-pagination {
    color: #ffffff;
  }
  /deep/ .el-pagination button:disabled {
    background: none;
  }
  /deep/ .el-pager li {
    background: none;
    cursor: pointer;
  }
  /deep/ .el-pagination .btn-next {
    background: none;
  }
  /deep/ .el-pagination .btn-prev {
    background: none;
  }
  /deep/ .el-input__inner {
    background: none;
    color: #ffffff;
    font-size: 14px;
  }
  /deep/ .el-pagination__jump {
    color: #ffffff;
    font-size: 14px;
  }
  /deep/ .el-pagination__total {
    color: #ffffff;
    margin-left: 20px;
  }
  /deep/ .el-pager li {
    border: solid 1px #8ca7c2;
    color: #8ca7c2;
    min-width: 20px;
    height: 20px;
    margin: 4px;
    line-height: 18px;
    border-radius: 2px;
  }
  /deep/ .el-pager li.active {
    background: #e28c3a;
    color: #000000;
    border: solid 1px #e28c3a;
  }
}
</style>
