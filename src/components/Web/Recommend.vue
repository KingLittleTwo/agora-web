<template>
  <div class="recommend">
    <div class="recommend-title">
        <i class="iconfont icon-pin"></i>
        <span class="">推荐</span>
    </div>
    <ul class="recommend-post-list">
      <li v-for="(post, item) in postList" :key="item">
        <p>{{ post.content }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      postList: {
        0: { id: 1, name: 'daye1', content: '分内的事烦恼都尽可能将发烧呢佛塑科技对方可' },
        1: { id: 2, name: 'daye2', content: '分内的事烦恼都尽可能将2222222222222对方可' },
        2: { id: 3, name: 'daye3', content: '分内的事烦恼都尽可能将对方可' },
        3: { id: 4, name: 'daye4', content: '方面的司马孚代课老师每个开放的买了个免费的立刻购买反斗联盟管理费等没了' },
        4: { id: 5, name: 'daye5', content: '分内的事烦恼都尽可能将对方可' },
        5: { id: 6, name: 'daye6', content: '分内的事烦恼都尽可能将对方可' },
        6: { id: 1, name: 'daye1', content: '分内的事烦恼都尽可能将对方可' },
        7: { id: 2, name: 'daye2', content: '分内的事烦恼都尽可能将对方可' },
        8: { id: 3, name: 'daye3', content: '分内的事烦恼都尽可能将对方可' },
        9: { id: 4, name: 'daye4', content: '分内的事烦恼都尽可能将对方可' },
        10: { id: 5, name: 'daye5', content: '分内的事烦恼都尽可能将对方可' }
      }
    }
  }
}
</script>

<style lang='stylus'>
@import '../../assets/stylus/variables.styl'
@import '../../assets/stylus/common.styl'

@media screen and (min-width: 0px)
  .recommend
    background #ffffff
    margin-bottom 10px
    padding: 20px
    .recommend-title
      margin-bottom 15px
    .recommend-post-list
      display block
      border-top 1px solid $backslash
      padding-top 10px
      li
        display block
        cursor pointer
        width inherit
        overflow hidden
        height 35px
        line-height 35px
</style>
