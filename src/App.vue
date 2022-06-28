<template>
  <MovieCard></MovieCard>
</template>

<script>
import MovieCard from './components/MovieCard.vue'

export default {
  name: 'App',
  components: {
     MovieCard
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
