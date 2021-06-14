let vue
class VueRouter{
    constructor(option){
        this.option=option
        vue.util.defineReactive(this,'current','/')
        window.addEventListener('hashchange',()=>{
            let current=window.location.hash.slice(1)
            this.current=current

           
        })
        window.addEventListener('load',()=>{
            let current=window.location.hash.slice(1)
            this.current=current

          
        })
        console.log(this.current)
        //注册全局的指令
        // vue.component('router-view',{
        //     render:h=>h(this.option.routes.find(item=>{    return   item.path==this.current}).component)
        // })
       
    }






  
}
VueRouter.install=function(_vue){
    ///传入的是vue实例的狗子
 
    vue=_vue
    ///全局安装router
    ///
 vue.mixin({
     beforeCreate(){
       if(this.$options.router){
           //实例挂在router实例
           vue.prototype.$router=this.$options.router

       }
     }
 })

 vue.component('router-view',{
    render(h){
        console.log(this.$router.option.routes,'we22')
        return h(this.$router.option.routes.find(item=>{    return   item.path==this.$router.current}).component)
    }
    
})
}
export default VueRouter