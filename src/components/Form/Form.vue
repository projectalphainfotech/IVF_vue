<template>
  <form @submit.prevent="handleSubmit" class="form-container">
    <div class="form-group">
      <label for="name">Name:</label>
      <input type="text" id="name" v-model="form.name" required />
    </div>
    <div class="form-group">
      <label for="phone">Mobile:</label>
      <input
        type="text"
        id="phone"
        v-model="form.phone"
        required
        maxlength="10"
        pattern="\d{10}"
        placeholder="10 digits only"
      />
    </div>
    <button type="submit" class="find-out-btn">Call Back</button>
  </form>
</template>

<script>
export default {
  name: 'FormComponent',
  data() {
    return {
      form: {
        name: '',
        phone: ''
      }
    }
  },
  methods: {
    async handleSubmit() {
      if (this.form.phone.length !== 10) {
        alert('Phone number must be exactly 10 digits.');
        return;
      }

      try {
        // const response = await fetch('https://google-api-email.onrender.com/append-data', {
        //   method: 'POST',
        //   headers: {
        //     'Content-Type': 'application/json'
        //   },
        //   body: JSON.stringify({
        //     number1: this.form.name,
        //     number4: this.form.phone
        //   })
        // });

        const result = await response.json();

        if (response.ok) {
          alert(`Form submitted successfully!`);
        } else {
          alert(`Error: ${result.message}`);
        }
      } catch (error) {
        console.error('Error:', error);
        alert('An error occurred while submitting the form.');
      }
    }
  }
}
</script>

<style scoped>
.form-container {
  padding:2rem;
  background-color: #FF6347; /* Light background color */
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(175, 67, 67, 0.1);
  width: 30rem;
  margin:1.2rem; /* Center the form */
}

@media screen and (max-width:764px) {
  .form-container {
  padding:2rem;
  background-color: #FF6347; /* Light background color */
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(175, 67, 67, 0.1);
  width: 18rem;
  margin:1.2rem; /* Center the form */
}
}

.form-group {
  margin: 1rem 0;
  text-align: left;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  font-size:1.4rem;
  font-weight: bold;
  color: #ffffff; /* Darker text color */
}

input[type="text"],
input[type="email"] {
  width: 100%;
  padding: 0.75rem;
  border-radius: 4px;
  border: 1px solid #ccc;
  font-size: 14px;
  transition: border-color 0.3s; /* Smooth transition */
}

input[type="text"]:focus,
input[type="email"]:focus {
  border-color: #007bff; /* Highlight color on focus */
  outline: none; /* Remove default outline */
}

button.find-out-btn {
  background-color: #007bff; /* Primary button color */
  color: rgb(12, 11, 11);
  padding: 12px 24px;
  font-size: 16px;
  border: none;
  cursor: pointer;
  border-radius: 4px;
  margin-top: 1.2rem;
  transition: background-color 0.3s; /* Smooth transition */
}

button.find-out-btn:hover {
  background-color: #96c5f7;
  border-radius:1rem; /* Darker shade on hover */
}

@media (max-width: 480px) {
  .form-container {
    padding: 1rem; /* Reduce padding on smaller screens */
  }
}
</style>
