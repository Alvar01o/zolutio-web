<template>
  <div
    class="rounded-lg bg-gray-200 overflow-hidden shadow divide-y divide-gray-200 sm:divide-y-0 sm:grid sm:grid-cols-2 sm:gap-px"
  >
    <h2 class="sr-only" id="quick-links-title">Quick links</h2>

    <div
      v-for="(card, index) in cards"
      :key="index"
      class="rounded-tl-lg rounded-tr-lg sm:rounded-tr-none relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-cyan-500"
    >
      <div>
        <span
          class="rounded-lg inline-flex p-3 bg-teal-50 text-teal-700 ring-4 ring-white"
        >
          <!-- Heroicon name: outline/clock -->
          <svg
            class="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </span>
      </div>
      <div class="mt-8">
        <h3 class="text-lg font-medium">
          <a href="#" class="focus:outline-none">
            <!-- Extend touch target to entire panel -->
            <span class="absolute inset-0" aria-hidden="true"></span>
            {{ card.title }}
          </a>
        </h3>
        <p class="mt-2 text-sm text-gray-500">
          Doloribus dolores nostrum quia qui natus officia quod et dolorem. Sit
          repellendus qui ut at blanditiis et quo et molestiae.
        </p>
      </div>
      <span
        class="pointer-events-none absolute top-6 right-6 text-gray-300 group-hover:text-gray-400"
        aria-hidden="true"
      >
        <svg
          class="h-6 w-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z"
          />
        </svg>
      </span>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'UserCards',
  computed: {
    ...mapGetters({
      cards: 'getCards',
    }),
  },
}
</script>
