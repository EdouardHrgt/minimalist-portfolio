<template>
  <main>
    <section class="presentation">
      <div class="presentation-txt">
        <h1 class="tp-1">Hey, I’m Edouard and I love building beautiful websites</h1>
        <Button label="See My CV" :primary="true" file="/cv.pdf" />
      </div>
    </section>

    <section class="about-me">
      <div class="photo">
        <picture>
          <source
            media="(max-width: 768px)"
            srcset="/images/homepage/mobile/image-homepage-profile@2x.jpg" />
          <source
            media="(max-width: 1024px)"
            srcset="/images/homepage/tablet/image-homepage-profile@2x.jpg" />
          <img
            src="/images/homepage/desktop/image-homepage-profile@2x.jpg"
            alt="Profile picture of Edouard Herrengt" />
        </picture>
        
      </div>
      <div class="about-txt">
        <h2 class="tp-2">About Me</h2>
        <p class="tp-4">
          I’m a front-end developer looking for a new role in an exciting company. I focus on
          writing accessible HTML, using modern CSS practices and writing clean JavaScript. When
          writing JavaScript code, I mostly use Vue.js / Nuxt, but I can adapt to whatever tools are
          required. I’m based in Lille, FR, but I’m happy working remotely and have experience in
          remote teams. When I’m not coding, you’ll find me outdoors. I love being out in nature
          whether that’s going for a walk or cycling. I’d love you to check out my work.
        </p>
        <NuxtLink to="/portfolio"><Button label="go to portfolio" :primary="false" /></NuxtLink>
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

.about-txt {
  max-width: 350px;
  padding-top: var(--sp-200);
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
