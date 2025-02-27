<template>
  <div class="3d" id="container" ref="logo"></div>
</template>
<script>
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { TeapotGeometry } from 'three/examples/jsm/geometries/TeapotGeometry.js'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
export default {
  layout: 'empty',
  data() {
    return {
      h: 600,
      w: 1500,
      camera: undefined,
      scene: undefined,
      renderer: undefined,
      cameraControls: undefined,
      effectController: {
        shininess: 40.0,
        ka: 0.17,
        kd: 0.51,
        ks: 0.2,
        metallic: true,

        hue: 0.121,
        saturation: 0.73,
        lightness: 0.66,

        lhue: 0.04,
        lsaturation: 0.01, // non-zero so that fractions will be shown
        llightness: 1.0,

        // bizarrely, if you initialize these with negative numbers, the sliders
        // will not show any decimal places.
        lx: 0.32,
        ly: 0.39,
        lz: 0.7,
        newTess: 15,
        bottom: true,
        lid: true,
        body: true,
        fitLid: false,
        nonblinn: false,
        newShading: 'glossy',
      },
      teapotSize: 400,
      ambientLight: undefined,
      light: undefined,
      tess: -1, // force initialization
      bBottom: undefined,
      bLid: undefined,
      bBody: undefined,
      bFitLid: undefined,
      bNonBlinn: undefined,
      shading: undefined,
      wireMaterial: undefined,
      flatMaterial: undefined,
      gouraudMaterial: undefined,
      phongMaterial: undefined,
      texturedMaterial: undefined,
      reflectiveMaterial: undefined,
      teapot: undefined,
      textureCube: undefined,
      diffuseColor: new THREE.Color(),
      specularColor: new THREE.Color(),
    }
  },
  methods: {
    init: function () {
      const container = document.getElementById('container')
      document.body.appendChild(container)

      const canvasWidth = this.w
      const canvasHeight = this.h

      // CAMERA
      this.camera = new THREE.PerspectiveCamera(45, this.w / this.h, 1, 80000)
      this.camera.position.set(-600, 550, 1300)

      // LIGHTS
      this.ambientLight = new THREE.AmbientLight(0x333333) // 0.2

      this.light = new THREE.DirectionalLight(0xffffff, 1.0)
      // direction is set in GUI

      // RENDERER
      this.renderer = new THREE.WebGLRenderer({ antialias: true })
      this.renderer.setPixelRatio(window.devicePixelRatio)
      this.renderer.setSize(canvasWidth, canvasHeight)
      this.renderer.outputEncoding = THREE.sRGBEncoding
      container.appendChild(this.renderer.domElement)

      // EVENTS
      window.addEventListener('resize', this.onWindowResize)

      // CONTROLS
      this.cameraControls = new OrbitControls(
        this.camera,
        this.renderer.domElement
      )
      this.cameraControls.addEventListener('change', this.render)

      // TEXTURE MAP
      const textureMap = new THREE.TextureLoader().load('../uv_grid_opengl.jpg')
      textureMap.wrapS = textureMap.wrapT = THREE.RepeatWrapping
      textureMap.anisotropy = 16
      textureMap.encoding = THREE.sRGBEncoding

      // REFLECTION MAP
      const path = '../'
      const urls = [
        path + 'px.png',
        path + 'nx.png',
        path + 'py.png',
        path + 'ny.png',
        path + 'pz.png',
        path + 'nz.png',
      ]

      this.textureCube = new THREE.CubeTextureLoader().load(urls)
      this.textureCube.encoding = THREE.sRGBEncoding

      // MATERIALS
      const materialColor = new THREE.Color()
      materialColor.setRGB(1.0, 1.0, 1.0)

      this.wireMaterial = new THREE.MeshBasicMaterial({
        color: 0xffffff,
        wireframe: true,
      })

      this.flatMaterial = new THREE.MeshPhongMaterial({
        color: materialColor,
        specular: 0x000000,
        flatShading: true,
        side: THREE.DoubleSide,
      })

      this.gouraudMaterial = new THREE.MeshLambertMaterial({
        color: materialColor,
        side: THREE.DoubleSide,
      })

      this.phongMaterial = new THREE.MeshPhongMaterial({
        color: materialColor,
        side: THREE.DoubleSide,
      })

      this.texturedMaterial = new THREE.MeshPhongMaterial({
        color: materialColor,
        map: textureMap,
        side: THREE.DoubleSide,
      })

      this.reflectiveMaterial = new THREE.MeshPhongMaterial({
        color: materialColor,
        envMap: this.textureCube,
        side: THREE.DoubleSide,
      })

      // scene itself
      this.scene = new THREE.Scene()
      this.scene.background = new THREE.Color(0xaaaaaa)

      this.scene.add(this.ambientLight)
      this.scene.add(this.light)
    },
    onWindowResize: function () {
      const canvasWidth = this.w
      const canvasHeight = this.h

      this.renderer.setSize(canvasWidth, canvasHeight)

      this.camera.aspect = canvasWidth / canvasHeight
      this.camera.updateProjectionMatrix()

      this.render()
    },
    render: function () {
      if (
        this.effectController.newTess !== this.tess ||
        this.effectController.bottom !== this.bBottom ||
        this.effectController.lid !== this.bLid ||
        this.effectController.body !== this.bBody ||
        this.effectController.fitLid !== this.bFitLid ||
        this.effectController.nonblinn !== this.bNonBlinn ||
        this.effectController.newShading !== this.shading
      ) {
        this.tess = this.effectController.newTess
        this.bBottom = this.effectController.bottom
        this.bLid = this.effectController.lid
        this.bBody = this.effectController.body
        this.bFitLid = this.effectController.fitLid
        this.bNonBlinn = this.effectController.nonblinn
        this.shading = this.effectController.newShading

        this.createNewTeapot()
      }

      // We're a bit lazy here. We could check to see if any material attributes changed and update
      // only if they have. But, these calls are cheap enough and this is just a demo.
      this.phongMaterial.shininess = this.effectController.shininess
      this.texturedMaterial.shininess = this.effectController.shininess

      this.diffuseColor.setHSL(
        this.effectController.hue,
        this.effectController.saturation,
        this.effectController.lightness
      )
      if (this.effectController.metallic) {
        // make colors match to give a more metallic look
        this.specularColor.copy(this.diffuseColor)
      } else {
        // more of a plastic look
        this.specularColor.setRGB(1, 1, 1)
      }

      this.diffuseColor.multiplyScalar(this.effectController.kd)
      this.flatMaterial.color.copy(this.diffuseColor)
      this.gouraudMaterial.color.copy(this.diffuseColor)
      this.phongMaterial.color.copy(this.diffuseColor)
      this.texturedMaterial.color.copy(this.diffuseColor)

      this.specularColor.multiplyScalar(this.effectController.ks)
      this.phongMaterial.specular.copy(this.specularColor)
      this.texturedMaterial.specular.copy(this.specularColor)

      // Ambient's actually controlled by the light for this demo
      this.ambientLight.color.setHSL(
        this.effectController.hue,
        this.effectController.saturation,
        this.effectController.lightness * this.effectController.ka
      )

      this.light.position.set(
        this.effectController.lx,
        this.effectController.ly,
        this.effectController.lz
      )
      this.light.color.setHSL(
        this.effectController.lhue,
        this.effectController.lsaturation,
        this.effectController.llightness
      )

      // skybox is rendered separately, so that it is always behind the teapot.
      if (this.shading === 'reflective') {
        this.scene.background = textureCube
      } else {
        this.scene.background = null
      }

      this.renderer.render(this.scene, this.camera)
    },
    createNewTeapot: function () {
      if (this.teapot !== undefined) {
        this.teapot.geometry.dispose()
        this.scene.remove(this.teapot)
      }

      const teapotGeometry = new TeapotGeometry(
        this.teapotSize,
        this.tess,
        this.effectController.bottom,
        this.effectController.lid,
        this.effectController.body,
        this.effectController.fitLid,
        !this.effectController.nonblinn
      )

      this.teapot = new THREE.Mesh(
        teapotGeometry,
        this.shading === 'wireframe'
          ? this.wireMaterial
          : this.shading === 'flat'
          ? this.flatMaterial
          : this.shading === 'smooth'
          ? this.gouraudMaterial
          : this.shading === 'glossy'
          ? this.phongMaterial
          : this.shading === 'textured'
          ? this.texturedMaterial
          : this.reflectiveMaterial
      ) // if no match, pick Phong
      /*      let self = this
      var loader = new GLTFLoader()
      loader.setPath('../')
      loader.load('logo.gltf', function (gltf) {
        let glTFGeometry = undefined
        gltf.scene.traverse(function (child) {
          if (child.isMesh) {
            // child.material.envMap = envMap
            //Setting the buffer geometry
            glTFGeometry = child.geometry
          }
        })
        console.log('geo', glTFGeometry)
        const material = new THREE.MeshBasicMaterial({ color: 0xffff00 })
        let logo = new THREE.Mesh(glTFGeometry, material) // if no match, pick Phong
        self.scene.add(logo)
      })*/
      this.scene.add(this.teapot)
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
