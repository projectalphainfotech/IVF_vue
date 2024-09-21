<template>
  <section class="team">
    <h1>Meet Our Team</h1>
    <div class="team-members">
      <div class="team-member">
        <div class="team-info">
          <img src="../assets/left.jpg" alt="Dr. Usha Maniya" class="team-image" />
          <div >
            <h2 class="team-name">Dr. Usha Maniya</h2>
            <p class="team-title">Dr. Usha Maniya holds an MBBS</p>
          </div>
        </div>
      </div>
      <div class="team-member">
        <div class="team-info">
          <img src="../assets/main.jpg" alt="Dr. Mansukh Gabani" class="team-image" />
          <div>
            <h2 class="team-name">Dr. Mansukh Gabani</h2>
            <p class="team-title">MD Pathology, Senior Embryologist</p>
          </div>
        </div>
      </div>
      <div class="team-member">
        <div class="team-info">
          <img src="../assets/right.jpg" alt="Dr. Purvi Akabri" class="team-image" />
          <div>
            <h2 class="team-name">Dr. Purvi Akabri</h2>
            <p class="team-title">
              BSc in Biotechnology, MSc in Biotechnology (Gold Medalist)
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.team {
  padding: 5em 1em;
  text-align: center;
}

.team h1 {
  font-size: 2.5em;
  margin-bottom: 1em;
}

.team-members {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2em;
}

.team-member {
  width: 250px;
  /* Consistent card width */
  margin: 3rem;
  text-align: center;
}

.team-image {
  width: 100%;
  /* Set to full width of the card */
  height: 15rem;
  /* Fixed height for consistency */
  border-radius: 20%;
  object-fit: cover;
  /* Maintain aspect ratio */
}

.team-info {
  margin-top: 1em;
}

.team-name {
  font-size: 1.2em;
  margin-bottom: 0.5em;
}

.team-title {
  font-size: 1em;
  color: #555;
}

 .team-info div{
  margin: 2rem;
 }

</style>