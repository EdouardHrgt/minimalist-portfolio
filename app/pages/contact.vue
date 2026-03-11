<template>
  <main class="container">
    <section class="touch">
      <h1 class="tp-2">Get in Touch</h1>
      <div class="text">
        <p class="tp-4">
          I’d love to hear about what you’re working on and how I could help. I’m currently looking
          for a new role and am open to a wide range of opportunities. My preference would be to
          find a position in a company in France. But I’m also happy to hear about opportunites that
          don’t fit that description. I’m a hard-working and positive person who will always
          approach each task with a sense of purpose and attention to detail. Please do feel free to
          check out my online profiles below and get in touch using the form.
        </p>
        <div class="socials flex-align">
          <NuxtLink to="https://github.com/EdouardHrgt" target="_blank" rel="noopener noreferrer"
            ><svg xmlns="http://www.w3.org/2000/svg" width="25" height="24">
              <path
                d="M12.5 0C5.594 0 0 5.51 0 12.305c0 5.437 3.581 10.048 8.547 11.674.625.116.854-.265.854-.592 0-.292-.01-1.066-.016-2.092-3.477.742-4.21-1.65-4.21-1.65-.569-1.42-1.39-1.8-1.39-1.8-1.133-.764.087-.748.087-.748 1.255.086 1.914 1.268 1.914 1.268 1.115 1.881 2.927 1.338 3.641 1.024.113-.797.434-1.338.792-1.646-2.776-.308-5.694-1.366-5.694-6.08 0-1.343.484-2.44 1.286-3.302-.14-.31-.562-1.562.11-3.256 0 0 1.047-.33 3.437 1.261 1-.273 2.063-.409 3.125-.415 1.063.006 2.125.142 3.125.415 2.375-1.591 3.422-1.261 3.422-1.261.672 1.694.25 2.945.125 3.256.797.861 1.281 1.959 1.281 3.302 0 4.727-2.921 5.767-5.703 6.07.438.369.844 1.123.844 2.276 0 1.647-.016 2.97-.016 3.37 0 .322.22.707.86.584 5-1.615 8.579-6.23 8.579-11.658C25 5.509 19.403 0 12.5 0z" /></svg
          ></NuxtLink>
          <NuxtLink to="https://x.com/Bobely89" target="_blank" rel="noopener noreferrer"
            ><svg xmlns="http://www.w3.org/2000/svg" width="24" height="20">
              <path
                d="M24 2.557a9.83 9.83 0 01-2.828.775A4.932 4.932 0 0023.337.608a9.864 9.864 0 01-3.127 1.195A4.916 4.916 0 0016.616.248c-3.179 0-5.515 2.966-4.797 6.045A13.978 13.978 0 011.671 1.149a4.93 4.93 0 001.523 6.574 4.903 4.903 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 01-2.224.084 4.928 4.928 0 004.6 3.419A9.9 9.9 0 010 17.54a13.94 13.94 0 007.548 2.212c9.142 0 14.307-7.721 13.995-14.646A10.025 10.025 0 0024 2.557z" /></svg
          ></NuxtLink>
          <NuxtLink to="https://github.com/EdouardHrgt" target="_blank" rel="noopener noreferrer"
            ><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
              <path
                d="M21.6 0H2.4C1.08 0 0 1.08 0 2.4v19.2C0 22.92 1.08 24 2.4 24h19.2c1.32 0 2.4-1.08 2.4-2.4V2.4C24 1.08 22.92 0 21.6 0zM7.2 20.4H3.6V9.6h3.6v10.8zM5.4 7.56c-1.2 0-2.16-.96-2.16-2.16 0-1.2.96-2.16 2.16-2.16 1.2 0 2.16.96 2.16 2.16 0 1.2-.96 2.16-2.16 2.16zm15 12.84h-3.6v-6.36c0-.96-.84-1.8-1.8-1.8-.96 0-1.8.84-1.8 1.8v6.36H9.6V9.6h3.6v1.44c.6-.96 1.92-1.68 3-1.68 2.28 0 4.2 1.92 4.2 4.2v6.84z" /></svg
          ></NuxtLink>
        </div>
      </div>
    </section>
    <section class="contact">
      <h2 class="tp-2">Contact Me</h2>
      <form @submit.prevent="handleSubmit">
        <input
          type="text"
          v-model="form.honeypot"
          name="botcheck"
          style="display: none"
          tabindex="-1"
          autocomplete="off" />

        <div class="form-group">
          <label for="name" class="tp-6-bold">Name</label>
          <input
            v-model="form.name"
            type="text"
            name="name"
            id="name"
            required
            placeholder="The Big Lebowski"
            class="tp-6" />
        </div>

        <div class="form-group">
          <label for="email" class="tp-6-bold">Email Address</label>
          <input
            v-model="form.email"
            type="email"
            name="email"
            id="email"
            required
            placeholder="email@example.com"
            class="tp-6" />
        </div>

        <div class="form-group">
          <label for="message" class="tp-6-bold">Message</label>
          <textarea
            v-model="form.message"
            name="message"
            id="message"
            placeholder="How can I help?"
            minlength="20"
            required
            class="tp-6" />
        </div>

        <div class="form-group">
          <input
            type="submit"
            :value="status === 'loading' ? 'SENDING...' : 'SEND MESSAGE'"
            :disabled="status === 'loading'"
            class="tp-7 submit" />
          <!-- FEEDBACK MESSAGES -->
          <p v-if="status === 'success'" class="form-success">
            ✅ Your message has been sent successfully, I'll get back to you as soon as possible,
            thank you.!
          </p>
          <p v-if="status === 'error'" class="form-error">
            ❌ Something went wrong. Please try again.
          </p>
        </div>
      </form>
    </section>
  </main>
</template>

<script setup>
const form = reactive({
  name: '',
  email: '',
  message: '',
  honeypot: '', // Bot trap è_é
})

const status = ref('')

const handleSubmit = async () => {
  if (form.honeypot) return

  status.value = 'loading'

  try {
    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        access_key: '6d89da7a-e93c-4185-8409-be1f00ade10f',
        name: form.name,
        email: form.email,
        message: form.message,
        botcheck: form.honeypot,
      }),
    })

    const data = await res.json()
    status.value = data.success ? 'success' : 'error'

    if (data.success) {
      form.name = ''
      form.email = ''
      form.message = ''
    }
  } catch {
    status.value = 'error'
  }
}
</script>

<style scoped>
/* FULL PAGE */
main {
  overflow-x: hidden;
}

/* FIRST SECTION */
.touch {
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  border-top: 1px solid var(--slate-300);
  border-bottom: 1px solid var(--slate-300);
  padding-block: var(--sp-300);
}

.text {
  max-width: 635px;
}

.socials {
  gap: 1rem;
  margin-top: var(--sp-100);
}

.socials svg {
  transition: all 0.3s ease-out;
}

/* SECOND SECTION */
.contact {
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  padding-block: var(--sp-300);
}

.contact form {
  max-width: 635px;
  width: 100%;
}

.form-group {
  margin-bottom: var(--sp-100);
  position: relative;
}

label {
  display: block;
  margin-bottom: 3px;
  color: var(--slate-800);
}

input,
textarea {
  width: 100%;
  background-color: #ebebeb;
  border: none;
  padding-block: var(--sp-50);
  padding-left: var(--sp-50);
}

.submit {
  background-color: var(--slate-800);
  color: var(--neutral-0);
  padding: var(--sp-100) var(--sp-150);
  width: fit-content;
  cursor: pointer;
  transition: all 0.4s;
  border: 1px solid var(--slate-800);
}

.form-success,
.form-error {
  position: absolute;
  left: 0;
  top: 100%;
  margin-top: 10px;
}

.form-success {
  color: rgb(37, 143, 68);
}

.form-error {
  color: rgb(196, 36, 36);
}

@media (hover: hover) {
  .socials svg:hover {
    fill: var(--teal-400);
  }
  .submit:hover {
    background-color: var(--neutral-0);
    color: var(--slate-800);
  }
}

@media (max-width: 1024px) {
  .touch {
    justify-content: start;
    flex-direction: column;
    gap: var(--sp-100);
  }

  .contact {
    flex-direction: column;
    justify-content: start;
    gap: var(--sp-100);
  }

  .contact form,
  .text {
    max-width: 100%;
  }
}
</style>
