<template>
  <div id="app">
    <h1 class="center">{{ title }}</h1>
    <section>
      <div class="container">
        <div class="input-group mb-3">
          <input v-model="searchQuery" type="text" class="form-control" placeholder="Buscar canciones">
          <button v-on:click="search" class="btn btn-outline-secondary" type="button">Buscar</button>
        </div>
        {{ searchMessage }}
        <div v-if="tracks.length">
          <ul v-for="t in tracks" :key="t">
            <li>{{ t.artist }}</li>
            <li>{{ t.name }}</li>
          </ul>
        </div>
        <p v-else>Sin resultados.</p>
      </div>
    </section>
    <child></child>    
  </div>
</template>

<script>
import configService from './services/config';
// import
const tracksData = [
    { name: "Foo Fighters", artist: "Everlong" },
    { name: "Smashing Pumpkins", artist: "Zero" },
    { name: "Smashing Pumpkins", artist: "Ava Adore" },
    { name: "Nirvana", artist: "Come As You Are" },
    { name: "Red Hot Chili Peppers", artist: "Californication" },
    { name: "Guns N' Roses", artist: "Welcome to the Jungle" }
];


export default {
  name: 'app',
  data () {
    return {
      title: "App Music",
      searchQuery: "",
      tracks: []
    }
  },
  methods: {
    search() {
      console.log(this.searchQuery);
      this.tracks = tracksData;
    }
  },

  computed: {
    searchMessage() {
      return `Encontrados: ${this.tracks.length}`;
    }
  },

  watch: {

  }

}
</script>

<style>
.center {
  align-content: center;
  text-align: center;
}
</style>
