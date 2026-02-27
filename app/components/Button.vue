<template>
  <button v-if="label">{{ label }}</button>
  <button v-else>Default Btn</button>
</template>

<script setup>
defineProps({
  label: String,
})
</script>

<style scoped>
button {
  padding-inline: var(--sp-100);
  padding-block: var(--sp-25);
  background-color: var(--teal-400);
  transition: background-color 1s ease-out;
}

@media (hover: hover) {
  button:hover {
    background-color: red;
  }
}

@media (max-width: 1440px) {
}
@media (max-width: 1024px) {
}
@media (max-width: 768px) {
}
</style>
