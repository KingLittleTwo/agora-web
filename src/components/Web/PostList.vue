<template>
  <div>
    <main-nav></main-nav>
    <div class="postlist">
      <div class="post-list card">
        <ul>
          <li class="post-list-item" v-for="(post, item) in postList" :key="item">
            <div class="avatar">
              <a href="">
                <img src="" alt="">
              </a>
            </div>
            <div class="post-item-detail">
              <div class="post-content">
                <router-link :to="{ name: 'PostDetail', params: { id: post.id }}" v-bind:postid="post.id">
                  <p class="post-list-item-content">{{ post.content }}</p>
                </router-link>
              </div>
              <div class="post-static-info">
                <i class="iconfont icon-atmaway"></i>
                <span class="apply-num font-danger">10</span>
                <span class="backslash">/</span>
                <i class="iconfont icon-favorite"></i>
                <span class="favourite-num font-success">100</span>
                <span class="backslash">/</span>
                <i class="iconfont icon-office"></i>
                <span class="view-num font-primary">200</span>
              </div>
            </div>
          </li>
          <li>
            <div class="page">
              <span>1</span>
              <span>1</span>
              <span>1</span>
              <span>1</span>
              <span>1</span>
              <span>1</span>
              <span>1</span>
              <span>1</span>
              <span>1</span>
              <span>1</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import MainNav from './MainNavigation'

export default {
  components: {
    MainNav
  },
  data () {
    return {
      postList: {
        0: { id: 1, name: 'daye1', content: '分内的事烦恼都尽可能77777777777777777将对方内的事烦恼都尽可能将对方内的事烦恼都尽可能将对方内的事烦恼都尽可能将对方67777777777777777777777可' },
        1: { id: 2, name: 'daye2', content: '分内的事烦恼都尽可能将对方可' },
        2: { id: 3, name: 'daye3', content: '分内的事烦恼都尽可能将对方可' },
        3: { id: 4, name: 'daye4', content: '分内的事烦恼都尽可能将对方可' },
        4: { id: 5, name: 'daye5', content: '分内的事烦恼都尽可能将对方可' },
        5: { id: 6, name: 'daye6', content: '分内的事烦恼都尽可能将对方可' },
        6: { id: 1, name: 'daye1', content: '分内的事烦恼都尽可能将对方可' },
        7: { id: 2, name: 'daye2', content: '分内的事烦恼都尽可能将对方可' },
        8: { id: 3, name: 'daye3', content: '分内的事烦恼都尽可能将对方可' },
        9: { id: 4, name: 'daye4', content: '分内的事烦恼都尽可能将对方可' },
        10: { id: 5, name: 'daye5', content: '分内的事烦恼都尽可能将对方可' },
        11: { id: 6, name: 'daye6', content: '分内的事烦恼都尽可能将对方可' },
        12: { id: 1, name: 'daye1', content: '分内的事烦恼都尽可能将对方可' },
        13: { id: 2, name: 'daye2', content: '分内的事烦恼都尽可能将对方可' }
      }
    }
  }
}
</script>

<style lang="stylus">
@import '../../assets/stylus/variables.styl'
@import '../../assets/stylus/common.styl'

.postlist
  .post-list
    .post-list-item
      width 100%
      height 70px
      line-height 70px
      border-bottom 1px solid #f1f1f1
      cursor pointer
      overflow hidden
      display flex
      .avatar
        max-width 50px
        // flex 1
        display inline-block
        margin-top 10px
        vertical-align middle
        width 50px
        height 50px
        background red
        border-radius 25px
      .post-item-detail
        flex 1
        display flex
        justify-content space-between
        .post-content
          flex 1
          padding-left 20px
          a
            color $common-font-color
            .post-list-item-content
              overflow hidden
        .post-static-info
          width 240px
          text-align right
          flex 1
      .page
        margin-top 20px
        span
          margin 0
          border 1px solid #e6e6e6
          border-right none
          display inline-block
          width 30px
          height 30px
          line-height 30px
          text-align center
          background #ffffff
    .post-list-item:last-child
      border none
</style>
