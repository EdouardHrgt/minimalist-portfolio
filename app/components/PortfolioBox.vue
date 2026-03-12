<template>
  <article v-if="data" :class="{ regular: data.regular }">
    <div class="mockups">
      <img :src="data.preview" :alt="data.title" />
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
  align-items: start;
  margin-bottom: 6rem;
}

.mockups {
  max-width: 650px;
  overflow: hidden;
}

.mockups img {
  display: block;
  border: 1px solid var(--neutral-700);
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

@media (max-width: 1120px) {
  .mockups {
    max-width: 530px;
  }
}

@media (max-width: 1024px) {
  .mockups {
    max-width: 339px;
  }
  .description {
    max-width: 285px;
  }
}

@media (max-width: 768px) {
  .mockups {
    max-width: 90%;
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
      border-top: none;
  }

  .description p {
    margin-block: var(--sp-150);
    max-width: 90%;
  }
}
</style>
