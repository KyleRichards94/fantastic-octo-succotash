<template>
    <div style = "background-color: rgb(242,246,251); height : 100vh">
       <div class="w-75 m-auto bg-white border ">
            <div class="header h-50 p-3 " style="background-color: #F8F8F9">
                <h3>Accound details</h3>
            </div>
            
            <form class="mt-4 p-3">
                <div class="form-row row">
                    <div class="form-group col-md-6">
                        <label for="firstName">First Name</label>
                        <input type="text" class="form-control" id="firstName" placeholder="First Name">
                    </div>
                    <div class="form-group col-md-6">
                        <label for="lastName">Last Name</label>
                        <input type="text" class="form-control" id="lastName" placeholder="Last Name">
                    </div>
                </div>
                <div class="form-group">
                    <label for="email">Email</label>
                    <input type="email" class="form-control" id="email" placeholder="Email">
                </div>
                <div class="form-group">
                    <label for="username">Username</label>
                    <input type="text" class="form-control" id="username" placeholder="Username">
                </div>
                <div class="form-group">
                    <label for="password">Password</label>
                    <input type="password" class="form-control" id="password" placeholder="Password">
                </div>
                <div class="form-group">
                    <label for="inputAddress2">Address (Street)</label>
                    <input type="text" class="form-control" id="inputAddress2" placeholder="123 street name">
                </div>
                <div class="form-row row">
                    <div class="form-group col-md-6">
                        <label for="inputCity">City</label>
                        <input type="text" class="form-control" id="inputCity">
                    </div>
                    <div class="form-group col-md-4">
                        <label for="inputState">State</label>
                        <select id="inputState" class="form-control">
                            <option selected>Choose...</option>
                                <option>NSW</option>
                                <option>VIC</option>
                                <option>NT</option>
                                <option>SA</option>
                                <option>QLD</option>
                                <option>WA</option>
                        </select>
                    </div>
                    <div class="form-group col-md-2">
                    <label for="inputZip">Zip</label>
                    <input type="text" class="form-control" id="inputZip">
                    </div>
                </div>
                <button type="submit" class="btn btn-primary mt-4">Update</button>
            </form>
       </div>
    </div>
</template>

<script>

export default{
    name: 'MyAccount',
        setup() {
            
        },
    }
</script>

<style scoped>
    label{
        margin-top: 15px;
        margin-bottom: 10px;
    
    }
</style>
