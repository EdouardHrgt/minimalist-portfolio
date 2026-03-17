<template>
  <main>
    <section class="presentation">
      <div class="presentation-txt">
        <h1 class="tp-1">Bonjour, je suis Édouard, créateur de sites web à votre image.</h1>
        <Button label="Voir mon CV" :primary="true" file="/cv.pdf" />
      </div>
    </section>

    <section class="about-me">
      <div class="photo">
        <img
          src="/images/homepage/desktop/Photo-Edouard.jpg"
          alt="Photography Of Edouard Herrengt, Web Developper" />
      </div>

      <div class="about-txt">
        <h2 class="tp-2">Qui suis-je ?</h2>
        <p class="tp-4">
          Je suis un développeur front-end à la recherche d’un nouveau poste dans une entreprise
          stimulante. Je me concentre sur l’écriture d’un HTML accessible, l’utilisation de
          pratiques CSS modernes et la rédaction d’un JavaScript propre et maintenable. Lorsque
          j’écris du code JavaScript, j’utilise principalement Vue.js / Nuxt, mais je peux m’adapter
          aux outils nécessaires. Je suis basé à Lille, en France, mais je suis tout à fait à l’aise
          avec le travail à distance et j’ai de l’expérience dans des équipes en remote.<br />Quand
          je ne code pas, vous me trouverez à faire de la musique ou des sorties en vélo. N’hésitez
          pas à jeter un œil à mon travail.
        </p>
        <NuxtLink to="/portfolio"><Button label="Voir mon Portfolio" :primary="false" /></NuxtLink>
      </div>
    </section>
    <ContactMe />
  </main>
</template>

<script setup></script>

<style scoped>
.presentation,
.about-me {
  max-width: var(--mx-width);
  margin-inline: auto;
  margin-bottom: var(--sections-space);
}

/* PRESENTATION SECTION */
.presentation {
  background-image: url(/images/homepage/desktop/image-homepage-hero@2x.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: end;
}

.presentation-txt {
  background-color: var(--neutral-0);
  max-width: 475px;
  padding-top: var(--sp-250);
}

h1 {
  display: block;
  margin-bottom: var(--sp-250);
}

/* ABOUT ME SECTION */
.about-me {
  gap: calc(var(--sp-500) * 2);
  display: flex;
}

.photo {
  width: 540px;
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
    background-image: url(/images/homepage/tablet/image-homepage-hero@2x.jpg);
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
  .presentation,
  .about-me,
  .contact {
    margin-inline: var(--sp-100);
  }
  .presentation {
    background-image: url(/images/homepage/mobile/image-homepage-hero@2x.jpg);
    background-position: center;
    margin-bottom: var(--sp-200);
  }
  .presentation-txt {
    max-width: 100%;
    width: 100%;
    padding-top: var(--sp-150);
    text-align: center;
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
