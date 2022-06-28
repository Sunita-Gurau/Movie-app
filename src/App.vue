<template>
  <MovieCard></MovieCard>
  <DetailPage></DetailPage>
</template>

<script>
import MovieCard from './components/MovieCard.vue'
import DetailPage from './components/DetailPage.vue'

export default {
  name: 'App',
  components: {
     MovieCard,
     DetailPage
  }
}
</script>


