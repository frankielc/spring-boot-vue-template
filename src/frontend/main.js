import './css/main.css';
import Vue from 'vue';
import {hello} from "./functions";
import Hello from './Hello.vue';

let val = hello();
console.log(val);

new Vue({
    render: h => h(Hello),
}).$mount('#app');
