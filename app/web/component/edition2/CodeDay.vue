<template>
  <div class="code-day">
    <div class="code-day-container">
      <div class="code-day-title">如何参加NPL代码节</div>
      <div class="code-day-steps">
        <div class="code-day-steps-item">分享作品到keepwork</div>
        <img class="code-day-steps-arrow" src="@/asset/images/edition2/step_arrow.png" alt="">
        <div class="code-day-steps-item">进入NPL大赛官网报名</div>
        <img class="code-day-steps-arrow" src="@/asset/images/edition2/step_arrow.png" alt="">
        <div class="code-day-steps-item">报名成功</div>
      </div>
      <div class="code-day-apply">去报名</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.code-day {
  text-align: center;
  background-color: #f9f9f9;
  &-container {
    width: 1080px;
    max-width: 100%;
    margin: 0 auto;
    background-color: #fff;
    border-radius: 4px;
    padding: 40px 0 45px;
    position: relative;
    &:after {
      content: '';
      height: 10px;
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      background-color: transparent;
      background-image: repeating-linear-gradient(
        -45deg,
        transparent,
        transparent 4px,
        #bebebe 0px,
        #bebebe 6px
      );
    }
  }
  &-title {
    font-size: 22px;
    color: #4088ff;
  }
  &-steps {
    margin: 50px 0 60px;
    &-item {
      border: 2px solid #3a89ff;
      background-color: #61a0ff;
      color: #fff;
      display: inline-block;
      width: 200px;
      height: 44px;
      line-height: 44px;
      border-radius: 44px;
    }
    &-arrow {
      margin: 0 36px;
      vertical-align: middle;
    }
  }
  &-apply {
    width: 163px;
    height: 42px;
    line-height: 42px;
    border: 2px solid #2b7aff;
    text-align: center;
    margin: 0 auto;
    color: #2b7aff;
    font-size: 14px;
  }
}
</style>
