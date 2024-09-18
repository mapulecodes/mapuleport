<template>
  <div class="container-fluid">
    <section class="row" id="landing">
       <LandingSection/>
    </section>

  </div>
</template>

<script>

import LandingSection from '@/components/LandingSection.vue'


export default {
  name: 'HomeView',
  components: {
    LandingSection,
   
  }
}
</script>