<template>
  <div class="about-page">
    <div class="about-container">
      <!-- Image and Text Section -->
      <div class="content-section">
        <img
          src="https://mapulecodes.github.io/fridayimages/images/29.jpg"
          class="me-img"
          alt="Mapule"
        />
        <div class="text-content">
          <h2>About Me</h2>
          <p>
            Hi there, my name is Mapule, and I'm a Full-Stack Developer. My
            passion is to create and develop beautiful UI/UX experiences that
            provide value to users. I specialize in building dynamic,
            responsive, and user-friendly websites and applications. With a
            strong focus on both front-end and back-end development, I strive
            to deliver seamless and intuitive digital experiences. I'm proficient in
            various web technologies such as HTML, CSS, JavaScript, Vue.js, and
            Node.js, and I am constantly learning new tools and frameworks to improve my skills. 
            Outside of work, I enjoy solving complex problems, collaborating with creative teams, and staying updated on the latest tech trends.
          </p>
        </div>
      </div>

      <!-- Technical Skills -->
      <div class="skills-section">
        <h3>Technical Skills</h3>
        <div class="skills-container">
          <div
            v-for="(skill, index) in technicalSkills"
            :key="index"
            class="skill-icon"
          >
            <i :class="skill.icon" :style="{ color: skill.color }"></i>
            <p>{{ skill.name }}</p>
          </div>
        </div>
      </div>

      <!-- Soft Skills -->
      <div class="skills-section">
        <h3>Soft Skills</h3>
        <div class="skills-container">
          <div
            v-for="(skill, index) in softSkills"
            :key="index"
            class="skill-icon"
          >
            <i :class="skill.icon" :style="{ color: skill.color }"></i>
            <p>{{ skill.name }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      technicalSkills: [
        { name: "HTML", icon: "fab fa-html5", color: "#E34F26" },
        { name: "CSS", icon: "fab fa-css3-alt", color: "#1572B6" },
        { name: "JavaScript", icon: "fab fa-js", color: "#F7DF1E" },
        { name: "Vue.js", icon: "fab fa-vuejs", color: "#42b883" },
        { name: "ReactJS", icon: "fab fa-react", color: "#61DAFB" },
        { name: "React Native", icon: "fab fa-react", color: "#61DAFB" },
        { name: "Node.js", icon: "fab fa-node-js", color: "#539E43" },
        { name: "Sass", icon: "fab fa-sass", color: "#CF649A" },
        { name: "MySQL", icon: "fas fa-database", color: "#00758F" },
        { name: "Firebase", icon: "fas fa-fire", color: "#FFCA28" },
        { name: "Git", icon: "fab fa-git-alt", color: "#F05032" },
        { name: "GitHub", icon: "fab fa-github", color: "#181717" }
      ],
      softSkills: [
        { name: "Problem-solving", icon: "fas fa-puzzle-piece", color: "#FFD700" },
        { name: "Teamwork", icon: "fas fa-users", color: "#1E90FF" },
        { name: "Adaptability", icon: "fas fa-sync-alt", color: "#32CD32" },
        { name: "Communication", icon: "fas fa-comments", color: "#FF8C00" },
        { name: "Creativity", icon: "fas fa-lightbulb", color: "#FF6347" },
        { name: "Time Management", icon: "fas fa-clock", color: "#8A2BE2" },
        { name: "Curiosity", icon: "fas fa-search", color: "#FF69B4" },
        { name: "Resourcefulness", icon: "fas fa-tools", color: "#00BFFF" }
      ]
    };
  }
};
</script>

<style scoped>
.about-page {
  display: flex;
  justify-content: center;
  padding: 50px;
}

.about-container {
  max-width: 1000px;
  width: 100%;
}

.content-section {
  display: flex;
  align-items: flex-start;
  gap: 20px;
  margin-bottom: 40px;
}

.me-img {
  width: 200px;
  height: auto;
  border-radius: 10px;
}

.text-content {
  max-width: 600px;
  text-align: center; /* Center the text content */
}

h2 {
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: #333;
}

p {
  font-size: 1.2rem;
  line-height: 1.6;
  color: #444;
}

/* Skills Section */
.skills-section {
  margin-bottom: 40px; /* Add space between skills sections */
}

h3 {
  font-size: 1.75rem;
  margin-bottom: 20px; /* Space below the heading */
  color: #333;
}

.skills-container {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 20px;
}

.skill-icon {
  text-align: center;
  flex-basis: 23%;
  border: 2px solid;
  border-image-slice: 1;
  border-width: 2px;
  border-image-source: linear-gradient(to right, blue, purple);
  padding: 10px;
  transition: background 0.3s ease;
}

.skill-icon:hover {
  background: linear-gradient(to left, #ADD8E6, #DDA0DD, #D3D3D3); /* Lighter gradient */
}

.skill-icon i {
  font-size: 3rem;
}

.skill-icon p {
  font-size: 1.1rem;
  font-weight: bold;
  margin-top: 10px;
  color: #000;
}

/* Responsive Adjustments */
@media (max-width: 768px) {
  .content-section {
    flex-direction: column;
    align-items: center;
  }

  .me-img {
    width: 150px;
  }

  .text-content {
    text-align: center; /* Ensure text remains centered on mobile */
  }

  .skills-container {
    justify-content: center;
  }
}
</style>
