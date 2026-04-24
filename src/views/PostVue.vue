<template>
  <div class="container page-wrap text-start">
    <h1 class="mb-3">POST Employee Data</h1>

    <section class="card info-card mb-3">
      <div class="card-body">
      <h2 class="h5 mb-2">Why Axios + Mock API</h2>
      <p class="mb-3">
        Axios sends HTTP requests from Vue, and Mock API gives a test backend so
        we can practice real POST flow without building a server.
      </p>
      <pre class="mb-0"><code>axios.post("https://example.mockapi.io/api/employee", payload)</code></pre>
      </div>
    </section>

    <PostComp />
  </div>
</template>

<script>
import PostComp from "@/components/PostComp.vue";

export default {
  name: "PostView",
  components: {
    PostComp,
  },
};
</script>
