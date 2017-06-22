/**
 * Created by Administrator on 2017/6/7.
 */
import axios from 'axios'
/*
import store from '../vuex/store'

const header = {
    headers:{
      "Authorization":store.state.token_pre+store.state.token
    }
}
*/

let base = 'http://10.254.76.127:8080';
//为全局请求添加token
axios.defaults.baseURL = base;
//axios.defaults.headers.common['Authorization'] = "Bearer "+"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJqYWNrIiwiY3JlYXRlZCI6MTQ5Njg5OTA3MDY5OSwiZXhwIjoxNDk3NTAzODcwfQ.dIQBYjMAXBNoDCZrqcU1GTfo20Cf3PcQ3Zs-zZBTr96340oZfciS_1p_jxJJvh7yrnIzYt3b7IOV237E_5P-WA"

export const test = params =>{ return axios.get(`/joke/test`,{params:params}) }
export const testPost =params =>{ return axios.post(`/joke/testpost`, params).then( res => res.data);}

export const login = params =>{ return axios.post('/authenticate' ,params).then(res =>{return res.data} ); }
export const register = params =>{ return axios.post(`/user/register`,params).then(res =>res.data); }

export const getLatestJokes = params =>{ return axios.get('/joke/latest',{params:params }).then(res =>res.data)}
export const getHottestJokes = params =>{ return axios.get('/joke/hottest',{params:params }).then(res =>res.data)}

export const upVote = (params,headers) =>{ return axios.get('/joke/up_vote',{params:params}).then(res => res.data )}
export const downVote = (params,header) =>{return axios.get('/joke/down_vote',{params:params}).then(res => res.data )}
export const getUpAmount = params =>{ return axios.get('/joke/up_vo_amount/'+params).then( res => res.data)}
export const getDownAmount = params =>{ return axios.get('/joke/down_vo_amount/'+params).then( res => res.data)}

export const postWordJoke = (params) =>{ return axios.post('/joke/word',params).then(res =>res.data)}
