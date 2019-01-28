<template>
  <div class="edition2-page">
    <code-banner></code-banner>
    <page-guide></page-guide>
    <game-intro></game-intro>
    <intro-item class="edition2-page-offset"></intro-item>
  </div>
</template>

<style lang="scss">
@import '../../asset/css/common.css';
</style>

<script>
import CodeBanner from '@/component/edition2/CodeBanner'
import PageGuide from '@/component/edition2/PageGuide'
import GameIntro from '@/component/edition2/GameIntro'
import IntroItem from '@/component/edition2/IntroItem'
export default {
  components: {
    CodeBanner,
    PageGuide,
    GameIntro,
    IntroItem
  }
}
</script>

<style lang="scss" scoped>
.edition2-page {
  &-offset /deep/ .intro-item-container {
    position: relative;
    top: -80px;
  }
}
</style>

