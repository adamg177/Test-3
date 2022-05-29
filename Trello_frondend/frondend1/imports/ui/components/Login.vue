<template>

  <form>


    <br><br><br><br><br>

    <div id="app">

    </div>
    <center>
      <h1 class="h3 mb-3 fw-normal">Sign in</h1>
    </center>
    <center>
      <template>

        <form class="login-form" @submit.prevent="handleSubmit">
          <div>
            <label for="username">Username</label>
            <input id="username" name="username" type="text" placeholder="Username" required v-model="username" />
          </div>
          <br>
          <div>
            <label for="password">Password</label>
            <input id="password" name="password" type="password" placeholder="Password" required v-model="password" />
          </div>
          <br>
          <div>
          <button
          type="submit"
          @click.prevent="register">
          Sign in
         </button>
          </div>
        </form>

      </template>

      <p class="mt-5 mb-3 text-muted">@Create for Student Project</p>

    </center>
    <p class="authors"><strong>Authors Project:</strong><br>Karolina Maciejewska <a
        href="https://github.com/Karo0510">Karolina Github</a> <br>Maciej Morawski <a
        href="https://github.com/MacMarMor">Maciej Github</a><br>Adam Grzesiak <a
        href="https://github.com/adamg177">Adam Github</a></p>


  </form>
</template>

<script>

import Register from '/imports/ui/components/Register.vue';

export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: "",

    };
  },
  methods: {
    handleSubmit(event) {
      Meteor.loginWithPassword(this.username, this.password);
    }
  },
  
  login(){
  this.$router.push('/PageAfterLogin')
  }
}


</script>

<style scoped>
.login-form {
  display: flex;
  flex-direction: column;
  height: 100%;

  justify-content: center;
  align-items: center;
}

.login-form>div {
  margin: 8px;
}

.login-form>div>label {
  font-weight: bold;
}

.login-form>div>input {
  flex-grow: 1;
  box-sizing: border-box;
  padding: 10px 6px;
  background: transparent;
  border: 1px solid rgb(0, 0, 0);
  width: 100%;
  font-size: 1em;
  margin-right: 16px;
  margin-top: 4px;
  border-radius: 0.5cm;
}

.login-form>div>input:focus {
  outline: 0;
}

.login-form>div>button {
  background-color: #ffffff2b;
  border-radius: 0.5cm;
}
</style>