<template>
     <nav class="navbar navbar-expand-md navbar-dark bg-dark mb-4">
        <div class="container-fluid">
          <router-link to="/Home" class="navbar-brand"> Home</router-link>
          
          <div >
            <ul class="navbar-nav me-auto mb-2 mb-md-0">
              <li class="nav-item">
                <router-link to="/login" class="nav-link active">Login</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/register" class="nav-link active">Register</router-link>
              </li>
              <li class="nav-item">
              <a class="nav-link active"  href="https://github.com/adamg177/TrelloClone">Project Github</a>
              </li>
            </ul>
            
          </div>
        </div>
      </nav>
</template>

<script>
    export default{
        name: "Navigation"
    }
    </script>
   

   