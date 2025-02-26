<template>
  <div class="support-module">
    <h2 class="support-title">
      &lt;Buy Me a Coffee&gt; <br />
      <span class="support-tag">📝 支持我的创作与网站维护 🖥️</span>
    </h2>
    <p class="support-description">
      如果你喜欢我的作品，欢迎通过以下方式支持我！<br />
      你的支持也将帮助我承担网站运营的费用，它是我的一个练手小项目，我会不定期在网站更新更多实现灵感。非常感谢！
    </p>
    <div class="support-options">
      <!-- B站充电 -->
      <div class="support-option" @click="openLink('https://www.bilibili.com')">
        <div class="option-icon">⚡</div>
        <h3 class="option-title">B站充电</h3>
        <p class="option-description">插画 | 动画 | 编曲<br />游戏 | Cosplay | 漫谈</p>
        <!-- <img src="@/assets/bilibili-qr.png" alt="B站充电二维码" class="option-qr" /> -->
      </div>

      <!-- 微信打赏 -->
      <div class="support-option" @click="openLink('https://sticker.weixin.qq.com')">
        <div class="option-icon">❤️</div>
        <h3 class="option-title">微信打赏</h3>
        <p class="option-description">支持微信表情包 & 年更红包封面</p>
        <!-- <img src="@/assets/wechat-qr.png" alt="微信打赏二维码" class="option-qr" /> -->
      </div>

      <!-- 淘宝周边 -->
      <div class="support-option" @click="openLink('https://www.taobao.com')">
        <div class="option-icon">🛒</div>
        <h3 class="option-title">淘宝小店</h3>
        <p class="option-description">带走一份我的原创或同人周边</p>
        <!-- <img src="@/assets/taobao-qr.png" alt="淘宝二维码" class="option-qr" /> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    openLink(url) {
      window.open(url, '_blank')
    },
  },
}
</script>

<style>
.support-module {
  background-color: #ffffff;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.support-title {
  font-size: 24px;
  color: #333;
  margin-bottom: 10px;
}

.support-description {
  font-size: 14px;
  color: #666;
  margin-bottom: 20px;
}

.support-options {
  display: flex;
  justify-content: space-around;
  gap: 20px;
}

.support-option {
  flex: 1;
  background-color: #f9f9f9;
  border-radius: 10px;
  padding: 20px;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
}

.support-option:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.1);
}

.option-icon {
  font-size: 32px;
  margin-bottom: 10px;
}

.option-title {
  font-size: 18px;
  color: #333;
  margin-bottom: 5px;
}

.option-description {
  font-size: 14px;
  color: #666;
  margin-bottom: 10px;
}

.option-qr {
  width: 100px;
  height: 100px;
  border-radius: 5px;
}
</style>