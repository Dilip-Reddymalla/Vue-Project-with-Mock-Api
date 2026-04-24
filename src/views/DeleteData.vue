<template>
  <div class="container page-wrap text-start">
    <h1 class="mb-3">DELETE Employee Data</h1>

    <section class="card info-card mb-3">
      <div class="card-body">
      <h2 class="h5 mb-2">Why Axios + Mock API</h2>
      <p class="mb-3">
        Axios removes records using HTTP DELETE, and Mock API gives a safe place
        to test delete-confirmation flow without affecting real data.
      </p>
      <pre class="mb-0"><code>axios.delete("https://example.mockapi.io/api/employee/:id")</code></pre>
      </div>
    </section>

    <DeleteComp />
  </div>
</template>

<script>
import DeleteComp from "@/components/DeleteComp.vue";

export default {
  name: "DeleteData",
  components: {
    DeleteComp,
  },
};
</script>
