<template>
  <nav class="navbar navbar-expand-lg gradient-navbar sticky-top">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">
        <span class="navbar-brand-name">Mapule Mbuzwana</span>
      </router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link active" aria-current="page" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#about">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#educationandexperience">Education and Experience</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#projects">Projects</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#ContactMe">Contact Me</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.gradient-navbar {
  background: linear-gradient(to right, #B3E5FC, purple, #ADD8E6, #DDA0DD, #D3D3D3);
}

.navbar-brand-name {
  font-weight: bold; /* Make the name bold */
  font-size: 1.5rem; /* Adjust font size as needed */
  color: black; /* Set font color to black */
}

.navbar-nav {
  margin-left: auto; /* Pushes the nav items to the right */
}

.nav-link {
  color: black !important; /* Set the font color to black */
  font-size: 1.1rem;
}

.navbar-toggler {
  border: none;
}

.navbar-toggler-icon {
  background-image: url("data:image/svg+xml;charset=UTF8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3E%3Cpath stroke='rgba%288, 8, 8, 0.7%29' stroke-width='2' linecap='round' linejoin='round' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E");
  background-color: white; /* Ensures visibility in dark mode */
}

@media (max-width: 992px) {
  .navbar-nav {
    margin-left: 0; /* Reset margin on smaller screens */
  }
}
</style>
