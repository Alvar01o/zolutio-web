<template>
  <div id="stack" class="bg-zgreen-dark" @mouseover="activeAnimation" @mouseleave="removeAnimation">
    <h2
      class="text-3xl font-extrabold tracking-tight pt-12 text-center sm:text-4xl text-zgreen"
    >
      OUR STACK
    </h2>
    <div
      class="max-w-2xl py-16 px-6 text-right sm:py-24 sm:px-6 lg:px-8 mx-auto"
    >
      <div class="mt-6 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-8" >
        <StackTech v-for="(stack, index) in stacks" :key="index" :tech="stack" />
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
  methods: {
    activeAnimation:function (){
      document.getElementsByClassName('anime').forEach(function(e){
        e.classList.add("animate__animated")
        e.classList.add("animate__flipInX")
        e.classList.add("animate__fast")
        })
    },
    removeAnimation:function (){
      document.getElementsByClassName('anime').forEach(function(e){
        e.classList.remove("animate__animated")
        e.classList.remove("animate__flipInX")
        e.classList.remove("animate__fast")
        })
    }
  },
  components: {
    StackTech,
  },
}
</script>
