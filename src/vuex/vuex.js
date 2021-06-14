

let Vue;

 class Store{
    constructor(option){
        //定义计算属性
        let computeds={

        }
        let getters={}//用于存储getters
    //遍历option中的getters 将其存储在computed中 用于getters获取的时候返回
        Object.keys(option.getters).map(item=>{
          
            computeds[item]=function(){//设置计算属性
                return option.getters[item](option.state)
            }
            Object.defineProperty(getters,item,{//对于getters获取的时候进行数据个格式化
           get:()=>{
               return _VM[item]//返回计算属性
           }
            })
        })
       this.getters=getters
      
     let _VM=new Vue({
           data:{
            state:option.state
           },
           computed:computeds
           
       })
       this.state=_VM.state
   
    

       this.commit=function(type,params){
           console.log(type,option,this)
           let _mutition=option.mutations[type]
           console.log(_mutition)

    //调用传过来的函数默认参数为state
           _mutition(this.state,params)

       }
       this.dispatch=function(type,params){
           let _acitons=option.actions[type]
        //然后执行commit方法
        //这里的this要是函数的执行上下文
        _acitons(this,params)

       }
      
       this.commit= this.commit.bind(this)
       this.dispatch= this.dispatch.bind(this)

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