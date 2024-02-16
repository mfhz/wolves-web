<template>
  <header>
      <a href="#" class="logo">
          <img class="logo-image" src="../../assets/LogoTest1.png" alt="LOGO">
      </a>
      <nav class="navbar">
          <router-link 
              v-for="route, key in aRoutes" 
              :key="key" :to="route.sRoute"
          >{{ route.sLabel }}</router-link>
      </nav>
  </header>
</template>
<script>
export default {
  name: 'HeaderVue',
  components: {
  },
  data() {
    return {
    aRoutes: [ 
    { sRoute: '/', sLabel: 'Inicio' }, 
    { sRoute: '/us', sLabel: 'Nosotros' }, 
    { sRoute: '/contact', sLabel: 'Contáctanos' }, 
    ],
    }
  },  
  mounted() {
  },
  methods: {      
  }
}
</script>
<style lang="scss">
    @import '../../styles/Grids/Header.scss'
</style>