<script setup>
import CommentBox from'../Comments/CommentBox.vue'
</script>
<template>
    
<div class = "container" style = "padding-top: 2%;">
  <div class="jumbotron" style = "border-radius: 6px; padding: 2%;background-image: url('https://preview.redd.it/hlqjaydevle21.jpg?auto=webp&s=cea511099ae06be780d821a423f5c4ce79f78cd7');background-repeat: no-repeat;background-size: 100% auto;background-position: center center;">
          <h1 class="display-3" style = "color: peachpuff ;text-shadow:1px 2px rgb(0, 0, 0);font-weight:bold">Browse</h1>
          <p class="lead" style = "color: peachpuff; text-shadow:1px 1px rgb(0, 0, 0) ;font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif">Find your favourite 3D printable</p>
          <div  class="container" >
              <div class="d-flex justify-content-between" >
                  <RouterLink class="btn btn-primary btn-lg" style = "padding-left: 45px;padding-right: 45px;" to="/CommunityHub" role="button">Return</RouterLink>
              </div>
          </div>
      </div>

      <div class = "container" style = "padding-top: 2%;">
        <div class="input-group mb-3">
    <input type="text" class="form-control" placeholder="Search by title" aria-label="Recipient's username" aria-describedby="basic-addon2">
    <span class="input-group-text" id="basic-addon2">Search</span>
  </div>
  </div>


    <div class = "p-3 border bg-light">
        <div class="d-flex justify-content-between" style = "padding-top: 2%;">
            <div class="card" style="width: 18rem;">
                <img class="card-img-top" style = "background-repeat: no-repeat;background-size: 100% auto;background-position: center center;" src ="https://www.sciencesandtechnology.com/wp-content/uploads/2019/07/3d-printed-lattice-850x600.jpg" alt="Card image cap">
                <div class="card-body">
                    <h1>PolyMesh</h1>
                    <p> print your own poly mesh with 10x structural integrity </p>
                    <hr class="my-4">
                    <a class="btn btn-outline-primary"  href="#" role="button">Download</a>
                    <comment-box @submitComment="handleCommentSubmission"></comment-box>
                </div>
            </div>

            <div class="card" style="width: 18rem;">
                <img class="card-img-top" style = "background-repeat: no-repeat;background-size: 100% auto;background-position: center center;" src = 'https://th.bing.com/th/id/OIP.94Nm3qVbB3jFEu5F7G2DsAHaFj?pid=ImgDet&rs=1' alt="Card image cap">
                <div class="card-body">
                    <h1>4th dimensional desk object</h1>
                    <p> Print in PLA white for best results </p>
                    <hr class="my-4">
                    <a class="btn btn-outline-primary"  href="#" role="button">Download</a>
                    <comment-box @submitComment="handleCommentSubmission"></comment-box>
                </div>
            </div>
            
            <div class="card" style="width: 18rem;">
                <img class="card-img-top" style = "background-repeat: no-repeat;background-size: 100% auto;background-position: center center;" src ='https://i2.wp.com/northerngeometry.com/wp-content/uploads/2021/04/3D_Print_TREX_SKULL_Mask-1.png?w=1680' alt="Card image cap">
                <div class="card-body">
                    <h1>Dino Head</h1>
                    <p> Become prehistoric </p>
                    <hr class="my-4">
                    <a class="btn btn-outline-primary"  href="#" role="button">Download</a>
                    <comment-box @submitComment="handleCommentSubmission"></comment-box>
                </div>
            </div>
                
        </div> 
      </div>
    </DIV>
  </template>
  
  <script>
     

      export default {
          name: 'browsePosts',
      
      }
  </script>
  
  <style>
  
  </style>