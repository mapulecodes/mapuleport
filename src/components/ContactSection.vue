<template>
    <div class="contact-wrapper">
      <!-- Contact Me Heading -->
      <h1 class="contact-title">Contact Me</h1>
  
      <!-- Flex container for contact card and form -->
      <div class="contact-content">
        <!-- Contact Details Card -->
        <div class="contact-card">
          <h2>Contact Details</h2>
          <div class="contact-details">
            <div class="detail-item">
              <i class="fas fa-map-marker-alt"></i>
              <p>Cape Town, Parow</p>
            </div>
            <div class="detail-item">
              <i class="fas fa-phone-alt"></i>
              <p>+27 67 061 9742</p>
            </div>
            <div class="detail-item">
              <i class="fas fa-envelope"></i>
              <p>mbuzwanamapule@gmail.com</p>
            </div>
          </div>
        </div>
  
        <!-- Contact Form -->
        <div class="contact-container">
          <form @submit.prevent="submitForm" class="form">
            <div class="form-group">
              <input type="text" id="name" v-model="formData.name" required placeholder="Your Name" />
            </div>
            <div class="form-group">
              <input type="email" id="email" v-model="formData.email" required placeholder="Your Email" />
            </div>
            <div class="form-group">
              <textarea id="message" v-model="formData.message" required placeholder="Your Message"></textarea>
            </div>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        formData: {
          name: '',
          email: '',
          message: '',
        },
      };
    },
    methods: {
      submitForm() {
        console.log(this.formData);
        alert('Message sent!');
        this.formData = {
          name: '',
          email: '',
          message: '',
        };
      },
    },
  };
  </script>
  
  <style scoped>
  /* Main layout for contact card and form */
  .contact-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    gap: 20px;
    height: 100vh;
  }
  
  /* Center the Contact Me title */
  .contact-title {
    text-align: center;
    margin-bottom: 20px;
    font-size: 2.5rem;
    color: #333;
  }
  
  /* Flex container to align contact card and form side by side */
  .contact-content {
    display: flex;
    justify-content: space-between;
    gap: 20px;
    width: 100%;
    max-width: 1200px;
  }
  
  /* Contact card styling */
  .contact-card {
    flex: 1;
    background: linear-gradient(45deg, #ADD8E6, #DDA0DD, #D3D3D3); /* Gradient background */
    padding: 30px;
    color: #333;
    border-radius: 15px;
    box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.1);
    text-align: center;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  .contact-card:hover {
    transform: translateY(-10px);
    box-shadow: 0px 15px 25px rgba(0, 0, 0, 0.15);
  }
  
  .contact-card h2 {
    margin-bottom: 15px;
  }
  
  .contact-details {
    margin-top: 20px;
  }
  
  .detail-item {
    margin: 15px 0;
  }
  
  .detail-item i {
    margin-right: 10px;
    font-size: 18px;
  }
  
  /* Contact form styling */
  .contact-container {
    flex: 1;
    padding: 40px;
    border-radius: 15px;
    box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.1);
  }
  
  .form {
    background-color: white;
    border-radius: 15px;
    padding: 30px;
    border: 4px solid; /* Added border */
    border-image: linear-gradient(45deg, #ADD8E6, #DDA0DD, #D3D3D3) 1; /* Gradient border */
  }
  
  /* Input and Textarea */
  input,
  textarea {
    width: 100%;
    padding: 15px;
    margin-bottom: 10px;
    border: 2px solid #ddd;
    border-radius: 8px;
    font-size: 16px;
    transition: border-color 0.3s ease, background 0.3s ease;
  }
  
  /* Gradient on hover and focus */
  input:hover,
  textarea:hover,
  input:focus,
  textarea:focus {
    border-color: #6a11cb;
    background: linear-gradient(45deg, #ADD8E6, #DDA0DD, #D3D3D3);
    color: black;
  }
  
  /* Button */
  button {
    width: 100%;
    padding: 15px;
    background: linear-gradient(45deg, #ADD8E6, #DDA0DD, #D3D3D3);
    color: black;
    border: none;
    border-radius: 8px;
    font-size: 16px;
    cursor: pointer;
    transition: transform 0.3s ease;
  }
  
  button:hover {
    transform: scale(1.05);
  }
  </style>
  