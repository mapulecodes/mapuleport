<template>
  <div class="container-fluid d-flex flex-column align-items-center">
    <!-- Landing Section -->
    <section class="row" id="landing">
      <div class="col">
        <LandingSection />
      </div>
    </section>

    <!-- About Section -->
    <section class="row" id="about">
      <div class="col">
        <AboutSection />
      </div>
    </section>

    <!-- Education and Experience Section -->
    <section class="row" id="educationandexperience">
      <div class="col">
        <EducationandExperienceSection />
      </div>
    </section>

    <!-- Projects Section -->
    <section class="row" id="projects">
      <div class="col">
        <ProjectsSection />
      </div>
    </section>

    <section class="row" id="contact">
      <div class="col">
        <ContactSection />
      </div>
    </section>

    <section class="row" id="button">
      <div class="col">
        <ColourButton />
      </div>
    </section>
 
  </div>

</template>

<script>
import LandingSection from '@/components/LandingSection.vue';
import AboutSection from '@/components/AboutSection.vue';
import EducationandExperienceSection from '@/components/EducationandExperienceSection.vue';
import ProjectsSection from '@/components/ProjectsSection.vue';
import ContactSection from '@/components/ContactSection.vue';
import ColourButton from '@/components/ColourButton.vue';

export default {
  name: 'HomeView',
  components: {
    LandingSection,
    AboutSection,
    EducationandExperienceSection,
    ProjectsSection,
    ContactSection,
    ColourButton
  },
};
</script>

