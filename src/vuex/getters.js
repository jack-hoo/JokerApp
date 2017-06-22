/**
 * Created by Administrator on 2017/6/7.
 */
export const getCount = state => {
  return state.count
}
export const getUserInfo =state => {
  return state.userInfo
}
export const getLogState =state =>{
  return state.isLogged
}

export const getToken = state =>{
  let token =""+state.token_header.token
  let header =state.token_header.token_pre +token
  return header

}

