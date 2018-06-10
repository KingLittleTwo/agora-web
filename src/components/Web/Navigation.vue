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
          <span class="singin hands">登录</span>
          <span class="singup hands">注册</span>
        </div>
        <div class="form-group right search-group">
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
    .logo, .nav-bar
      display inline-block
    .nav-bar
      margin-left 20px
      span
        display inline-block
        padding 0 20px
      span:hover
        cursor pointer
        background-color #e2e2e2
    @media screen and (min-width: 1266px)
      .auth
        display inline-block
        min-width 600px
        font-size 16px
        .search-group
          .search
            width 300px
            padding-right 40px
            font-style italic
          .icon-search
            position relative
            right 60px
            line-height 60px
          .icon-search:hover
            color $main-color
            cursor pointer
    @media screen and (max-width: 1266px)
      .auth
        display inline-block
        font-size 16px
        width 80px
      .search-group
        display none
</style>
