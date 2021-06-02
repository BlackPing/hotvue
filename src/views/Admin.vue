<template>
  <div class="home">
    <AdminMenu msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import AdminMenu from '@/components/AdminMenu.vue'

export default {
  name: 'Home',
  components: {
    AdminMenu
  }
}
</script>
