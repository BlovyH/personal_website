<template>
  <div class="app">
    <div v-if="!isLoading">
      <LanguageSwitcher />

      <h1 class="page-title">BlovyH</h1>
      <div class="navigation">
        <div class="divider"></div>
        <nav class="navigation-bar">
          <router-link to="/gallery">{{ $t('gallery') }}</router-link>
          <router-link to="/animation">{{ $t('animation') }}</router-link>
          <router-link to="/music">{{ $t('music') }}</router-link>
          <router-link to="/games">{{ $t('games') }}</router-link>
          <router-link to="/contact">{{ $t('contact') }}</router-link>
        </nav>
      </div>

      <div class="main-content">
        <div class="left-content">
          <router-view />
        </div>

        <div class="right-content">
          <SupportMe />
          <h2>{{ $t('achievements') }}</h2>
          <div class="achievements-grid" ref="achievementsGrid" @mouseleave="achievementsOnMouseLeave">
            <AchievementBlock v-for="item in achievements" :key="item.id" :item="item"
              @hover="handleAchievementHover" />
            <div class="hover-border" :style="borderStyle"></div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <FooterBlock />
</template>

<script>
import { ref, onMounted } from 'vue'
import { ElLoading } from 'element-plus'
import { mapGetters } from 'vuex'
import LanguageSwitcher from './components/LanguageSwitcher.vue'
import AchievementBlock from './components/AchievementBlock.vue'
import SupportMe from './components/SupportMe.vue'
import FooterBlock from './components/FooterBlock.vue'

export default {
  components: { LanguageSwitcher, AchievementBlock, SupportMe, FooterBlock },
  setup() {
    // loading animation
    const isLoading = ref(true)
    const loadingInstance = ElLoading.service({
      lock: true,
      background: 'rgba(0, 0, 0, 0.8)',
    })

    onMounted(() => {
      setTimeout(() => {
        loadingInstance.close()
        isLoading.value = false
      }, 1000)
    })

    // achievement hover style
    const borderStyle = ref({
      width: '0',
      height: '0',
      left: '0',
      top: '0',
    })
    const borderGap = 8
    const handleAchievementHover = (target) => {
      const gridRect = target.parentElement.getBoundingClientRect()
      const targetRect = target.getBoundingClientRect()

      // calculate border pos
      borderStyle.value = {
        width: `${targetRect.width + borderGap}px`,
        height: `${targetRect.height + borderGap}px`,
        left: `${targetRect.left - gridRect.left - borderGap}px`,
        top: `${targetRect.top - gridRect.top - borderGap}px`,
      }
    }

    // border disappears when mouse leave
    const achievementsOnMouseLeave = () => {
      borderStyle.value = {
        width: '0',
        height: '0',
        left: borderStyle.value.left,
        top: borderStyle.value.top,
      }
    }

    return {
      isLoading,
      borderStyle,
      handleAchievementHover,
      achievementsOnMouseLeave
    }
  },

  computed: {
    ...mapGetters(['achievements']),
  },
}
</script>

<style>
body {
  margin: 0;
  font-family: Arial, sans-serif;
  background-color: #1b2838;
  color: white;
}

.app {
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: 20px;
}

.divider {
  height: 1px;
  background-color: #2a475e;
  margin: 10px 0;
}

.navigation-bar {
  display: flex;
  gap: 20px;
  margin-top: 10px;
}

.navigation-bar a {
  color: white;
  text-decoration: none;
  font-size: 16px;
  transition: color 0.2s;
}

.navigation-bar a:hover {
  color: #66c0f4;
}

.navigation-bar a.router-link-active {
  color: #66c0f4;
  font-weight: bold;
}

.page-title {
  font-family: 'MonaspaceKryptonSWE', sans-serif;
  font-size: 6em;
  color: white;
  position: absolute;
  margin: 0;
  top: 20px;
  left: 20px;
}

.navigation {
  margin-top: 120px;
}

.main-content {
  display: flex;
  flex: 1;
}

.left-content {
  flex: 0 0 60%;
  padding-right: 20px;
}

.right-content {
  flex: 0 0 40%;
  background-color: #171a21;
  padding: 20px;
  border-radius: 5px;
  border: 1px solid #2a475e;
}

.achievements-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  position: relative;
  /* 为动态边框提供定位上下文 */
}

.hover-border {
  position: absolute;
  border: 2px solid #66c0f4;
  /* 边框颜色 */
  border-radius: 5px;
  transition: all 0.3s ease;
  /* 平滑过渡 */
  pointer-events: none;
  /* 防止边框遮挡点击事件 */
}
</style>