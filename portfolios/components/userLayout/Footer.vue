<template>
  <footer>
    <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
      <div
        class="border-t border-gray-200 py-8 text-sm text-gray-500 text-center sm:text-left"
      >
        <span class="block sm:inline"
          >&copy; {{ footer.year }} {{ footer.companyName }} Inc.</span
        >
        <span class="block sm:inline">All rights reserved.</span>
      </div>
    </div>
  </footer>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Footer',
  computed: {
    ...mapGetters({
      footer: 'getFooter',
    }),
  },
}
</script>
