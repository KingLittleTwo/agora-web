<template>
  <div class="nav">
    <div class="container font-info">
      <div class="logo left">
        <span class="main-font-color">C</span>ode<span class="main-font-color">A</span>gora
      </div>

      <div class="nav-bar left">
        <span v-for="nav in navs" :key="nav">
          {{ nav }}
        </span>
      </div>

      <div class="auth right">
        <div class="right">
          <span class="singin">登录</span>
          <span class="singup">注册</span>
        </div>
        <div class="form-group right">
          <input type="text" class="form-control search" name="search" id="search" placeholder="search what you want">
          <i class="iconfont icon-search"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      navs: ['社区', '问答', '博客', '...']
    }
  }
}
</script>

<style lang='stylus'>
@import '../../assets/stylus/variables.styl'
@import '../../assets/stylus/common.styl'

.nav
  background-color #ffffff
  height 60px
  line-height 60px
  font-size 18px
  box-shadow 1px 1px 5px #cccccc
  border-top 4px solid $main-color
  .container
    // display flex
    .logo, .nav-bar
      display inline-block
    // .logo
    //   flex 1
    //   width 120px
    .nav-bar
      margin-left 20px
      span
        display inline-block
        padding 0 20px
      span hover
        background-color #e2e2e2
    .auth
      display inline-block
      min-width 600px
      font-size 16px
      .form-group
          // margin-right  50px
        .search
          width 300px
          padding-right 40px
          font-style italic
        .icon-search
          position relative
          right 50px
          line-height 60px
        .icon-search:hover
          color $main-color
          cursor pointer
</style>
