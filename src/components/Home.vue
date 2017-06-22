<template>
  <div class="page has-navbar" v-nav="{title: 'Joker',theme:'energized'}"  >
    <!--<von-header theme="energized">
      <span slot="title">Joker &nbsp<i class="ion-refresh"></i></span>
    </von-header>-->
    <div class="page-content">
      <tabs :tab-items="tabs" :tab-index="tabIndex" :on-tab-click="onTabClick"></tabs>
      <scroll style="top: 53px;bottom: 44px" :on-refresh="onRefresh"
              :on-infinite="onInfinite">
        <joke v-for="(joke, index) in jokes" ref="joke"
              :avatar="avatar" :username="joke.creator" :pubDate="joke.update"
              :content="joke.content"  :jokeId="joke.jokeId" @upVote="upVote(joke.jokeId,index)"
              @downVote="downVote(joke.jokeId,index)" @viewJoke="viewJoke"
              @click.native="onItemClick(index)" @comment="viewCom">
          <!--:up="item.up" :down="item.down"-->
          <!--:imageSrc="imageSrc"-->
        </joke>

        <div v-if="infiniteCount >= 2" slot="infinite" class="text-center">没有更多数据</div>
      </scroll>
    </div>
  </div>
</template>
<script>
  import Joke from './public/word_joke.vue'
  import { mapGetters } from 'vuex'
  import { mapActions } from 'vuex'
  import {getLatestJokes , getHottestJokes ,upVote ,downVote} from '../api/api'
  export default {
    data () {
      return {
        //avatar:'../assets/images/logo.png',
        avatar:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1496745405221&di=5627c065b5863fbe86cd85c236a3b9bc&imgtype=0&src=http%3A%2F%2Fn.sinaimg.cn%2Fent%2Ftransform%2F20160311%2F9Rth-fxqhmvp6153192.jpg',
        tabs: [
          "最热",
          "最新",
          "视频",
          "图片",
          "段子"
        ],
        tabIndex: 0,
        jokes:[],
        leftJokes:[],
        infiniteCount: 0,
        top:1,
        bottom:9
      }
    },
    computed:{
      ...mapGetters([
        'getLogState',
        'getUserInfo',
        'getToken'
      ])
    },
    methods:{
      getJokes(){
          let params = {
            lastJokeId : 'unKnow',
            size : 3
          }
          getHottestJokes(params).then(res =>{
              this.jokes = res
          })
      },
      viewCom(jokeId){
          $router.push('/joke_det')
      },
      upVote(jokeId,index){
          if(this.getLogState ==true){
              let params ={
                  jokeId:jokeId,
                  username:this.getUserInfo.username
              }
              upVote(params).then(res =>{
                  if (res ==true){
                    this.$refs.joke[index].up++
                  }else {
                    $toast.show('你已经投过啦',2000)
                  }
              })
          }else {
              $router.push('/login')
          }
      },
      downVote(jokeId,index){
        if(this.getLogState ==true){
          let params ={
            jokeId:jokeId,
            username:this.getUserInfo.username
          }
           /* ,this.getToken*/
          downVote(params).then(res =>{
            if (res ==true){
              this.$refs.joke[index].down++
            }else {
              $toast.show('你已经投过啦',2000)
            }
          })
        }else {
          $router.push('/login')
        }
      },
      viewJoke(jokeId){
        $router.push('/joke_det')
      },
      onRefresh(done) {
        setTimeout(() => {
          this.getJokes();
          done()
        }, 1000)
      },
      onInfinite(done) {
        setTimeout(() => {
          let lastJokeId = this.jokes[this.jokes.length-1].jokeId
          let params = {
            lastJokeId : lastJokeId,
            size : 3
          }
          getLatestJokes(params).then(res =>{
              for(let i=0 ;i < res.length;i++){
                  this.jokes.push(res[i])
              }
          })
          done()
        }, 1000)
      },
      onItemClick(index) {
        console.log(index)
      },
      onTabClick(index) {
        console.log(index)
        this.tabIndex = index
      },

      reflesh(){

      }
    },
    mounted() {
        this.getJokes();
    },
    components:{
      Joke,Joke
    }

  }
</script>
<style>
  h2 {
    font-family: Candara,Calibri,Segoe,Segoe UI,Optima,Arial,sans-serif;
    color: #888;
  }

  .page.has-navbar .page-content {
    padding-top: 93px;
  }
</style>
