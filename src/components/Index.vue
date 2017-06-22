<template>
  <div class="page" v-tabbar="{'menus': menus, menuColor: '#B5B5B5', activeMenuColor: '#44CC00', onMenuClick: menuClicked}">
   <keep-alive>
     <router-view></router-view>
   </keep-alive>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        modal: undefined,
        menus: [
          {
            iconOn: 'ion-ios-home',
            iconOff: 'ion-ios-home-outline',
            text: '首页',
            path: '/'
          },
          {
            iconOn: 'ion-ios-pricetags',
            iconOff: 'ion-ios-pricetags-outline',
            text: '+段子+',
            path: '/add_joke'
          },
         /* {
            iconOn: 'ion-ios-cart',
            iconOff: 'ion-ios-cart-outline',
            text: '我的',
            path: '/user',
            badge: '5'
          },*/
          {
            iconOn: 'ion-ios-person',
            iconOff: 'ion-ios-person-outline',
            text: '我的',
            path: '/user',
            badge: '5'
          }
        ]
      }
    },

    methods: {
      menuClicked(menuIndex) {
        console.log(menuIndex)
        /*if(menuIndex == 1){
          this.modal.show();
        }*/
      }
    },
    /*mounted() {
      $modal.fromComponent(PostJoke, {
        title: '发表文字',
        theme: 'energized'
      }).then((modal) => {
        this.modal = modal
      })
    },*/
    beforeDestroy() {
      $tabbar.$emit('hideTabbar')
      /*if (this.modal){
        $modal.destroy(this.modal)
      }*/

    }
  }
</script>
<style>
  .navbar{
    background: #fdb500;
  }
</style>
