<template>
    <div class ="container" style = "padding-top: 2%;">
        
    <div class="jumbotron" style = "border-radius: 6px; padding: 2%;background-color: whitesmoke;background-repeat: no-repeat;background-size: 100% auto;background-position: center center;">
        <h1 class="display-3" style = "text-shadow:1px 2px white;font-weight:bold;;text-align: center;">Welcome, to the shop</h1>
        <hr class="my-4">
        <p class="lead" style = "text-align:center;text-shadow:1px 1px white ;font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif">Find your favourite 3D printers!</p>
    </div>


        <div class="d-flex justify-content-between" style = "padding-top: 2%;">
            <div class="card" style="width: 25rem;">
                <img class="card-img-top" style = "background-repeat: no-repeat;background-size: 100% auto;background-position: center center;" src ="https://www.popsci.com/uploads/2023/04/13/best-3d-printer-for-beginners-creality.jpg?auto=webp" alt="Card image cap">
                <div class="card-body">
                    <h1>Basic Printer</h1>
                    <p> Print small things that aren't that special, but fun nonetheless </p>
                    <hr class="my-4">
                    <a class="btn btn-success"  href="#" role="button">Purchase</a>
                </div>
            </div>

            <div class="card" style="width: 25rem;">
                <img class="card-img-top" style = "background-repeat: no-repeat;background-size: 100% auto;background-position: center center;" src = 'https://i.pcmag.com/imagery/roundups/075s6pAZ0tD0joFomIaUF6W-2..v1595828696.jpg' alt="Card image cap">
                <div class="card-body">
                    <h1>Mid-Tier Printer</h1>
                    <p> Print with greater accuracy and large component size... now you're cooking with gas!</p>
                    <hr class="my-4">
                    <a class="btn btn-success"  href="#" role="button">Purchase</a>
                </div>
            </div>
            
            <div class="card" style="width: 25rem;">
                <img class="card-img-top" style = "background-repeat: no-repeat;background-size: 100% auto;background-position: center center;" src ='https://i.ytimg.com/vi/ZsA8X-cej9M/maxresdefault.jpg' alt="Card image cap">
                <div class="card-body">
                    <h1>High-End/Industrial Printer</h1>
                    <p> This is the largest printer we sell, it's huge, costs a fortune, but prints life-sized objects with unfathomable precision. </p>
                    <hr class="my-4">
                    <a class="btn btn-success"  href="#" role="button">Purchase</a>
                </div>
            </div>
                
        </div> 
        
    </div>
        <div class="row justify-content-md-center" style = "padding-top: 2%;">
            <div class="card" style = "width: 40%;background-image: url('https://e0.pxfuel.com/wallpapers/664/353/desktop-wallpaper-acrylic-light-salmon-pink-watercolor-texture-background-by-pink-background-color-iphone-pastel-pink.jpg');background-repeat: no-repeat;background-size: 100% auto;background-position: center center;">
            <div class="card-body">
                <h5 class="card-title" style="text-align: center;">Want to see some cool designs you could be printing on your new printer!?</h5>
                <p class="card-text" style="text-align: center;"> Head over to our Community Hub and check them out!</p>
                <a href="#" class="btn btn-primary" >Community Hub</a>
            </div>
            </div>
        </div>
</template>

<script>

    export default {
        name: 'ShopFront',
    }
</script>