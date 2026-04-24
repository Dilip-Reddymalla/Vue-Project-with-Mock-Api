<template>
  <div class="container page-wrap">
    <h1>GET Employee Data</h1>

    <section class="info-card">
      <h2>Why Axios + Mock API</h2>
      <p>
        Axios fetches employee records quickly, and Mock API provides live
        sample data for testing table rendering and refresh.
      </p>
      <pre><code>axios.get("https://example.mockapi.io/api/employee")</code></pre>
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

<style scoped>
.page-wrap {
  text-align: left;
}

.info-card {
  background: rgba(6, 19, 37, 0.45);
  border: 1px solid rgba(0, 209, 255, 0.18);
  border-radius: 12px;
  padding: 1rem;
  margin-bottom: 1rem;
}

.info-card h2 {
  font-size: 1.15rem;
  margin-bottom: 0.65rem;
}

.info-card p {
  margin-bottom: 0.7rem;
}

pre {
  margin: 0;
  background: rgba(11, 16, 32, 0.9);
  border: 1px solid rgba(159, 176, 208, 0.28);
  border-radius: 10px;
  padding: 0.9rem;
  overflow-x: auto;
}

code {
  color: #f8fafc;
  font-size: 0.9rem;
}
</style>
