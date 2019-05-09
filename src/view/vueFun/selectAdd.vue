<template>
    <div>
        <Button @click="getData">添加</Button>
        <Button @click="moveData">删除</Button>
      <Select v-model="model[v].value" style="width:200px" v-for="(k,v) in model" :key="v" @on-change="selectFilter" >
          <Option v-for="item in cityList" :value="item.value" :key="item.value" :style="{'display':listArr.indexOf(item.value)==-1?'block':'none'}">{{item.label}}</Option>
          <Option v-if="listArr.length>=cityList.length" disabled style="padding:0;text-align:center" value="disabled">无匹配数据</Option>
     </Select>
     <clickMsg :overMsg='colose' :outMsg='secelected'></clickMsg>
    </div>
    
</template>
<script>
import clickMsg from './clickMsg.vue'
import colose from '../../assets/colose.png'
import secelected from '../../assets/secelected.png'
export default {
  components:{
    clickMsg
  },
  name: "selectAdd",
  data() {
    return {
      colose,
      secelected,
      cityList: [
        {
          value: "New York",
          label: "New York"
        },
        {
          value: "London",
          label: "London"
        },
        {
          value: "Sydney",
          label: "Sydney"
        },
        {
          value: "Ottawa",
          label: "Ottawa"
        },
        {
          value: "Paris",
          label: "Paris"
        },
        {
          value: "Canberra",
          label: "Canberra"
        }
      ],
      model: [{ value: "" }],
      listArr:[]
    };
  },
  methods: {
    getData() {
        this.model.push({ value: "" });
    },
    selectFilter(name){
         this.listArr=[]
        this.model.forEach((item,i)=>{
          if(item.value){
               this.listArr.push(item.value)
          }
        })
    },
     moveData(){
         this.model=this.model.filter((item,i)=>{
             if(item.value){
                 return true
             }
         })
    }

  }
};
</script>

<style


