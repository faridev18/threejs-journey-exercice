
// Scene
const scene = new THREE.Scene()

// Cube
const geometry = new THREE.BoxGeometry(1,1,1)
const material = new THREE.MeshBasicMaterial({color : '0xfff000'})
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

// Sizes
const sizes ={
    width:1000,
    height:800
}

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
scene.add(camera)

// Renderer
const canvas = document.querySelector(".webgl")
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})

renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)