<template>
<section>
  <form method="POST" action="#">

    <h2>Login</h2>

    <label>
      {{ $dico.form.login.usernameLabel }}
      <input type="text" :placeholder="$dico.form.login.usernamePlaceholder" />
    </label>

    <label>
      {{ $dico.form.login.passwordLabel }}
      <input type="password" :placeholder="$dico.form.login.passwordPlaceholder" />
    </label>

    <button type="submit">{{ $dico.form.login.submitLabel }}</button>

  </form>
</section>

</template>

<script>
export default {}
</script>

<style>
body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  
  font-size: 16px;

  margin: 0;
  padding: 0;
}

* {
  box-sizing: border-box;
}

#app {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

section {
  width: 100%;
  max-width: 460px;
  padding: 2rem;
}

form {
  border-radius: 1rem;
  background: rgb(238, 188, 96);
  padding: 1rem;
}

label, input, button {
  display: block;
  color: #2c3e50;
  width: 100%;
}

label {
  margin-bottom: 1rem;
}

input, button {
  background: #fefefe;
  border: 2px solid rgb(206, 163, 83);
  border-radius: 1rem;
  padding: 1rem .5rem;
}

input:focus, button:focus {
  outline: none;
  border-color: #2c3e50
}

input {
  width: 100%;
}
</style>
