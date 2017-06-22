<template>
  <div class="has-navbar" v-nav="{title: '分享类型'}">

    <div class="page-content padding padding-top">
      <md-button v-for="button in buttons" class="button button-block"
                 :class="button.class" :id="button.id" @click.native="post(button.id)" >{{button.name}}</md-button>
    </div>

  </div>
</template>
<script>
  import { mapGetters } from 'vuex'
  import { mapActions } from 'vuex'
  export default {
    data() {
      return {
          buttons:[
            {name:'图片',id:'im_jo',class:'button-assertive'},
            {name:'文字',id:'wo_jo',class:'button-positive'},
            {name:'视频',id:'vi_jo',class:'button-balanced'},
            {name:'链接',id:'li_jo',class:'button-energized'},
          ]
      }
    },
    computed:{
      ...mapGetters([
          'getLogState',
          'getUserInfo'
      ])
    },
    methods:{
      ...mapActions([
          'setUserInfo',
          'setLogState'
      ]),
      post(type){
        $router.push({path:'/fill_joke',query:{type:type}})
         //判断用户是否登录
        /*this.setLogState(true)
        if (this.getLogState){

        }else {

        }*/
        //console.log("logged?"+this.getLogState)
          //console.log(this.getUserInfo)
      }
    },

  }
</script>
