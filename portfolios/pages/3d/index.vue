<template>
  <div class="3d"><h1>asd</h1></div>
</template>
<script>
import * as THREE from 'three'
export default {
  layout: 'empty',
  data() {
    return {
      camera: null,
      scene: null,
      renderer: null,
    }
  },
  computed: {
    doSomething: function () {},
  },
  mounted() {},
}
</script>

<style>
div.3d {
  width: 100%;
  height: 100%;
  position: absolute;
  background: #000000;
  margin: 0;
  padding: 0;
  overscroll-behavior: none;
}
</style>
