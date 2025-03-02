import { createI18n } from 'vue-i18n';
import Cookies from 'js-cookie';

const MORNING = 0;
const AFTERNOON = 1;
const EVENING = 2;

const mapPeriod = {
  zh : ['上午', '下午', '晚上'],
  en : ['morning', 'afternoon', 'evening']
}


function getCurrentTimeType() {
  const hour = new Date().getHours();
  return hour < 12 ? MORNING : hour < 18 ? AFTERNOON : EVENING;
};

const messages = {
  zh: {
    gallery: '插画',
    animation: '动画',
    music: '音乐',
    games: '游戏',
    contact: '联系我',
    achievements: '成就',
    greetings: mapPeriod.zh[getCurrentTimeType()] + '好！祝你今天开心！'
  },
  en: {
    gallery: 'Gallery',
    animation: 'Animation',
    music: 'Music',
    games: 'Games',
    contact: 'Contact Me',
    achievements: 'Achievements',
    greetings: 'Good ' + mapPeriod.en[getCurrentTimeType()] + ', visitor! Have a nice day!'
  },
};

const savedLanguage = Cookies.get('language') || 'zh';

const i18n = createI18n({
  locale: savedLanguage,
  fallbackLocale: 'zh',
  messages,
  allowComposition: true,
  legacy: false,
  globalInjection: true
});

export default i18n;