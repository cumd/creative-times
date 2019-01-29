<template>
  <div class="game-intro">
    <div class="game-intro-title"><span class="game-intro-title-content">大赛介绍</span></div>
    <div class="game-intro-content">
      <p class="game-intro-item">1、NPL 代码节是由 Keepwork 独家举办的一个持续性的 Paracraft 作品大赛，我们会定期为优秀作品颁奖；</p>
      <p class="game-intro-item">2、Keepwork 现已推出作品排行系统，诚邀广大用户对作品进行线上评分；</p>
      <p class="game-intro-item">3、本次参赛的作品有热门游戏、炫酷动画等等，快来为你心仪的作品正名吧！</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.game-intro {
  text-align: center;
  color: #333;
  padding: 65px 0 140px;
  background: url('../../asset/images/edition2/intro_bg.jpg') center no-repeat;
  background-size: cover;
  &-title {
    font-size: 26px;
    margin-bottom: 53px;
    font-weight: bold;
    &-content {
      display: inline-block;
      padding: 9px 150px;
      background: url('../../asset/images/edition2/intro_title_bg.png') center
        no-repeat;
    }
  }
  &-item {
    font-size: 16px;
    margin: 0;
    line-height: 1.9em;
  }
}
</style>
