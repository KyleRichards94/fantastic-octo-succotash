<template>
    <div class ="container" style = "padding-top: 2%;">
        
    <div class="jumbotron" style = "border-radius: 6px; padding: 2%;background-image: url('https://chessprintingsolutions.com/wp-content/uploads/2021/06/3D-Printer-3-MK-Canva-Pro-1.png');background-repeat: no-repeat;background-size: 100% auto;background-position: center center;">
        <h1 class="display-3" style = "text-shadow:1px 2px white;font-weight:bold">Welcome, to the community hub</h1>
        <p class="lead" style = "text-shadow:1px 1px white ;font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif">Find your favourite 3D printable, or share your own creations!</p>
        <hr class="my-4">
        <div  class="container" >
            <div class="d-flex justify-content-between" >
                <a class="btn btn-primary btn-lg" style = "padding-left: 45px;padding-right: 45px;" href="#" role="button">Browse</a>
                <a class="btn btn-primary btn-lg" style = "padding-left: 45px;padding-right: 45px;"   href="#" role="button">Share</a>
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
                    <a class="btn btn-outline-primary"  href="#" role="button">Download</a>
                </div>
            </div>
            <div class="card" style="width: 25rem;">
                <img class="card-img-top" style = "background-repeat: no-repeat;background-size: 100% auto;background-position: center center;" src ='https://i2.wp.com/northerngeometry.com/wp-content/uploads/2021/04/3D_Print_TREX_SKULL_Mask-1.png?w=1680' alt="Card image cap">
                <div class="card-body">
                    <h1>Dino Head</h1>
                    <p> Become prehistoric </p>
                    <a class="btn btn-outline-primary"  href="#" role="button">Download</a>
                </div>
            </div>
            <div class="card" style="width: 25rem;">
                <img class="card-img-top" style = "background-repeat: no-repeat;background-size: 100% auto;background-position: center center;" src = 'https://th.bing.com/th/id/OIP.94Nm3qVbB3jFEu5F7G2DsAHaFj?pid=ImgDet&rs=1' alt="Card image cap">
                <div class="card-body">
                    <h1>4th dimensional desk object</h1>
                    <p> Print in PLA white for best results </p>
                    <a class="btn btn-outline-primary"  href="#" role="button">Download</a>
                </div>
            </div>
                    
                
        </div> 
        
    </div>
        <div class="row justify-content-md-center" style = "padding-top: 2%;">
            <div class="card" style = "width: 40%;background-image: url('https://th.bing.com/th/id/OIP.ubjOZJzyIctjBL7AHBk77QHaEK?pid=ImgDet&rs=1');background-repeat: no-repeat;background-size: 100% auto;background-position: center center;">
            <div class="card-body">
                <h5 class="card-title">Join our community of creators</h5>
                <p class="card-text"> If you can print it, you can share it! </p>
                <a href="#" class="btn btn-primary">Sign me up!</a>
            </div>
            </div>
        </div>
</template>

<script>

    export default{
        name: 'CommunityHub',
            setup() {
                
            },
        }

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
```