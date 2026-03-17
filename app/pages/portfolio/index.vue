<script setup>
const { data: projects } = await useFetch('/data/projects.json')
</script>

<template>
  <main v-if="projects">
    <div class="header">
      <h1 class="tp-1">Mes projets perso</h1>
    </div>
    <PortfolioBox v-for="project in projects" :key="project.title" :data="project" />
  </main>
  <ContactMe />
</template>

<style scoped>
main {
  max-width: var(--mx-width);
  margin-inline: auto;
  overflow-x: hidden;
}

.header {
  background-image: url('/images/homepage/desktop/portfolio-header.jpg');
  background-repeat: no-repeat;
  height: 350px;
  background-size: cover;
  background-position: center;
  margin-bottom: var(--sp-500);
  position: relative;
  isolation: isolate;
}

h1 {
  text-align: center;
  text-transform: uppercase;
  color: var(--teal-900);
  padding-block: var(--sp-200);
  display: block;
  font-family: 'Public Sans', sans-serif;
  background-color: var(--neutral-0);
  position: absolute;
  left: 0;
  bottom: 0;
  line-height: 115%;
  z-index: 10;
  padding-right: var(--sp-100);
}

.header::after {
  content: '';
  position: absolute;
  z-index: 2;
  background-color: rgba(0, 0, 0, 0.1);
  inset: 0;
}

@media (max-width: 1472px) {
  main {
    margin-inline: var(--sp-200);
  }
}

@media (max-width: 768px) {
  main {
    margin-inline: var(--sp-100);
  }
  .header::after {
    background-color: rgba(0, 0, 0, 0.2);
  }
}
</style>
