<template>
  <div>
    <Header />
    <NuxtRouteAnnouncer />
    <NuxtPage />
    <Footer />
  </div>
</template>

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
</style>
