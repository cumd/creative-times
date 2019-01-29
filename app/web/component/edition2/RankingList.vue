<template>
  <div class="ranking-list">
    <div class="ranking-list-center">
      <div class="ranking-list-center-title">
        <img src="@/asset/images/edition2/trophy.png" alt="">
        <span class="ranking-list-center-title-text">争霸榜单实时看</span>
      </div>
      <a href="https://keepwork.com/ranking" class="ranking-list-center-more">进入作品排行榜>> </a>
      <div class="ranking-list-center-projects">
        <project-cell class="ranking-list-center-project-box" :project="project" v-for="(project,index) in handpickProjects" :key="index" :ranking="true" :level="index"></project-cell>
      </div>
      <a class="ranking-list-center-button-more" href="https://keepwork.com/ranking">
        进入作品排行榜>
      </a>
    </div>
  </div>
</template>
<script>
import ProjectCell from './ProjectCell'
import axios from 'axios'

export default {
  name: 'RankingList',
  data() {
    return {
      originHandpickProjects: {}
    }
  },
  computed: {
    handpickProjects() {
      return this.originHandpickProjects.rows
    }
  },
  mounted() {
    this.getHandpick()
  },
  methods: {
    getHandpick() {
      axios
        .post('https://api.keepwork.com/core/v0/projects/search', {
          'x-order': 'choicenessNo-desc',
          'x-per-page': 8,
          'x-page': 1
        })
        .then(result => {
          this.originHandpickProjects = result.data
        })
        .catch(error => {
          console.warn(error)
        })
    }
  },
  components: {
    ProjectCell
  }
}
</script>
<style lang="scss" scoped>
.ranking-list {
  background: #605fea;
  background-size: 100%;
  padding: 60px 20px 90px;
  &-center {
    max-width: 1200px;
    margin: 0 auto;
    position: relative;
    &-title {
      margin: 0 auto 60px;
      display: flex;
      align-items: center;
      justify-content: center;
      &-text {
        display: inline-block;
        height: 52px;
        width: 400px;
        text-align: center;
        line-height: 52px;
        letter-spacing: 3px;
        color: #ffffff;
        font-size: 26px;
        font-weight: 700;
        background: url('../../asset/images/edition2/ranking-title.png')
          no-repeat top center;
      }
    }
    &-more {
      color: #fff;
      text-decoration: none;
      position: absolute;
      right: 10px;
      top: 10px;
    }
    &-projects {
      display: flex;
      flex-wrap: wrap;
      &-box {
        flex: 1;
      }
    }
    &-button-more {
      width: 329px;
      height: 72px;
      border-radius: 36px;
      border: solid 2px rgb(176, 175, 245);
      margin: 52px auto;
      line-height: 72px;
      text-align: center;
      font-size: 28px;
      font-weight: normal;
      font-stretch: normal;
      color: #fff;
      display: none;
      text-decoration: none;
    }
  }
}
@media (max-width: 768px) {
  .ranking-list {
    &-center {
      &-more {
        display: none;
      }
      &-button-more {
        display: block;
      }
    }
  }
}
</style>


