<template>
  <Transition name="overlay">
    <div v-if="isOpen" class="overlay" @click="isOpen = false" />
  </Transition>
  <header class="flex-align container">
    <!-- <img src="/images/logo.jpg" alt="Logo of the Portfolio" /> -->
    <Logo :isDark="true" />
    <nav>
      <ul class="flex-align-justify" :class="{ active: isOpen }">
        <li>
          <NuxtLink to="/" class="tp-7" @click="closeMenu">Accueil</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/portfolio" class="tp-7" @click="closeMenu">Portfolio</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/contact" class="tp-7" @click="closeMenu">Me contacter</NuxtLink>
        </li>
      </ul>
    </nav>
    <div class="menu">
      <img
        src="/images/icons/hamburger.svg"
        alt="open the navigation menu"
        class="open"
        v-if="!isOpen"
        @click="isOpen = true" />
      <img
        src="/images/icons/close.svg"
        alt="close the navigation menu"
        class="close"
        v-if="isOpen"
        @click="isOpen = false" />
    </div>
  </header>
</template>

<script setup>
const isOpen = ref(false)

const closeMenu = () => {
  if (isOpen.value === true) {
    setTimeout(() => {
      isOpen.value = false
    }, '100')
  }
}

watch(isOpen, (val) => {
  document.body.style.overflow = val ? 'hidden' : ''
})
</script>

<style scoped>
header {
  justify-content: space-between;
  padding-block: var(--sp-300);
  position: relative;
}

ul {
  gap: var(--sp-200);
}

li a {
  color: var(--slate-800);
  text-decoration: none;
  text-transform: uppercase;
  transition: color 0.3s ease-out;
  display: block;
}

.menu img {
  cursor: pointer;
}

.menu {
  display: none;
}

.overlay {
  display: none;
}

@media (hover: hover) {
  li a:hover {
    color: var(--teal-400);
  }
}

@media (max-width: 768px) {
  header {
    padding-block: var(--sp-150);
  }
  .menu {
    display: block;
  }

  ul {
    --top-distance: 5.8rem;
    background: linear-gradient(180deg, var(--blue-950) 0%, var(--blue-400) 100%);
    position: absolute;
    right: -100rem;
    top: var(--top-distance);
    width: 70%;
    padding-block: var(--sp-500);
    z-index: 1000;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    height: calc(100dvh - 5.8rem);
    padding-left: 0;
    transition: right 0.2s ease-out;
  }

  li a {
    color: var(--neutral-0);
  }

  ul.active {
    right: 0rem;
  }

  .overlay {
    display: block;
    position: fixed;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.4);
    z-index: 999;
  }
}

.overlay-enter-active,
.overlay-leave-active {
  transition: opacity 0.3s ease-out;
}

.overlay-enter-from,
.overlay-leave-to {
  opacity: 0;
}
</style>
