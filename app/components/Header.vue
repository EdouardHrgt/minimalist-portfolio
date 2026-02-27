<template>
  <header class="flex-align container">
    <img src="/images/logo.svg" alt="Logo of the Portfolio" class="logo" />
    <nav>
      <ul class="flex-align-justify" :class="{ active: isOpen }">
        <li>
          <a href="" class="tp-7">home</a>
        </li>
        <li>
          <a href="" class="tp-7">portfolio</a>
        </li>
        <li>
          <a href="" class="tp-7">contact me</a>
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

@media (hover: hover) {
  li a:hover {
    color: var(--teal-400);
  }
}

@media (max-width: 1440px) {
}
@media (max-width: 1024px) {
}
@media (max-width: 768px) {
  .menu {
    display: block;
  }

  ul {
    background-color: var(--slate-800);
    position: absolute;
    right: -100rem;
    top: 7.99rem;
    width: 60%;
    padding-block: var(--sp-400);
    z-index: 1000;
    flex-direction: column;
    align-items: center;
    padding-left: 0;
    transition: right 0.3s ease-out;
  }

  li a {
    color: var(--neutral-0);
  }

  ul.active {
    right: 2rem;
  }
}
</style>
