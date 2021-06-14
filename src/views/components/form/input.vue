<template>
    <div>
        <input :type="type" :value="value" @input="onInput" v-bind="$attrs">
    </div>
</template>

<script>
  import emtter from "@/metter"
  console.log(emtter)
   export default {
    mixins:[emtter],
    inheritAttrs:false,
    props:{
      type:{
          type:String,
          default:'text'
      },
      value:{
          type:String,
          default:""
      }
    },
    data() {
        return {

        };
    },
    created() {

    },
    mounted() {

    },
    methods: {
        onInput(e){
            //触发父组件的input方法实现数据的更新
          this.$emit('input',e.target.value)
          //去派发校验规则
          //this.$parent.$emit('validate')
          this.dispath('formItem','validate',['da','sdw'])


        }

    }
};
</script>

<style scoped lang="css">

</style>
