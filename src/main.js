import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import VueAxios from 'vue-axios'
import axios from 'axios'
import firebase from 'firebase'

const firebaseConfig = {
	apiKey: "AIzaSyAsCDR2nnxxdP3yeyORqo_Tio8xnN_COj0",
	authDomain: "hotvue-9e9a7.firebaseapp.com",
	projectId: "hotvue-9e9a7",
	storageBucket: "hotvue-9e9a7.appspot.com",
	messagingSenderId: "341292527642",
	appId: "1:341292527642:web:dc6674eb34e01b8118e1a3",
	measurementId: "G-J2CEK79RF0"
};

firebase.initializeApp(firebaseConfig)

const messaging = firebase.messaging()

messaging.usePublicVapidKey('BP6uRnmvmkOX3j93K2l5SZOp18rouyb1Bhw_U4B8bKZ8vka7lVG0JLfShUxXJUQimDZ_3cptDcoqJLk1RbGT6hQ')

// 알림 수신을 위한 사용자 권한 요청
Notification.requestPermission()
  .then((permission) => {
    console.log('permission ', permission)
    if (permission !== 'granted') {
      alert('알림을 허용해주세요')
    }
  })

// TODO: Send token to server for send notification
messaging.getToken()
  .then(console.log)

// Handle received push notification at foreground
messaging.onMessage(payload => {
  console.log(payload)
  alert(payload.notification.title + ': ' + payload.notification.body);
})


Vue.use(VueAxios, axios);
Vue.config.productionTip = false;
Vue.config.errorHandler = (err, vm, info) => {
    console.log(err, vm, info);
} 

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
