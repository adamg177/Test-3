<template>
       <form @submit.prevent="submit">
        <br><br><br><br>
            
      <br><br><br>  
      <center><h1 class="h3 mb-3 fw-normal">Please register</h1></center>

      <input   class="form-control" placeholder="Your Name or Nick" required>

      <input  type="email" class="form-control" placeholder="Email" required>

      <input  type="password" class="form-control" placeholder="Password">

      
      <button class="w-100 btn btn-lg btn-primary" type="submit">Sumbit</button>
    
    </form>
</template>

<script>
    export default{
        name: "Register"
    }
 </script>
