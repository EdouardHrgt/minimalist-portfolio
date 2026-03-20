<template>
  <div>
    <Header />
    <NuxtRouteAnnouncer />
    <div class="page-wrapper">
      <NuxtPage />
    </div>
    <Footer />
  </div>
</template>

<script setup>
import { onMounted, nextTick } from 'vue'

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target) // optionnel (une seule fois)
        }
      })
    },
    {
      threshold: 0.1,
    },
  )

  const observeElements = () => {
    const elements = document.querySelectorAll('.animate-on-scroll')
    elements.forEach((el) => observer.observe(el))
  }

  // Observer initial
  nextTick(() => {
    observeElements()
  })

  // Observer les changements du DOM (navigation Nuxt)
  const mutationObserver = new MutationObserver(() => {
    observeElements()
  })

  mutationObserver.observe(document.body, {
    childList: true,
    subtree: true,
  })
})
</script>

<style>

.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(0.75rem);
}

.animate-on-scroll {
  opacity: 0;
  transform: translateY(20px);
  transition: all 1.5s ease;
}

.animate-on-scroll.is-visible {
  opacity: 1;
  transform: translateY(0);
}
</style>
