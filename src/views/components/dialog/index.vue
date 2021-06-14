<template>
    <div class='dialog'>
          <h3>{{title}}</h3>
          <div>{{message}}</div>
    </div>
</template>

<script>
export default {
    props:{
        message:{
            type:String
        },
        title:String
    },
    data() {
        return {

        };
    },
    created() {
        console.log(this)

    },
    mounted() {

    },
    methods: {

    }
};
</script>

<style scoped lang="css">
.dialog{
    position: absolute;;
    width: 500px;
    height: 100px;
    left:50%;
    top:50%;
    transform: translate(-250px,-50px);
    z-index:10000
}

</style>
