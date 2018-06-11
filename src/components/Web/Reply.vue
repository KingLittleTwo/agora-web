<template>
  <div>
    <div class="reply card">
      <div class="reply-header">
        <i class="iconfont icon-rfqquantity"></i>
        评论
      </div>
      <div class="reply-content">
        <textarea name=""></textarea>
      </div>
      <button class="reply-submit btn btn-info right">回复</button>
      <div class="cl"></div>
    </div>
    <div class="reply card">
      <div class="reply-header">
        <i class="iconfont icon-viewlist"></i>
        评论列表
      </div>
      <div class="reply-list">
        <div class="reply-item" v-for="item of 4" :key="item">
          <div class="avatar">
            <img src="" alt="">
          </div>
          <div class="reply-box">
            <div class="reply-user">
              <span class="username">王大宝</span>
              <span class="font-note right">
                <i class="iconfont icon-good"></i>
                <span class="good-num">250</span>
              </span>
            </div>
            <div class="reply-body">
              我们将带你一步步从零开始开发一个完整的 VUEJS 项目（参考 https://vuejscaff.com/ 网站），让你在实战中学习到 VUE 的基础知你一步步从零开始开发一个完整的 VUEJS 项目（参考 https://vuejscaff.com/ 网站），让你在实战中学习到 VUE 的基础知
            </div>
            <div class="reply-other font-note right">
              <span class="created-time">2018-6-10 23:26:08</span> ·
              <span class="reply-button">回复</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  props: [
  ],
  created () {
    axios({
      method: 'get',
      // baseUrl: 'api',
      url: 'http://localhost:8000/api/post_reply/1',
      dataType: 'jsonp',
      jsonp: 'callback',
      data: {
      }
    }).then(function (response) {
      console.log(response)
    })
  }
}
</script>

<style lang="stylus" scoped>
@import '../../assets/stylus/variables.styl'
@import '../../assets/stylus/common.styl'

.reply
  .reply-header
    padding-bottom 15px
    border-bottom 1px solid $line-color
  .reply-content
    textarea
      padding 10px 0
      width 100%
      height 60px
      border 1px solid $form-color
      outline none
      border-radius 3px
      margin 20px 0 10px
    textarea:focus
      border-color $main-color
      box-shadow 0 0 5px $main-color
  .reply-submit
  .reply-list
    .reply-item
      display flex
      padding 20px 0
      border-bottom 1px solid $line-color
      .avatar
        background red
        width 50px
        height 50px
        border-radius 50%
      .reply-box
        flex 1
        padding-left 15px
        .reply-user
          height 25px
          line-height 25px
        .reply-body
          margin 5px 0 20px
          line-height 20px
        .reply-other
          span
            padding 0 10px
          .reply-button
            cursor pointer
    .reply-item:last-child
      border none
</style>
