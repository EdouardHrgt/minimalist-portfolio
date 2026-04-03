<template>
  <!-- Variante NuxtLink (prop `to`) -->
  <NuxtLink v-if="to && primary" :to="to" class="btn-primary tp-7 flex-align">
    <div class="btn-icon">
      <img src="/images/icons/down-arrows.svg" alt="An icon of arrows pointing down side" />
    </div>
    <p class="tp-7">{{ label }}</p>
  </NuxtLink>
  <NuxtLink v-else-if="to && !primary" :to="to" class="btn-secondary tp-7">
    {{ label }}
  </NuxtLink>

  <!-- Variante button (comportement existant) -->
  <button v-else-if="label && primary" class="btn-primary tp-7 flex-align" @click="handleClick">
    <div class="btn-icon">
      <img src="/images/icons/down-arrows.svg" alt="An icon of arrows pointing down side" />
    </div>
    <p class="tp-7">{{ label }}</p>
  </button>
  <button v-else-if="label && !primary" class="btn-secondary tp-7" @click="handleClick">
    {{ label }}
  </button>
  <button v-else class="btn-default tp-7" @click="handleClick">See Git Repository</button>
</template>

<script setup>
const props = defineProps({
  label: String,
  primary: Boolean,
  goTo: String,
  file: String,
  to: String, // 👈 route interne → rend un NuxtLink
})

function handleClick() {
  if (props.file) {
    window.open(props.file, '_blank')
  } else if (props.goTo) {
    window.location.href = props.goTo
  }
}
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

.btn-default {
  border: none;
  background-color: none;
  color: var(--teal-400);
  font-style: italic;
  text-transform: capitalize;
}

.btn-icon {
  height: inherit;
  width: 48px;
  display: grid;
  place-items: center;
  transition: background-color 0.4s;
}

a {
  height: 48px;
  width: 200px;
  transition: background-color 0.4s;
  text-transform: uppercase;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
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
</style>
