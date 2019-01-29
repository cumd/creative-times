<template>
  <div class="grade-flow">
    <div class="grade-flow-title">评分流程</div>
    <div class="grade-flow-nav">
      <div class="grade-flow-nav-item" :class="{'grade-flow-nav-item-active':activeIndex>=1}" @click="showByIndex(1)">1</div>
      <div class="grade-flow-line" :class="{'grade-flow-line-active':activeIndex>1}"></div>
      <div class="grade-flow-nav-item" :class="{'grade-flow-nav-item-active':activeIndex>1}" @click="showByIndex(2)">2</div>
      <div class="grade-flow-line" :class="{'grade-flow-line-active':activeIndex>2}"></div>
      <div class="grade-flow-nav-item" :class="{'grade-flow-nav-item-active':activeIndex>2}" @click="showByIndex(3)">3</div>
      <div class="grade-flow-line" :class="{'grade-flow-line-active':activeIndex>3}"></div>
      <div class="grade-flow-nav-item" :class="{'grade-flow-nav-item-active':activeIndex>3}" @click="showByIndex(4)">4</div>
    </div>
    <div class="grade-flow-content">
      <div class="grade-flow-arrow" v-show="activeIndex > 1" @click="showPrev">
        <img src="@/asset/images/edition2/step_prev.png" alt="">
      </div>
      <div class="grade-flow-arrow grade-flow-arrow-rotate" v-show="activeIndex < 4" @click="showNext">
        <img src="@/asset/images/edition2/step_prev.png" alt="">
      </div>
      <img :src="activeImg" alt="">
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: 1
    }
  },
  computed: {
    activeImg() {
      let imgSrc = ''
      switch (this.activeIndex) {
        case 1:
          imgSrc = require('@/asset/images/edition2/step_1.jpg')
          break
        case 2:
          imgSrc = require('@/asset/images/edition2/step_2.jpg')
          break
        case 3:
          imgSrc = require('@/asset/images/edition2/step_3.jpg')
          break
        case 4:
          imgSrc = require('@/asset/images/edition2/step_4.jpg')
          break
        default:
          break
      }
      return imgSrc
    }
  },
  methods: {
    showPrev() {
      this.activeIndex--
    },
    showNext() {
      this.activeIndex++
    },
    showByIndex(index) {
      this.activeIndex = index
    }
  }
}
</script>

<style lang="scss" scoped>
.grade-flow {
  &-title {
    font-size: 22px;
    color: #4088ff;
  }
  &-nav {
    margin: 38px 0 46px;
    &-item {
      display: inline-block;
      width: 40px;
      height: 40px;
      line-height: 40px;
      border-radius: 50%;
      background-color: #e3e2e2;
      border: 8px solid #f7f6f6;
      font-size: 20px;
      color: #666;
      cursor: pointer;
      &-active {
        background-color: #ffb903;
        color: #fff;
        border-color: #ffeab3;
      }
    }
  }
  &-line {
    display: inline-block;
    width: 176px;
    height: 2px;
    background-color: #ccc;
    vertical-align: middle;
    &-active {
      background-color: #ffb903;
    }
  }
  &-content {
    width: 830px;
    margin: 0 auto;
    position: relative;
  }
  &-arrow {
    position: absolute;
    left: 0;
    top: 42%;
    width: 38px;
    height: 60px;
    line-height: 66px;
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.55);
    &:hover {
      background-color: rgba(0, 0, 0, 0.75);
    }
    &-rotate {
      left: auto;
      right: 0;
      transform: rotate(180deg);
    }
  }
}
</style>
