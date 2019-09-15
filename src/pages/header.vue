<template>
  <div>
    <nav class="navbar navbar-default" role="navigation">
        <div class="container-fluid">
          <div class="navbar-header">
              <a class="navbar-brand" href="#">DuDuLu視頻網</a>
          </div>
          <div>
            <ul class="nav navbar-nav">
                <li class="dropdown"><a @click="home">首頁</a></li>
                <li><a @click="animation">動畫</a></li>
                <li class="dropdown"><a href="#" class="dropdown-toggle" data-toggle="dropdown"> 番劇 <b class="caret"></b></a>
                  <ul class="dropdown-menu">
                    <li><a href="#">連載動畫</a></li>
                    <li><a href="#">完結動畫</a></li>
                    <li><a href="#">熱門追番</a></li>
                    <li class="divider"></li>
                    <li><a href="#">番劇索引</a></li>
                    <li class="divider"></li>
                    <li><a href="#">更新時間表</a></li>
                  </ul>
                </li>
                <li><a href="#">電影</a></li>
                <li><a href="#">電視劇</a></li>
                <li><a href="#">綜藝</a></li>
                <li><a href="#">娛樂</a></li>
                <li><a href="#">音樂</a></li>
                <li><a href="#">遊戲</a></li>
                <li><a href="#">動畫</a></li>
                <li><a href="#">登錄</a></li>
                <li><a href="#">資訊</a></li>
                <li><a href="#">歷史</a></li>
            </ul>
          </div>
        </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {

    }
  },
  created () {

  },
  methods: {
    animation () {
      this.$router.push('/animation')
    },
    home () {
      this.$router.push('/home')
    }
  }
}
</script>

<style scoped>

</style>
