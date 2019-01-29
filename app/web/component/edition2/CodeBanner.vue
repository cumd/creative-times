<template>
  <div class="code-banner">
    <img class="code-banner-fake-bg hidden-xs-only" src="@/asset/images/edition2/NPLCodeBanner.jpg" alt="">
    <img class="code-banner-fake-bg hidden-sm-and-up" src="@/asset/images/edition2/NPLCodeBanner_phone.jpg" alt="">
    <div class="code-banner-operate">
      <a href="//keepwork.com/ranking" target="_blank" class="code-banner-fake-button">
        <img class="code-banner-trophy-icon" src="@/asset/images/edition2/trophy.png" alt="">
        进入作品排行榜
      </a>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.code-banner {
  position: relative;
  text-align: center;
  &-fake-bg {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
  &-fake-button {
    text-decoration: none;
    border: 2px solid #fff;
    color: #fff;
    font-size: 26px;
    font-weight: bold;
    height: 68px;
    display: inline-block;
    line-height: 68px;
    padding: 0 50px;
    &:hover {
      background-color: #fff;
      color: #2b7aff;
    }
  }
  &-trophy-icon {
    vertical-align: middle;
    margin-right: 4px;
  }
  &-operate {
    position: absolute;
    left: 0;
    right: 0;
    text-align: center;
    top: 20vw;
  }
}
</style>
