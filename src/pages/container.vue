<template>
    <div>
      <web-header></web-header>
      <div class="web-main">
        <router-view></router-view>
      </div>
      <web-footer></web-footer>
    </div>
</template>

<script>
import webHeader from './header'
import webFooter from './footer'
export default {
  name: 'container',
  components: {
    webHeader,
    webFooter
  },
  data () {
    return {}
  },
  created () {},
  methods: {
    onclick () {}
  }
}
</script>
<style  scoped>
  .web-main{
    height:1165px;
    margin: 0 auto;
    width: 1500px;
  }
</style>
