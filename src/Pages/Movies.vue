<template>
  <div>
    <NavBar></NavBar>
    <div class="bg-black mx-48 my-8">
      <VSPagination
        v-on:pageNoClick="pageChange($event)"
        v-on:pageNoDecrease="prev($event)"
        :pageNo="pageNumber"
        :total="total"
      ></VSPagination>
      <section class="my-8">
        <div
          class="grid gap-x-8 gap-y-4 lg:grid-cols-5 grid-cols-2 md:grid-cols-3"
        >
          <MovieCard v-for="movie in moviesList" :key="movie.id" :movie="movie">
          </MovieCard>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import MovieCard from "@/components/MovieCard.vue";
import NavBar from "@/components/NavBar.vue";
import VSPagination from "@/components/VSPagination.vue";
export default {
  name: "MoviesPage",
  components: {
    MovieCard,
    VSPagination,
    NavBar,
  },
  data() {
    return {
      moviesList: [],
      total: 20,
      pageNumber: this.$route.query.page ? parseInt(this.$route.query.page) : 1,
    };
  },
  created() {},
  methods: {
    pageChange(page) {
      this.pageNumber = page;
      this.$router.push({
        path: "/movies",
        query: { page: this.pageNumber },
      });
      this.fetchData();
    },
    prev(page) {
      this.pageNumber = page;
      this.$router.push({
        path: "/movies",
        query: { page: this.pageNumber },
      });
      this.fetchData();
    },

    async fetchData() {
      let response = await axios(`list_movies.json?page=${this.pageNumber}`);
      let responseData = response.data.data.movies;
      this.moviesList = responseData;

      this.total = response.data.data.movie_count;
    },
  },
  async mounted() {
    await this.fetchData();
  },
};
</script>
