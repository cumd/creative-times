<template>
  <div class="edition2-page">
    <code-banner></code-banner>
    <page-guide></page-guide>
    <game-intro></game-intro>
    <intro-item class="edition2-page-offset"></intro-item>
    <awards-and-prizes></awards-and-prizes>
    <ranking-list></ranking-list>
    <next-notice></next-notice>
  </div>
</template>

<style lang="scss">
@import '../../asset/css/common.css';
</style>

<script>
import CodeBanner from '@/component/edition2/CodeBanner'
import PageGuide from '@/component/edition2/PageGuide'
import AwardsAndPrizes from '@/component/edition2/AwardsAndPrizes'
import RankingList from '@/component/edition2/RankingList'
import GameIntro from '@/component/edition2/GameIntro'
import IntroItem from '@/component/edition2/IntroItem'
import NextNotice from '@/component/edition2/NextNotice'
export default {
  components: {
    CodeBanner,
    PageGuide,
    AwardsAndPrizes,
    RankingList,
    GameIntro,
    IntroItem,
    NextNotice
  }
}
</script>

<style lang="scss" scoped>
.edition2-page {
  &-offset {
    margin-bottom: -80px;
    /deep/ .intro-item-container {
      position: relative;
      top: -80px;
    }
  }
}
</style>

