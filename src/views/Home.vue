<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
	<button @click="tests">test</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import * as api from '@/api/test'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  methods: {
		tests: () => {
			api.gets().then((res) => {
				console.log('then', res);
			}).catch((res) => {
				console.log('catch', res);
			});
		}
	},
}
</script>
