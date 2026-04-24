<template>
  <div class="container page-wrap text-start">
    <h1 class="mb-3">PUT Update Employee Data</h1>

    <section class="card info-card mb-3">
      <div class="card-body">
      <h2 class="h5 mb-2">Why Axios + Mock API</h2>
      <p class="mb-3">
        Axios updates selected employee records through HTTP PUT, and Mock API
        lets us test editing flow safely with instant response data.
      </p>
      <pre class="mb-0"><code>axios.put("https://example.mockapi.io/api/employee/:id", updatedData)</code></pre>
      </div>
    </section>

    <PutComp />
  </div>
</template>

<script>
import PutComp from "@/components/PutComp.vue";

export default {
  name: "PutData",
  components: {
    PutComp,
  },
};
</script>
