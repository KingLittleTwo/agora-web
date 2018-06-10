<template>
  <div>
    <div class="postdetail card">
      <div class="post-header">
        <h1 class="post-title">{{ post.title }}</h1>
        <div class="postinfo font-note">
          <span class="cate">分类：{{ post.cate }}</span>
          <span class="author">作者：{{ post.author }}</span>
          <span class="create_time">发布于：{{ post.created_time }}</span>
          <span class="view_num">阅读量：{{ post.view_num }}</span>
        </div>
      </div>
      <div class="post-content">
        {{ post.content }}
      </div>
    </div>
    <div class="zan">
      <div>
        如果你喜欢这篇文章，你可以
        <i class="iconfont icon-good"></i>
        <span>or</span>
        <i class="iconfont icon-gifts"></i>
      </div>
    </div>

    <reply></reply>
  </div>
</template>

<script>
import Reply from './Reply'

export default {
  components: {
    Reply
  },
  data () {
    return {
      postid: this.$route.params.id,
      post: {
        id: 1,
        title: '这是一个超级大的标题',
        cate: '不知道啥类',
        author: '王大宝',
        created_time: '2018年6月9日17:25:12',
        view_num: 250,
        content: `经过两个多月的精心准备，《Vue.js 实战教程 - 基础篇》 已完成了撰写，今天正式发布。

课程代号 V01，作为 VUEJS 实战课程的第一套，我们将带你一步步从零开始开发一个完整的 VUEJS 项目（参考 https://vuejscaff.com/ 网站），让你在实战中学习到 VUE 的基础知识。

涉及的知识点如下：

使用 vue-cli 搭建项目框架；
Git, GitHub 和 GitHub Pages 部署；
使用组件来构建项目；
绑定数据的两种形式 —— Mustache 语法和 v-bind 指令；
使用 v-for 指令渲染列表；
绑定 class 和 style；
使用 v-on 指令监听 DOM 事件；
自定义指令 —— title、validator 和 dropdown；
使用 vue-router 作路由来创建单页应用；
自定义功能组件 —— Message、Modal、Pagination 和 Slider；
在组件中使用 props；
使用侦听器；
使用 Vuex 存储管理应用的所有组件的状态；
局部注册和全局注册 —— 组件、指令和过滤器；
使用 v-if 指令进行条件渲染；
自定义插件 —— message 和 vue-sweetalert2；
在列表渲染中使用 key；
使用嵌套路由和设置默认子路由；
在选择框和复选框中使用 v-model；
为 v-model 添加修饰符 —— .lazy 和 .trim；
使用路由对象，它出现在 —— 组件（this.$route）、$route 观`
      }
    }
  },
  created () {
    console.log(this.$route.params.id)
  }
}
</script>

<style lang="stylus">
@import '../../assets/stylus/variables.styl'
@import '../../assets/stylus/common.styl'

.postdetail
  .post-header
    padding-bottom 20px
    border-bottom 1px  solid $line-color
    margin-bottom 20px
    .post-title
      font-size 22px
    .postinfo
      margin-top 15px
      span
        margin-right 30px
  .post-content
    font-size 16px
    line-height 1.5rem
.zan
  background #ffffff
  margin-bottom 10px
  padding 20px
</style>
