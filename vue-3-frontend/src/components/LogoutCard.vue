
<!-- // :p Make a 10 by 10 grid of blue cards in HTML using list  -->
<template>
    <div class="jumbotron" style = "border-radius: 10px; padding: 2%;background-color: moccasin;background-repeat: no-repeat;background-size: 100% auto;background-position: center center;">
        <h1 class="display-3" style = "text-shadow:1px 2px white;text-align: center;font-weight:bold">You have been logged out</h1>
        
        <hr class="my-4">
        <div  class="container" >
            <p class="display-6" style = "text-shadow:1px 0px white ;text-align: center;font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif">We're Sorry to see you go!</p>
            <p class="lead" style = "text-shadow:1px 0px white ;text-align: center;font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif">Here are some things that may interest you...</p>
        </div>
        
        <hr class="my-4">
    </div>
    <div class ="container-fluid" style = "padding-top: 1%; padding-bottom: 2%; background-color:moccasin;">
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
</template>


<script>
export default {
    name: 'LogoutCard'
    
    
}
</script>