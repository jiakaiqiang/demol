<template>
  <div>
   <myform :model="user" :rules="rules" ref="form">
     <myformItem :label="'登录名称'" prop="name">
        <myinput     v-model="user.name"></myinput>
     </myformItem>
      <myformItem :label="'密码'" prop="password">
        <myinput    type="password" v-model="user.password"  placeholder="请输入密码"></myinput>
     </myformItem>
     <myformItem label='按钮'>
     <button @click='submitdata'>提交</button>
         </myformItem>
 </myform>

   state{{$store.state.countes}}
   getters{{$store.getters.doubleCounets}}
 
   <div @click="$store.commit('add')">点击后获取值</div>commit：{{$store.state.countes}}
   <hr>
   <div @click="$store.dispatch('add')">async点击后获取值</div>commit：{{$store.state.countes}}



  </div>
</template>

<script>
import myinput from "./components/form/input";
import dialog from './components/dialog'
import Vue from 'vue'
//导入进来的配置项
console.log(Vue.extend(myinput))
console.log(myinput,'sss')
import myformItem from "./components/form/formitem";
import myform from "./components/form/form";
export default {
  data() {
    return {
      user: {
        name:'',
        password:""
      },
      rules:{
        name:[{required:true,message:"请输入用户名称"}],
        password:[{required:true,message:"请输入密码，密码不合适"}]
      }


    };
  },
  created() {},
  mounted() {},
  methods: {
    submitdata(){
      console.log(this.$refs['form'])
      this.$refs['form'].vaildate(vaild=>{
        console.log(vaild)
        if(vaild){
          this.$created(dialog,{
            message:'我是内容',
            title:"我是标题"
          })
          }else{
           this.$created(dialog,{
            message:'我是内容',
            title:"我是标题"
          })
        }


      })



    }

  },
  components: {
    myinput,
    myformItem,
    myform
  }
};
</script>

<style scoped lang="css"></style>
