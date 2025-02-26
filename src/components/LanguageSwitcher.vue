<template>
  <div class="language-switcher">
    <button @click="toggleLanguage" class="language-label">
      {{ currentLanguage === 'zh' ? 'English' : '简体中文' }}
    </button>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import Cookies from 'js-cookie'

export default {
  setup() {
    const currentLanguage = ref('zh')

    const initLanguage = () => {
      const savedLanguage = Cookies.get('language')
      if (savedLanguage) {
        currentLanguage.value = savedLanguage
      } else {
        Cookies.set('language', 'zh')
      }
    }

    const toggleLanguage = () => {
      currentLanguage.value = currentLanguage.value === 'zh' ? 'en' : 'zh'
      Cookies.set('language', currentLanguage.value)
      window.location.reload()
    }

    onMounted(() => {
      initLanguage()
    })

    return {
      currentLanguage,
      toggleLanguage,
    }
  },
}
</script>

<style scoped>
.language-switcher {
  position: absolute;
  top: 20px;
  right: 20px;
}

.language-label {
  cursor: pointer;
  font-size: 14px;
  color: white;
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: transparent;
  border: none;
}

.language-label:hover .el-icon {
  transform: rotate(360deg);
}

.language-label:hover {
  color: #66c0f4;
}
</style>