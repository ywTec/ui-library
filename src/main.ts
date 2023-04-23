import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
// import YwDesign from '../packages/index';
import YwDesign from '@yw_tec/yw-design'

const app = createApp(App);

app.use(YwDesign).mount('#app')
