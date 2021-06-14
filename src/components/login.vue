<template>
  <div>我的数据来自于login{{ setdata.mesw }}</div>
</template>

<script>
export default {
  inject: ["setdata"],
  data() {
    return {};
  },
  created() {
    function formatDate(time, weekday) {
        console.log(time)
      let dates = weekday.split(" ")[0];
      let times = weekday.split("")[1];
      if (dates.includes("yy")) {
        year = time.getFullYear().slice(2);
      }
      if (dates.includes("yyyy")) {
        year = time.getFullYear();
      }
      if (dates.includes("MM")) {
        month =
          time.getMonth() + 1 < 10
            ? (time.getMonth() + 1).toString().padStart(2, 0)
            : time.getMonth() + 1;
      }
      if (dates.includes("M")) {
        month = time.getMonth() + 1;
      }

      if (dates.includes("hh")) {
        hour =
          time.getHour() < 10
            ? time
                .getHour()
                .toString()
                .padStart(2, 0)
            : time.getHour();
      }
      if (times.includes("h")) {
        hour = time.getHour();
      }
      if (times.includes("M")) {
        month = time.getMonth() + 1;
      }

      if (times.includes("mm")) {
        minutes =
          time.getMinutes() < 10
            ? time
                .getMinutes()
                .toString()
                .padStart(2, 0)
            : time.getMinutes();
      }
      if (times.includes("m")) {
        mintues = time.getMinutes();
      }
      if (times.includes("ss")) {
        seconds =
          time.getSecond() < 10
            ? time
                .getSecond()
                .toString()
                .padStart(2, 0)
            : time.getSecond();
      }
      if (times.includes("s")) {
        seconds = time.getSecond();
      }
      arr = [
        "星期天",
        "星期一",
        "星期二",
        "星期三",
        "星期四",
        "星期五",
        "星期六"
      ];
      let week = time.getDay();

      return `${year}-${month}-${day} ${hour}:${minutes}:${seconds} ${arr[week]}`;
    }

    console.log(
      formatDate(new Date(1409894060000), "yyyy-MM-dd HH:mm:ss 星期w")
    );

    // function namespace(oNamespace, sPackage) {
    //   //分割包
    //   const pages = sPackage.split(".");
    //   for (let i = 0; i < pages.length; i++) {
    //     //循环之前的对象
    //     if (pages[i] in oNamespace) {
    //       if (typeof oNamespace[pages[i]] !== "object") {
    //         oNamespace[arr[i]] = {};
    //       }
    //     } else {
    //       oNamespace[pages[i]] = {};
    //     }
    //     oNamespace = oNamespace[pages[i]];
    //   }
    // }
  },
  mounted() {},
  methods: {}
};
</script>

<style scoped lang="less"></style>
