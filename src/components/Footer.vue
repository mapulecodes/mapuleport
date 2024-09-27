<template>
  <footer class="footer">
    <div class="footer-content">
      <p class="lead">
        Mapule's Portfolio &copy; 
        <span class="shadow">{{ cYear }}</span>
      </p>
      <div class="social-icons">
        <a href="https://github.com/mapulecodes" target="_blank" class="social-link">
          <i class="bi bi-github">github</i>
        </a>
        <a href="https://www.linkedin.com/in/mapule-mbuzwana-334bb9218/" target="_blank" class="social-link">
          <i class="bi bi-linkedin">LinkedIn</i>
        </a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterComp",
  data() {
    return {
      cYear: new Date().getUTCFullYear()
    };
  }
};
</script>

<style scoped>
.footer {
  background: linear-gradient(to right, blue, purple, #ADD8E6, #DDA0DD, #D3D3D3); /* Match navbar gradient */
  color: black; /* Set font color to black */
  padding: 1rem 0; /* Top and bottom padding */
  text-align: center; /* Center align text */
  width: 100vw; /* Ensure full width of the viewport */
  position: relative; /* Ensure proper layout */
  left: 50%; /* Shift to the right */
  right: 50%; /* Shift to the left */
  margin-left: -50vw; /* Pull back to left */
  margin-right: -50vw; /* Pull back to right */
}

.footer-content {
  max-width: 900px; /* Maintain max width for content */
  margin: 0 auto; /* Center the content */
  padding: 1rem; /* Add padding for spacing */
}

.lead {
  margin: 0;
  font-size: 1.5rem; /* Increase font size */
  font-weight: bold; /* Make the text bold */
}

.shadow {
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
}

.social-icons {
  display: flex;
  justify-content: center; /* Center social icons */
  margin-top: 0.5rem;
}

.social-link {
  color: black; /* Set social link color to match font color */
  margin: 0 0.75rem;
  text-decoration: none;
  font-size: 1.25rem;
}

.social-link:hover {
  color: #ccc; /* Change hover color */
}
</style>
