<template>
  <div class="ml-4 relative flex-shrink-0">
    <div>
      <button
        class="bg-indigo-700 flex text-sm rounded-full text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-700 focus:ring-white"
        id="user-menu"
        aria-haspopup="true"
        @click="clickProfile()"
      >
        <span class="sr-only">Open user menu</span>
        <img
          class="h-8 w-8 rounded-full"
          src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixqx=iuegsqX3S8&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&h=256&q=80"
          alt=""
        />
      </button>
    </div>
    <div
      :class="
        showOptions
          ? 'origin-top-right absolute z-10 right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5'
          : 'origin-top-right absolute z-10 right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 hidden'
      "
      role="menu"
      aria-orientation="vertical"
      aria-labelledby="user-menu"
      @mouseleave.stop="showOptions = false"
    >
      <a
        href="#"
        class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
        role="menuitem"
        >View Profile</a
      >
      <a
        href="#"
        class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
        role="menuitem"
        >Settings</a
      >
      <a
        href="#"
        class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
        role="menuitem"
        >Logout</a
      >
    </div>
  </div>
</template>
<script>
export default {
  data: function () {
    return {
      showOptions: false,
    }
  },
  methods: {
    clickProfile() {
      this.showOptions = !this.showOptions
      return this.showOptions
    },
  },
}
</script>
