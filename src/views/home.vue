<template>
  <div class="home-container">
    <logo></logo>
    <app-steps></app-steps>
    <!-- <div v-if="!isDesktop">
      <parellex></parellex>
    </div> -->
    <!-- <app-cta></app-cta> -->
    <team></team>
    <app-testimonial></app-testimonial>
    <Footer></Footer>
      <Privacy_policy></Privacy_policy>
    <!-- <app-contact></app-contact> -->
  </div>
</template>

<script>
import logo from '../components/logo.vue'
// import parellex from '../components/parellex.vue'
import AppSteps from '../components/steps'
import AppTestimonial from '../components/testimonial'
import team from '../components/team.vue'
import Footer from '../components/footer.vue'
export default {
  name: 'Home',
  components: {
    logo,
    // parellex,
    AppSteps,
    team,
    AppTestimonial,
    Footer
  },
  data() {
    return {
      isDesktop: false, // Initial state
    };
  },
  mounted() {
    this.checkDeviceType();
    window.addEventListener('resize', this.checkDeviceType); // Update on resize
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.checkDeviceType);
  },
  methods: {
    checkDeviceType() {
      this.isDesktop = window.innerWidth >= 450; // Define desktop width
    },
  },
  metaInfo: {
    title: `MOM's IVF`,
  },
}
</script>

<style scoped>
.home-container {
  width: 100%;
  display: flex;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
  background-color: #fdeaf1;
  color: rgb(0, 0, 0);
}
</style>
