<template>
  <router-view />
</template>
<script>
export default {
  name: 'App',
  components: {},
  mounted() {
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth' 
      });
    }, 500);
  }
}
</script>