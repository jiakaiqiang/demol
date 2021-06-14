import Vue from "vue";
export default function create(component, propos) {
  //创建组件实例
  const comp = Vue.extend(component); //获取到组件的函数对象
  let compdom = new comp({ propsData: propos }); //获取到了组件的虚拟ddom
  compdom.$mount(); //渲染成真实的dom

  //将组件的实例添加到body上面
  document.body.appendChild(compdom.$el);
  //组件实例的销毁方法
  compdom.remove = function() {
    document.body.removeChild(compdom.$el);
    //然后就销毁实例
    compdom.$destroy();
  };
  //染回组件的实例
  return compdom
}
