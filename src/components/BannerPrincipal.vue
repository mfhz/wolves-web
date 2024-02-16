<template>
<!-- <Header @onValidateFloating="onValidateFloating($event)" bgcolor="transparent" color="#FFF"/> -->
<div class="container-banner">
  <Header/>
  <h1 class="title-banner">Muestra todo en la cancha.</h1>
  <p class="subtitle-banner"> <span style="font-style: italic;">Entrena y eleva</span> tu juego al siguiente nivel</p>
</div>
</template>

<script>
import Header from '../components/Grids/Header.vue';

export default {
  name: 'BannerPrincipal',
  components: {
    Header
  },
  data() {
    return {
    }
  },
  methods: {
  }
}
</script>

<style lang="scss">
  @import '../styles/BannerPrincipal.scss'
</style>