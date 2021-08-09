<template>
  <div class="3d" id="container" ref="logo"></div>
</template>
<script>

import * as THREE from 'three'
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
export default {
  layout: 'empty',
  data() {
    return {
      h: 300,
      w: 300,
      camera: undefined,
      scene: undefined,
      renderer: undefined,
      container: undefined,
      loader:undefined,
      object:undefined,
      object2:undefined
    }
  },
  methods: {
    init: function(){
      const container = document.getElementById('container')
      this.scene = new THREE.Scene();
     // this.scene.background = new THREE.Color(0xffffff);
      this.camera = new THREE.PerspectiveCamera(75, this.w/this.h,0.1,100);
      this.camera.z = 0;
      this.renderer = new THREE.WebGLRenderer({ alpha: true });
      this.renderer.setSize(this.w, this.h);

      container.appendChild(this.renderer.domElement)
      this.scene.add(this.object);
      this.scene.add(this.object2);
      let control = new OrbitControls(this.camera, this.renderer.domElement)
      let light = new THREE.DirectionalLight({color:0xffffff});
      light.position.set(0,0,20);
      this.scene.add(light);
      this.animate();
    },
  animate(){
      requestAnimationFrame(this.animate);
      this.object.rotation.y +=0.01;
      this.object2.rotation.y +=0.01;
      this.renderer.render(this.scene,this.camera);
  }
  },
  mounted() {
      let self = this;
      this.loader = new STLLoader();
      this.loader.load('../medio.stl', (model) => {
        self.object = new THREE.Mesh(model, new THREE.MeshLambertMaterial({color:0x94c83d}) );
        self.object.scale.set(4,4,4);
        self.object.position.set(0,0,-7)
        self.object.rotation.z = -Math.PI/2;

        self.object2 = new THREE.Mesh(model, new THREE.MeshLambertMaterial({color:0x003042}) );
        self.object2.scale.set(4,4,4);
        self.object2.position.set(0,0,-7)
        self.object2.rotation.z = Math.PI/2;
        this.init()
      });

  },
}
</script>

<style>
div.3d {
  position: absolute;
  background: #000000;
  margin: 0;
  padding: 0;
  border: 1px solid #ccc;
  overscroll-behavior: none;
}
</style>
