<template>
  <footer class="footer">
    <div class="footer-content">
      <h3 class="footer-title">感谢</h3>
      <ul class="footer-links">
        <li>
          <a href="https://fonts.alibabagroup.com/#/home" target="_blank">阿里巴巴普惠体</a>
        </li>
        <li>
          <a href="https://v3.vuejs.org/" target="_blank">Vue 3</a>
        </li>
        <li>
          <a href="https://vitejs.dev/" target="_blank">Vite</a>
        </li>
        <li>
          <a href="https://element-plus.org/" target="_blank">Element Plus</a>
        </li>
      </ul>
      <p class="footer-note">
        特别感谢所有开源社区和创作者的贡献！
      </p>
    </div>
  </footer>
</template>

<script>
export default {

}
</script>

<style>
.footer {
  background-color: #171a21;
  color: white;
  padding: 20px;
  text-align: center;
  margin-top: 40px;
}

.footer-content {
  max-width: 800px;
  margin: 0 auto;
}

.footer-title {
  font-size: 18px;
  margin-bottom: 10px;
}

.footer-description {
  font-size: 14px;
  color: #aaa;
  margin-bottom: 10px;
}

.footer-links {
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 10px;
}

.footer-links a {
  color: #66c0f4;
  text-decoration: none;
  font-size: 14px;
}

.footer-links a:hover {
  text-decoration: underline;
}

.footer-note {
  font-size: 12px;
  color: #888;
}
</style>