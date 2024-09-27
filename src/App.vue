<template>
  <div class="wrapper">
    <NavBar />
    <main class="container-fluid">
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import Footer from '@/components/Footer.vue';

export default {
  components: {
    NavBar,
    Footer,
  },
};
</script>

<style src="@/assets/css/style.css"></style>
<style>
.wrapper {
  min-height: 100vh; /* Ensures the wrapper covers the full viewport height */
  display: flex;
  flex-direction: column;
}

.container-fluid {
  flex: 1; /* This allows the main content to grow and fill the available space */
}

/* Add this style to ensure the background is applied globally */
html, body {
  margin: 0;
  padding: 0;
  background-color: var(--background-color); /* Use your defined background color variable */
  min-height: 100vh;
}
</style>
