<template>
    <div id="app">
        <h2>{{msg}}</h2>
        <hr>
        <h3>
            {{count}}
            <!-- <h3>{{$store.state.a.count}}</h3> 引入模块组a后-->
        </h3>
        <p>同步：
            <button @click="reduce">-</button>
            <button @click="add(10)">+</button>
        </p>

        <p>异步：
            <button @click="reduceAction">-</button>
            <button @click="addAction">+</button>
        </p>
    </div>
</template>
<script>
    import store from '@/vuex/store'
    import { mapState, mapMutations,mapGetters,mapActions } from 'vuex'
    export default{
        data(){
            return{
                msg:'hello vuex'
            }
        },
        store,
        computed:{
            ...mapState(['count']),
            ...mapGetters(['count'])
        },
        methods:{
            ...mapMutations(['add','reduce']),
            ...mapActions(['addAction','reduceAction'])
        }
    }
</script>