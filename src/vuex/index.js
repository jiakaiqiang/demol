import Vue from 'vue'
import Vuex from './vuex.js'
console.log(Vuex)
Vue.use(Vuex)
//创建vuexshili 
const store =new Vuex.Store({
    state:{
        countes:0
    },
    getters:{
        doubleCounets(state){
            return state.countes*2

        }
    },
    mutations:{
     add(state){
         console.log(state,'232323')
         state.countes++
     } ,
   
    },  actions:{
        add({commit}){
         setTimeout(()=>{
            commit('add')
         },1000)

    }
     }
})
export default store
