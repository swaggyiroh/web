import './assets/main.css';

import { createApp } from 'vue';
import App from './App.vue';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import { faTwitter, faGithub, faDiscord ,faSpotify,faSteam } from '@fortawesome/free-brands-svg-icons';


library.add(faTwitter, faGithub, faDiscord,faSpotify,faSteam);

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app');

