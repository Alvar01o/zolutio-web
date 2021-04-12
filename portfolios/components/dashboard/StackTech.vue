<template>
  <div>
    <div class="col-span-1 flex justify-center py-8 px-8 bg-gray-50 anime" >
      <img
        class="max-h-12"
        :src="stack.logo"
        :alt="stack.name"
      />
    </div>
  </div>
</template>
<script>
export default {
  name: 'StackTech',
  data(){
    return {
      stack:undefined
    }
  },

  props:{
    tech :{
      type: Object,
      default: {
        name:'tech',
        logo:"https://tailwindui.com/img/logos/transistor-logo-gray-400.svg"
      }
    }
  },
  created(){
    this.stack = this.$props.tech
  }
}
</script>
