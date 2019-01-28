<template>
  <div class="page-guide">
    <div class="page-guide-title">
      <img class="page-guide-line-icon" src="@/asset/images/edition2/guidLineIcon.png" alt="">
      <span>导引</span>
      <img class="page-guide-line-icon page-guide-line-icon-rorate" src="@/asset/images/edition2/guidLineIcon.png" alt="">
    </div>
    <div class="page-guide-content">
      <div class="page-guide-item">
        <span class="page-guide-item-index">01</span>大赛介绍
      </div>
      <div class="page-guide-item">
        <span class="page-guide-item-index">02</span>奖励与奖品
      </div>
      <div class="page-guide-item">
        <span class="page-guide-item-index">03</span>争霸榜单实时看
      </div>
      <div class="page-guide-item">
        <span class="page-guide-item-index">04</span>下期预告
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
$itemWidth: 364px;
$itemHeight: 88px;
$offsetX: 77px;
$offsetY: 20px;
.page-guide {
  text-align: center;
  padding: 60px 0 0;
  background: url('../../asset/images/edition2/guidBg.jpg') no-repeat bottom
    #f0f5f9;
  &-title {
    font-size: 26px;
    color: #333;
  }
  &-line-icon {
    margin-right: 24px;
    vertical-align: middle;
    &-rorate {
      margin: 0 0 0 24px;
      transform: rotate(180deg);
    }
  }
  &-content {
    position: relative;
    width: 1221px;
    margin: 0 auto;
    height: 370px;
    margin-top: 60px;
  }
  &-item {
    width: 364px;
    height: 88px;
    line-height: 88px;
    color: #fff;
    background: url('../../asset/images/edition2/guidButtonBg.png') no-repeat;
    display: inline-block;
    position: absolute;
    font-size: 19px;
    cursor: pointer;
    &-index {
      font-size: 30px;
      margin-right: 12px;
      font-weight: bold;
    }
    &:hover {
      color: #f6ff03;
    }
  }
  @for $i from 0 through 3 {
    &-item:nth-child(#{$i + 1}) {
      left: ($itemWidth - $offsetX) * $i;
      top: ($itemHeight - $offsetY) * $i;
    }
  }
}
</style>
