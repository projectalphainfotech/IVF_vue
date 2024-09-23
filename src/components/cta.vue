<template>
  <div class="cta-section">
    <div class="cta-container">
      <div class="cta-background">
      
        <div class="team-member">
          <h1>Meet Our Team</h1>
          <img src="../assets/left.jpg" alt="Dr. Usha Maniya" class="team-image" />
          <h2 class="team-name">Dr. Usha Maniya</h2>
          <p class="team-title">Dr. Usha Maniya holds an MBBS</p>
          <p class="cta-content">{{ content1 }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CTA',
  props: {
    content1: {
      type: String,
      default: 'Discover how our experienced team can help you?',
    },
    action1: {
      type: String,
      default: 'Schedule a Consultation',
    },
  },
}
</script>

<style scoped>
.cta-section {
  padding: 4rem 1rem; /* Added horizontal padding for mobile */
}

.cta-container {
  transition: transform 0.3s;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.cta-container:hover {
  transform: scale(1.05);
}

.team-member {
  display: flex;
  flex-direction: column;
  align-items: center; /* Center align for mobile */
  text-align: center; /* Center text for mobile */
}

.team-image {
  width: 15rem; /* Adjusted size for mobile */
  height: 15rem; /* Adjusted size for mobile */
  border-radius: 10%;
  margin: 1rem 0; /* Adjusted margin for mobile */
}

.cta-content {
  padding: 0 1rem; /* Added padding for mobile readability */
  text-align: center; /* Center align for better mobile display */
}

.cta-button {
  padding: 0.5rem 1.5rem; /* Slightly larger button for easier tapping */
  background-color: var(--dl-color-theme-accent1);
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.cta-button:hover {
  background-color: var(--dl-color-theme-neutral-dark);
}

@media (max-width: 767px) {
  .cta-container {
    padding: 2rem 1rem; /* Adjusted padding for smaller screens */
  }
  
  .team-image {
    width: 100%; /* Full width for smaller screens */
    max-width: 15rem; /* Constrain max size */
    height: auto; /* Maintain aspect ratio */
  }
}
</style>
