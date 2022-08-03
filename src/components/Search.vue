<template>
  <div>
    Search for <input v-model="searchInput" />
    <div>
      <p>Loading: {{  loading }}</p>
      <p>Error: {{ error }}</p>
      <p>Number of events: {{ results }}</p>
    </div>
  </div>
</template>

<script>
  import { ref, watch } from 'vue';
  import eventApi from "@/api/event.js";
  import usePromise from "@/composables/use-promise"
  export default {
    setup() {
      const searchInput = ref("");
      const getEvents = usePromise(search => eventApi.getEventCount(search.value));

      watch(searchInput, () => {
        if (searchInput.value !== "") {
          getEvents.createPromise(searchInput);
        } else {
          getEvents.results.value = null;
        }
        return { searchInput, getEvents}
      })
      // const searchInput = ref("");
      // const results = ref(null);
      // const loading = ref(null);
      // const error = ref(null);

      // async function loadData(search) {
      //   loading.value = true;
      //   error.value = null;
      //   results.value = null;
      //   try {
      //     results.value = await eventApi.getEventCount(search.value);
      //   } catch(err) {
      //     error.value = err;
      //   } finally {
      //     loading.value = false;
      //   }
      // }
      // watch(searchInput, () => {
      //   if (searchInput.value !== "") {
      //     loadData(searchInput);
      //   } else {
      //     results.value = null;
      //   }
      // })

      // return { searchInput, results, loading, error };
    }
  }
</script>