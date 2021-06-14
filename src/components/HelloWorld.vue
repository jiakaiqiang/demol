<template>
  <div>
    <div>
      <hm-input></hm-input>
      <hm-radio>贾凯强</hm-radio>
     <router-link :to="{name:'a',query:{name:'jiakqiang'}}">a</router-link>
     -----------
     <router-link :to="{name:'b',params:{id:90}}">b</router-link>
    </div>
    <canvas></canvas>
  </div>
</template>

<script>
export default {
  name: `HelloWorld`,
  props: {
    msg: String
  },
  data() {
    return {
      mes: "sssss",
      mesw: "jkq"
    };
  },
  provide() {
    return {
      setdata: this
    };
  },

  created() {
   
 class A {
   constructor(name,age){
     this.name=name
     this.age=age
   }
  p() {
   console.log('测试class')
  }
}

class B extends A {
  constructor(name) {
   
    super('张三',12);
     this.names='wang'
  
  }
  foo(){
  super.p()

  console.log('this',this)
  console.log('self',this.names)
  }
}

let b = new B('测试');
b.foo()









   function speak(fn, obj) {
  return fn.bind(obj)()
}

    let oo=speak(function () {return this.greeting + ', ' + this.name + '!!!';}, {greeting: 'Hello', name: 'Rebecca'})
  console.log(oo)
function argsAsArray(fn, arr) {
fn.call(window,...arr)
}
 let ssss=argsAsArray(function (greeting, name, punctuation) {return greeting + ', ' + name + (punctuation || '!');}, ['Hello', 'Ellie', '!']) 
   console.log(ssss)
   function removeWithoutCopy(arr, item) {
   for(let i=0;i<arr.length;i++){
       if(arr[i]==item){
           arr.remove(i)
           
       }
   }
    return arr
}
     

    function sum(arr) {
    let num=0;
  arr.forEach((item)=>{
  
    num+=item*1
})
return num
}
 
function indexOf(arr, item) {
  return arr.findIndex(items=>{
    return items==item
  })
}



    function count(str) {
      //排除空白字段
      let strs = str.replace(/\s/, "");

      let objkey = {};

      for (let i=0;i<strs.length;i++) {
      
  
          if (objkey[strs[i]]) {
            objkey[strs[i]] += 1;
            
          } else {
          objkey[strs[i]] = 1;
            
          }
        
      }
      return objkey
    }

   
    function cssStyle2DomStyle(sName) {
      if (sName[0] == "-") {
      }
      return sName.replace(/-(\w)/g, function($0, $1) {
        return $1.toUpperCase();
      });
    }

  

    function strLength(s, bUnicode255For1) {
      let num = 0;
      if (bUnicode255For1 === true) {
        return s.length;
      } else {
        for (let i = 0; i < s.length; i++) {
        
          if (s.charCodeAt(i) > 255) {
            num += 1;
          }
        }
        return s.length + num;
      }
    }

    function formatDate(time, weekday) {
     
      let dates = weekday.split(` `)[0];
      let times = weekday.split(``)[1];
      let year, hour, day, minutes, seconds, month, arr;
      if (dates.includes(`yy`)) {
        year = time
          .getFullYear()
          .toString()
          .slice(2);
      }
      if (dates.includes(`yyyy`)) {
        year = time.getFullYear();
      }
      console.log(time.getMonth());
      if (dates.includes(`MM`)) {
        console.log("ss");
        month = time.getMonth() + 1 < 10 ? "0" + (time.getMonth() + 1) : 1;
      }
      if (dates.includes(`M`)) {
        console.log("www");
        month = time.getMonth() + 1;
      }

      if (dates.includes(`HH`)) {
        hour =
          time.getHour() < 10
            ? time
                .getHour()
                .toString()
                .padStart(2, 0)
            : time.getHour();
      }
      if (times.includes(`H`)) {
        hour = time.getHour();
      }
      if (times.includes(`M`)) {
        month = time.getMonth() + 1;
      }

      if (times.includes(`mm`)) {
        minutes =
          time.getMinutes() < 10
            ? time
                .getMinutes()
                .toString()
                .padStart(2, 0)
            : time.getMinutes();
      }
      if (times.includes(`m`)) {
        mintues = time.getMinutes();
      }
      if (times.includes(`ss`)) {
        seconds =
          time.getSecond() < 10
            ? time
                .getSecond()
                .toString()
                .padStart(2, 0)
            : time.getSecond();
      }
      if (times.includes(`s`)) {
        seconds = time.getSecond();
      }
      arr = [
        `星期天`,
        `星期一`,
        `星期二`,
        `星期三`,
        `星期四`,
        `星期五`,
        `星期六`
      ];
      let week = time.getDay();

      return `${year}-${month}-${day} ${hour}:${minutes}:${seconds} ${arr[week]}`;
    }

    console.log(
      formatDate(new Date(1409894060000), `yyyy-MM-dd HH:mm:ss 星期w`)
    );

    function getUrlParam(sUrl, sKey) {
      var paramArr = sUrl
        .split("?")[1]
        .split("#")[0]
        .split("&"); // 取出每个参数的键值对放入数组
      console.log(paramArr);
      const obj = {};
      paramArr.forEach(element => {
        console.log(element);
        const [key, value] = element.split("="); // 取出数组中每一项的键与值
        console.log([key, value]);
        console.log(key);
        if (obj[key] === void 0) {
          // 表示第一次遍历这个元素，直接添加到对象上面
          obj[key] = value;
        } else {
          obj[key] = [].concat(obj[key], value); // 表示不是第一次遍历说明这个键已有，通过数组存起来。
        }
      });
      return sKey === void 0 ? obj : obj[sKey] || "";
    }
    // console.log(getUrlParam('http://www.nowcoder.com?key=1&key=2&key=3&test=4#hehe','key'))
    function bindThis(f, oTarget) {
      let args = Array.prototype.slice.call(arguments, 2);
      return function() {
        return f.apply(
          oTarget,
          Array.prototype.slice.call(arguments).concat(args)
        );
      };
    }

    function toCamelCase(str) {
      return str.replace(/(\s+|^)(\w)/g, function($0, $1, $2) {
        console.log($0, $1, $2);
        return $1 + $2.toUpperCase();
      });
    }
  },
  mounted() {
    //   this.$refs.input.addEventListener('change',function(event){
    //     console.log(1023/1024)
    //     let filesize=event.target.files[0].size/1024;
    //     let ss=0;
    //     if((filesize/1024)<1){
    //     ss=filesize;
    //     } else if(1<(filesize/1024)<1024){
    //       ss=filesize/1024;
    //     } else{
    //        ss=filesize/(1024*1024);
    //     }
    //    console.log(ss)
    //   })
    //  console.log(this.$refs.input)
  }
};
</script>

<!-- Add `scoped` attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
