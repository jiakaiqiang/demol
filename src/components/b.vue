<template>
    <div>
       我是b {{$route.params.id}}
    </div>
</template>

<script>
export default {
    data() {
        return {

        };
    },
    created() {
    console.log(this.$route.params.id)
    },
    mounted() {

    },
    methods: {

    }
};
</script>

<style scoped lang="less">

</style>
