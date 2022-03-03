var scene3d = document.getElementById("tresd");
var ancho = 300;
var altura = 300;

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(
    45,
    ancho / altura,
    0.1,
    100
);

var renderer = new THREE.WebGLRenderer();
renderer.setSize(300, 300);

scene3d.appendChild(renderer.domElement);

var geometry = new THREE.BoxGeometry(1, 1, 1);
var material = new THREE.MeshBasicMaterial({ color: 0x800080 });
var cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 5;

var animate = function () {
    requestAnimationFrame(animate);

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render(scene, camera);
};

animate();