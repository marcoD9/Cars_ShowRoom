<template>
  <div class="car-details-view">
    <h1>Car Information</h1>
    <SingleCarDetails :id="id" />
    <!-- Pass the id prop to CarDetails from the route -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SingleCarDetails from '@/components/SingleCarDetails.vue'

export default defineComponent({
  name: 'CarDetailsView',
  props: {
    // CarDetailsView expects an 'id' prop to fetch car details
    id: {
      type: String,
      required: true,
    },
  },
  components: {
    SingleCarDetails,
  },
})
</script>

<style scoped>
.car-details-view {
  max-width: 100%;
  margin: 2rem auto;
  padding: 1.5rem;
  background-color: #fff;
  border-radius: 8px;
  text-align: center;
}

h1 {
  color: var(--tertiary-text);
  margin-bottom: 1.5rem;
  font-size: 2.2em;
}
</style>
