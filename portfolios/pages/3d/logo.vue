<template>
  <div class="3d" id="container" ref="logo"></div>
</template>
<script>
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
export default {
  layout: 'empty',
  data() {
    return {
      h: 600,
      w: 1500,
      camera: null,
      loader: null,
      scene: null,
      renderer: null,
      cube: null,
    }
  },
  created() {},
  mounted: async function () {
    const container = document.getElementById('container')
    this.scene = new THREE.Scene()
    this.loader = new GLTFLoader()
    this.camera = new THREE.PerspectiveCamera(360, this.w / this.h, 15, 1000)
    this.camera.position.set(50, 50, 50)

    this.renderer = new THREE.WebGLRenderer({ alpha: true })
    this.renderer.setSize(this.w, this.h)
    document.body.appendChild(this.renderer.domElement)
    this.loader = new GLTFLoader().setPath('/')
    let self = this
    this.loader.load('logo.gltf', function (gltf) {
      self.scene.add(gltf.scene)
      gltf.scenes
      gltf.nodes
      gltf.meshes
      gltf.materials
      //      roughnessMipmapper.dispose()
      self.renderer.render(self.scene, self.camera)
    })
    //    this.renderer.setPixelRatio(window.devicePixelRatio)
    this.renderer.setSize(this.w, this.h)
    //    this.renderer.toneMapping = THREE.ACESFilmicToneMapping
    //    this.renderer.toneMappingExposure = 1
    //    this.renderer.outputEncoding = THREE.sRGBEncoding
    container.appendChild(this.renderer.domElement)

    const pmremGenerator = new THREE.PMREMGenerator(this.renderer)
    pmremGenerator.compileEquirectangularShader()
  },
}
</script>

<style>
div.3d {
  width: 1500px;
  height: 600px;
  position: absolute;
  background: #000000;
  margin: 0;
  padding: 0;
  border: 1px solid #ccc;
  overscroll-behavior: none;
}
</style>
