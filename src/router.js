import { createRouter, createWebHistory } from 'vue-router';
import IllustrationBlock from './components/IllustrationBlock.vue';
import MusicBlock from './components/MusicBlock.vue';
import AnimationBlock from './components/AnimationBlock.vue';
import GameBlock from './components/GameBlock.vue';

const routes = [
  { path: '/', redirect: '/gallery' },
  { path: '/illustration', component: IllustrationBlock },
  { path: '/music', component: MusicBlock },
  { path: '/animation', component: AnimationBlock },
  { path: '/games', component: GameBlock },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;