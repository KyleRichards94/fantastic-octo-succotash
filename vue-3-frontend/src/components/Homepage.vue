<template>
    <div class ="container-fluid" style = "padding-top: 2%; padding-bottom: 1%; background-color:moccasin;">
    
        <div class="jumbotron" style = "border-radius: 100px; 
        padding: 2%; 
        /* background-image: url('https://chessprintingsolutions.com/wp-content/uploads/2021/06/3D-Printer-3-MK-Canva-Pro-1.png');  */
        background-repeat: no-repeat;
        background-size: 100% auto;
        background-position: center center;
        background-color:whitesmoke;">

            <h1 class="display-3" style = "text-shadow:1px 2px whitesmoke;font-weight:bold;text-align: center;">Welcome to Succotash!</h1>
        </div>

        <!-- <div id="homeCarousel" class="carousel slide" data-ride="carousel" style="height: 200px;">
            <div class="carousel-inner">
                <div class="carousel-item active">
                <img class="d-block w-100" src="https://chessprintingsolutions.com/wp-content/uploads/2021/06/3D-Printer-3-MK-Canva-Pro-1.png" alt="First slide">
                </div>
                <div class="carousel-item">
                <img class="d-block w-100" alt="Second slide">
                </div>
                <div class="carousel-item">                                                                             Might try to get this working with this link to doc https://getbootstrap.com/docs/4.0/components/carousel/ 
                <img class="d-block w-100" alt="Third slide">                                                           but for now will just use the cards to design as I already have those elements from other pages
                </div>                                                                                                  and if its still a good idea later I will basiaclly convert the content of the cards to the carousel 
            </div>                                                                                                      and possibly just ditch the jumbtron and make the carousel the main focal point at the top of the site
            <a class="carousel-control-prev" href="#homeCarousel" role="button" data-slide="prev">                      that holds the content there with a footer at the bottom and thats it
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#homeCarousel" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div> -->

        <div class ="container" style = "padding-top: 2%; padding-bottom: 2%; background-color:moccasin;">
            <div class="d-flex justify-content-around" style = "padding-top: 2%;">
                <div class="card" style="width: 30rem;background-color: whitesmoke;">
                    <img class="card-img-top" style = "background-repeat: no-repeat;background-size: 100% auto;background-position: center center;" src ="https://brisbanemaker.space/wp-content/uploads/2021/11/3d-printing-720x480.jpg" alt="Card image cap">
                    <div class="card-body">
                        <h1>Community Hub</h1>
                        <p> View and download prints provided by our community!</p>
                        <hr class="my-4">
                        <RouterLink class="btn btn-primary" role="button" to="/CommunityHub">Communiuty</RouterLink>
                    </div>
                </div>

                <div class="card" style="width: 30rem;background-color: whitesmoke;">
                    <img class="card-img-top" style = "background-repeat: no-repeat;background-size: 100% auto;background-position: center center;" src = 'https://www.tctmagazine.com/downloads/3804/download/3DprinterExperience.jpg?cb=89a4c80d0322889046ad36f595121312' alt="Card image cap">
                    <div class="card-body">
                        <h1>Shop</h1>
                        <p> Purchase printers from trusted brands through us!</p>
                        <hr class="my-4">
                        <RouterLink class="btn btn-primary" role="button" to="/Shop">Shop</RouterLink>
                    </div>
                </div>
                    
            </div> 
        </div>
    </div>      
</template>

<script>

    export default {
        name: 'HomePage',
    }
</script>
