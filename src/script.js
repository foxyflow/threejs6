import './style.css'
import * as THREE from 'three'
import gsap from 'gsap'

// Cursor
window.addEventListener('mousemove', (event) => {})

// Scene
const scene = new THREE.Scene();
const sizes = {
    width: 800,
    height: 600
}

// Red cube
const geometry = new THREE.BoxGeometry(2, 2, 2, 5, 5, 5);
const material = new THREE.MeshBasicMaterial ( { color: 0xff0000 } );
const mesh = new THREE.Mesh( geometry, material);
mesh.position.x = 0
mesh.position.y = 0
mesh.position.z = 0
//or 
mesh.rotation.set(0, 0, 0);
mesh.scale.set(.1,.1,.1);
scene.add(mesh);


// Camera
const camera = new THREE.PerspectiveCamera( 75, sizes.width / sizes.height, 0.1, 100);
scene.add( camera );
camera.position.set(0, 0, 3);
camera.lookAt(mesh.position);
scene.add(camera);

// Renderer -- providing a canvas Frenchies way:
const canvas = document.querySelector('.webgl');
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height);

//Using GSAP
// gsap.to(mesh.position, { duration: 1, delay: 1, x: 2})
// gsap.to(mesh.position, { duration: 1, delay: 2, x: 0})
const clock = new THREE.Clock();
//Animations
const tick = () => {
    const elapsedTime = clock.getElapsedTime();
    //update objects
        //mesh.rotation.y = elapsedTime;
    //Call renderer
    renderer.render(scene, camera);
    window.requestAnimationFrame(tick);
}
tick();


