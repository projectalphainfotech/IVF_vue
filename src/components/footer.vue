<template>
  <footer class="footer">
    <div class="footer-content">
    </div>
    <div class="links">
      <div class="links-column">
        <a href="/privacy-policy">{{ privacyLink }}</a>
      </div>
    </div>
    <div class="credits">
      <span>Copyright © 2018 P. P. Maniya Hospital</span>
      <br>
      <br>
      <span>Developed By digitalks.co.in</span>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  props: {
    actionText: {
      type: String,
      default: 'Subscribe',
    },
    columnTitle: {
      type: String,
      default: 'Quick Links',
    },
    link1: {
      type: String,
      default: 'Home',
    },
    link2: {
      type: String,
      default: 'About Us',
    },
    link3: {
      type: String,
      default: 'Services',
    },
    privacyLink: {
      type: String,
      default: 'Privacy Policy',
    },
    termsLink: {
      type: String,
      default: 'Terms of Service',
    },
    footerText: {
      type: String,
      default: '123 Address St, City, Country | Phone: +123-456-7890',
    },
    companyName: {
      type: String,
      default: 'Your Company Name',
    },
  },
}
</script>

<style scoped>
.footer {
  padding: 20px;
  background: #f8f8f8;
  text-align: center;
}

.footer-content {
  max-width: 800px;
  margin: 0 auto;
}

.newsletter {
  margin-bottom: 20px;
}

.newsletter-form {
  display: flex;
  justify-content: center;
}

input[type="email"] {
  padding: 10px;
  margin-right: 10px;
}

.links {
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
}

.links-column {
  text-align: left;
}

.credits {
  font-size: 12px;
  color: #555;
}
</style>
