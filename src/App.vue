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
  </div>
</template>

<script>
import Nav from './components/Web/Navigation'
import UserInfo from '@/components/Web/SideUserInfo'
import Recommend from '@/components/Web/Recommend'

export default {
  name: 'App',
  components: {
    vnav: Nav,
    UserInfo,
    Recommend
  }
}
</script>

<style lang="stylus">
body
  background: #f1f1f1
  a
    text-decoration: none
  .main
    display: -webkit-flex
    display: flex
    flex-flow: row
    padding-top: 20px
    font-size: 14px
    .content, .side
      display: inline-block
    .content
      margin-right: 20px
      flex-grow: 1
    .side
      flex-grow: 1
      width: 20%
      max-width: 300px
</style>
