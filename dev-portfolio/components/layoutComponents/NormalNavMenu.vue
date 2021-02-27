<template>
  <div class="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
    <div class="relative flex items-center justify-between h-16">
      <!-- Logo section -->
      <div class="flex items-center px-2 lg:px-0 xl:w-64">
        <div class="flex-shrink-0">
          <img
            class="h-8 w-auto"
            src="https://tailwindui.com/img/logos/workflow-mark-indigo-300.svg"
            alt="Workflow"
          />
        </div>
      </div>

      <!-- Search section -->
      <div class="flex-1 flex justify-center lg:justify-end">
        <div class="w-full px-2 lg:px-6">
          <label for="search" class="sr-only">{{ searchText }}</label>
          <div class="relative text-indigo-200 focus-within:text-gray-400">
            <div
              class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
            >
              <!-- Heroicon name: solid/search -->
              <svg
                class="h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <input
              id="search"
              name="search"
              class="block w-full pl-10 pr-3 py-2 border border-transparent rounded-md leading-5 bg-indigo-400 bg-opacity-25 text-indigo-100 placeholder-indigo-200 focus:outline-none focus:bg-white focus:ring-0 focus:placeholder-gray-400 focus:text-gray-900 sm:text-sm"
              :placeholder="searchText"
              type="search"
            />
          </div>
        </div>
      </div>
      <div class="flex lg:hidden">
        <!-- Mobile menu button -->
        <button
          type="button"
          class="bg-indigo-600 inline-flex items-center justify-center p-2 rounded-md text-indigo-400 hover:text-white hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-600 focus:ring-white"
          aria-controls="mobile-menu"
          aria-expanded="false"
        >
          <span class="sr-only">Open main menu</span>
          <!-- Icon when menu is closed. -->
          <!--
              Heroicon name: outline/menu-alt-1

              Menu open: "hidden", Menu closed: "block"
            -->
          <svg
            class="block h-6 w-6"
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
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
          <!-- Icon when menu is open. -->
          <!--
              Heroicon name: outline/x

              Menu open: "block", Menu closed: "hidden"
            -->
          <svg
            class="hidden h-6 w-6"
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
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <!-- Links section -->
      <div class="hidden lg:block lg:w-80">
        <div class="flex items-center justify-end">
          <div class="flex">
            <a
              href="#"
              class="px-3 py-2 rounded-md text-sm font-medium text-indigo-200 hover:text-white"
              >Explore</a
            >
            <a
              href="#"
              class="px-3 py-2 rounded-md text-sm font-medium text-indigo-200 hover:text-white"
              >Sing In</a
            >
          </div>
          <!-- Profile dropdown -->
          <ProfileDropdown />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ProfileDropdown from '~/components/layoutComponents/ProfileDropdown'
export default {
  name: 'NotmalNavMenu',
  components: {
    ProfileDropdown,
  },
  props: {
    searchText: {
      type: String,
      default: 'Search Protfolios',
    },
  },
}
</script>
