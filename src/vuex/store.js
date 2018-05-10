import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state={
    count:1
}
const mutations={
    add(state){
        state.count+=10
        // setTimeOut(()=>{context.commit(reduce)},3000);
        // console.log('同步');
    },
    reduce(state){
        state.count--
    }
}
const getters={//类似computed
    count:state=>state.count+=100
}
const actions={//类似mutations，但actions是异步的
    addAction(context){
        context.commit('add',10);
        // setTimeOut(()=>{context.commit(reduce)},3000);
        console.log('我比reduce提前执行');
    },
    reduceAction({commit}){//直接把commit对象传递过来
        commit('reduce');
        
        // commit.reduce;这样写是错的
    }
}
const moduleA={//模块组
    // state,
    // mutations,
    // getters,
    // actions
}
const moduleB={//模块组
    // state,
    // mutations,
    // getters,
    // actions
}

export default new Vuex.Store({
    state,
    mutations,
    getters,
    actions
    // modules:{a:moduleA} 例：引入模块组a
    // modules:{b:moduleB} 例：引入模块组b
})