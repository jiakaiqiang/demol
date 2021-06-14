<template>
    <div>

          <label v-if="label">{{label}}</label>
            <div :placeholder="'请输入'+label">
              <slot></slot>
            <p v-if="error" style="color:red">{{error}}</p>
            </div>
    </div>
</template>

<script>
  import Schema from 'async-validator'
  console.log(Schema)
export default {
    name:'formItem',
    componentName:'formItem',
  //获取form数据
  inject:['form'],
    props:{
      label:{
          type:String,
          default:""
      },prop:{
        type:String,

      }

    },
    data() {
        return {
          error:""

        };
    },
    created() {

    },
    mounted() {
    console.log(this)
    //监听规则
      this.$on('validate',(data,dat)=>{
        console.log(data,dat)
        //掉用规则的
        this.validate()
      })


    },
    methods: {

    validate(){
    //获取校验规则
      const rules=this.form.rules[this.prop]
      const value=this.form.model[this.prop]
      //校验的描述
      const desc={[this.prop]:rules}
     return  new Schema(desc).validate({[this.prop]:value},erros=>{
        if(erros){
          this.error=erros[0].message
        }else{
          this.error=''
        }

      })

    }
    }
};
</script>

<style scoped lang="css">

</style>
