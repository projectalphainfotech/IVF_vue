<template>
  <form @submit.prevent="handleSubmit">
    <div class="form-group">
      <label for="name">Name:</label>
      <input type="text" id="name" v-model="form.name" required />
    </div>
    <!-- <div class="form-group">
      <label for="shop-name">Shop Name:</label>
      <input type="text" id="shop-name" v-model="form.shopName" required />
    </div> -->
    <!-- <div class="form-group">
      <label for="email">Email:</label>
      <input type="email" id="email" v-model="form.email" />
    </div> -->
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
        shopName: '',
        email: '',
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
        const response = await fetch('https://google-api-email.onrender.com/append-data', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            number1: this.form.name,
            number2: this.form.shopName,
            number3: this.form.email,
            number4: this.form.phone
          })
        });

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
.form-group {
  margin-bottom: 1rem;
  text-align: left;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
}

input[type="text"],
input[type="email"] {
  width: 100%;
  padding: 0.75rem;
  border-radius: 4px;
  border: 1px solid #ccc;
  font-size: 14px;
}

button.find-out-btn {
  background-color: white;
  color: black;
  padding: 12px 24px;
  font-size: 16px;
  border: none;
  cursor: pointer;
  border-radius: 4px;
  margin-top: 1rem;
}

button.find-out-btn:hover {
  background-color: lightgray;
}
</style>
