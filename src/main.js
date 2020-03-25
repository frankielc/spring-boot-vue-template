import Vue from 'vue';
import {hello} from "./functions";
import Hello from './Hello.vue';

console.log(Hello);

let val = hello();
console.log(val);

new Vue({
    // render: h => h(Hello),
}).$mount('#app');
