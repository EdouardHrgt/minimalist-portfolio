<script setup>
const route = useRoute()
const router = useRouter()
const heroLoaded = ref(false)

const { data: projects } = await useFetch('/data/projects.json')

const currentIndex = computed(() =>
  projects.value?.findIndex((p) => p.slug === route.params.project),
)

const project = computed(() => projects.value?.[currentIndex.value])

const prevProject = computed(() => {
  if (!projects.value || currentIndex.value <= 0) return null
  return projects.value[currentIndex.value - 1]
})

const nextProject = computed(() => {
  if (!projects.value || currentIndex.value >= projects.value.length - 1) return null
  return projects.value[currentIndex.value + 1]
})

const isVisible = ref(false)
const slideDirection = ref('')

const navigateTo = async (slug, direction) => {
  heroLoaded.value = false
  window.scrollTo({ top: 0, behavior: 'instant' })
  slideDirection.value = direction
  isVisible.value = false
  await new Promise((resolve) => setTimeout(resolve, 300))
  await router.push(`/portfolio/${slug}`)
  isVisible.value = true
}

const goTo = (url) => {
  window.open(url, '_blank').focus()
}

onMounted(() => {
  isVisible.value = true
})

// SEO
const fullUrl = computed(() => `https://edouard-herrengt.com/portfolio/${project.value?.slug}`)
const heroImage = computed(() => `https://edouard-herrengt.com${project.value?.detail?.hero}`)

useSeoMeta({
  title: () => `${project.value?.title} — Edouard Herrengt`,
  description: () => project.value?.summary,
  ogTitle: () => `${project.value?.title} — Edouard Herrengt`,
  ogDescription: () => project.value?.summary,
  ogImage: () => heroImage.value,
  ogUrl: () => fullUrl.value,
  ogType: 'website',
  twitterCard: 'summary_large_image',
  twitterImage: () => heroImage.value,
})

useHead({
  link: [{ rel: 'canonical', href: () => fullUrl.value }],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: () =>
        JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'CreativeWork',
          name: project.value?.title,
          description: project.value?.summary,
          url: project.value?.url,
          image: heroImage.value,
          keywords: project.value?.tags?.join(', '),
          codeRepository: project.value?.git,
          author: {
            '@type': 'Person',
            name: 'Edouard Herrengt',
            url: 'https://edouard-herrengt.com',
          },
        }),
    },
  ],
})
</script>

<template>
  <Transition :name="slideDirection ? `slide-${slideDirection}` : 'fade'">
    <main v-if="project && isVisible" :key="project.slug" class="container">
      <!-- MAIN PROJECT'S IMAGE (HERO) -->
      <section class="project-header">
        <div v-if="!heroLoaded" class="hero-skeleton" />
        <img
          :src="project.detail.hero"
          :alt="project.title"
          :class="{ 'hero-hidden': !heroLoaded }"
          @load="heroLoaded = true" />
        <!-- Canva: 1440 x 640 || Image: 1100 x 550 -->
      </section>

      <!-- DETAIL OF THE PROJECT (2 COLUMNS) -->
      <section class="project-detail">
        <div class="left-col border-block | animate-on-scroll">
          <h1 class="tp-2">{{ project.title }}</h1>
          <p class="tp-5">{{ project.summary }}</p>

          <ul class="tags">
            <li class="tp-6-bold" v-for="tag in project.tags" :key="tag" v-if="project.tags">
              {{ tag }}
            </li>
          </ul>
          <div class="btns-wrapper flex-align">
            <Button label="Voir le site" @click="goTo(project.url)" />
            <Button label="Voir le Git" :primary="true" @click="goTo(project.git)" />
          </div>
        </div>
        <div class="right-col">
          <div class="features | animate-on-scroll" v-if="project.features">
            <h2 class="tp-3">Fonctionnalités principales :</h2>
            <ul v-if="project.features">
              <li class="tp-5" v-for="(feat, i) in project.features" :key="i">{{ feat }}</li>
            </ul>
          </div>
          <h2 class="tp-3">Aperçus statiques :</h2>
          <div
            v-if="project.detail"
            v-for="image in project.detail.previews"
            class="project-preview | animate-on-scroll">
            <img :src="image" :alt="project.title" />
            <!-- IMAGES: 750 x 370-->
          </div>
        </div>
      </section>

      <!-- CAROUSEL -->
      <section class="carousel border-block">
        <span class="vertical-line"></span>

        <div
          class="previous"
          :class="{ disabled: !prevProject }"
          @click="prevProject && navigateTo(prevProject.slug, 'right')">
          <svg xmlns="http://www.w3.org/2000/svg" width="10" height="16">
            <path fill="none" stroke="#33323D" d="M9 0L1 8l8 8" />
          </svg>
          <div class="carousel-txt">
            <h3 class="tp-3">{{ prevProject?.title ?? '—' }}</h3>
            <p class="tp-4 carousel-txt-p">Projet précédent</p>
          </div>
        </div>

        <div
          class="next"
          :class="{ disabled: !nextProject }"
          @click="nextProject && navigateTo(nextProject.slug, 'left')">
          <div class="carousel-txt">
            <h3 class="tp-3">{{ nextProject?.title ?? '—' }}</h3>
            <p class="tp-4 carousel-txt-p">Projet suivant</p>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" width="10" height="16">
            <path fill="none" stroke="#33323D" d="M1 0l8 8-8 8" />
          </svg>
        </div>
      </section>
    </main>
  </Transition>
  <ContactMe />
</template>

<style scoped>
* {
  color: var(--slate-800);
}

/* HERO BANNER IMAGE */
.project-header {
  overflow: hidden;
  margin-bottom: var(--sections-space);
}

.project-header img {
  display: block;
  width: 100%;
}

.hero-skeleton {
  width: 100%;
  aspect-ratio: 1440 / 640;
  background: linear-gradient(
    90deg,
    var(--neutral-700) 25%,
    var(--slate-300) 50%,
    var(--neutral-700) 75%
  );
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
  border-radius: 4px;
}

.hero-hidden {
  opacity: 0;
  position: absolute;
}

@keyframes shimmer {
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
}

/* DETAIL SECTION (2 columns) */
.project-detail {
  margin-bottom: var(--sp-300);
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: var(--sp-200);
}

.left-col {
  max-width: 350px;
  padding-block: var(--sp-200);
}

.left-col p {
  margin-block: var(--sp-150);
}

.tags {
  gap: var(--sp-50);
  display: flex;
  padding: 0;
  margin: 0;
  margin-bottom: var(--sp-150);
  max-width: 350px;
  flex-wrap: wrap;
}

.tags li {
  color: var(--teal-400);
  background-color: var(--teal-100);
  padding: 0px 16px;
  border-radius: 16px;
}

.btns-wrapper {
  gap: var(--sp-100);
}

.right-col {
  max-width: 750px;
}

.right-col ul {
  margin-block: var(--sp-150);
  padding: 0;
  padding-left: 1.35rem;
}

.right-col ul li {
  list-style-type: disc;
  color: var(--slate-800);
  font-weight: 500;
}

.right-col ul li:nth-child(2n) {
  color: var(--slate-700);
}

.project-preview {
  width: 100%;
  overflow-x: hidden;
}

.project-preview img {
  margin-top: var(--sp-200);
  border: 1px solid var(--neutral-700);
}

/* PREV / NEXT BUTTONS */
.carousel {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-block: var(--sp-150);
  margin-bottom: var(--sp-500);
  position: relative;
}

.carousel-txt-p {
  color: var(--slate-300);
}

.carousel h3 {
  color: var(--teal-900);
}

.carousel h3,
.carousel-txt-p {
  transition: all 0.3s ease;
}

.carousel > div {
  display: flex;
  align-items: center;
  gap: var(--sp-150);
  cursor: pointer;
}

.carousel-txt {
  display: block;
}

.next {
  text-align: end;
}

.vertical-line {
  width: 1px;
  background-color: var(--slate-300);
  height: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
}

@media (max-width: 1024px) {
  .project-detail {
    flex-direction: column;
    gap: var(--sp-200);
  }
  .left-col,
  .right-col {
    max-width: 100%;
  }
}

@media (max-width: 768px) {
  .project-header {
    margin-bottom: var(--sp-300);
  }
  .carousel {
    gap: 0.5rem;
  }
  .carousel-txt h3 {
    font-size: 18px;
  }
  .carousel-txt-p {
    font-size: 16px;
  }
  .carousel > div {
    gap: var(--sp-100);
    text-align: center;
    width: 100%;
  }
  .previous {
    flex-direction: column;
  }
  .next {
    flex-direction: column-reverse;
  }
}

@media (hover: hover) {
  .carousel > div:hover h3 {
    color: var(--teal-400);
  }
  .carousel > div:hover .carousel-txt-p {
    color: var(--blue-950);
  }
}

/* Chargement initial : fade simple */
.fade-enter-active {
  --loading-time: 1s;
  transition:
    opacity calc(var(--loading-time) * 1.2) ease,
    transform var(--loading-time) ease;
  transform: translateY(0);
}
.fade-enter-from {
  opacity: 0;
  transform: translateY(5rem);
}

/* Navigation previous / next */
.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  --timer: 1s;
  transition:
    opacity var(--timer) ease,
    transform var(--timer) ease;
}

.slide-left-enter-from {
  opacity: 0;
  transform: translateX(40px);
}
.slide-left-leave-to {
  opacity: 0;
  transform: translateX(-40px);
}

.slide-right-enter-from {
  opacity: 0;
  transform: translateX(-40px);
}
.slide-right-leave-to {
  opacity: 0;
  transform: translateX(40px);
}
</style>
