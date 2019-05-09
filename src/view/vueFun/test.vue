<template>
  <div id="Test">
    <!-- <el-tooltip class="item" effect="dark" content="Top Center 提示文字" placement="top">
      <div slot="content">提示</div>
      <img v-if="isShow" :src="'/static/icon/'+'mark.png'" alt="" @mouseover="imgShow">
      <img v-if="!isShow" :src="'/static/icon/'+'marks.png'" alt="" @mouseout="imgShow">
    </el-tooltip> -->

    <!-- 步骤条 -->
    <el-steps :active="1">
      <el-step title="选择监控数据"></el-step>
      <el-step title="填写告警信息"></el-step>
      <el-step title="完成"></el-step>
    </el-steps>

    <div class="form">
      <el-form :label-position="labelPosition" :model="formLabelAlign" label-width="120px">
        <el-form-item label="监控类型 :">
          <el-radio-group v-model="radio">
            <el-radio :label="3">字段合法性监控</el-radio>
            <el-radio :label="6">数据量波动监控</el-radio>
            <el-radio :label="9">关键指标波动监控</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="开始监控时间 :">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="监控周期 :">
          <el-radio-group v-model="radio">
            <el-radio :label="3">小时</el-radio>
            <el-radio :label="6">天</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="监控任务状态 :">
          <el-radio-group v-model="radio">
            <el-radio :label="3">启动</el-radio>
            <el-radio :label="6">停止</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="活动区域 : " prop="region">
          <el-select v-model="region" placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="数据库 : " prop="region">
          <el-select v-model="region" placeholder="请选择数据库">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="表 : " prop="region">
          <el-select v-model="region" placeholder="请选择表">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>

        <el-table :data="tableData" style="width: 100%">
          <el-table-column prop="name" label="字段名称" width="80" align="center">
          </el-table-column>
          <el-table-column prop="region" label="字段类型" width="280" align="center">
            <template>
              <el-radio-group v-model="radio" size="small">
                <el-radio :label="3">枚举 </el-radio>
                <el-radio :label="6">映射</el-radio>
                <el-radio :label="3">正则</el-radio>
                <el-radio :label="6">范围</el-radio>
              </el-radio-group>
            </template>

          </el-table-column>
          <el-table-column prop="region" label="值获取规则" width="300px">
            <template>
              维表：<el-input></el-input>
              字段：<el-input></el-input>
            </template>
          </el-table-column>
          <el-table-column label="是否整数" align="center">
            <template slot-scope="scope">
              <el-checkbox v-model="checked"></el-checkbox>
            </template>
          </el-table-column>
          <el-table-column prop="region" label="是否告警" align="center">
            <template slot-scope="scope">
              <el-checkbox v-model="checked"></el-checkbox>
            </template>
          </el-table-column>
        </el-table>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShow: true,
      radio: "",
      region: '',
      labelPosition: 'right',
      formLabelAlign: {
        name: '',
        region: '',
        type: ''
      },
      tableData: [{
        name: 'imei'
      }, {
        name: 'version'
      }, {
        name: 'location'
      }]
    }

  },
  methods: {
    imgShow() {

      this.isShow = !this.isShow
    },
  }
}
</script>


<style lang="scss">
#Test {
  padding: 30px;
  margin: 0 auto;
  width: 80%;
  .el-select {
    width: 100%;
  }
  table {
    .el-radio {
      margin-right: 10px;
    }
    .el-input {
      width: 30%;
      .el-input__inner {
        height: 30px;
      }
    }
  }
  .form {
    margin-top: 30px;
  }
  //   .el-input {
  //     width: 50%;
  //   }
  img {
    width: 24px;
    cursor: pointer;
  }
  img:hover {
    color: #f00;
  }
  //   .el-step.is-simple .el-step__icon{
  //       width: 24px;
  //       height: 24px;
  //   }
  //   .el-steps--simple{
  //       background: #fff;
  //   }
  //   .el-step__arrow{

  //   }
}
</style>
