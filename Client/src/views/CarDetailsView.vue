<template>
  <div class="car-details-view">
    <h1>Car Information</h1>
    <SingleCarDetails :id="id" />
    <!-- Pass the id prop to CarDetails from the route -->
  </div>
</template>

<script>
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
  setup(props) {
    return {
      id: props.id, // Expose the id to the template
    }
  },
})
</script>

<style scoped>
.car-details-view {
  max-width: 80%;
  margin: 2rem auto;
  padding: 1.5rem;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
}

h1 {
  color: #2c3e50;
  margin-bottom: 1.5rem;
  font-size: 2.2em;
}
</style>
