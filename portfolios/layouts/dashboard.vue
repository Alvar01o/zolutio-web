<template>
  <div class="bg-white">
    <div class="bg-zblue-dark">
      <div class="relative">
        <div class="max-w-full">
          <div
            class="flex justify-between items-center py-3 md:justify-start md:space-x-1 shadow-lg"
          >
            <div class="flex justify-start lg:w-100 lg:flex-1">
              <a href="#">
                <span class="sr-only">Zolutio</span>
                <img class="h-8 w-auto sm:h-10 pl-12" src="icon3.png" alt="" />
              </a>
            </div>

            <nav class="hidden md:flex space-x-10">
              <a
                href="#team"
                class="text-base font-medium text-gray-200 hover:text-zgreen"
              >
                TEAM
              </a>
              <a
                href="#contact"
                class="text-base font-medium text-gray-200 hover:text-zgreen"
              >
                CONTACT
              </a>
            </nav>
            <div
              class="hidden md:flex items-center justify-end space-x-8 md:flex-1 lg:w-0"
            ></div>
          </div>
        </div>

        <div
          class="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
        >
          <div
            class="rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y-2 divide-gray-50"
          >
            <div class="pt-5 pb-6 px-5">
              <div class="flex items-center justify-between">
                <div>
                  <img
                    class="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-mark-cyan-600.svg"
                    alt="Workflow"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- CTA section -->
    <div class="bg-gradient-to-b from-zgreen-dark to-black">
      <div
        class="max-w-2xl py-16 px-6 text-right md:py-64 sm:py-64 sm:px-6 lg:px-8"
      >
        <h2 class="text-3xl font-extrabold text-white sm:text-4xl">
          <span class="block text-zgreen"
            >Dedicated & Reliable Software Development</span
          >
          <span class="block">Let us Bring Your Vision to Life!</span>
        </h2>

        <a
          href="#"
          class="mt-8 w-full bg-cyan-50 border border-transparent rounded-md py-3 px-5 inline-flex items-left justify-left text-base font-medium text-cyan-700 hover:bg-cyan-100 sm:w-auto"
        >
          Contact
        </a>
      </div>
    </div>

    <!-- CTA section -->
    <OurStack />

    <!-- Zolutio Team-->
    <OurTeam />
    <!-- Header -->
    <div class="py-24 bg-gray-50 sm:py-32">
      <div
        class="max-w-md mx-auto pl-4 pr-8 sm:max-w-lg sm:px-6 lg:max-w-7xl lg:px-8"
      >
        <h1
          class="text-4xl leading-10 font-extrabold tracking-tight text-zgreen text-center sm:text-5xl sm:leading-none lg:text-6xl"
        >
          Get in touch
        </h1>
        <p
          class="mt-6 max-w-3xl mx-auto text-xl leading-normal text-gray-500 text-center"
        >
          Convallis feugiat et aliquet pellentesque dictum nisi, velit. Egestas
          fermentum adipiscing risus quam ac consectetur mattis turpis
          tristique.
        </p>
      </div>
    </div>

    <!-- Zolutio Contact Section -->
    <Contact />
    <!-- Zolutio Footer -->
    <Footer />
  </div>
</template>
<script>
import OurTeam from '/components/dashboard/OurTeam'
import OurStack from '/components/dashboard/OurStack'
import Footer from '/components/dashboard/Footer'
import Contact from '/components/dashboard/Contact'

export default {
  components: {
    Footer,
    OurTeam,
    OurStack,
    Contact,
  },
}
</script>
<style>
.shadow-lg {
  --tw-shadow: 0 3px 15px -3px rgb(141 193 60),
    0 4px 6px -2px rgb(138 48 48 / 5%) !important;
  transition: all 3s ease-in-out;
}
.shadow-lg:hover {
  --tw-shadow: 0 12px 15px -3px rgb(141 193 60),
    0 4px 6px -2px rgb(138 48 48 / 5%) !important;
}
</style>
