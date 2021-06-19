<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
	<button @click="tests">test</button>
	<div>캐시가 잘되는가?</div>
	<div>{{ dataCounter }}</div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import * as api from '@/api/test'
import { mapGetters } from 'vuex'

export default {
	name: 'Home',
	components: {
		HelloWorld
	},
	methods: {
		tests() {
			this.$store.state.counter++;
			api.gets().then((res) => {
				console.log('then', res);
			}).catch((res) => {
				console.log('catch', res);
			});
		}
	},
	computed: mapGetters({
		dataCounter : 'getCounter'
	})
}
</script>
