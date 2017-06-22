<template>
  <div class="page" v-nav="{title:'注册',showBackButton:true}">
    <div class="page-content padding-top">
      <von-input
        type="text"
        v-model="username"
        placeholder="用户名/手机/邮箱"
        label="用户名">
      </von-input>
      <von-input type="password"
                 v-model="password"
                 placeholder="密码"
                 label="密码">
      </von-input>
      <von-input @keyup.enter.native="register"
                 type="password"
                 v-model="re_pwd"
                 placeholder="请重复上面的密码"
                 label="重复密码">
      </von-input>
      <md-button class="button button-block button-positive register" @click.native="register">注册</md-button>
    </div>
  </div>
</template>
<script>
  import {register } from '../api/api'
  export default {
      data(){
          return{
            username:'',
            password:'',
            re_pwd:''
          }
      },
      methods:{
        register(){
          let userinfo ={
              username:this.username,
              password:this.password
          }
          register(userinfo).then(res =>{
              if(res.result == 'OK'){
                  $toast.show('恭喜您注册成功',3000)
                  $router.push('/login')
              }
              if (res.result == 'ERROR'){
                $toast.show(res.reason ,3000)
              }
          }).catch(res =>{

          })
        }
      }
  }
</script>
<style scoped>
  .register{
    margin-top: 20px;
  }
</style>
