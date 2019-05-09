<template>
  <div class="dialog">
      <el-select v-model="firstVal" placeholder="请选择">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
    <el-popover placement="bottom" width="400" trigger="click">
      <el-input placeholder="输入关键字进行过滤" v-model="filterText">
      </el-input>
      <el-tree :data="data"   :filter-node-method="filterNode" show-checkbox default-expand-all node-key="id" ref="tree" highlight-current :props="defaultProps">
      </el-tree>
        <el-input slot="reference" style="width:50%"></el-input>
    </el-popover>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
        filterText:'',
        firstVal:'',
        options:[],
        dataAll:{},
        data:[],
      // data2: [{
      //   id: 1,
      //   label: '一级 1',
      //   children: [{
      //     id: 4,
      //     label: '二级 1-1',
      //     children: [{
      //       id: 9,
      //       label: '三级 1-1-1'
      //     }, {
      //       id: 10,
      //       label: '三级 1-1-2'
      //     }]
      //   }]
      // }, {
      //   id: 2,
      //   label: '一级 2',
      //   children: [{
      //     id: 5,
      //     label: '二级 2-1'
      //   }, {
      //     id: 6,
      //     label: '二级 2-2'
      //   }]
      // }, {
      //   id: 3,
      //   label: '一级 3',
      //   children: [{
      //     id: 7,
      //     label: '二级 3-1'
      //   }, {
      //     id: 8,
      //     label: '二级 3-2'
      //   }]
      // }],
      defaultProps: {
          children: 'children',
          label: 'label'
        }
    }
  },
  created(){
    this.dataAll={
    "code":0,
    "ctx":[
        {
            "firstTagName":"人口属性",
            "firstTagId":1,
            "secondTags":[
                {
                    "secondTagName":"基础属性",
                    "secondTagId":2,
                    "thirdTags":[
                        {
                            "thirdTagId":1,
                            "securityLevel":null,
                            "thirdTagName":"性别",
                            "isValueLimit":false,
                            "isOwned":true
                        },
                        {
                            "thirdTagId":2,
                            "securityLevel":null,
                            "thirdTagName":"年龄",
                            "isValueLimit":false,
                            "isOwned":true
                        },
                        {
                            "thirdTagId":24,
                            "securityLevel":null,
                            "thirdTagName":"pusher",
                            "isValueLimit":false,
                            "isOwned":true
                        },
                        {
                            "thirdTagId":133,
                            "securityLevel":1,
                            "thirdTagName":"机密标签zxzxz",
                            "isValueLimit":false,
                            "isOwned":true
                        }
                    ]
                },
                {
                    "secondTagName":"教育属性",
                    "secondTagId":3,
                    "thirdTags":[
                        {
                            "thirdTagName":"学历",
                            "securityLevel":null,
                            "thirdTagId":3,
                            "isOwned":false
                        }
                    ]
                },
                {
                    "secondTagName":"家庭属性",
                    "secondTagId":24,
                    "thirdTags":[
                        {
                            "thirdTagName":"是否结婚",
                            "securityLevel":null,
                            "thirdTagId":4,
                            "isOwned":false
                        },
                        {
                            "thirdTagName":"是否育儿",
                            "securityLevel":null,
                            "thirdTagId":5,
                            "isOwned":false
                        }
                    ]
                },
                {
                    "secondTagName":"职业属性",
                    "secondTagId":25,
                    "thirdTags":[
                        {
                            "thirdTagName":"用户的职业",
                            "securityLevel":null,
                            "thirdTagId":8,
                            "isOwned":false
                        }
                    ]
                },
                {
                    "secondTagName":"经济属性",
                    "secondTagId":53,
                    "thirdTags":[

                    ]
                }
            ]
        },
        {
            "firstTagName":"设备属性",
            "firstTagId":6,
            "secondTags":[
                {
                    "secondTagName":"机型信息",
                    "secondTagId":10,
                    "thirdTags":[
                        {
                            "thirdTagId":17,
                            "securityLevel":null,
                            "thirdTagName":"手机机型",
                            "isValueLimit":false,
                            "isOwned":true
                        },
                        {
                            "thirdTagId":23,
                            "securityLevel":null,
                            "thirdTagName":"fdafdsaf",
                            "isValueLimit":false,
                            "isOwned":true
                        },
                        {
                            "thirdTagId":135,
                            "securityLevel":2,
                            "thirdTagName":"测试绝密",
                            "isValueLimit":false,
                            "isOwned":true
                        }
                    ]
                },
                {
                    "secondTagName":"版本信息",
                    "secondTagId":11,
                    "thirdTags":[
                        {
                            "thirdTagName":"版本号",
                            "securityLevel":null,
                            "thirdTagId":6,
                            "isOwned":false
                        },
                        {
                            "thirdTagName":"用户的职业2",
                            "securityLevel":null,
                            "thirdTagId":33,
                            "isOwned":false
                        }
                    ]
                },
                {
                    "secondTagName":"网络信息",
                    "secondTagId":12,
                    "thirdTags":[
                        {
                            "thirdTagName":"最近一次使用时间",
                            "securityLevel":null,
                            "thirdTagId":16,
                            "isOwned":false
                        }
                    ]
                }
            ]
        },
        {
            "firstTagName":"位置属性",
            "firstTagId":7,
            "secondTags":[
                {
                    "secondTagName":"常驻位置",
                    "secondTagId":13,
                    "thirdTags":[
                        {
                            "thirdTagId":15,
                            "securityLevel":null,
                            "thirdTagName":"常驻省份",
                            "isValueLimit":false,
                            "isOwned":true
                        },
                        {
                            "thirdTagId":41,
                            "securityLevel":null,
                            "thirdTagName":"常驻国家",
                            "isValueLimit":false,
                            "isOwned":true
                        },
                        {
                            "thirdTagId":42,
                            "securityLevel":null,
                            "thirdTagName":"常驻城市",
                            "isValueLimit":false,
                            "isOwned":true
                        }
                    ]
                },
                {
                    "secondTagName":"生活位置",
                    "secondTagId":26,
                    "thirdTags":[
                        {
                            "thirdTagId":7,
                            "securityLevel":null,
                            "thirdTagName":"出生地",
                            "isValueLimit":false,
                            "isOwned":true
                        },
                        {
                            "thirdTagId":18,
                            "securityLevel":null,
                            "thirdTagName":"去年过年居住地",
                            "isValueLimit":false,
                            "isOwned":true
                        },
                        {
                            "thirdTagId":43,
                            "securityLevel":null,
                            "thirdTagName":"家和公司位置",
                            "isValueLimit":false,
                            "isOwned":true
                        }
                    ]
                }
            ]
        },
        {
            "firstTagName":"兴趣偏好",
            "firstTagId":8,
            "secondTags":[
                {
                    "secondTagName":"手机习惯",
                    "secondTagId":27,
                    "thirdTags":[
                        {
                            "thirdTagId":12,
                            "securityLevel":null,
                            "thirdTagName":"使用手机时长",
                            "isValueLimit":false,
                            "isOwned":true
                        },
                        {
                            "thirdTagId":20,
                            "securityLevel":null,
                            "thirdTagName":"浏览器类型",
                            "isValueLimit":false,
                            "isOwned":true
                        }
                    ]
                },
                {
                    "secondTagName":"生活类",
                    "secondTagId":28,
                    "thirdTags":[
                        {
                            "thirdTagName":"运动类型",
                            "securityLevel":null,
                            "thirdTagId":9,
                            "isOwned":false
                        }
                    ]
                },
                {
                    "secondTagName":"旅游类",
                    "secondTagId":29,
                    "thirdTags":[
                        {
                            "thirdTagId":13,
                            "securityLevel":null,
                            "thirdTagName":"用户喜欢的旅游区域",
                            "isValueLimit":false,
                            "isOwned":true
                        },
                        {
                            "thirdTagId":14,
                            "securityLevel":null,
                            "thirdTagName":"用户出行的交通工具",
                            "isValueLimit":false,
                            "isOwned":true
                        }
                    ]
                },
                {
                    "secondTagName":"金融类",
                    "secondTagId":30,
                    "thirdTags":[

                    ]
                },
                {
                    "secondTagName":"听歌类",
                    "secondTagId":31,
                    "thirdTags":[

                    ]
                },
                {
                    "secondTagName":"拍照类",
                    "secondTagId":32,
                    "thirdTags":[

                    ]
                },
                {
                    "secondTagName":"汽车类",
                    "secondTagId":33,
                    "thirdTags":[
                        {
                            "thirdTagName":"汽车类型",
                            "securityLevel":null,
                            "thirdTagId":19,
                            "isOwned":false
                        }
                    ]
                },
                {
                    "secondTagName":"教育类",
                    "secondTagId":34,
                    "thirdTags":[

                    ]
                },
                {
                    "secondTagName":"综合兴趣类",
                    "secondTagId":35,
                    "thirdTags":[

                    ]
                }
            ]
        },
        {
            "firstTagName":"软件商店",
            "firstTagId":9,
            "secondTags":[
                {
                    "secondTagName":"测试",
                    "secondTagId":43,
                    "thirdTags":[

                    ]
                }
            ]
        },
        {
            "firstTagName":"浏览器",
            "firstTagId":14,
            "secondTags":[
                {
                    "secondTagName":"浏览器兴趣偏好",
                    "secondTagId":56,
                    "thirdTags":[
                        {
                            "thirdTagId":44,
                            "securityLevel":null,
                            "thirdTagName":"一级兴趣",
                            "isValueLimit":false,
                            "isOwned":true
                        },
                        {
                            "thirdTagId":45,
                            "securityLevel":null,
                            "thirdTagName":"二级兴趣",
                            "isValueLimit":false,
                            "isOwned":true
                        },
                        {
                            "thirdTagId":46,
                            "securityLevel":null,
                            "thirdTagName":"三级兴趣",
                            "isValueLimit":false,
                            "isOwned":true
                        }
                    ]
                }
            ]
        },
        {
            "firstTagName":"游戏中心",
            "firstTagId":15,
            "secondTags":[

            ]
        },
        {
            "firstTagName":"广告投放",
            "firstTagId":16,
            "secondTags":[
                {
                    "secondTagName":"测试数据",
                    "secondTagId":44,
                    "thirdTags":[

                    ]
                },
                {
                    "secondTagName":"测试",
                    "secondTagId":57,
                    "thirdTags":[

                    ]
                }
            ]
        },
        {
            "firstTagName":"OPPO",
            "firstTagId":46,
            "secondTags":[
                {
                    "secondTagName":"产品中心",
                    "secondTagId":47,
                    "thirdTags":[
                        {
                            "thirdTagName":"appid",
                            "securityLevel":null,
                            "thirdTagId":37,
                            "isOwned":false
                        }
                    ]
                }
            ]
        },
        {
            "firstTagName":"第三方库",
            "firstTagId":54,
            "secondTags":[
                {
                    "secondTagName":"导入标签",
                    "secondTagId":55,
                    "thirdTags":[
                        {
                            "thirdTagName":"fdsafdsafd",
                            "securityLevel":null,
                            "thirdTagId":80,
                            "isOwned":false
                        },
                        {
                            "thirdTagName":"测试1225",
                            "securityLevel":null,
                            "thirdTagId":83,
                            "isOwned":false
                        },
                        {
                            "thirdTagName":"sdddddd",
                            "securityLevel":null,
                            "thirdTagId":84,
                            "isOwned":false
                        },
                        {
                            "thirdTagName":"玩试人玩儿玩儿我认为测试测试测试测试测试人玩儿玩儿我认为测试测试测试测试测试人玩儿玩儿我认为测试测试测试测试测试人玩儿玩儿我认为测试测试测试测试测试人玩儿玩儿我认为测试测试测试测试测试人玩儿玩儿我认为测试测试测试测试测试人玩儿玩儿我认为测试测试测试测试测试人玩儿玩儿我认为测试测试测试测试测试人玩儿玩儿我认为测试测试测试测试测试人玩儿玩儿我认为",
                            "securityLevel":null,
                            "thirdTagId":86,
                            "isOwned":false
                        },
                        {
                            "thirdTagName":"fdsafdsafdsafd",
                            "securityLevel":null,
                            "thirdTagId":100,
                            "isOwned":false
                        },
                        {
                            "thirdTagName":"fdsafdsagdsafgsda",
                            "securityLevel":null,
                            "thirdTagId":102,
                            "isOwned":false
                        }
                    ]
                }
            ]
        }
    ],
    "detail":""
    }
    console.log(this.dataAll)
    this.dataAll.ctx.forEach((item)=>{
        this.options.push({
          label:item.firstTagName,
          value:item.firstTagId,
        })
    })
    // this.data=item.secondTags
    
    
  },
  watch:{
      filterText(val) {
        this.$refs.tree.filter(val);
      },
      firstVal(val){
        this.dataAll.ctx.filter((item)=>{
           return item.firstTagId==val
         })[0].secondTags.forEach((item,i)=>{
           this.data.push({
             id:item.secondTagId,
             label:item.secondTagName,
             children:item.thirdTags
           })
          //  item.thirdTags.forEach((items,k)=>{
          //   //  console.log(items)
          //    console.log(this.data[k])
          //     // this.data[k].children.push({
          //     //   id:items.thirdTagId,
          //     //   label:items.thirdTagName,
          //     // })
          //  })
          //  console.log(this.data)
         })
         
         this.data.forEach((item,i)=>{
           this.data[i]={children:[]}
          //  console.log(this.data[i],item)
           item.children.forEach(items=>{
              this.data[i].children.push({
               id:items.thirdTagId,
               label:items.thirdTagName,
            })
           })
            
         })
         console.log(this.data)
        
      }
  },
  methods:{
      filterNode(value, data) {
        if (!value) return true;
        return data.label.indexOf(value) !== -1;
      },

  }
}
</script>

<style lang="scss">
.dialog{
  width: 50%;
  margin:0 auto
}
</style>


