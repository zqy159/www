<template>
  <div>
    <el-form :model="formData3" :inline="true" ref="form" label-width="65px" size="medium">
      <el-row v-for="(item,index) in formData3.powerAttrList" :key="index" style="border-bottom: 1px solid #f0f0f0;padding: 10px;">

        <el-form-item label="参数名" :prop="'powerAttrList.' + index + '.fieldDesc'" :rules="[{ required: true, message: '参数名不能为空',trigger: 'change'}]">
          <!-- <el-input v-model="item.fieldDesc" placeholder="请输入参数名" /> -->
          <el-cascader :options="optionsWithDisabled" v-model='item.fieldDesc' @click='cc((item.fieldDesc))' @change='changeSelect(item.fieldDesc)'></el-cascader>
        </el-form-item>

        <el-form-item label="描述" :prop="'powerAttrList.' + index + '.fieldName'" :rules="[{ required: true, message: '描述不能为空',trigger: 'change'}]">
          <!-- <el-input v-model="item.fieldName" placeholder="请输入描述"/> -->
          <!-- multiple -->
          <el-select v-model="item.fieldName" :multiple='false' >
              <el-option v-for="ite in dataArr[item.fieldDesc[2]]" :key="ite.value" :label="ite.label" :value="ite.value">
              </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="排序" :prop="'powerAttrList.' + index + '.fieldSort'" :rules="moreRules.fieldSort">
          <el-input type="number" v-model="item.fieldSort" autocomplete="off" placeholder="请输入排序" />
        </el-form-item>
        <el-button type="danger" v-if="formData3.powerAttrList.length > 1" size="medium" @click="removeRow(index)">
          删除
        </el-button>

      </el-row>
      <el-row>
        <el-button type="primary" size="medium" @click="addRow">新增属性</el-button>
        <el-button type="primary" size="medium" @click="submit('form')">提交</el-button>
      </el-row>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData3: {
        powerAttrList: [{
          fieldName: [],
          fieldSort: '',
          fieldDesc: [],
        }],
      },
      options: [{
        value: 'HTML',
        label: 'HTML'
      }, {
        value: 'CSS',
        label: 'CSS'
      }, {
        value: 'JavaScript',
        label: 'JavaScript'
      }],
      // 数据模板
      dataArr:{},
      dataTable:[],
      optionsWithDisabled: [{
        value: 'zhinan',
        label: '指南',
        disabled: false,
        children: [{
          value: 'shejiyuanze',
          label: '设计原则',
          children: [{
            value: 'yizhi',
            label: '一致',
            
          }, {
            value: 'fankui',
            label: '反馈'
          }, {
            value: 'xiaolv',
            label: '效率'
          }, {
            value: 'kekong',
            label: '可控'
          }]
        }, {
          value: 'daohang',
          label: '导航',
          children: [{
            value: 'cexiangdaohang',
            label: '侧向导航'
          }, {
            value: 'dingbudaohang',
            label: '顶部导航'
          }]
        }]
      }, {
        value: 'zujian',
        label: '组件',
        children: [{
          value: 'basic',
          label: 'Basic',
          children: [{
            value: 'layout',
            label: 'Layout 布局'
          }, {
            value: 'color',
            label: 'Color 色彩'
          }, {
            value: 'typography',
            label: 'Typography 字体'
          }, {
            value: 'icon',
            label: 'Icon 图标'
          }, {
            value: 'button',
            label: 'Button 按钮'
          }]
        }, {
          value: 'form',
          label: 'Form',
          children: [{
            value: 'radio',
            label: 'Radio 单选框',
            filter:1,
          }, {
            value: 'checkbox',
            label: 'Checkbox 多选框'
          }, {
            value: 'input',
            label: 'Input 输入框',
            filter:0,
          }, {
            value: 'input-number',
            label: 'InputNumber 计数器'
          }, {
            value: 'select',
            label: 'Select 选择器'
          }, {
            value: 'cascader',
            label: 'Cascader 级联选择器'
          }, {
            value: 'switch',
            label: 'Switch 开关'
          }, {
            value: 'slider',
            label: 'Slider 滑块'
          }, {
            value: 'time-picker',
            label: 'TimePicker 时间选择器'
          }, {
            value: 'date-picker',
            label: 'DatePicker 日期选择器'
          }, {
            value: 'datetime-picker',
            label: 'DateTimePicker 日期时间选择器'
          }, {
            value: 'upload',
            label: 'Upload 上传'
          }, {
            value: 'rate',
            label: 'Rate 评分'
          }, {
            value: 'form',
            label: 'Form 表单'
          }]
        }, {
          value: 'data',
          label: 'Data',
          children: [{
            value: 'table',
            label: 'Table 表格'
          }, {
            value: 'tag',
            label: 'Tag 标签'
          }, {
            value: 'progress',
            label: 'Progress 进度条'
          }, {
            value: 'tree',
            label: 'Tree 树形控件'
          }, {
            value: 'pagination',
            label: 'Pagination 分页'
          }, {
            value: 'badge',
            label: 'Badge 标记'
          }]
        }, {
          value: 'notice',
          label: 'Notice',
          children: [{
            value: 'alert',
            label: 'Alert 警告'
          }, {
            value: 'loading',
            label: 'Loading 加载'
          }, {
            value: 'message',
            label: 'Message 消息提示'
          }, {
            value: 'message-box',
            label: 'MessageBox 弹框'
          }, {
            value: 'notification',
            label: 'Notification 通知'
          }]
        }, {
          value: 'navigation',
          label: 'Navigation',
          children: [{
            value: 'menu',
            label: 'NavMenu 导航菜单'
          }, {
            value: 'tabs',
            label: 'Tabs 标签页'
          }, {
            value: 'breadcrumb',
            label: 'Breadcrumb 面包屑'
          }, {
            value: 'dropdown',
            label: 'Dropdown 下拉菜单'
          }, {
            value: 'steps',
            label: 'Steps 步骤条'
          }]
        }, {
          value: 'others',
          label: 'Others',
          children: [{
            value: 'dialog',
            label: 'Dialog 对话框'
          }, {
            value: 'tooltip',
            label: 'Tooltip 文字提示'
          }, {
            value: 'popover',
            label: 'Popover 弹出框'
          }, {
            value: 'card',
            label: 'Card 卡片'
          }, {
            value: 'carousel',
            label: 'Carousel 走马灯'
          }, {
            value: 'collapse',
            label: 'Collapse 折叠面板'
          }]
        }]
      }, {
        value: 'ziyuan',
        label: '资源',
        children: [{
          value: 'axure',
          label: 'Axure Components'
        }, {
          value: 'sketch',
          label: 'Sketch Templates'
        }, {
          value: 'jiaohu',
          label: '组件交互文档'
        }]
      }],
      powerAttrList: [{
        fieldName: '',
        fieldSort: '',
        fieldDesc: '',
      }],
      //新增表单的验证规则
      moreRules: {
        fieldSort: [{ required: true, message: '请输入排序', trigger: 'blur' },
          // {
          //   validator: (rule, value, callback) => {
          //     if (value < 0) {
          //       callback(new Error('必须大于0'));
          //     } else if (value.length > 5) {
          //       callback(new Error('不超过5位数字'));
          //     } else if (!value) {
          //       callback(new Error('排序不能为空'));
          //     } else {
          //       callback();
          //     }
          //   },
          //   trigger: 'change',
          // },
        ],
      },
    };
  },
  created(){
      this.dataTable=[...this.optionsWithDisabled]
  },
  methods: {
    addRow() {
      this.formData3.powerAttrList.push({
        fieldName: '',
        fieldSort: '',
        fieldDesc: [],
      });
    },
    cc(val){
      console.log(val)
    },
    changeSelect(val){
      this.optionsWithDisabled.find(item=>{
          return item.value==val[0]
        }).children.find(item=>{
          return item.value==val[1]
        }).children.find(item=>{
          return item.value==val[2]
        }).disabled=true

       this.optionsWithDisabled.find(item=>{
          return item.value==val[0]
        }).children.find(item=>{
          return item.value==val[1]
        }).children.find(item=>{
          return item.value==val[2]
        }).disabled
      this.dataArr[val[2]]=[{
        value:val[2]+'1',
         label:val[2]+'1'
      },{
        value:val[2]+'2',
         label:val[2]+'2'
      },{
        value:val[2]+'3',
         label:val[2]+'3'
      }]
    },
    fil(val){
      // return 1
      // console.log(val)
      if(val.length>0){
        // console.log(val)
      
       console.log(this.optionsWithDisabled.filter(item=>{
        return item.value==val[0]
      })[0].children.filter(ite=>{
        return ite.value==val[1]
      })[0].children.filter(it=>{
        return it.value==val[2]
      })[0].filter)
         return this.optionsWithDisabled.filter(item=>{
        return item.value==val[0]
      })[0].children.filter(ite=>{
        return ite.value==val[1]
      })[0].children.filter(it=>{
        return it.value==val[2]
      })[0].filter
      }else{
        return 1
      }
     
     
    },
    submit(formName) {
      this.$refs[formName].validate((valid, obj) => {
        console.log(valid, obj)
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    // 删除属性列
    removeRow(index) {
      this.formData3.powerAttrList.splice(index, 1);
    },
  },
  mounted(){
    console.log()
  }
};
</script>