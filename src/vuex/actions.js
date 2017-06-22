/**
 * Created by Administrator on 2017/6/7.
 */
export const increment = ({commit}) => {
  commit('INCREMENT')
}
export const decrement = ({commit}) => {
  commit('DECREMENT')
}
export const setUserInfo = ({commit} , userInfo) =>{
  commit('SetUserInfo' , userInfo)
}
export const setLogState = ({commit} , state) =>{
  commit('SETSTATE' , state)
}
export const setToken = ({commit} , token) =>{
  commit('SETTOKEN' ,token)
}

