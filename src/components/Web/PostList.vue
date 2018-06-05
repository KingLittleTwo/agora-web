<template>
  <div class="postlist">
    <div class="post-list-title">
        <i class="iconfont icon-map"></i>
        <span class="post-nav active">精华</span>
        <span class="backslash">/</span>
        <span class="post-nav">热门</span>
        <span class="backslash">/</span>
        <span class="post-nav">最近</span>
        <span class="backslash">/</span>
        <span class="post-nav">分类</span>
    </div>
    <div class="post-list">
      <ul>
        <li v-for="(post, item) in postList" :key="item">
          <div class="avatar">
            <a href="">
              <img src="" alt="">
            </a>
          </div>
          <div class="post-list-item">
            <p>{{ post.content }}</p>
          </div>
          <div class="post-static-info right">
            <i class="iconfont icon-atmaway"></i> 
            <span class="apply-num font-danger">10</span>
            <span class="backslash">/</span>
            <i class="iconfont icon-favorite"></i>
            <span class="favourite-num font-success">100</span>
            <span class="backslash">/</span>
            <i class="iconfont icon-office"></i>
            <span class="view-num font-primary">200</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      postList: {
        0: { id: 1, name: 'daye1', content: '分内的事烦恼都尽可能将对方可' },
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
  .post-list, .post-list-title
    background #ffffff
    margin-bottom 10px
  .post-list-title
    padding 20px
    .post-nav:hover
      color $main-color
      cursor pointer
    .active
      color $main-color
  .post-list
    li
      height 70px
      line-height 70px
      border-bottom 1px solid #f1f1f1
      padding 0 20px
      cursor pointer
    .avatar
      display inline-block
      vertical-align middle
      width 50px
      height 50px
      background red
      border-radius 25px
    .post-list-item
      display inline-block
      padding-left 20px
      color $common-font-color
</style>
