<template>
    <div class = "container" style="margin-top: 15%;">
        <div class="card" style="background-image: url('https://e0.pxfuel.com/wallpapers/664/353/desktop-wallpaper-acrylic-light-salmon-pink-watercolor-texture-background-by-pink-background-color-iphone-pastel-pink.jpg');background-repeat: no-repeat;background-size: 100% auto;background-position: center center;">
                            <div class="card-body">
                                <h5 class="card-title" style="text-align: center;"> Congratuations, your purchase has been finalized</h5>
                            <p class="card-text" style="text-align: center;"> browse the shop and purchase another amazing product </p>
                            <div class = "conainer"> 
                                <div class = "row">
                                        <RouterLink style ="margin-right: 50%" class="btn btn-primary" to="/Shop"> Here! </RouterLink>
                                </div>
                            </div>
                        </div> 
                    </div>
    </div>
</template>

<script>

export default {
    name: 'finalizeOrder'
}
</script>