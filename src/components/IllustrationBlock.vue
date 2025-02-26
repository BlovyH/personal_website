<template>
  <div class="illustration">
    <h2>插画作品</h2>
    <div class="images">
      <img v-for="(img, index) in images" :key="index" :src="img" alt="Gallery Image" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [
        '/src/assets/gallery/1.jpg',
        '/src/assets/gallery/2.jpg',
      ],
    }
  },
}
</script>

<style>
.images {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.images img {
  width: 200px;
  height: auto;
  border-radius: 5px;
}
</style>