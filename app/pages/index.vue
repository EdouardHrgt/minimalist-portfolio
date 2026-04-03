<template>
  <main>
    <section class="presentation">
      <div class="presentation-txt">
        <h1 class="tp-1">
          <span>Bonjour !</span>
          je suis Édouard, créateur de sites web à votre image.
        </h1>
        <Button label="Voir mon CV" :primary="true" file="/cv.pdf" />
      </div>
    </section>

    <section class="about-me">
      <picture class="photo">
        <source srcset="/images/homepage/mobile/profil.jpg" media="(max-width: 768px)" />
        <img
          src="/images/homepage/desktop/profil.webp"
          alt="Photography Of Edouard Herrengt, Web Developper" />
      </picture>

      <div class="about-txt">
        <h2 class="tp-2">Qui suis-je ?</h2>
        <p class="tp-4">
          <strong>Développeur web</strong> spécialisé Frontend, je combine expertise technique et
          compétences en gestion de projet.
          <br />
          Mon parcours d’<strong>entrepreneur</strong> m’a permis de développer une forte
          polyvalence, me permettant d’intervenir aussi bien sur le développement que sur la
          coordination des équipes.
          <br />
          Organisé et rigoureux, j’évolue efficacement dans des environnements collaboratifs mêlant
          profils techniques et créatifs. Habitué aux <strong>méthodes Agile</strong> orientées
          feature-driven, je veille à livrer des solutions performantes, cohérentes et alignées avec
          les objectifs métiers.
        </p>
        <Button label="Voir mon Portfolio" :primary="false" to="/portfolio" />
      </div>
    </section>
    <Process />
    <ContactMe />
  </main>
</template>

<script setup>
useSeoMeta({
  title: 'Edouard Herrengt — Développeur Frontend',
  description:
    'Portfolio de Edouard Herrengt, développeur frontend et chef de projet, basé à Lille.',
  ogTitle: 'Edouard Herrengt — Développeur Frontend',
  ogDescription: 'Découvrez mes projets Web',
  ogImage: '/og-image.jpg',
  ogUrl: 'https://edouard-herrengt.com/',
  twitterCard: 'summary_large_image',
})
</script>

<style scoped>
.presentation,
.about-me {
  max-width: var(--mx-width);
  margin-inline: auto;
  margin-bottom: var(--sections-space);
}

/* PRESENTATION SECTION */
.presentation {
  background-image: url(/images/homepage/desktop/hero-homepage.webp);
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: end;
  opacity: 0;
  animation: appear 1s forwards ease;
}

.presentation-txt {
  background-color: var(--neutral-0);
  max-width: 540px;
  padding-top: var(--sp-250);
  padding-left: var(--sp-100);
}

h1 {
  display: block;
  margin-bottom: var(--sp-250);
}

h1 span {
  display: block;
  margin-bottom: 12px;
  font-family: 'Archivo Black', sans-serif;
  color: var(--teal-900);
}

/* ABOUT ME SECTION */
.about-me {
  gap: calc(var(--sp-500) * 2);
  display: flex;
  background-image: url('/images/homepage/desktop/pattern-rings.svg');
  background-position: right center;
  background-repeat: no-repeat;
}

.photo {
  width: 540px;
  position: relative;
  isolation: isolate;
}

.photo img {
  image-rendering: crisp-edges;
}

.about-txt {
  max-width: 400px;
  padding-block: var(--sp-200);
  border-top: 1px solid var(--slate-300);
  border-bottom: 1px solid var(--slate-300);
}

.about-txt p {
  margin-block: var(--sp-200);
}

.about-txt p strong {
  color: var(--blue-950);
}

@media (max-width: 1472px) {
  .presentation,
  .about-me,
  .contact {
    margin-inline: var(--sp-200);
  }
}

@media (max-width: 1150px) {
  .about-me {
    gap: var(--sp-500);
    background-image: none;
  }
  .contact {
    gap: var(--sp-100);
  }
  .contact-line {
    max-width: 300px;
  }
}

@media (max-width: 1024px) {
  .presentation {
    background-image: url(/images/homepage/tablet/hero-homepage.webp);
  }
  .contact-line {
    max-width: unset;
    width: 50%;
  }
  .about-me {
    gap: var(--sp-400);
  }
  .photo {
    width: 100%;
  }
}

@media (max-width: 768px) {
  .photo {
    width: 90%;
  }
  .presentation,
  .about-me,
  .contact {
    margin-inline: var(--sp-100);
  }
  .presentation {
    background-image: url(/images/homepage/mobile/hero-homepage.webp);
    background-position: center;
    margin-bottom: var(--sp-200);
  }
  .presentation-txt {
    max-width: 100%;
    width: 100%;
    padding-top: var(--sp-150);
    text-align: center;
    padding-left: 0;
    filter: drop-shadow(0px -5px 3px #25252527);
  }
  .presentation-txt button {
    margin-inline: auto;
  }
  .contact,
  .about-me {
    flex-direction: column;
  }
  .contact-line {
    margin-block: var(--sp-100);
  }
  .about-me {
    align-items: center;
  }
  .about-txt {
    padding-top: 0;
    padding-block: var(--sp-200);
  }
  .contact h3 {
    text-align: center;
    max-width: 100%;
  }
  .photo img {
    margin: 0 auto;
  }
}
</style>
