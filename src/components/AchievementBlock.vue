<template>
  <el-tooltip placement="top" effect="light">
    <div class="achievement-card" @mouseenter="handleMouseEnter">
      <img :src="item.icon" alt="Achievement Icon" class="achievement-icon" />
    </div>

    <template #content>
      <div class="custom-tooltip">
        <img :src="item.icon" alt="Achievement Icon" class="tooltip-icon" />
        <div class="tooltip-content">
          <h3 class="tooltip-title">{{ item.name }}</h3>
          <p class="tooltip-description">{{ item.description }}</p>
        </div>
      </div>
    </template>
  </el-tooltip>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  methods: {
    handleMouseEnter(event) {
      this.$emit('hover', event.currentTarget)
    },
  },
}
</script>

<style>
.achievement-card {
  background-color: #2a475e;
  border-radius: 5px;
  padding: 10px;
  text-align: center;
  cursor: pointer;
  position: relative;
  transition: transform 0.2s;
}

.achievement-card:hover {
  transform: scale(1.05);
}

.achievement-icon {
  width: 64px;
  height: 64px;
  border-radius: 5px;
}

.custom-tooltip {
  display: flex;
  align-items: center;
  padding: 10px;
  background-color: #ffffff;
  border-radius: 5px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}

.tooltip-icon {
  width: 48px;
  height: 48px;
  border-radius: 5px;
  margin-right: 10px;
}

.tooltip-content {
  flex: 1;
}

.tooltip-title {
  margin: 0;
  font-size: 16px;
  font-weight: bold;
  color: #333;
}

.tooltip-description {
  margin: 5px 0 0;
  font-size: 12px;
  color: #666;
}
</style>