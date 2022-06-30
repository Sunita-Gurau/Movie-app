<template>
  <section class="bg-black mx-48 my-8">
    <div class="grid gap-x-8 gap-y-4 grid-cols-5">
      <MovieCard v-for="movie in moviesList" :key="movie.id" :movie="movie" />
    </div>
  </section>
</template>

<script>
import axios from "axios";
import MovieCard from "@/components/MovieCard.vue";
export default {
  name: "MoviesPage",
  components: {
    MovieCard,
  },
  data() {
    return {
      moviesList: [],
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      axios
        .get("https://yts.mx/api/v2/list_movies.json?page=1")
        .then(({ data }) => {
          this.moviesList = data.data.movies;
          console.log(this.moviesList);
        })
        .catch((error) => console.log(error));
    },
  },
};
</script>
