
<template>
  <div class = "container" style ="padding: 2%;">
      <div  class="d-flex " style="padding-top: 2%;"> 
        
          <div class = "card" style="width: 35%;">
            <div class = "card-body">
              <h5 class ="card-title"> Details </h5>
              <br>
              <p class ="card-text">posted by: {{ user.userName }}</p>
              <br>
              <p class ="card-text"> On the: {{ formatDate(post.postDate) }}</p>
              <br>
              <p class = "card-text">contact: {{ user.email }}</p>  
              <br>
              <p>powered by Three.js</p>
              <a href ="https://threejs.org/" alt ="three.js website"><img class = "card-img-bottom" src = "../../assets/bringing-svgs-threejs-svgloader.webp" ></a>
            </div> 
          </div>
          <div ref="container" class ="d-flex justify-content-between" ></div>

      </div>


        <div class="card" style="margin-bottom: 60px;">
          <div class="card-body">
            <h5 class="card-title"> {{ post.title }}</h5>
            <p class="card-text">{{ post.description }}</p>
            <div class ="d-flex justify-content-between"  >
            <a href="#" class="btn btn-primary"> Download </a>
              <div class ="favorites-icon">
                <!-- you can add a V-if, after you axios-get all the users current favourites such that. 
                if post.id.in(favourites) then <img src = " "../../assets/star-2768.png""> -->
                <img id = "favourites" src ="../../assets/favourite-2765.png" onclick="addFavourites" style = "width: 24px;">
              </div>
            </div>
            <comment-box @submitComment="handleCommentSubmission"></comment-box>
          </div>
        </div>

      </div>
</template>
  
  <script>
 import { ref, onMounted, onBeforeUnmount } from "vue";
import * as THREE from "three";
import { OBJLoader } from "three/addons/loaders/OBJLoader.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { DirectionalLight } from "three";
import axios from "axios";

export default {
  name: "3DviewPort",
  props: {
    objFilePath: String,
    postId: String,
  },
  setup(props) {
    const post = ref({});
    const user = ref ({});
    const container = ref(null);
    let scene, camera, renderer, objModel, controls;

    const init = () => {
      scene = new THREE.Scene();

      camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    //renderer
    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth/2, window.innerHeight/2);
    renderer.setClearColor(0x00000, 0.2); // Set the background color to purple
    
    //Dom element
    container.value.appendChild(renderer.domElement)
    
    //Camera
      controls = new OrbitControls(camera, renderer.domElement);
      controls.addEventListener("change", render);


      //Lighting
      const ambientLight = new THREE.AmbientLight(0x404040);
        scene.add(ambientLight);
      //Lighting
      const ambientLight1 = new THREE.AmbientLight(0x404040);
        scene.add(ambientLight1);
      //Lighting
      const ambientLight2 = new THREE.AmbientLight(0x404040);
        scene.add(ambientLight2);

        const directionalLight = new DirectionalLight(0xffffff, 1);
  directionalLight.position.set(1, 1, 1); // Set the light's position
  scene.add(directionalLight);

       

      const loader = new OBJLoader();
      loader.load("http://localhost:8090" + props.objFilePath, (object) => {
        objModel = object;
        objModel.position.set(0, 0, 0);
        scene.add(objModel);

        animate();
      });

      window.addEventListener("resize", handleWindowResize);
    };

    const animate = () => {
      objModel.rotation.y += 0.001;

      render();
      requestAnimationFrame(animate);
    };

    const render = () => {
      renderer.render(scene, camera);
    };

    const handleWindowResize = () => {
      const width = window.innerWidth/2;
      const height = window.innerHeight/2;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();

      renderer.setSize(width, height);
      render();
    };

    onMounted(() => {
      init();
    });

    onBeforeUnmount(() => {
      window.removeEventListener("resize", handleWindowResize);
    });

    axios
      .get("http://localhost:8090/api/posts/" + props.postId)
      .then((response) => {
        post.value = response.data;
        console.log(post.value);
      })
      .catch((error) => {
        console.error("An error occurred:", error);
      });

    axios.get("http://localhost:8090/api/users/" + post.value.userId)
    .then((response) => {
      user.value = response.value;
      console.log(user.value);
    })
    .catch((error) => {
      console.error("no user can be found >:(" + user.value + error);
    })

    const formatDate = (dateString) => {
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Date(dateString).toLocaleDateString(undefined, options);
    };



    return { container, post, user, formatDate };
  },
};
  
  </script>
  
  <style>

    #favourites:hover {
        cursor: pointer;
        background-image: url("../../assets/star-2768.png");
    }
  /* Add any necessary CSS styles here */
  </style>