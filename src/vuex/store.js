/**
 * Created by Administrator on 2017/6/7.
 */
import Vue from 'vue'
import VueX from 'vuex'
import * as actions from './actions'
import * as getters from './getters'

Vue.use(VueX)
//应用初始状态
const state={
  count: 10,
  isLogged:false,
  userInfo:{
    username:'',
    avatar:'',
  },
  token_header:{
    token_pre:'Bearer ',
    token:''
  }
}
// 定义所需的 mutations
const mutations ={
  INCREMENT(state) {
    state.count++
  },
  DECREMENT(state) {
    state.count--
  },
  SetUserInfo(state , userInfo){
    state.userInfo = userInfo
  },
  SETSTATE(state , logState){
    state.isLogged = logState
  },
  SETTOKEN(state , token){
    state.token_header.token=token
  },


}

//创建store 实例
export default new VueX.Store({
  actions,
  getters,
  state,
  mutations
})
