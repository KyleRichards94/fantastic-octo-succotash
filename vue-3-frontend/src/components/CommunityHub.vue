<script setup>
    import CommentBox from'./Comments/CommentBox.vue'
</script>
<template>
    <div class ="container" style = "padding-top: 2%;">
        
    <div class="jumbotron" style = "border-radius: 6px; padding: 2%;background-image: url('https://chessprintingsolutions.com/wp-content/uploads/2021/06/3D-Printer-3-MK-Canva-Pro-1.png');background-repeat: no-repeat;background-size: 100% auto;background-position: center center;">
        <h1 class="display-3" style = "text-shadow:1px 2px white;font-weight:bold">Welcome, to the community hub</h1>
        <p class="lead" style = "text-shadow:1px 1px white ;font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif">Find your favourite 3D printable, or share your own creations!</p>
        <hr class="my-4">
        <div  class="container" >
            <div class="d-flex justify-content-between" >
                <RouterLink class="btn btn-primary btn-lg" style = "padding-left: 45px;padding-right: 45px;" to="/browsePosts" role="button">Browse</RouterLink>
                <RouterLink class="btn btn-primary btn-lg" style = "padding-left: 45px;padding-right: 45px;"   to="/addPost" role="button">Share</RouterLink>
            </div>
        </div>
        
        <hr class="my-4">
    </div>


        <div class="d-flex justify-content-between" style = "padding-top: 2%;">
            <div class="card" style="width: 25rem;">
                <img class="card-img-top" style = "background-repeat: no-repeat;background-size: 100% auto;background-position: center center;" src ="https://www.sciencesandtechnology.com/wp-content/uploads/2019/07/3d-printed-lattice-850x600.jpg" alt="Card image cap">
                <div class="card-body">
                    <h1>PolyMesh</h1>
                    <p> print your own poly mesh with 10x structural integrity </p>
                    <hr class="my-4">
                    <a class="btn btn-outline-primary"  href="#" role="button">Download</a>
                    <comment-box @submitComment="handleCommentSubmission"></comment-box>
                </div>
            </div>

            <div class="card" style="width: 25rem;">
                <img class="card-img-top" style = "background-repeat: no-repeat;background-size: 100% auto;background-position: center center;" src = 'https://th.bing.com/th/id/OIP.94Nm3qVbB3jFEu5F7G2DsAHaFj?pid=ImgDet&rs=1' alt="Card image cap">
                <div class="card-body">
                    <h1>4th dimensional desk object</h1>
                    <p> Print in PLA white for best results </p>
                    <hr class="my-4">
                    <a class="btn btn-outline-primary"  href="#" role="button">Download</a>
                </div>
            </div>
            
            <div class="card" style="width: 25rem;">
                <img class="card-img-top" style = "background-repeat: no-repeat;background-size: 100% auto;background-position: center center;" src ='https://i2.wp.com/northerngeometry.com/wp-content/uploads/2021/04/3D_Print_TREX_SKULL_Mask-1.png?w=1680' alt="Card image cap">
                <div class="card-body">
                    <h1>Dino Head</h1>
                    <p> Become prehistoric </p>
                    <hr class="my-4">
                    <a class="btn btn-outline-primary"  href="#" role="button">Download</a>
                </div>
            </div>
                
        </div> 
        
    </div>

    <!-- no user -->
        <div v-if="this.$store.getters['user/userId'] == null" class="row justify-content-md-center" style = "padding-top: 2%;">
            <div class="card" style = "width: 40%;background-image: url('https://e0.pxfuel.com/wallpapers/664/353/desktop-wallpaper-acrylic-light-salmon-pink-watercolor-texture-background-by-pink-background-color-iphone-pastel-pink.jpg');background-repeat: no-repeat;background-size: 100% auto;background-position: center center;">
            <div class="card-body">
                <h5 class="card-title">Join our community of creators</h5>
                <p class="card-text"> If you can print it, you can share it! </p>
                <RouterLink class="btn btn-primary" to="/signUp"> Sign me Up! </RouterLink>
            </div>
            </div>
        </div>
           <!--  user -->
        <div v-if="this.$store.getters['user/userId'] != null" class="row justify-content-md-center" style = "padding-top: 2%;">
            <div class="card" style = "width: 40%;background-image: url('https://e0.pxfuel.com/wallpapers/664/353/desktop-wallpaper-acrylic-light-salmon-pink-watercolor-texture-background-by-pink-background-color-iphone-pastel-pink.jpg');background-repeat: no-repeat;background-size: 100% auto;background-position: center center;">
            <div class="card-body">
                <h5 class="card-title"> With a 3D printer anything is possible! </h5>
                <p class="card-text"> If you can print it, you can share it! </p>
                <RouterLink class="btn btn-primary" to="/Shop"> Buy a printer! </RouterLink>
            </div>
            </div>
        </div>
</template>

<script>


</script>

<style>

    

    img{
        width: 600px;
    }

    .ImgBox{
        display: flex;
        grid-template-columns: repeat(5, 1fr);
        grid-gap: 10px;
        padding: 10px;
        border-radius: 20px;
    }

</style>
