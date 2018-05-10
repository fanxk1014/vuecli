<template>
    <div>
        {{msg}}
        <p>
            {{$route.params.newsId}}-{{$route.params.newsTitle}}
        </p>
    </div>
</template>

<script>
    export default {
        name:'params',
        data(){
            return{
                msg:'这是params page'
            }
        }
    }
</script>

<style scoped>

</style>