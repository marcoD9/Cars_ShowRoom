<template>
  <div class="car-details-view">
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
  border-radius: 8px;
  text-align: center;
  background-color: var(--secondary-color);
}
</style>
