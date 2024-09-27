<template>
  <div class="landing-page">
    <section class="content">
      <!-- Left Side (Text and Buttons) -->
      <div class="text-side">
        <h1>Full Stack Developer</h1>
        <p>Hi, I'm Mapule Mbuzwana. A passionate Full Stack Developer based in South Africa, Cape Town📍.</p>

        <!-- Social Links -->
        <div class="social-links">
          <a href="https://www.linkedin.com/in/mapule-mbuzwana-334bb9218/" target="_blank" aria-label="LinkedIn">
            <i class="fab fa-linkedin"></i>
          </a>
          <a href="https://github.com/mapulecodes" target="_blank" aria-label="GitHub">
            <i class="fab fa-github"></i>
          </a>
        </div>

        <!-- Buttons -->
        <div class="actions">
          <a href="#contact" class="btn">Reach Me</a>
          <a href="resume.pdf" class="btn" download>Download CV</a>
        </div>
      </div>

      <!-- Right Side (Image with Morph Effect) -->
      <div class="image-side" ref="heroImg">
        <div class="hero-img" :style="{ backgroundImage: `url(${bgImage})` }"></div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bgImage: '', // Initially empty
    };
  },
  mounted() {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.bgImage = 'https://mapulecodes.github.io/fridayimages/images/mapule.jpg'; // Set the background image
          observer.disconnect(); // Stop observing after loading
        }
      });
    });

    observer.observe(this.$refs.heroImg); // Start observing the image div
  },
};
</script>

<style scoped>
/* Your existing styles remain the same */
.landing-page {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh; 
  background-color: transparent; 
  margin: 0; 
  padding: 0; 
}

.content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  width: 100%;
  flex-wrap: wrap;
}

.text-side {
  flex: 1;
  text-align: left;
  padding: 20px; 
}

h1 {
  font-size: 4rem;
  margin-bottom: 20px;
}

p {
  font-size: 1.5rem;
  color: #666;
  margin-bottom: 30px;
}

.social-links {
  margin-bottom: 20px;
}

.social-links a {
  margin-right: 15px;
  font-size: 2rem;
  color: #333;
  transition: color 0.3s ease;
}

.social-links a:hover {
  color: #0077b5; 
}

.actions {
  margin-top: 20px;
}

.btn {
  padding: 12px 30px;
  margin-right: 15px;
  border-radius: 30px;
  background: transparent; 
  color: black; 
  text-decoration: none;
  font-size: 1.25rem;
  transition: background 0.3s ease, color 0.3s ease, border-radius 0.3s ease; 
  border: 2px solid;
  border-image-slice: 1;
  border-image-source: linear-gradient(to right, blue, purple); 
}

.btn:hover {
  background: linear-gradient(to left, #ADD8E6, #DDA0DD, #D3D3D3); 
  color: black; 
  border-radius: 0; 
}

.image-side {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.hero-img {
  animation: morph 8s ease-in-out infinite;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border: 3px solid #2d2e32;
  border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
  height: 30rem;
  width: 30rem;
}

@keyframes morph {
  0% {
    border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
  }
  50% {
    border-radius: 30% 70% 60% 40% / 40% 60% 30% 70%;
  }
  100% {
    border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
  }
}

/* Responsive Styles */
@media (max-width: 768px) {
  .content {
    flex-direction: column;
    text-align: center;
  }

  .text-side {
    order: 2; 
  }

  .image-side {
    order: 1; 
    margin-bottom: 20px;
  }

  h1 {
    font-size: 3rem;
  }

  p {
    font-size: 1.3rem;
  }
}

@media (max-width: 480px) {
  h1 {
    font-size: 2.5rem;
  }

  p {
    font-size: 1.2rem;
  }

  .btn {
    padding: 10px 20px;
    font-size: 1rem;
  }

  .hero-img {
    height: 20rem;
    width: 20rem;
  }
}
</style>
