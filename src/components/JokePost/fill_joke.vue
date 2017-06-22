<template>
  <div>


  <div class="page has-navbar" v-nav="{title: '发表文字',showBackButton:true}" >
   <!-- <von-header theme="energized">
      <span slot="title">发表文字</span>
      <button class="button" slot="right">发表</button>
    </von-header>-->
    <div class="page-content padding padding-top ">
       <textarea class="textarea" rows="20" v-model="joke_con" placeholder="请端正言辞！"></textarea>
    </div>
    <md-button style="" class="button button-positive button-block post_btn" @click.native="post" >
      发表
    </md-button>
  </div>
  </div>
</template>
<script>
  import { postWordJoke} from '../../api/api'
  import { mapGetters } from 'vuex'
  import { mapActions } from 'vuex'
  export default {
    data(){
        return{
          joke_con:''
        }
    },
    computed:{
      ...mapGetters([
          'getUserInfo',
          'getToken'
        ])
    },
    methods: {
      post() {
        let param ={
            creator:this.getUserInfo.username,
            content:this.joke_con
        }
        console.log("上传作者="+param.creator)
        postWordJoke(param).then(res =>{
            if (res.result =="OK"){
                $toast.show('发布成功',1000)
                $router.push('/')
            }else {
                $toast.show('服务器异常，请稍候再试！',1000)
            }
        })
      }
    }
  }
</script>
<style scoped>
  .post_btn{
    //padding-bottom: 0px !important;
    position: fixed;
    bottom: 0;
    width: 100%;
    //border: solid 1px red;
    border-radius: 0px;
  }
  .textarea{
    width: 100%;
    /*height:800px;*/
    /*width: 200px;
    height: 100px;
    max-width: 200px;
    max-height: 100px;*/
  }
  .page.has-navbar .page-content {
    padding-top: 54px;
  }
</style>
