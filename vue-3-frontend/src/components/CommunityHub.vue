<template>
    <div>
        <h1> this is the CommunityHub</h1>
            <div style="overflow-y: auto;">
            <li class = 'ImgBox'>
                <ul>
                    <img src ='https://www.sciencesandtechnology.com/wp-content/uploads/2019/07/3d-printed-lattice-850x600.jpg'>
                    <h1>PolyMesh</h1>
                    <p> print your own poly mesh with 10x structural integrity </p>
                </ul>
                
                <ul>
                    <img src ='https://i2.wp.com/northerngeometry.com/wp-content/uploads/2021/04/3D_Print_TREX_SKULL_Mask-1.png?w=1680'>
                    <h1>Dino Head</h1>
                    <p> Become prehistoric </p>
                </ul>

                <ul>
                    <img src = 'https://th.bing.com/th/id/OIP.94Nm3qVbB3jFEu5F7G2DsAHaFj?pid=ImgDet&rs=1'>
                    <h1>4th dimensional desk object</h1>
                    <p> Print iin PLA white for best results </p>
                </ul>
                
                <ul>
                    
                </ul>
                
                <ul>
                    
                </ul>

            </li>
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

    ul{
        display: grid;
        background-color: darkgray;
        border-radius: 10px;
        padding: 50px;
        box-shadow: inset;
    }

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