<template>
  <section class="contact">
    <h3 class="tp-2">Interested in doing a project together?</h3>
    <span class="contact-line"></span>

    <NuxtLink to="/contact"
      ><Button label="contact me" :primary="false" @click="toContact"
    /></NuxtLink>
  </section>
</template>

<script setup>
const toContact = () => {}
</script>

<style scoped>
.contact {
  max-width: var(--mx-width);
  margin-inline: auto;
  margin-bottom: var(--sections-space);
}

/* CONTACT ME SECTION */
.contact {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.contact h3 {
  max-width: 350px;
}

.contact-line {
  height: 1px;
  max-width: 535px;
  width: 100%;
  background-color: var(--slate-300);
}

@media (max-width: 1472px) {
  .contact {
    margin-inline: var(--sp-200);
  }
}

@media (max-width: 1150px) {
  .contact {
    gap: var(--sp-100);
  }
  .contact-line {
    max-width: 300px;
  }
}

@media (max-width: 1024px) {
  .contact-line {
    max-width: unset;
    width: 50%;
  }
}

@media (max-width: 768px) {
  .contact {
    margin-inline: var(--sp-100);
  }

  .contact {
    flex-direction: column;
  }

  .contact-line {
    margin-block: var(--sp-100);
  }

  .contact h3 {
    text-align: center;
    max-width: 100%;
  }
}
</style>
