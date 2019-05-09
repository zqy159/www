<template>
  <div style="margin:500px 300px">

    <el-popover placement="top" width="400" height='500' trigger="click">
      <el-input placeholder="请输入搜索内容" prefix-icon="el-icon-search" v-model="filterVal"></el-input>
      <el-tree :data="localData" show-checkbox default-expand-all node-key="id" ref="tree" highlight-current @check="handleNodeClick" @check-change="checkChange">
      </el-tree>
      <input type="text" slot="reference" @click="handleClick">
      <el-select>
        
      </el-select>
    </el-popover>
  </div>
</template>

<script>
export default {
  methods: {
    handleClick() {

    },
    checkChange(row, flag) {
      // console.log(1)

    },
    handleNodeClick(row, arr, z) {
      if (row.id == 0 && arr.checkedKeys.length != 0) {
        this.checkData = [{ id: 0, label: '选择全部' }]
      } else {
        this.checkData = arr.checkedNodes.filter(item => {
          return item.id != 0
        })
      }

      this.$refs.tree.setCheckedNodes(this.checkData)
    }
  },

  data() {
    return {
      checkData: [],
      localData: [],
      filterVal: '',
      options: [],
    };
  },
  created() {
    for (var i = 1; i < 1000; i++) {
      this.options.push(
        { id: i, label: '测试数据' + i }
      )
    }

    this.localData = this.options.slice(0, 50)
    this.localData.unshift({ id: 0, label: '选择全部' })
    this.$watch('filterVal', (d) => {
      this.localData = this.options.filter((item) => {
        return item.label.includes(d)
      }).slice(0, 50)
      this.localData.unshift({ id: 0, label: '选择全部' })

      this.$nextTick(() => {
        this.$refs.tree.setCheckedNodes(this.checkData)
      })
    })
  },

  mounted() {
    var el = this.$refs.tree.$el
    var that = this
    el.onscroll = () => {
      var length = this.localData.length
      if (el.scrollTop >= (length - 1) * 26 - el.clientHeight) {

        that.localData = that.localData.concat(this.options.filter((item) => {
          return item.label.includes(that.filterVal)
        }).slice(length, length + 50))

        that.$nextTick(() => {
          that.$refs.tree.setCheckedNodes(that.checkData)
        })

      }
    }
  }
};
</script>

<style lang="scss">
.el-popover {
  height: 300px !important;
  .el-tree {
    height: 270px;
    overflow: auto;
  }
  .el-checkbox {
    position: absolute;
    right: 0;
  }
}
</style>


