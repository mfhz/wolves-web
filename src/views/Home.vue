<template>
  <div class="banner-principal">
    <BannerPrincipal/>
  </div>
</template>
<script>
    import BannerPrincipal from '../components/BannerPrincipal.vue';
    export default {
        name: 'Home',
        components: {
          BannerPrincipal,
        },
        data() {
            return {
            }
        },
    }
</script>
<style lang="scss">
    @import '../styles/Home.scss';
</style>