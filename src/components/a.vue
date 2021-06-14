<template>
    <div>
我是a{{aa}}
    </div>
</template>

<script>
export default {
    data() {
        return {
      aa:null
        };
    },
    created() {
     this.aa=this.$route.query.name
    },
    mounted() {

    },
    methods: {

    }
};
</script>

<style scoped lang="less">

</style>
