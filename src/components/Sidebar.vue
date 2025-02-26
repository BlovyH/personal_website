<template>
  <div class="sidebar">
    <div class="profile">
      <img src="/src/assets/avatar.png" alt="Avatar" class="avatar" />
      <h2>BlovyH</h2>
      <p>才疏学浅孤陋寡闻懒人</p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  components: {},
  computed: {
    ...mapGetters(['achievements']),
  },
}
</script>

<style>
.sidebar {
  width: 250px;
  background-color: #171a21;
  padding: 20px;
}

.profile {
  text-align: center;
}

.avatar {
  width: 100px;
  height: 100px;
  border-radius: 50%;
}

.achievements {
  margin-top: 20px;
}
</style>