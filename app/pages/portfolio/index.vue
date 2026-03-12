<script setup>
const { data: projects } = await useFetch('/data/projects.json')
</script>

<template>
  <main v-if="projects">
    <h1 class="tp-1">My Portfolio</h1>
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

h1 {
  text-align: center;
  margin-bottom: var(--sp-500);
  margin-top: var(--sp-200);
  padding-block: var(--sp-200);
  color: var(--slate-800);
  text-decoration: underline var(--slate-800);
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
}
</style>
