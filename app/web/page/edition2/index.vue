<template>
  <div class="edition2-page">
    <code-banner></code-banner>
    <page-guide></page-guide>
    <game-intro></game-intro>
  </div>
</template>

<style lang="scss">
@import '../../asset/css/common.css';
</style>

<script>
import CodeBanner from '@/component/edition2/CodeBanner'
import PageGuide from '@/component/edition2/PageGuide'
import GameIntro from '@/component/edition2/GameIntro'
export default {
  components: {
    CodeBanner,
    PageGuide,
    GameIntro
  }
}
</script>

