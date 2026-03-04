<template>
  <article>
    <div class="picture"></div>
    <div class="description">
      <h2 class="tp-2">My Title</h2>
      <p class="tp-4">
        This project required me to build a fully responsive landing page to the designs provided. I
        used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity,
        such as the testimonial slider.
      </p>
      <Button label="view project" :primary="false" />
    </div>
  </article>
</template>

<script setup>
defineProps({
  project: Object,
  //   project = {title: 'string', text: 'string', right: Boolean}
})
</script>

<style scoped>
@media (max-width: 1440px) {
}
@media (max-width: 1024px) {
}
@media (max-width: 768px) {
}
</style>
