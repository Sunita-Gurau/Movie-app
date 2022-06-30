<template>
  <section class="bg-black mx-48 my-8">
    <div class="grid gap-x-8 gap-y-4 grid-cols-5">
      <MovieCard
        msg="My name is sunita"
        :title="moviesList.title"
        :image="moviesList.image"
        :rating="moviesList.rating"
        :genres="moviesList.genres"
        :id="moviesList.id"
        :year="moviesList.year"
      />
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
        .get("https://yts.mx/api/v2/list_movies.json?page=")
        .then(({ response }) => (this.moviesList = response.data.data.movies))
        .catch((error) => console.log(error));
    },
  },
};
</script>
