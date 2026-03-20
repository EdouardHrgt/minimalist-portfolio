<template>
  <p :class="{ dark: isDark }"><strong>< Dev Ed /></strong></p>
</template>

<script setup>
defineProps({
  isDark: Boolean,
})
</script>

<style scoped>
p {
  font-size: 16px;
  font-family: 'Archivo Black', sans-serif;
  color: var(--blue-950);
  background-color: var(--neutral-50);
  padding: 10px 1.5rem;
  border-radius: 12px 0 12px 0;
}

.dark {
  background-color: var(--blue-950);
  background: linear-gradient(30deg, var(--blue-950) 0%, var(--blue-400) 100%);
  color: var(--neutral-0);
}

@media (max-width: 768px) {
  p {
    display: none;
  }
  .dark {
    display: block;
  }
}
</style>
