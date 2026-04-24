<template>
  <section class="container project-overview">
    <h1>Mock API Employee Manager</h1>
    <p class="lead-text">
      This website is a CRUD demo built with Vue, Axios, and a mock REST API. It
      shows how a frontend app can create, read, update, and delete employee
      records in real time.
    </p>

    <div class="overview-grid">
      <article class="overview-card">
        <h2>What This Website Does</h2>
        <ul>
          <li>Adds new employee details using a POST request.</li>
          <li>Fetches and displays all employees using a GET request.</li>
          <li>Edits existing employee information using a PUT request.</li>
          <li>Removes employee records using a DELETE request.</li>
        </ul>
      </article>

      <article class="overview-card">
        <h2>How It Works</h2>
        <ul>
          <li>
            Each page is routed through Vue Router from the top navigation bar.
          </li>
          <li>
            Every operation uses Axios to communicate with MockAPI endpoints.
          </li>
          <li>
            Data is stored in component state and rendered instantly in tables.
          </li>
          <li>
            After updates or deletes, the app refreshes API data to keep UI
            synced.
          </li>
        </ul>
      </article>

      <article class="overview-card full-width">
        <h2>Technical Flow</h2>
        <p>
          The app starts from Vue entry point, loads global styles, then mounts
          the router and Bootstrap theme. Users navigate between separate views
          for each API action. Each view calls a dedicated component where Axios
          methods run, and the returned JSON response is displayed in a
          formatted table.
        </p>
      </article>
    </div>
  </section>
</template>

<script>
export default {
  name: "HomeVue",
};
</script>

<style scoped>
.project-overview {
  text-align: left;
}

.lead-text {
  margin-top: 0.75rem;
  margin-bottom: 1.25rem;
  max-width: 70ch;
}

.overview-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;
}

.overview-card {
  background: rgba(6, 19, 37, 0.45);
  border: 1px solid rgba(0, 209, 255, 0.18);
  border-radius: 12px;
  padding: 1rem;
}

.overview-card h2 {
  margin-bottom: 0.7rem;
  font-size: 1.15rem;
}

.overview-card ul {
  margin: 0;
  padding-left: 1.2rem;
}

.overview-card li {
  margin-bottom: 0.45rem;
}

.full-width {
  grid-column: 1 / -1;
}

@media (max-width: 768px) {
  .overview-grid {
    grid-template-columns: 1fr;
  }

  .full-width {
    grid-column: auto;
  }
}
</style>
