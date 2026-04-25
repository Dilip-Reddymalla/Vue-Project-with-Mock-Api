<template>
  <header class="navbar-wrap">
    <nav class="navbar navbar-expand-md navbar-dark custom-nav">
      <router-link class="navbar-brand brand-title" to="/"
        >Mock API Lab</router-link
      >
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#mainNav"
        aria-controls="mainNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div id="mainNav" class="collapse navbar-collapse">
        <ul class="navbar-nav ms-auto align-items-md-center gap-1">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/Post">Post Data</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/Get">Get Data</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/Put">Update Data</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/Delete">Delete Data</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "NavBarComponent",
};
</script>

<style scoped>
.navbar-wrap {
  position: sticky;
  top: 0;
  z-index: 10;
  padding: 0.75rem 1rem;
}

.custom-nav {
  max-width: 1100px;
  margin: 0 auto;
  border: 1px solid rgba(0, 209, 255, 0.24);
  border-radius: 14px;
  background: rgba(48, 75, 162, 0.872);
  backdrop-filter: blur(8px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.35);
  padding: 0.7rem 1rem;
  overflow: visible;
}

.navbar-collapse {
  background: rgba(45, 110, 125, 0.24);
  border-radius: 0 0 14px 14px;
  margin-top: 0.5rem;
}

.brand-title {
  font-weight: 700;
  letter-spacing: 0.03em;
  color: #f8fafc !important;
}

.nav-link {
  color: #9fb0d0 !important;
  font-weight: 600;
  margin-right: 0.75rem;
  transition: color 0.2s ease;
}

.nav-link:hover {
  color: #ffd166 !important;
}

.router-link-exact-active.nav-link {
  color: #00d1ff !important;
}

.navbar-toggler {
  position: relative;
  z-index: 15;
  pointer-events: auto !important;
  cursor: pointer;
  border: none;
  padding: 0.25rem 0.75rem;
}

.navbar-toggler:focus {
  box-shadow: none;
  outline: 1px solid rgba(0, 209, 255, 0.5);
}

@media (max-width: 767px) {
  .nav-link {
    margin-right: 0;
    padding: 0.55rem 0;
  }

  .navbar-toggler {
    display: flex;
    align-items: center;
    justify-content: center;
    pointer-events: auto;
    cursor: pointer;
    z-index: 20;
  }
}
</style>
