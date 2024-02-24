<template>
  <div class="banner-principal">
    <BannerPrincipal/>
  </div>
  <div class="about-section">
    <AboutSection/>
  </div>
  <div>
    <TeamSection/>
  </div>
</template>
<script>
  import BannerPrincipal from '../components/BannerPrincipal.vue';
  import AboutSection from '../components/AboutSection.vue';
  import TeamSection from '../components/TeamSection.vue';
  export default {
    name: 'Home',
    components: {
      BannerPrincipal,
      AboutSection,
      TeamSection
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