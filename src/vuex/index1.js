
let Vue;
let option
 class Store{
    constructor(option){
        console.log(this)
       this.commit= this.commit.bind(this)
       this.dispatch= this.dispatch.bind(this)
       this.state=new Vue({
           data:option.state
       })
       this.option=option


       this.off=function(){

       }
    

      

    }
    commit(type,params){
        console.log(type,this.option,this)
        let _mutition=this.option.mutations[type]
        console.log(_mutition)

 //调用传过来的函数默认参数为state
        _mutition(this.state,params)

    }
    dispatch(type,params){
        let _acitons=this.option.actions[type]
     //然后执行commit方法
     //这里的this要是函数的执行上下文
     _acitons(this,params)

    }
   
}
 function install(_vue){
    Vue=_vue
  
   Vue.mixin({
    beforeCreate(){
        if(this.$options.store){
            Vue.prototype.$store=this.$options.store
        }
     
    }
   })
}
export default {
   Store,
   install
}