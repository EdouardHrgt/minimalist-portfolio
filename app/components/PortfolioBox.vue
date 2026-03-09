<template>
  <article v-if="data" :class="{ regular: data.regular }">
    <div class="mockups">
      <picture>
        <source :srcset="data.images.mobile" media="(max-width: 768px)" />
        <source :srcset="data.images.tablet" media="(max-width: 1024px)" />
        <img :src="data.images.pc" :alt="data.title" />
      </picture>
    </div>
    <div class="description">
      <h2 class="tp-2">{{ data.title }}</h2>
      <p class="tp-4">
        {{ data.description }}
      </p>
      <Button label="view project" :primary="false" @click="navigateToProject" />
    </div>
  </article>
  <span v-else class="tp-5">An error occured while loading projects...</span>
</template>

<script setup>
const { data } = defineProps({
  data: Object,
})

const navigateToProject = () => {
  navigateTo(`/portfolio/${data.slug}`)
}
</script>

<style scoped>
.regular {
  flex-direction: row-reverse;
}

article {
  display: flex;
  align-items: stretch;
  margin-bottom: var(--sp-500);
}

.mockups {
  max-width: 540px;
  max-height: 500px;
  overflow: hidden;
}

.mockups img {
  display: block;
}

.description {
  max-width: 350px;
  border-top: 1px solid var(--slate-300);
  border-bottom: 1px solid var(--slate-300);
  padding-block: var(--sp-200);
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-inline: auto;
}

.description p {
  margin-block: var(--sp-200);
}

@media (max-width: 1024px) {
  .mockups {
    max-width: 339px;
    max-height: 314px;
  }
  .description {
    max-width: 285px;
  }
}

@media (max-width: 768px) {
  .mockups {
    max-width: 331px;
    max-height: 308px;
    margin-inline: auto;
  }

  article,
  .regular {
    flex-direction: column;
    align-items: start;
    margin-bottom: var(--sp-400);
    gap: var(--sp-200);
  }

  .description {
    display: block;
    max-width: 100%;
  }

  .description p {
    margin-block: var(--sp-150);
    max-width: 90%;
  }
}
</style>
