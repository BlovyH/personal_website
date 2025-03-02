<template>
  <!-- 留言按钮 -->
  <div class="feedback-button" @click="toggleFeedbackCard" ref="feedbackButton">
    💬 留言给我
  </div>

  <!-- 留言浮窗 -->
  <transition name="zoom">
    <div v-if="showFeedbackCard" class="feedback-overlay" @click.self="toggleFeedbackCard">
      <div class="feedback-card" :style="cardPositionStyle">
        <h3>留言板</h3>
        <el-form @submit.prevent="submitFeedback">
          <el-input v-model="feedback.content" type="textarea" :rows="4" placeholder="写下你的留言（必填）" required></el-input>
          <el-input v-model="feedback.author" placeholder="署名（可选）" class="mt-10"></el-input>
          <el-input v-model="feedback.email" placeholder="回复邮箱（可选）" type="email" class="mt-10"></el-input>
          <el-button type="primary" native-type="submit" class="mt-20">发送留言</el-button>
        </el-form>
        <el-icon class="close-icon" @click="toggleFeedbackCard">
          <Close />
        </el-icon>
      </div>
    </div>
  </transition>
</template>

<script>
import { ref, computed } from 'vue'
// import { ElMessage } from 'element-plus'
// import axios from 'axios'

export default {
  setup() {
    const showFeedbackCard = ref(false)
    const feedback = ref({ content: '', author: '', email: '' })
    const feedbackButton = ref(null)
    const buttonPosition = ref({ x: 0, y: 0 })

    const cardPositionStyle = computed(() => ({
      '--start-x': `${buttonPosition.value.x}px`,
      '--start-y': `${buttonPosition.value.y}px`,
    }))

    const toggleFeedbackCard = () => {
      console.log(showFeedbackCard.value, feedbackButton.value)
      if (!showFeedbackCard.value && feedbackButton.value) {
        const rect = feedbackButton.value.getBoundingClientRect()
        buttonPosition.value = {
          x: rect.left + rect.width / 2,
          y: rect.top + rect.height / 2
        }
        console.log(rect)
      }
      showFeedbackCard.value = !showFeedbackCard.value
      console.log('showFeedbackCard:', showFeedbackCard.value)
      console.log('buttonPosition:', buttonPosition.value)
    }


    const submitFeedback = async () => {
      // try {
      //   await axios.post('/api/feedback', feedback.value)
      //   ElMessage.success('发送成功！')
      //   toggleFeedbackCard()
      // } catch (error) {
      //   ElMessage.error('发送失败，请稍后重试')
      // }
    }

    return { showFeedbackCard, feedback, cardPositionStyle, toggleFeedbackCard, submitFeedback }
  },
}
</script>

<style>
.feedback-button {
  position: fixed;
  top: 20px;
  right: 340px;
  background: #66c0f4;
  color: white;
  padding: 10px 20px;
  border-radius: 25px;
  cursor: pointer;
  z-index: 1001;
  transition: transform 0.3s;
}

.feedback-button:hover {
  transform: scale(1.05);
}

.feedback-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2000;
}

/* 放大弹出动画 */
.zoom-enter-active .feedback-card {
  animation: zoomIn 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55);
}

.zoom-leave-active .feedback-card {
  animation: zoomOut 0.3s ease-out;
}

@keyframes zoomIn {
  0% {
    transform:
      translate(var(--start-x), var(--start-y)) scale(0.1);
    opacity: 0;
  }

  50% {
    transform:
      translate(calc(50vw - 50%), calc(50vh - 50%)) scale(1.1);
  }

  100% {
    transform:
      translate(calc(50vw - 50%), calc(50vh - 50%)) scale(1);
    opacity: 1;
  }
}

@keyframes zoomOut {
  0% {
    transform:
      translate(calc(50vw - 50%), calc(50vh - 50%)) scale(1);
    opacity: 1;
  }

  100% {
    transform:
      translate(var(--start-x), var(--start-y)) scale(0);
    opacity: 0;
  }
}

.feedback-card {
  background: white;
  padding: 30px;
  border-radius: 15px;
  width: 600px;
  will-change: transform, opacity;
  transform: scale(0.8);
  transition: all 0.3s ease;
  position: relative;
  transition: box-shadow 0.3s ease;
  animation: zoomIn 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.feedback-card.active {
  transform: scale(1);
  opacity: 1;
}

.close-icon {
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
}
</style>