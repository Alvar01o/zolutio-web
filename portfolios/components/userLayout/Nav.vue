<template>
  <nav class="flex space-x-4">
    <a
      v-for="(item, index) in navItems"
      :key="index"
      :ref="item.url"
      class="text-white text-sm font-medium rounded-md bg-white bg-opacity-0 px-3 py-2 hover:bg-opacity-10"
      aria-current="page"
    >
      {{ item.text }}
    </a>
  </nav>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'userNav',
  data() {
    return {}
  },
  computed: {
    ...mapGetters({
      navItems: 'getNavItems',
    }),
  },
}
</script>
