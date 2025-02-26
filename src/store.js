import { createStore } from 'vuex';

export default createStore({
  state: {
    achievements: [
      {
        id: 1,
        name: '插画大师',
        description: '完成 10 幅插画作品',
        icon: '/src/assets/icons/art.png', // 确保路径正确
        progress: 70,
      },
      {
        id: 2,
        name: '编曲达人',
        description: '创作 5 首原创音乐',
        icon: '/src/assets/icons/music.png',
        progress: 40,
      },
      {
        id: 3,
        name: '动画师',
        description: '制作 3 部动画短片',
        icon: '/src/assets/icons/animation.png',
        progress: 50,
      },
      {
        id: 4,
        name: '游戏开发者',
        description: '开发 2 款小游戏',
        icon: '/src/assets/icons/game.png',
        progress: 30,
      },
    ],
  },
  getters: {
    achievements: (state) => state.achievements,
  },
});