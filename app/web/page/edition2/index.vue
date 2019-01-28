<template>
  <div class="edition2-page">
    <code-banner></code-banner>
    <page-guide></page-guide>
    <game-intro></game-intro>
    <code-day class="edition2-page-offset"></code-day>
  </div>
</template>

<style lang="scss">
@import '../../asset/css/common.css';
</style>

<script>
import CodeBanner from '@/component/edition2/CodeBanner'
import PageGuide from '@/component/edition2/PageGuide'
import GameIntro from '@/component/edition2/GameIntro'
import CodeDay from '@/component/edition2/CodeDay'
export default {
  components: {
    CodeBanner,
    PageGuide,
    GameIntro,
    CodeDay
  }
}
</script>

<style lang="scss" scoped>
.edition2-page {
  &-offset /deep/ .code-day-container {
    position: relative;
    top: -80px;
  }
}
</style>

