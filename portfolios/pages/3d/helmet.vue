<template>
  <div class="3d" id="container" ref="logo"></div>
</template>
<script>
import * as THREE from 'three'

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader.js'
import { RoughnessMipmapper } from 'three/examples/jsm/utils/RoughnessMipmapper.js'

export default {
  layout: 'empty',
  data() {
    return {
      h: 600,
      w: 1500,
      renderer: undefined,
      camera: undefined,
      scene: undefined,
    }
  },
  methods: {
    init: function () {
      const container = document.getElementById('container')
      document.body.appendChild(container)

      this.camera = new THREE.PerspectiveCamera(45, this.w / this.h, 0.25, 20)
      this.camera.position.set(-1.8, 0.6, 2.7)

      this.scene = new THREE.Scene()
      let self = this
      new RGBELoader()
        .setDataType(THREE.UnsignedByteType)
        .setPath('hdr/')
        .load('royal_esplanade_1k.hdr', function (texture) {
          const envMap = pmremGenerator.fromEquirectangular(texture).texture

          self.scene.background = envMap
          self.scene.environment = envMap

          texture.dispose()
          pmremGenerator.dispose()

          self.render()

          // model

          // use of RoughnessMipmapper is optional
          const roughnessMipmapper = new RoughnessMipmapper(this.renderer)

          const loader = new GLTFLoader().setPath('./glTF')
          loader.load('DamagedHelmet.gltf', function (gltf) {
            gltf.scene.traverse(function (child) {
              if (child.isMesh) {
                // TOFIX RoughnessMipmapper seems to be broken with WebGL 2.0
                // roughnessMipmapper.generateMipmaps( child.material );
              }
            })

            self.scene.add(gltf.scene)

            roughnessMipmapper.dispose()

            self.render()
          })
        })

      this.renderer = new THREE.WebGLRenderer({ antialias: true })
      this.renderer.setPixelRatio(window.devicePixelRatio)
      this.renderer.setSize(this.w, this.h)
      this.renderer.toneMapping = THREE.ACESFilmicToneMapping
      this.renderer.toneMappingExposure = 1
      this.renderer.outputEncoding = THREE.sRGBEncoding
      container.appendChild(this.renderer.domElement)

      const pmremGenerator = new THREE.PMREMGenerator(this.renderer)
      pmremGenerator.compileEquirectangularShader()

      const controls = new OrbitControls(this.camera, this.renderer.domElement)
      controls.addEventListener('change', this.render) // use if there is no animation loop
      controls.minDistance = 2
      controls.maxDistance = 10
      controls.target.set(0, 0, -0.2)
      controls.update()

      window.addEventListener('resize', this.onWindowResize)
    },
    onWindowResize: function () {
      this.camera.aspect = this.w / this.h
      this.camera.updateProjectionMatrix()

      this.renderer.setSize(this.w, this.h)

      this.render()
    },
    render: function () {
      this.renderer.render(this.scene, this.camera)
    },
  },
  mounted() {
    this.init()
    this.render()
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
