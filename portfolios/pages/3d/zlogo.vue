<template>
  <div class="3d" id="container" ref="logo"></div>
</template>
<script>

import * as THREE from 'three'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';

export default {
  layout: 'empty',
  data() {
    return {
      h: 1000,
      w: 1000,
      camera: undefined,
      scene: undefined,
      renderer: undefined,
      container: undefined,
      windowHalfX: undefined,
      windowHalfY: undefined,
      object:undefined,
      mouseX:undefined,
      mouseY:undefined
    }
  },
  methods: {
    init: function(){
				this.container = document.createElement( 'div' );

				document.getElementById('container').appendChild( this.container );

				this.camera = new THREE.PerspectiveCamera( 245, window.innerWidth / window.innerHeight, 1122, 222000  );
        this.camera.position.z = 122;

				// scene

				this.scene = new THREE.Scene();

				const ambientLight = new THREE.AmbientLight( 0xcccccc, 0.8 );
				this.scene.add( ambientLight );

				const pointLight = new THREE.PointLight( 0xffffff, 0.8 );
				this.camera.add( pointLight );
				this.scene.add( this.camera );

				// manager
        let self = this;
				let loadModel = () => {

					self.object.traverse( function ( child ) {

						if ( child.isMesh ) child.material.map = texture;

					} );
					self.scene.add( self.object );
          console.log('Object in position :',self.object.position.x ,self.object.position.y, self.object.position.z);
        }

				const manager = new THREE.LoadingManager( loadModel );

				manager.onProgress = function ( item, loaded, total ) {

					console.log( item, loaded, total );

				};
        manager.onLoad = function(){

          console.log('Camera in position :',self.camera.position.x ,self.camera.position.y, self.camera.position.z);
        }
				// texture

        const textureLoader = new THREE.TextureLoader( manager );
        const texture = textureLoader.load( '../uv_grid_opengl.jpg' );

				// model

				function onProgress( xhr ) {

					if ( xhr.lengthComputable ) {

						const percentComplete = xhr.loaded / xhr.total * 100;
						console.log( 'model ' + Math.round( percentComplete, 2 ) + '% downloaded' );

					}

				}

				function onError() {}

				const loader = new OBJLoader( manager );
				loader.load( '../logo.obj', function ( obj ) {

					self.object = obj;

				}, onProgress, onError );

				//

				this.renderer = new THREE.WebGLRenderer();
				this.renderer.setPixelRatio( window.devicePixelRatio );
				this.renderer.setSize( window.innerWidth, window.innerHeight );
				this.container.appendChild( this.renderer.domElement );

				document.addEventListener( 'mousemove', this.onDocumentMouseMove );

				//

				window.addEventListener( 'resize', this.onWindowResize );
    },
    onWindowResize: function(){
        this.windowHalfX = window.innerWidth / 2;
				this.windowHalfY = window.innerHeight / 2;

				this.camera.aspect = window.innerWidth / window.innerHeight;
				this.camera.updateProjectionMatrix();
				this.renderer.setSize( window.innerWidth, window.innerHeight);
    },
    onDocumentMouseMove: function(event ){
				this.mouseX = ( event.clientX - this.windowHalfX ) / 2;
				this.mouseY = ( event.clientY - this.windowHalfY ) / 2;
    },
    animate: function(){
        requestAnimationFrame( this.animate );
				this.render();
    },
    render: function(){
				this.camera.position.x += ( this.mouseX - this.camera.position.x ) * .05;
				this.camera.position.y += ( - this.mouseY - this.camera.position.y ) * .05;
				this.camera.lookAt( this.scene.position );
				this.renderer.render( this.scene, this.camera );
    }


  },
  mounted() {
    this.init()
    this.animate()
  },
}
</script>

