import { createI18n } from 'vue-i18n';
import Cookies from 'js-cookie';

const messages = {
  zh: {
    gallery: '插画',
    animation: '动画',
    music: '音乐',
    games: '游戏',
    contact: '联系我',
    achievements: '成就',
  },
  en: {
    gallery: 'Gallery',
    animation: 'Animation',
    music: 'Music',
    games: 'Games',
    contact: 'Contact Me',
    achievements: 'Achievements',
  },
};

const savedLanguage = Cookies.get('language') || 'zh';

const i18n = createI18n({
  locale: savedLanguage,
  fallbackLocale: 'zh',
  messages,
});

export default i18n;