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
  background-color: var(--neutral-100);
  padding-block: var(--sp-200);
  position: relative;
  isolation: isolate;
}

h1::after {
  content: '';
  height: 3px;
  background-color: var(--teal-900);
  width: 12%;
  position: absolute;
  z-index: 10;
  bottom: 0;
  right: 0;
}

h1::before {
  content: '';
  height: 3px;
  background-color: var(--teal-900);
  width: 12%;
  position: absolute;
  z-index: 10;
  top: 0;
  left: 0;
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
