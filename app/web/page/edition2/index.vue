<template>
  <div class="edition2-page">
    <code-banner></code-banner>
    <page-guide></page-guide>
    <awards-and-prizes></awards-and-prizes>
    <ranking-list></ranking-list>
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
export default {
  components: {
    CodeBanner,
    PageGuide,
    AwardsAndPrizes,
    RankingList
  }
}
</script>

