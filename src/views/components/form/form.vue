<template>
    <div :model="model" :rules="rules" ref="form">
         <slot></slot>
    </div>
</template>

<script>
export default {
  //抛出form对象
  provide(){
    return {
      form:this
    }
  },
    props:{
        model:{
            type:Object,
            requied:true
        },
        rules:{
            type:Object
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
      vaildate(fb){
        //返回所有的校验romise
        const dask=this.$children.filter(item=>{item.props}).map(item=>{
           return  item.validate()
        })
        Promise.all(dask).then(()=>fb(true)).catch(()=>fb(false))
      }


    }
};
</script>

<style scoped lang="css">

</style>
