import {
  Mesh,
  MeshBasicMaterial,
  MeshPhongMaterial,
  PerspectiveCamera,
  PlaneGeometry,
  Scene,
  Vector3,
  WebGLRenderer,
} from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';
import { WebGL } from  './WebGL';
import * as FontJSON from '../fonts/inter.json';

function render() {
  const scene = new Scene();
  const camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.z = 500;
  camera.position.x = 375;
  camera.position.y = 25;

  const renderer = new WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.shadowMap.enabled = true;

  const controls = new OrbitControls(camera, renderer.domElement);
  controls.update();

  const plane = new Mesh(
    new PlaneGeometry(500, 500),
    [
      new MeshPhongMaterial({ color: 0xffffff }),
      new MeshPhongMaterial({ color: 0x00ff00 }),
    ]
  );
  plane.rotation.x = Math.PI/2;
  plane.receiveShadow = true;
  scene.add(plane);
  
  document.body.appendChild(renderer.domElement);

  const font = new FontLoader().parse(FontJSON);
  const textGeometry = new TextGeometry('Hello World!', {
    font: font,
    size: 100,
    height: 5,
    curveSegments: 12,
    bevelEnabled: true,
    bevelThickness: 10,
    bevelSize: 1,
    bevelOffset: 0,
    bevelSegments: 5,
  });
  const textMesh = new Mesh(textGeometry, [
    new MeshBasicMaterial({ color: 0x00ff00 }),
    new MeshBasicMaterial({ color: 0x353535 }),
  ]);
  scene.add(textMesh);

  function animate() {
    requestAnimationFrame(animate);
  
    // required if controls.enableDamping or controls.autoRotate are set to true
    controls.update();
  
    renderer.render(scene, camera);
  }
  animate() 
}

if (WebGL.isWebGLAvailable()) {
  render();
} else {
	const warning = WebGL.getWebGLErrorMessage();
	document.getElementById( 'container' ).appendChild(warning);
}
