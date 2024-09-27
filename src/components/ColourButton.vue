<template>
  <div>
    <!-- Dark mode toggle button -->
    <button @click="toggleDarkMode" class="toggle-btn">
      <span v-if="isDarkMode" class="sun-icon">☀️</span>
      <span v-else class="moon-icon">🌙</span>
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// State to track dark mode
const isDarkMode = ref(false)

// Toggle dark mode function
const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value
  if (isDarkMode.value) {
    document.body.style.background = 'linear-gradient(to right, blue, purple, #ADD8E6, #DDA0DD, #D3D3D3)'; // Gradient for dark mode
    document.body.style.color = '#f0f0f0'; // Light text for dark mode
  } else {
    document.body.style.backgroundColor = '#ffffff'; // White for light mode
    document.body.style.color = '#000000'; // Dark text for light mode
  }
}
</script>

<style scoped>
/* Ensure the entire page takes up the full height and width */
html, body {
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
  transition: background-color 0.4s, color 0.4s;
}

/* Remove unwanted padding or margins on the landing page */
.your-landing-page-class {
  margin: 0;
  padding: 0;
}

/* Repositioned dark mode toggle button styling */
.toggle-btn {
  position: fixed;
  bottom: 20px; /* Button at the bottom */
  right: 20px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  transition: transform 0.3s ease;
}

/* Increase icon size */
.moon-icon, .sun-icon {
  font-size: 36px; /* Adjust the size as needed */
}

.toggle-btn:hover {
  transform: scale(1.2);
}
</style>
