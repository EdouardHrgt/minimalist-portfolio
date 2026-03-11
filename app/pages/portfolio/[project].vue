<script setup>
const route = useRoute()
const router = useRouter()

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

const isVisible = ref(true)
const slideDirection = ref('') // 'left' ou 'right'

const navigateTo = async (slug, direction) => {
  slideDirection.value = direction
  isVisible.value = false
  await new Promise((resolve) => setTimeout(resolve, 300))
  await router.push(`/portfolio/${slug}`)
  isVisible.value = true
}

const goTo = (url) => {
  window.open(url, '_blank').focus()
}
</script>

<template>
  <Transition :name="`slide-${slideDirection}`">
    <main v-if="project && isVisible" :key="project.slug" class="container">
      <!-- MAIN PROJECT'S IMAGE (HERO) -->
      <section class="project-header">
        <img :src="project.detail.hero" :alt="project.title" />
        <!-- Canva: 1440 x 640 || Image: 1100 x 550 -->
      </section>

      <!-- DETAIL OF THE PROJECT (2 COLUMNS) -->
      <section class="project-detail">
        <div class="left-col border-block">
          <h1 class="tp-2">{{ project.title }}</h1>
          <p class="tp-5">{{ project.description }}</p>

          <ul class="tags">
            <li class="tp-6-bold" v-for="tag in project.tags" :key="tag" v-if="project.tags">
              {{ tag }}
            </li>
          </ul>
          <div class="btns-wrapper flex-align">
            <Button label="Visit Website" @click="goTo(project.url)" />
            <Button label="see Git Repo" :primary="true" @click="goTo(project.git)" />
          </div>
        </div>
        <div class="right-col">
          <h2 class="tp-3">Project Background</h2>
          <p class="tp-5">
            This project was a front-end challenge from Frontend Mentor. It's a platform that
            enables you to practice building websites to a design and project brief. Each challenge
            includes mobile and desktop designs to show how the website should look at different
            screen sizes. Creating these projects has helped me refine my workflow and solve
            real-world coding problems. I've learned something new with each project, helping me to
            improve and adapt my style.
          </p>
          <h2 class="tp-3">Static Previews</h2>
          <div
            v-if="project.detail"
            v-for="image in project.detail.previews"
            class="project-preview">
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
            <p class="tp-4 carousel-txt-p">Previous Project</p>
          </div>
        </div>

        <div
          class="next"
          :class="{ disabled: !nextProject }"
          @click="nextProject && navigateTo(nextProject.slug, 'left')">
          <div class="carousel-txt">
            <h3 class="tp-3">{{ nextProject?.title ?? '—' }}</h3>
            <p class="tp-4 carousel-txt-p">Next Project</p>
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
/* HERO BANNER IMAGE */
.project-header {
  overflow: hidden;
  margin-bottom: var(--sections-space);
}

.project-header img {
  display: block;
  width: 100%;
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

.right-col p {
  margin-block: var(--sp-150);
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
}

@media (hover: hover) {
  .carousel > div:hover h3 {
    color: var(--teal-400);
  }
  .carousel > div:hover .carousel-txt-p {
    color: var(--blue-950);
  }
}

/* Slide vers la gauche (next) */
.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  transition: all 0.3s ease;
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

.previous,
.next {
  cursor: pointer;
  transition: opacity 0.2s ease;
}

.previous.disabled,
.next.disabled {
  opacity: 0.3;
  cursor: default;
  pointer-events: none;
}
</style>
