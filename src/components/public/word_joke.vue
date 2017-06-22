<template>
  <div class="mui-card" :id="jokeId">
    <div class="mui-card-header mui-card-media">
      <img :src="randomAvatar" />
      <div class="mui-media-body">
        {{username}}
        <p>发表于 {{pubTime}}</p>
      </div>
      <!--<img class="mui-pull-left" src="../images/logo.png" width="34px" height="34px" />
                <h2>小M</h2>
                <p>发表于 2016-06-30 15:30</p>-->
    </div>
    <div class="mui-card-content" @click="viewJoke(jokeId)" >
      <div class="word-joke">
        <p>{{content}}</p>
      </div>
      <!--<img :src="imageSrc" alt="" width="100%"/>-->
    </div>
    <div class="mui-card-footer">
      <a class="mui-card-link" @click="upVote(jokeId)"><i class="ion-thumbsup" style="font-size: 20px"></i>&nbsp{{up}}</a>
      <a class="mui-card-link" @click="downVote(jokeId)"><i class="ion-thumbsdown" style="font-size: 20px" ></i>&nbsp{{down}}</a>
      <a class="mui-card-link" @click="comment(jokeId)"><i class="ion-chatboxes" style="font-size: 20px" ></i>&nbsp{{comments}}</a>
    </div>
    <div class="comment">
      <div class="comment-content">
        <span>
          <em style="color: #4b8bf4">张三:&nbsp</em>
          <span>赞，很有意思比如一段文字</span>
        </span>
      </div>
      <div class="comment-content">
        <span>
          <em style="color: #4b8bf4">李四:&nbsp</em>
          <span>厉害了我的哥！</span>
        </span>
      </div>
      <div class="comment-content">
        <span>
          <em style="color: #4b8bf4">王老五:&nbsp</em>
          <span>—__-哈哈啊哈哈哈哈哈哈</span>
        </span>
      </div>
    </div>
  </div>
</template>
<script>
  /*import 'word_joke.css'*/
  import {getUpAmount , getDownAmount} from '../../api/api'
  import { mapGetters } from 'vuex'
  import { mapActions } from 'vuex'
  export default {
      props:{
        jokeId:{
            type:String,
            required: true,
        },
        avatar:{
            type:String,
            default:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1496745405221&di=5627c065b5863fbe86cd85c236a3b9bc&imgtype=0&src=http%3A%2F%2Fn.sinaimg.cn%2Fent%2Ftransform%2F20160311%2F9Rth-fxqhmvp6153192.jpg'
        },
        username:{
            type:String,
            required:true
        },
        pubDate:{
            type:Number,
            required:true
        },
        content:{
            type:String
        },
        imageSrc:{
            type:String,
            default:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1496744019451&di=5fe040ad8566672bf08eee9b29f6231e&imgtype=0&src=http%3A%2F%2Fh.hiphotos.baidu.com%2Fzhidao%2Fpic%2Fitem%2F060828381f30e9240ff2cd434c086e061d95f76a.jpg'
        },
        comments:{
            type:String,
            default:'5698'
        }
      },
      computed:{
        ...mapGetters([
          'getLogState',
          'getUserInfo'
        ]),
        pubTime:function () {
          let date = new Date(this.pubDate)
          return date.getFullYear()+"年"+(date.getMonth()+1)+"月"+date.getUTCDate()+"日"+date.getHours()+"时"+date.getMinutes()+"分"
        },
        randomAvatar:function () {
          let baseUrl ="http://www.veton.cc/minerOnline/images/"
          let arr =[]
          for(var i =1 ; i<15;i++){
              arr.push(i)
          }
          let index = Math.floor((Math.random()*arr.length));
          return baseUrl+index+".jpg"
        }
      },
      data(){
          return{
            /*jokeId:'',*/
            up:'',
            down:''
          }
      },
      methods:{
        viewJoke(jokeId){
          this.$emit('viewJoke',jokeId)
        },
        upVote(){
            //alert(jokeId)
          this.$emit('upVote')
        },
        downVote(){
          this.$emit('downVote')
        },
        comment(jokeId){
            this.$emit('comment',jokeId)
        }
      },
      mounted(){
          getUpAmount(this.jokeId).then(res =>{this.up = res})
          getDownAmount(this.jokeId).then(res =>{this.down = res})
          //this.up=;
          //this.down=getDownAmount(this.jokeId);
      }
  }
</script >
<style scoped>
  .word-joke{
    padding-top: 8px;
    /*font-size: 16px;
    font-family: "Monoton", sans-serif;*/
  }
  .comment{
    background-color: #e3e3e3;
    padding: 4px;
  }
  .mui-card {
    font-size: 14px;
    position: relative;
    overflow: hidden;
    margin: 1px 10px;
    //margin-bottom: 1px;

    //border-radius: 2px;
    //background-color: #fff;
    //border-bottom: solid 1px green;
    background-clip: padding-box;
    //box-shadow: 0 1px 2px rgba(0, 0, 0, .3)
  }
  /*.mui-card-content{
    border: none;
  }*/
  .mui-content>.mui-card:first-child {
    margin-top: 15px
  }

  .mui-card .mui-input-group .mui-input-row:last-child:after,
  .mui-card .mui-input-group .mui-input-row:last-child:before,
  .mui-card .mui-input-group:after,
  .mui-card .mui-input-group:before {
    height: 0
  }

  .mui-card .mui-table-view {
    margin-bottom: 0;
    border-top: 0;
    border-bottom: 0;
    border-radius: 6px
  }

  .mui-card .mui-table-view .mui-table-view-cell:first-child,
  .mui-card .mui-table-view .mui-table-view-divider:first-child {
    top: 0;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px
  }

  .mui-card .mui-table-view .mui-table-view-cell:last-child,
  .mui-card .mui-table-view .mui-table-view-divider:last-child {
    border-bottom-right-radius: 6px;
    border-bottom-left-radius: 6px
  }

  .mui-card .mui-table-view:after,
  .mui-card .mui-table-view:before,
  .mui-card>.mui-table-view>.mui-table-view-cell:last-child:after,
  .mui-card>.mui-table-view>.mui-table-view-cell:last-child:before {
    height: 0
  }

  .mui-card-footer,
  .mui-card-header {
    position: relative;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    min-height: 44px;
    padding: 10px 15px;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    justify-content: space-between;
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center
  }

  .mui-card-footer .mui-card-link,
  .mui-card-header .mui-card-link {
    line-height: 44px;
    position: relative;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    height: 44px;
    margin-top: -10px;
    margin-bottom: -10px;
    -webkit-transition-duration: .3s;
    transition-duration: .3s;
    text-decoration: none;
    -webkit-box-pack: start;
    -webkit-justify-content: flex-start;
    justify-content: flex-start;
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center
  }

  .mui-card-footer:before,
  .mui-card-header:after {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    height: 1px;
    content: '';
    -webkit-transform: scaleY(.5);
    transform: scaleY(.5);
    background-color: #c8c7cc
  }

  .mui-card-header {
    font-size: 17px;
    border-radius: 2px 2px 0 0
  }

  .mui-card-header:after {
    top: auto;
    bottom: 0
  }

  .mui-card-header>img:first-child {
    font-size: 0;
    line-height: 0;
    float: left;
    width: 34px;
    height: 34px;
    border-radius:50%;
    overflow:hidden;
  }

  .mui-card-footer {
    color: #6d6d72;
    border-radius: 0 0 2px 2px
  }

  .mui-card-content {
    font-size: 14px;
    position: relative
  }

  .mui-card-content-inner {
    position: relative;
    padding: 15px
  }

  .mui-card-media {
    vertical-align: bottom;
    color: #fff;
    background-position: center;
    background-size: cover
  }

  .mui-card-header.mui-card-media {
    display: block;
    padding: 10px 10px 10px 0px;
  }

  .mui-card-header.mui-card-media .mui-media-body {
    font-size: 14px;
    font-weight: 500;
    line-height: 17px;
    margin-bottom: 0;
    margin-left: 44px;
    color: #333
  }

  .mui-card-header.mui-card-media .mui-media-body p {
    font-size: 13px;
    margin-bottom: 0
  }

</style>
