<template>
       <form @submit.prevent="submit">
        <br><br><br><br>
            
      <br><br><br>  
      <center><h1 class="h3 mb-3 fw-normal">Please register</h1></center>

      <input v-model="username"  class="form-control" placeholder="Your Name or Nick" required>

      <input v-model="email" type="email" class="form-control" placeholder="Email" required>

      <input v-model="password" type="password" class="form-control" placeholder="Password">

      
      <button class="w-100 btn btn-lg btn-primary" type="submit">Sumbit</button>
    
    </form>
</template>

<script>
    export default{
        name: "Register",
  setup() {
    const data = reactive({
      name: '',
      email: '',
      password: ''
    });

    //2 pobranie zwrotnych danych po rejestracji
    const router = useRouter();

    const submit = async () => {
      console.log(data);
      //wysylanie do backend na adres 8000 metody postrequest, headets z kontentem, wysylanie danych 
      ///await fetch('http://localhost:3030/api/register', {
      ///  method: 'POST',
      /// headers: {'Content-Type': 'application/json'},
      /// body: JSON.stringify(data)
     /// });
      //puszczenie danych na strone logowania
      await router.push('/Login');
    }
    return {
      data,
      submit
    }
  }
}
</script>