<template>
  <div class="page has-navbar" v-nav="{title:'评论',theme:'energized',showBackButton:true}" >
    <div class="page-content">
      <joke :avatar="avatar" :username="item.username" :pubDate="item.pubDate"
            :content="item.content" :imageSrc="imageSrc" :jokeId="item.id"
            :comments="item.comments"  @downVote="downVote" @upVote="upVote"></joke>
      <div>
        <em>评论区</em>
      </div>
    </div>

  </div>
</template>
<script>
  import Joke from '../public/word_joke.vue'
  export default {
      data(){
          return{
            item:{id:156,avatar:this.avatar,username:'李白',pubDate:'2017-05-12',
              content:'发表内容',imageSrc:this.imageSrc,comments:'4565'},
            avatar:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1496745405221&di=5627c065b5863fbe86cd85c236a3b9bc&imgtype=0&src=http%3A%2F%2Fn.sinaimg.cn%2Fent%2Ftransform%2F20160311%2F9Rth-fxqhmvp6153192.jpg',
            imageSrc:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1496744019451&di=5fe040ad8566672bf08eee9b29f6231e&imgtype=0&src=http%3A%2F%2Fh.hiphotos.baidu.com%2Fzhidao%2Fpic%2Fitem%2F060828381f30e9240ff2cd434c086e061d95f76a.jpg',
          }
      },
      methods:{
        downVote(jokeId){
            alert(jokeId)
        },
        upVote(){
          alert(jokeId)
        }
      },
      components:{
        Joke,Joke
      },
      beforeCreate(){
          //alert('before')
      }
  }
</script>
<style scoped>
  .page.has-navbar .page-content {
    padding-top: 44px;
  }
</style>
