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
    // Dark mode with lighter gradient colors
    document.body.style.background = 'linear-gradient(to right, #B3E5FC, #CE93D8, #E1BEE7, #E0F7FA)';
    document.body.style.color = '#f0f0f0';
  } else {
    // Light mode: solid white background
    document.body.style.background = '#ffffff';
    document.body.style.color = '#000000';
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
  transition: background 0.4s, color 0.4s;
}

/* Remove any possible padding or margins causing issues */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box; /* Prevents unintended margins and padding */
}

/* Repositioned dark mode toggle button styling */
.toggle-btn {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  transition: transform 0.3s ease;
}

/* Increase icon size */
.moon-icon, .sun-icon {
  font-size: 36px;
}

.toggle-btn:hover {
  transform: scale(1.2);
}
</style>

