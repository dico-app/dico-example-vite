<template>

<button @click="$dicoI18n.setLocale($dicoI18n.locales['en-us'])">en-us</button>
<button @click="$dicoI18n.setLocale($dicoI18n.locales['fr-fr'])">fr-fr</button>
{{ $dicoI18n.currentLocal }}

<hr />

<form>
  login

  <label>
    {{ $dico.form.login.usernameLabel }}
    <input type="text" :placeholder="$dico.form.login.usernamePlaceholder" />
  </label>

  <label>
    {{ $dico.form.login.passwordLabel }}
    <input type="text" :placeholder="$dico.form.login.passwordPlaceholder" />
  </label>

  <small>{{$dico.errors.login.usernameNotFound}}</small>
  <small>{{$dico.errors.login.passwordHelper}}</small>
  <small>{{$dico.errors.login.wrongPassword}}</small>
</form>

<hr />

<form @click="alternateLocale">
  signup

  <label>
    {{ $dico.form.signup.usernameLabel }}
    <input type="text" :placeholder="$dico.form.signup.usernamePlaceholder" />
  </label>

  <label>
    {{ $dico.form.signup.passwordLabel }}
    <input type="text" :placeholder="$dico.form.signup.passwordPlaceholder" />
  </label>

  <small>{{$dico.errors.signup.usernameNotFound}}</small>
  <small>{{$dico.errors.signup.passwordHelper}}</small>
  <small>{{$dico.errors.signup.wrongPassword}}</small>
</form>

</template>

<script>
import { useDico } from "./useDico";

export default {
  setup() {
    const { $dico, $dicoI18n } = useDico();
    
    return {
      $dico,
      $dicoI18n
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}

label, input, small {
  display: block
}
</style>
