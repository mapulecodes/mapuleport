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
          image: 'https://via.placeholder.com/300x200',
          githubLink: 'https://github.com/project-one',
        },
        {
          title: 'Project Two',
          description: 'A brief description of Project Two.',
          image: 'https://via.placeholder.com/300x200',
          githubLink: 'https://github.com/project-two',
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
      // Skills for the technical skills section
      skills: ['HTML', 'CSS', 'JavaScript', 'Vue.js', 'Node.js', 'MySQL', 'Sass'], // Added Sass
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
  height: 150px; /* Adjusted height for smaller cards */
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

.github-icon {
  position: absolute;
  bottom: 10px;
  right: 10px;
  font-size: 1.5rem;
  color: #fff;
}

.github-icon:hover {
  color: #ddd;
}


</style>
