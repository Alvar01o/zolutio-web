<template>
  <div class="3d" ref="logo"></div>
</template>
<script>
import * as THREE from 'three'
export default {
  layout: 'empty',
  data() {
    return {
      h: 500,
      w: 500,
      camera: null,
      scene: null,
      renderer: null,
      cube: null,
    }
  },
  methods: {
    render: function () {
      requestAnimationFrame(this.render)

      this.cube.rotation.x += 0.1
      this.cube.rotation.y += 0.1

      this.renderer.render(this.scene, this.camera)
    },
  },
  created() {},
  mounted() {
    this.scene = new THREE.Scene()
    this.camera = new THREE.PerspectiveCamera(75, this.w / this.h, 0.1, 1000)
    this.renderer = new THREE.WebGLRenderer()
    this.renderer.setSize(this.w, this.h)
    document.body.appendChild(this.renderer.domElement)

    var geometry = new THREE.BoxGeometry(1, 1, 1)
    var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
    this.cube = new THREE.Mesh(geometry, material)
    this.scene.add(this.cube)

    this.camera.position.z = 5
    this.render()
  },
}
</script>

<style>
div.3d {
  width: 500px;
  height: 500px;
  position: absolute;
  background: #000000;
  margin: 0;
  padding: 0;
  border: 1px solid #ccc;
  overscroll-behavior: none;
}
</style>
