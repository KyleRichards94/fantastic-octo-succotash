
<template>
    <div  class="container" style="padding-top: 2%;"> 

        
          
          <div ref="container" class ="d-flex justify-content-between" >
        <div class="card" style="margin-bottom: 60px;">
          <div class="card-body">
            <h5 class="card-title"> {{ post.title }}</h5>
            <p class="card-text">{{ post.description }}</p>
            <div class ="d-flex justify-content-between"  >
            <a href="#" class="btn btn-primary"> Download </a>
              <div class ="favorites-icon">
                <!-- you can add a V-if, after you axios-get all the users current favourites such that. 
                if post.id.in(favourites) then <img src = " "../../assets/star-2768.png""> -->
                <img id = "favourites" src ="../../assets/favourite-2765.png" onclick="addFavourites" >
              </div>
            </div>
            <comment-box @submitComment="handleCommentSubmission"></comment-box>
          </div>
        </div>
    </div>
    </div>
</template>
  
  <script>
  import { ref, onMounted } from "vue";
  import * as THREE from "three";
  import { OBJLoader } from "three/addons/loaders/OBJLoader.js";
    import axios from "axios";
    //import CommentBox from'../Comments/CommentBox.vue'


  
  export default {
    name: "3DviewPort",
    
    props: {
      objFilePath: String, // The path to the .obj file for the selected object
      postId: String

    
    },
    setup(props) {
        const post = ref({});

        console.log(props.postId);
    console.log(props.objFilePath);
      const container = ref(null);
      let scene, camera, renderer, objModel;
  
      const init = () => {
        scene = new THREE.Scene();
        // Add a directional light
        const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
        directionalLight.position.set(1, 1, 1);
        scene.add(directionalLight);

        // Add ambient light
        const ambientLight = new THREE.AmbientLight(0x404040);
        scene.add(ambientLight);
  
        camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.z = 5;
  
        renderer = new THREE.WebGLRenderer();
        renderer.setSize(800, 500);
        container.value.appendChild(renderer.domElement);
  
        const loader = new OBJLoader();
        loader.load('http://localhost:8090'+ props.objFilePath, (object) => {
          objModel = object;
          objModel.position.set(0, 0, 0);
          scene.add(objModel);
  
          animate();
        });
      };
  
      const animate = () => {
        objModel.rotation.x += 0.01; // Rotate slowly on the X-axis
        objModel.rotation.y += 0.01; // Rotate slowly on the Y-axis
  
        renderer.render(scene, camera);
        requestAnimationFrame(animate);
      };
  
      onMounted(() => {
        init();
      });

      axios
        .get("http://localhost:8090/api/posts/" + props.postId)
        .then((response) => {
          post.value = response.data;
          console.log(post.value)
        })
        .catch((error) => {
          console.error("An error occurred:", error);
        });

      return { container, post };
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