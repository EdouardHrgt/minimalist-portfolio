<script setup>
const { data: projects } = await useFetch('/data/projects.json')
</script>

<template>
  <main v-if="projects">
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

@media (hover: hover) {
}
</style>
