import * as THREE from "three";

export function ThreeJsClient() {

    const canvas = document.getElementById("three-canvas");
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, canvas.clientWidth / canvas.clientHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas});

    renderer.setSize(canvas.clientWidth, canvas.clientHeight);

    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshStandardMaterial({ color: 0x0077ff });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    const light = new THREE.SpotLight(0xffffff, 5);
    light.position.set(0, 5, 0);
    scene.add(light);
    
    const light2 = new THREE.SpotLight(0xffffff, 5);
    light.position.set(5, 0, 0);
    scene.add(light2);
    
    const light3 = new THREE.SpotLight(0xffffff, 5);
    light.position.set(0, 0, 5);
    scene.add(light3);



    camera.position.z = 3;

    function animate() {
        requestAnimationFrame(animate);
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
        renderer.render(scene, camera);
    }
    animate();

    window.addEventListener("resize", () => {
        camera.aspect = canvas.clientWidth / canvas.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(canvas.clientWidth, canvas.clientHeight);
    });
}