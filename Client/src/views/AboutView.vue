<template>
  <div class="about-page">
    <div class="about-content">
      <h1>About Our Showroom</h1>
      <p>
        Welcome to your premier destination for exceptional automobiles. We're passionate about
        connecting enthusiasts with the perfect vehicle. With years of experience in the automotive
        industry, we pride ourselves on offering a meticulously curated selection of both new and
        pre-owned cars.
      </p>
      <p>
        Our mission is to provide an unparalleled car-buying experience, built on trust,
        transparency, and outstanding customer service. We believe that finding your dream car
        should be an exciting and seamless journey. Come visit us and discover why so many customers
        choose us for their automotive needs.
      </p>

      <div class="contact-info">
        <h2>Contact Us</h2>
        <p><strong>Address:</strong> 123 Car Lovers Lane, Auto City, AC 98765</p>
        <p><strong>Phone:</strong> +1 (555) 123-4567</p>
        <p><strong>Email:</strong> info@yourshowroom.com</p>
        <p>
          <strong>Opening Hours:</strong> Mon-Fri: 9:00 AM - 6:00 PM | Sat: 10:00 AM - 4:00 PM |
          Sun: Closed
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'AboutView',
})
</script>

<style scoped>
.about-page {
  padding: 4rem 2rem; /* Add padding around the entire page content */
  max-width: 70vw; /* Max width for readability */
  margin: 0 auto; /* Center the content block */
  color: var(--tertiary-text);
}

.about-content {
  background-color: #f9f9f9; /* Light background for the content box */
  border-radius: 10px; /* Slightly rounded corners */
  padding: 2rem;
  box-shadow: var(--shadow);
}

h1 {
  color: var(--secondary-text);
  font-size: 2.5em;
  margin-bottom: 1.2rem;
  text-align: center;
}

h2 {
  color: var(--tertiary-text);
  font-size: 1.8em;
  margin-top: 40px; /* Space above contact info */
  margin-bottom: 1remx;
  border-bottom: 2px solid #eee; /* Underline for separation */
  padding-bottom: 0.5rem;
}

p {
  line-height: 1.8;
  margin-bottom: 1rem;
  font-size: 1.1em;
}

strong {
  color: var(--secondary-text);
}

.contact-info p {
  margin-bottom: 1rem; /* Closer spacing for contact lines */
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .about-page {
    padding: 2rem 1.5rem;
  }

  .about-content {
    padding: 2rem;
  }

  h1 {
    font-size: 2em;
  }

  h2 {
    font-size: 1.5em;
  }

  p {
    font-size: 1em;
  }
}
</style>
