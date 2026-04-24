<template>
  <div class="container page-wrap text-start">
    <h1 class="mb-3">GET Employee Data</h1>

    <section class="card info-card mb-3">
      <div class="card-body">
        <h2 class="h5 mb-2">Why Axios + Mock API</h2>
        <p class="mb-3">
          Axios fetches employee records quickly, and Mock API provides live
          sample data for testing table rendering and refresh.
        </p>
        <pre
          class="mb-0"
        ><code>axios.get("https://example.mockapi.io/api/employee")</code></pre>
      </div>
    </section>

    <GetComp />
  </div>
</template>

<script>
import GetComp from "@/components/GetComp.vue";

export default {
  name: "GetData",
  components: {
    GetComp,
  },
};
</script>
