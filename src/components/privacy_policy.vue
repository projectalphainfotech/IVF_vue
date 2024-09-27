<template>
    <div class="privacy-policy">
      <h1>Privacy Policy</h1>
      <p><strong>Effective Date:</strong> {{ effectiveDate }}</p>
      
      <h2>1. Information We Collect</h2>
      <p><strong>Personal Information:</strong> We may collect personally identifiable information that you provide to us directly, such as your name, email address, and payment information when you:</p>
      <ul>
        <li>Create an account</li>
        <li>Make a purchase</li>
        <li>Subscribe to our newsletter</li>
        <li>Contact us</li>
      </ul>
  
      <p><strong>Non-Personal Information:</strong> We may also collect non-personal information automatically, including:</p>
      <ul>
        <li>IP address</li>
        <li>Browser type</li>
        <li>Device type</li>
        <li>Operating system</li>
        <li>Pages visited</li>
        <li>Time spent on pages</li>
      </ul>
  
      <h2>2. How We Use Your Information</h2>
      <p>We may use the information we collect for various purposes, including to:</p>
      <ul>
        <li>Provide and maintain our services</li>
        <li>Process transactions and send you related information</li>
        <li>Communicate with you, including sending updates and promotional materials</li>
        <li>Improve our website and services</li>
        <li>Monitor usage and analyze trends</li>
      </ul>
  
      <h2>3. Sharing Your Information</h2>
      <p>We do not sell or rent your personal information to third parties. We may share your information in the following circumstances:</p>
      <ul>
        <li>With service providers who assist us in our operations</li>
        <li>To comply with legal obligations, respond to subpoenas, or protect our rights</li>
        <li>In connection with a merger, sale, or acquisition of all or a portion of our business</li>
      </ul>
  
      <h2>4. Your Rights</h2>
      <p>Depending on your location, you may have the following rights regarding your personal information:</p>
      <ul>
        <li>The right to access your personal information</li>
        <li>The right to rectify inaccurate information</li>
        <li>The right to request deletion of your personal information</li>
        <li>The right to restrict processing of your personal information</li>
        <li>The right to data portability</li>
      </ul>
  
      <h2>5. Security of Your Information</h2>
      <p>We implement reasonable security measures to protect your personal information. However, no method of transmission over the internet is 100% secure.</p>
  
      <h2>6. Changes to This Privacy Policy</h2>
      <p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.</p>
  
      <h2>7. Contact Us</h2>
      <p>If you have any questions about this Privacy Policy, please contact us at:</p>
      <p>
        <strong>{{ companyName }}</strong><br>
        {{ address }}<br>
        Email: {{ email }}<br>
        Phone: {{ phone }}
      </p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        effectiveDate: '2024-09-27',
        companyName: 'Your Company Name',
        address: 'Your Address',
        email: 'your.email@example.com',
        phone: '(123) 456-7890'
      };
    }
  };
  </script>
  
  <style scoped>
  .privacy-policy {
    max-width: 800px;
    margin: auto;
    padding: 20px;
    font-family: Arial, sans-serif;
  }
  h1, h2 {
    color: #333;
  }
  p {
    line-height: 1.6;
  }
  ul {
    margin-left: 20px;
  }
  </style>
  