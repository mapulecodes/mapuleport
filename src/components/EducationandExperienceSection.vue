<template>
  <div class="education-experience-section">
    <!-- Education Section -->
    <div class="education-container">
      <h2>Education</h2>
      <div class="education-cards">
        <!-- High School Card -->
        <div class="card">
          <img
            src="https://mapulecodes.github.io/fridayimages/images/bhs.jfif"
            alt="High School"
          />
          <h3>High School</h3>
          <div class="card-hover">
            <p>
              I attended Bloouberg High School where I developed a strong
              foundation in mathematics and sciences.
            </p>
          </div>
        </div>

        <!-- LifeChoices Academy Card -->
        <div class="card">
          <img
            src="https://mapulecodes.github.io/fridayimages/images/LIFE-CHOICES.jpg"
            alt="LifeChoices Academy"
          />
          <h3>LifeChoices Academy</h3>
          <div class="card-hover">
            <p>
              At LifeChoices Academy, I learned web development, coding principles,
              and practical tech skills.
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Experience Section -->
    <div class="experience-container">
      <h2>Experience</h2>
      <div class="timeline">
        <div
          class="timeline-container"
          v-for="(experience, index) in experiences"
          :key="index"
        >
          <div class="timeline-content">
            <h3>{{ experience.company }}</h3>
            <p>{{ experience.position }}</p>
            <span class="timeline-date">{{ experience.period }}</span>
            <p>{{ experience.description }}</p>
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
      experiences: [
        {
          company: "Excellent Services",
          position: "Office Administrator",
          period: "Feb 2022 – July 2024",
          description: `
            • Captured client information into the database.\n
            • Responded to telephone and written enquiries.\n
            • Created employee work schedules.\n
            • Prepared and printed new client contracts.\n
            • Supervised cleaning staff and managed supply purchasing.\n
            • Researched potential clients and did outreach.\n
            • Managed correspondence and scheduled appointments.
          `,
        },
        {
          company: "H&M",
          position: "Sales Assistant",
          period: "Dec 2019 – Jan 2020",
          description: `
            • Ensured that items are accurately scanned and prices correctly entered.\n
            • Properly bagged items while finding opportunities to upsell till products.\n
            • Maintained clean shelves, displays, and stocked products.\n
            • Packed new stock as per manager's orders.\n
            • Counted cash at the end of shifts.
          `,
        },
        {
          company: "Sportsmen's Warehouse",
          position: "Sales Assistant and Cashier",
          period: "Mar 2018 – Nov 2018",
          description: `
            • Greeted customers with a friendly attitude.\n
            • Handled morning admin and float counts.\n
            • Assisted customers with purchase decisions.\n
            • Managed stock and achieved weekly sales targets.\n
            • Handled receiving of new stock.
          `,
        },
      ],
    };
  },
};
</script>

<style scoped>
/* Section Layout */
.education-experience-section {
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 40px;
}

.education-container,
.experience-container {
  width: 100%;
}

h2 {
  font-size: 2rem;
  margin-bottom: 20px;
  text-align: center;
  color: #333;
}

/* Education Section */
.education-cards {
  display: flex;
  justify-content: center;
  gap: 20px;
}

/* Card Styling */
.card {
  background-color: #fff;
  padding: 10px;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-in-out;
  text-align: center;
  width: 280px; /* Fixed width */
  height: 300px; /* Fixed height */
}

.card img {
  max-height: 180px;
  width: 100%;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 10px;
}

.card h3 {
  font-size: 1.2rem;
  margin-bottom: 10px;
  color: #333;
}

.card-hover {
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  border-radius: 8px;
  transition: opacity 0.3s ease-in-out;
}

.card:hover .card-hover {
  opacity: 1;
}

/* Timeline (Experience Section) */
.timeline {
  border-left: 3px solid #ddd;
  padding-left: 20px;
  max-width: 600px; /* Adjust the width to make the timeline thinner */
  margin: 0 auto; /* Center the timeline */
}

.timeline-container {
  margin-bottom: 20px;
}

.timeline-content {
  position: relative;
  padding-left: 20px;
}

.timeline-content::before {
  content: "";
  position: absolute;
  left: -30px;
  top: 0;
  width: 15px;
  height: 15px;
  background-color: #333;
  border-radius: 50%;
}

.timeline-date {
  font-size: 0.9rem;
  color: #888;
  font-weight: bold;
  margin-top: 5px;
}
</style>
