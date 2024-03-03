<template>
    <section>
        <base-card>
            <header>
                <h2>Requests Received</h2>
            </header>
            <ul v-if="hasRequests">
            <li v-for="request in receivedRequests" :key="request.id">
                <div class="">
                    <a href="">{{ request.userEmail }}</a>
                </div>
                <p>{{ request.message }}</p>
            </li>
            </ul>
            <h3 v-else>You haven't received any requests yet</h3>
        </base-card>
    </section>
</template>

<script>
import BaseCard from '../../components/UI/BaseCard.vue';
export default {
    components: {
        BaseCard,
    },
    computed: {
        receivedRequests() {
           return this.$store.getters['requests/requests'];
        },
        hasRequests() {
            return this.$store.getters['requests/hasRequests'];
        }
    },
    created() {
      this.loadRequests();
    },
    methods: {
      async loadRequests() {
       await this.$store.dispatch('requests/fetchRequests');
      }
    }
};
</script>
<style scoped> 
header {
  text-align: center;
}

ul {
  list-style: none;
  margin: 2rem auto;
  padding: 0;
  max-width: 30rem;
}

h3 {
  text-align: center;
}
li {
  margin: 1rem 0;
  border: 1px solid #ccc;
  padding: 1rem;
}

a {
  color: #3d008d;
  text-decoration: none;
  font-weight: bold;
}

a:hover,
a:active {
  color: #8d007a;
}

p {
  margin: 0.5rem 0 0 0;
}
</style>