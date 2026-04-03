<script setup>
const process = ref([
  'analyse des besoins et problématiques',
  'creation de solutions',
  'conception & développement',
  'déploiement, accompagnement & suivi',
])
</script>

<template>
  <section class="animate-on-scroll">
    <h3 class="tp-2">Mon approche projet</h3>
    <ul>
      <li v-for="(p, i) in process" :key="i" class="tp-4">
        <span>{{ i + 1 }}</span
        >{{ p }}
      </li>
    </ul>
  </section>
</template>

<style scoped>
section {
  background-color: var(--slate-800);
  max-width: var(--mx-width);
  margin-inline: auto;
  margin-bottom: var(--sections-space);
  padding-block: 5rem;
  position: relative;
}

section::after {
  --pos: -1.5rem;
  content: '';
  position: absolute;
  background-color: var(--slate-800);
  opacity: 0.1;
  height: 250px;
  width: 100%;
  bottom: var(--pos);
  right: var(--pos);
  z-index: -1;
}

h3 {
  background-color: var(--neutral-0);
  color: var(--slate-800);
  width: max-content;
  padding: var(--sp-50) var(--sp-250);
  position: absolute;
  top: -2rem;
  left: 50%;
  transform: translateX(-50%);
}

ul {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--sp-250);
  padding: 0;
  padding-inline: var(--sp-100);
}

ul li {
  color: var(--neutral-0);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: relative;
  isolation: isolate;
  list-style: none;
}

ul li:nth-child(2) {
  margin-top: var(--sp-200);
}

ul li:nth-child(3) {
  margin-top: calc(var(--sp-200) * 2);
}

ul li:nth-child(4) {
  margin-top: var(--sp-200);
}

li span {
  color: var(--teal-900);
  font-family: 'Archivo Black', sans-serif;
  font-size: 6rem;
  display: block;
  position: absolute;
  z-index: -1;
}

@media (max-width: 1472px) {
  section {
    margin-inline: var(--sp-200);
  }
}

@media (max-width: 1150px) {
  section {
    gap: var(--sp-100);
  }
  ul {
    gap: var(--sp-200);
  }
}

@media (max-width: 768px) {
  section {
    margin-inline: var(--sp-100);
    margin-bottom: 4rem;
  }
  ul {
    flex-direction: column;
    gap: var(--sp-350);
  }
  section::after {
    display: none;
  }
  h3 {
    padding: var(--sp-50);
    font-size: var(--fs-3);
  }
  li {
    text-transform: uppercase;
  }
  li span {
    color: var(--teal-900);
    font-family: 'Archivo Black', sans-serif;
    font-size: 5rem;
    display: block;
    position: absolute;
    z-index: -1;
    top: -0.5rem;
  }
  ul li:nth-child(2),
  ul li:nth-child(3),
  ul li:nth-child(4) {
    margin-top: 0;
  }
}
</style>
