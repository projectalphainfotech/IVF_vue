<template>
  <div class="home-container">
    <logo></logo>
    <app-steps></app-steps>
    <!-- <app-cta></app-cta> -->
    <team></team>
    <app-testimonial></app-testimonial>
    <app-contact></app-contact>
  </div>
</template>

<script>

import logo from '../components/logo.vue'
// import AppHero from '../components/hero'
import AppCta from '../components/cta'
// import AppPricing from '../components/pricing'
import AppSteps from '../components/steps'
import AppTestimonial from '../components/testimonial'
import AppContact from '../components/contact'
// import AppFooter from '../components/footer'
import team from '../components/team.vue'

export default {
  name: 'Home',
  components: {
    logo,
    AppCta,
    AppSteps,
    team,
    AppTestimonial,
    AppContact,
  },
  metaInfo: {
    title: 'Spotless Hungry Crocodile',
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
