<template>
  <div class="next-notice">
    <div class="next-notice-title"><span class="next-notice-title-content">下期预告</span></div>
    <div class="next-notice-content">
      下期我们将公布<span class="next-notice-stress">NPL代码节大赛第一批获奖作品名单</span>，并公开作品观看链接，让我们一起期待这场视觉盛宴
    </div>
  </div>
</template>

<style lang="scss" scoped>
.next-notice {
  text-align: center;
  color: #333;
  height: 410px;
  padding-top: 68px;
  box-sizing: border-box;
  background: url('../../asset/images/edition2/notice_bg.png') center bottom
    no-repeat #fff;
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
  &-content {
    color: #666;
  }
  &-stress {
    font-weight: bold;
    color: #333;
  }
}
</style>