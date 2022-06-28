<template>
   <section>
      <div class="grid gap-x-8 gap-y-4 grid-cols-5">
        <div v-for="movie in moviesList" :key="movie">
          <div
            class="border-4 border-white hover:border-green-500 relative group"
          >
            <a href="">
              <img :src="movie.medium_cover_image" :alt="movie.title"/>
            </a>
            <div
              class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
            >
              <div
                class="text-center hidden group-hover:block hover:transition-all hover:duration-500 hover:delay-300 hover:ease-in-out"
              >
                <i class="fa-solid fa-star text-green-500 text-3xl pb-3"></i>
                <p class="text-white text-2xl font-bold">{{movie.rating}}</p>
                <p class="text-white text-2xl font-bold pt-5">{{movie.genres[0]}}</p>
                <p class="text-white text-2xl font-bold">{{movie.genres[1]}}</p>
                <button
                  class="bg-green-500 text-white text-sm px-2 py-2 mt-5 font-semibold rounded"
                >
                  View Details
                </button>
              </div>
            </div>
          </div>

          <div class="pl-2">
            <p class="text-white text-lg font-bold truncate">{{movie.title}}</p>
            <p class="text-neutral-300 text-sm">{{movie.year}}</p>
          </div>
        </div>
        
      </div>
    </section>
</template>

<script>
import axios from 'axios'
export default {
  name: "MovieCard",
  data()
  {
      return{
          moviesList:[]
      }
  },
  async mounted()
  {
      let result=await axios.get("https://yts.mx/api/v2/list_movies.jsonyts.mx");
      console.warn("api data",result.data.data.movies)
      this.moviesList=result.data.data.movies
  }
};
</script>