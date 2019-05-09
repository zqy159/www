<template>
    <div class="login">
        <!-- 登陆 -->
        <el-form ref="user" :model="user" label-position="right" label-width="80px">
            <el-form-item label="用户名" prop="name">
                <el-input v-model="user.name" prefix-icon="el-icon-search" placeholder="请输入用户名"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="pwd">
                <el-input v-model="user.pwd"  prefix-icon="el-icon-search" placeholder="请输入密码" :type="type"></el-input>
                 <span  @mousedown="showPwd"><i  v-if="user.pwd" size="22" :class="[type=='text'?'el-icon-circle-check-outline':'el-icon-circle-close-outline','pwdIcon']" /></span>
            </el-form-item>
            <el-form-item label="验证码">
                <el-input v-model="user.code" placeholder="请输入验证码" style="width: 130px"  ></el-input>
                 <a href="#" id="checkCode" class="code" @click="createCode()">{{codeBtn}}</a>
                <a href="#" @click="createCode()" style="font-size:14px;line-height:36px">看不清楚</a>
            </el-form-item>
            <el-form-item>
            <el-button align="center" type="primary" class="btn" @click="login">登陆</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
import {GetAll,UserInfo} from "@/api"
export default {
    name:"Login",
    data(){
        return{
            type:"password",
            codeBtn:"",
            ifLogin:false,
            user:{
                name:"",
                pwd:"123456",
                code:""
            },
            ruleValidate:{
                name:[
                     { required: true, message: '请输入用户名', trigger: 'blur' }
                ],
                pwd:[
                     { required: true, message: '请输入密码', trigger: 'blur' }
                ]
            }
        }
    },
    created(){
        this.fetchData()
        this.createCode()
        document.onkeydown=(event)=>{
            if(event.key=="Enter"){
                this.login()
            }
        }
    },
    methods:{
        async fetchData(){
            console.log(await GetAll())
        },
        showPwd(){
            this.type="text"
            console.log(this.type)
            this.$center.$on("change",()=>{
                this.type="password"
            })
        },
        login(){
            if(this.validate()){
               
                 this.$store.dispatch('Logins', { username: this.user.name, userpwd: this.user.pwd }).then(res => {
                     console.log(this.$router)
                    //  location.reload();
                    this.$router.push({ path: '/index' });
            }).catch(err=>{
                this.$message.error("登陆失败！^-^");
            })
            }
           
        },
        createCode(){
            var code = "";
            var codeLength = 5; //验证码的长度   
            var checkCode = document.getElementById("checkCode");
            var random = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R',
                'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'); //随机数   
            for(var i = 0; i < codeLength; i++) { //循环操作   
                var charIndex = Math.floor(Math.random() * 36); //取得随机数的索引   
                code += random[charIndex]; //根据索引取得随机数加到code上   
            }
            this.codeBtn= code; //把code值赋给验证码   
        },
        validate(){
            // 表单式验证+自主性验证
            let ifyz=false
            this.$refs.user.validate(valid=>{
                if(!valid){
                    this.$message.error('请输入账号！')
                }else{
                    ifyz=true
                }
            })
            if(ifyz){
                 var inputCode = this.user.code.toUpperCase(); //取得输入的验证码并转化为大写         
                if(inputCode.length <= 0) { //若输入的验证码长度为0   
                    this.$message.warning('请输入验证码！');//则弹出请输入验证码   
                } else if(inputCode != this.codeBtn) { //若输入的验证码与产生的验证码不一致时  
                this.$message.error('验证码输入错误！');  //则弹出验证码输入错误   
                    this.createCode(); //刷新验证码   
                } else { //输入正确时   
                    // this.$message.success("验证码输入成功！^-^");//弹出^-^  
                    return true 
                }
            }
           

            
        }
    }
}
</script>

<style lang="scss">
    .login{
        background: #fff;
        width: 360px;
        border-radius:7px;
        height: 250px;
        padding:20px;
        position: absolute;
        left:50%;
        top:50%;
        margin-left:-180px;
        margin-top:-125px;   
        border:1px solid #ddd;
        .pwdIcon{
        position: absolute;
        font-size:20px;
        right: 10px;
        top: 12px;
        cursor: pointer;
        }
        .btn{
            margin-left: 90px;
        }
        .code {
            width: 80px;
            font-size:14px;
            text-align: center;
            vertical-align: middle;
            display: inline-block;
            font-family: Arial;
            font-style: italic;
            font-weight: bold;
            border: 0;
            letter-spacing: 3px;
            color: blue;
            background: #ddd;
            border-radius:5px
        }
    }
   
</style>

