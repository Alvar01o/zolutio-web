<template>
  <div class="bg-zgreen-dark">
    <h2
      class="text-3xl font-extrabold tracking-tight pt-12 text-center sm:text-4xl text-zgreen"
    >
      OUR STACK
    </h2>
    <div
      class="max-w-2xl py-16 px-6 text-right sm:py-24 sm:px-6 lg:px-8 mx-auto"
    >
      <div class="mt-6 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-8">
        <StackTech v-for="(stack, index) in stacks" :key="index" />
      </div>
    </div>
  </div>
</template>
<script>
import StackTech from '/components/dashboard/StackTech'
import { mapGetters } from 'vuex'
export default {
  name: 'OurStack',
  computed: {
    ...mapGetters({
      stacks: 'zolutio/getStack',
    }),
  },
  components: {
    StackTech,
  },
}
</script>
