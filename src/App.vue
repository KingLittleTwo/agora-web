<template>
  <div id="app">
    <vnav></vnav>
    <div class="container main">
      <div class="content">
        <router-view></router-view>
      </div>
      <div class="side">
        <user-info></user-info>
        <recommend></recommend>
      </div>
    </div>
    <vfooter></vfooter>
  </div>
</template>

<script>
import Nav from './components/Web/Navigation'
import UserInfo from '@/components/Web/SideUserInfo'
import Recommend from '@/components/Web/Recommend'
import Footer from '@/components/Web/Footer'

export default {
  name: 'App',
  components: {
    vnav: Nav,
    UserInfo,
    Recommend,
    vfooter: Footer
  }
}
</script>

<style lang="stylus">
html
  height 100%
body
  background: #f1f1f1
  position relative
  min-height 100%
  a
    text-decoration: none
  @media screen and (min-width: 850px)
    .main
      display: -webkit-flex
      display: flex
      flex-flow: row
      padding-top: 20px
      font-size: 14px
      padding-bottom 220px
      .content, .side
        display: inline-block
      .content
        margin-right: 10px
        flex-grow: 1
      .side
        flex-grow: 1
        width: 20%
        max-width: 300px
        min-width: 250px
  @media screen and (max-width: 850px)
    .main
      display block
</style>
