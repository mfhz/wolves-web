<template>
  <header style="z-index: 100;" :style="`--bg-color: ${bgcolor}; --color: ${color}`">
      <a v-if="nTypeLogo" href="#" class="logo">
          <img class="logo-image" src="../assets/img/logos/logo-black-letters.png" alt="LOGO">
      </a>
      <a v-else href="#" class="logo">
          <img class="logo-image" src="../assets/img/logo.png" alt="LOGO">
      </a>
      <div 
          @click="handleShow()"
          id="menu-bar" 
      >   
          <menu-icon size="3.5rem" v-if="!bActive"/>
          <close-icon v-else/>
      </div>
      <nav class="navbar" :class="bActive ? 'active' : ''">
          <router-link 
              v-for="route, key in aRoutes" 
              :key="key" :to="route.sRoute"
          >{{ route.sLabel }}</router-link> 
          <div class="switch-container" :style="`--color: ${color}`">
              <input type="checkbox" name="switch" id="switch" v-model="bCheckboxState" @click="onHandleCheckboxChange">
              <label for="switch" class="lbl"></label>
          </div>
          <div @click="onShowMenu()" class="icon-dots-grid">
              <dots-grid-icon/>
          </div>

          <Menu             
              v-show="bShowMenu"
              @onClose="onClose()"
              @onValidateFloating="onValidateFloating()">
          </Menu>
      </nav>
  </header>
</template>
<script>
import MenuIcon from 'vue-material-design-icons/Menu.vue';
import CloseIcon from 'vue-material-design-icons/Close.vue';
import DotsGridIcon from '../../node_modules/vue-material-design-icons/DotsGrid.vue';
import Menu from './Menu.vue'
export default {
  name: 'HeaderVue',
  data() {
      return {
        //   bActive: false,
        //   bShowMenu: false,
        //   sActive: this.$route.path ?? '',
        //   aRoutes: [ 
        //       { sRoute: '/', sLabel: this.$t('labelInicio') }, 
        //       { sRoute: '/us', sLabel: 'Nosotros' }, 
        //       { sRoute: '/contact', sLabel: 'Contáctanos' }, 
        //   ],
        //   bCheckboxState: true
      }
  },
  props: {
      color: {
          type: String,
          default: '#9E9E9E'
      },
      bgcolor: {
          type: String,
          default: '#fff'
      },
      nTypeLogo: {
          type: Number,
          default: 0
      }
  },
  components: {
      MenuIcon,
      CloseIcon,
      DotsGridIcon,
      Menu
  },
  mounted() {
  },
  methods: {
      onShowMenu() {
          this.bShowMenu = true
          this.$emit("onValidateFloating", false)
      },

      handleShow() {
          this.bActive = !this.bActive;
      },

      onClose() {
          this.bShowMenu = false
      },
      
      onValidateFloating() {
          this.$emit("onValidateFloating", true)
      },

      onHandleCheckboxChange() {
          this.$i18n.locale = this.$i18n.locale === 'es' ? 'en' : 'es';           
          this.onReloadItems()
      },

      onReloadItems() {
          console.log(this.$i18n.locale)
          console.log(this.$t('labelInicio'))
          this.aRoutes = [ 
              { sRoute: '/', sLabel: this.$t('labelInicio') }, 
              { sRoute: '/us', sLabel: 'Nosotros' }, 
              { sRoute: '/contact', sLabel: 'Contáctanos' }, 
          ]
      }
      
  }
}
</script>
<style lang="scss">
@import '../styles/Header.scss';
</style>