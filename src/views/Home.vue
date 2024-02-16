<template>
  <div class="banner-principal">
    <BannerPrincipal/>
  </div>
  <div class="about-section">
    <AboutSection/>
  </div>
</template>
<script>
  import BannerPrincipal from '../components/BannerPrincipal.vue';
  import AboutSection from '../components/AboutSection.vue';
  export default {
    name: 'Home',
    components: {
      BannerPrincipal,
      AboutSection
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