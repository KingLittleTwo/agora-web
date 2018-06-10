<template>
  <div class="main-nav">
      <i class="iconfont icon-map"></i>
      <span class="nav-item active">精华</span>
      <span class="backslash">/</span>
      <span class="nav-item">热门</span>
      <span class="backslash">/</span>
      <span class="nav-item">最近</span>
      <span class="backslash">/</span>
      <span class="nav-item">分类</span>
  </div>
</template>

<style lang="stylus">
@import '../../assets/stylus/variables.styl'
@import '../../assets/stylus/common.styl'

@media screen and (min-width: 0)
  .main-nav
    background #ffffff
    margin-bottom 10px
    padding 20px
    .nav-item:hover
      color $main-color
      cursor pointer
    .active
      color $main-color
@media screen and (max-width: 850px)
  .main-nav
    margin-top 10px
</style>
