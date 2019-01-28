<template>
  <div class="ranking-list">
    <div class="ranking-list-center">
      <div class="ranking-list-center-title">
        争霸榜单实时看
      </div>
      <a href="#" class="ranking-list-center-more">进入作品排行榜>> </a>
      <div class="ranking-list-center-projects">
        <project-cell class="ranking-list-center-project-box" :project="project" v-for="(project,index) in handpickProjects" :key="index"></project-cell>
      </div>
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
      width: 400px;
      height: 52px;
      margin: 0 auto 60px;
      text-align: center;
      line-height: 52px;
      letter-spacing: 3px;
      color: #ffffff;
      font-size: 26px;
      background: url('../../asset/images/edition2/ranking-title.png') no-repeat
        top center;
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
  }
}
@media (max-width: 768px) {
  .ranking-list {
    background-size: 180%;
    &-title {
      margin-bottom: 20px;
      width: 100%;
    }
  }
}
</style>


