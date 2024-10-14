<template>
  <div class="projects-section">
    <h2>Projects</h2>
    <div class="projects-grid">
      <!-- Project cards -->
      <div v-for="(project, index) in projects" :key="index" class="project-card">
        <img :src="project.image" :alt="project.title" class="project-image" />
        <div class="project-info">
          <h3>{{ project.title }}</h3>
          <p>{{ project.description }}</p>
          <a :href="project.githubLink" target="_blank" class="github-icon">
            <i class="fab fa-github"></i>
          </a>
          <a v-if="project.liveLink" :href="project.liveLink" target="_blank" class="live-link">
            Live Project
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectsSection',
  data() {
    return {
      projects: [
        {
          title: 'Project One',
          description: 'A brief description of Project One.',
          image: 'https://mapulecodes.github.io/fridayimages/images/petshop.png', // New image
          githubLink: 'https://github.com/project-one',
          liveLink: 'https://node-eomp-62eed.web.app/', // New live link
        },
        {
          title: 'Salon Inventory',
          description: 'An inventory management system for salons.',
          image: 'https://mapulecodes.github.io/fridayimages/images/inventory.png', // Inventory image
          githubLink: 'https://github.com/mapulecodes/saloninventory.git',
          liveLink: 'https://saloninventory-2ab75.web.app/',
        },
        {
          title: 'Project Three',
          description: 'A brief description of Project Three.',
          image: 'https://via.placeholder.com/300x200',
          githubLink: 'https://github.com/project-three',
        },
        {
          title: 'Project Four',
          description: 'A brief description of Project Four.',
          image: 'https://via.placeholder.com/300x200',
          githubLink: 'https://github.com/project-four',
        },
        {
          title: 'Project Five',
          description: 'A brief description of Project Five.',
          image: 'https://via.placeholder.com/300x200',
          githubLink: 'https://github.com/project-five',
        },
        {
          title: 'Project Six',
          description: 'A brief description of Project Six.',
          image: 'https://via.placeholder.com/300x200',
          githubLink: 'https://github.com/project-six',
        },
      ],
    };
  },
};
</script>

<style scoped>
.projects-section {
  width: 100%;
  padding: 40px;
  text-align: center;
}

h2 {
  font-size: 2.5rem;
  margin-bottom: 30px;
}

.projects-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}

.project-card {
  width: 25%;
  background: linear-gradient(to left, #ADD8E6, #DDA0DD, #D3D3D3); /* Gradient background */
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease;
  position: relative;
  color: black;
}

.project-card:hover {
  transform: scale(1.05);
}

.project-image {
  width: 100%;
  height: 150px;
  object-fit: cover;
}

.project-info {
  padding: 15px;
}

.project-info h3 {
  font-size: 1.2rem;
  margin-bottom: 10px;
}

.project-info p {
  font-size: 0.9rem;
  margin-bottom: 20px;
}

.github-icon, .live-link {
  position: absolute;
  bottom: 10px;
  right: 10px;
  font-size: 1.5rem;
  color: #fff;
}

.github-icon:hover, .live-link:hover {
  color: #ddd;
}

.live-link {
  position: absolute;
  bottom: 10px;
  left: 10px;
  font-size: 1rem;
  color: #fff;
}
</style>
