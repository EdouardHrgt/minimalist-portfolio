<template>
  <button v-if="label && primary" class="btn-primary tp-7 flex-align">
    <div class="btn-icon">
      <img src="/images/icons/down-arrows.svg" alt="An icon of arrows pointing down side" />
    </div>
    <p class="tp-7">{{ label }}</p>
  </button>
  <button v-else-if="label && !primary" class="btn-secondary tp-7">{{ label }}</button>
  <button v-else class="tp-7">Default Btn</button>
</template>

<script setup>

defineProps({
  label: String,
  primary: Boolean,
})
</script>

<style scoped>
button {
  height: 48px;
  width: 200px;
  transition: background-color 0.4s;
  text-transform: uppercase;
  padding: 0;
}

.btn-primary {
  background-color: var(--blue-950);
  justify-content: space-between;
}

.btn-primary p {
  margin-right: var(--sp-200);
  color: var(--neutral-0);
}

.btn-secondary {
  border: 1px solid var(--slate-800);
  color: var(--slate-800);
}

.btn-icon {
  height: inherit;
  width: 48px;
  display: grid;
  place-items: center;
  transition: background-color 0.4s;
}

img {
}

@media (hover: hover) {
  .btn-primary:hover {
    background-color: var(--teal-400);
  }
  .btn-primary:hover .btn-icon {
    background-color: var(--teal-900);
  }
  .btn-secondary:hover {
    background-color: var(--slate-800);
    color: var(--neutral-0);
  }
}

@media (max-width: 1440px) {
}
@media (max-width: 1024px) {
}
@media (max-width: 768px) {
}
</style>
