<template>
  <section>
    <base-card>
      <h2>Register as a Coach</h2>
      <coach-form></coach-form>
    </base-card>
  </section>
</template>
<script>
import CoachForm from '../../components/coaches/CoachForm.vue';
import BaseCard from '../../components/UI/BaseCard.vue';
export default {
  components: {
    CoachForm,
    BaseCard,
  },
};
</script>
