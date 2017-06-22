<template>
  <div class="page" v-nav="{title: '登录',showBackButton:true}">
    <div class="page-content padding-top">
      <von-input
        type="text"
        v-model="username"
        placeholder="用户名/手机/邮箱"
        label="用户名">
      </von-input>
      <von-input @keyup.enter.native="login"
        type="password"
        v-model="password"
        placeholder="密码"
        label="密码">
      </von-input>
      <md-button class="button button-block button-energized login" @click.native="login">登录</md-button>
      <md-button class="button button-block button-positive " @click.native="go_register">注册</md-button>
    </div>
  </div>
</template>
<script>
  import { mapGetters } from 'vuex'
  import { mapActions } from 'vuex'
  import { login , test ,testPost} from '../api/api'
  export default {
      data(){
          return{
              username:'',
              password:''
          }
      },
      computed:{
        ...mapGetters([
          'getUserInfo',
          'getToken'
        ])
      },
      methods:{
        ...mapActions([
          'setToken',
          'setUserInfo',
          'setLogState'
        ]),
          go_register(){
            $router.push('/register')
          },
          login(){
              //console.log("用户名+"+this.username+"密码"+this.password)
            let loginParams={
                username: this.username,
                password: this.password
            }
            login(loginParams).then(res =>{
                if(res.result == 'OK'){
                  //设置用户信息
                  this.setLogState(true);
                  this.setToken(res.token.token)
                  let userInfo={
                    username:res.username,
                    avatar:''
                  }
                  this.setUserInfo(userInfo)
                  //跳转到相应路由
                  $toast.show('登录成功', 1000)
                  $router.push('/')
                }
                if (res.result == 'ERROR'){
                  $toast.show('用户名或密码错误！', 1000)
                }

            }).catch(res =>{
                $toast.show('请检查您的网络！', 3000)
            }
            )
          }
      }
  }
</script>
<style scoped>
  .login{
    /*position: fixed;
    bottom: 0;
    width: 100%;*/
    margin-top: 30px;
  }
</style>
