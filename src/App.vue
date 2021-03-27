<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>{{ message }}</h1>
    <p>{{ 'Hola' + 'Mundo' }}</p>
    <p v-show="showValue.show">{{ showValue.text }}</p>
    <hr>
    <input v-model="name" type="text"><br>
    <input v-model="lastName" type="text">
    <p>{{ name + " " + lastName }}</p>
    <a :href="link">Link a YouTube</a>
    <br>
    <button v-on:click="format">Format</button>
    <p>{{ formatedName }}</p>
    <!-- <p>{{ fullName }}</p> -->
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      message: 'Hello world in Vue.js',
      showValue: {
        show: true,
        text: "Hola, estoy desarrollando con Vue.js :)"
      },
      name: "",
      lastName: "",
      formatedName: " ",
      link: "https://www.youtube.com"
    }
  },
  methods: {
    format(){
      this.formatedName = this.name.split(" ").join("-");
    }
  },

  computed: {
    fullName() {
      return this.name + ", " + this.lastName;
    }
  },

  watch: {
    name(newVal, oldVal) {
      console.log(newVal, oldVal);
    }
  }

}
</script>

<style>

</style>
