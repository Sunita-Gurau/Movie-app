<template>
  <div class="bg-black mx-48 my-8">
    <VueTailwindPagination
      :current="currentPage"
      :total="total"
      :per-page="perPage"
      @page-changed="pageChange($event)"
    >
    </VueTailwindPagination>
    <section class="my-8">
      <div class="grid gap-x-8 gap-y-4 grid-cols-5">
        <MovieCard v-for="movie in moviesList" :key="movie.id" :movie="movie">
        </MovieCard>
      </div>
    </section>
  </div>
</template>

<script>
import VueTailwindPagination from "@ocrv/vue-tailwind-pagination";
import "@ocrv/vue-tailwind-pagination/styles";

import axios from "axios";
import MovieCard from "@/components/MovieCard.vue";
export default {
  name: "MoviesPage",
  components: {
    MovieCard,

    VueTailwindPagination,
  },
  data() {
    return {
      currentPage: 1,
      total: 4,
      perPage: 20,
      moviesList: [],
    };
  },
  created() {},
  methods: {
    pageChange(pageNumber) {
      this.currentPage = pageNumber;
      this.fetchData();
      this.$router.push({
        path: "/movies",
        query: { page: this.currentPage },
      });
    },
    async fetchData() {
      var response = await axios(`list_movies.json?page=${this.currentPage}`);
      var responseData = response.data.data.movies;
      this.moviesList = responseData;
      this.perPage = response.data.data.limit;
      this.total = response.data.data.movie_count;
    },
  },
  mounted() {
    this.currentPage = this.$route.query.page;
    this.fetchData();
  },
};
</script>
