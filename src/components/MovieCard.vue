<template>
  <div>
    <div class="border-4 border-white hover:border-green-500 relative group">
      <a href="">
        <img :src="`${movie.medium_cover_image}`" :alt="movie.title" />
      </a>
      <div
        class="absolute !top-1/2 !left-1/2 !transform !-translate-x-1/2 !-translate-y-1/2 z-10"
      >
        <div
          class="text-center hidden group-hover:block hover:transition-all hover:duration-500 hover:delay-300 hover:ease-in-out"
        >
          <i class="fa-solid fa-star text-green-500 text-3xl pb-3"></i>
          <p class="text-white text-2xl font-bold">{{ movie.rating }}</p>
          <p
            v-for="genre in movie.genres"
            :key="genre"
            class="text-white text-2xl font-bold pt-2 mb-2"
          >
            {{ genre }}
          </p>
          <!-- <p class="text-white text-2xl font-bold mb-5">
            {{ movie.genres[1] }}
          </p> -->
          <router-link
            :to="'/movie_id/' + movie.id"
            class="bg-green-500 text-white text-sm px-2 py-2 mt-5 font-semibold rounded"
            >View Details</router-link
          >
        </div>
      </div>
    </div>

    <!-- slot -->
    <div class="pl-2">
      <p class="text-white text-lg font-bold truncate">
        <TitleYear>
          ><template v-slot:Title>
            {{ movie.title }}
          </template>
        </TitleYear>
      </p>
      <p class="text-neutral-300 text-sm">
        <TitleYear>
          ><template v-slot:Year>
            {{ movie.year }}
          </template>
        </TitleYear>
      </p>
    </div>
  </div>
</template>

<script>
import TitleYear from "./TitleYear.vue";
export default {
  name: "MovieCard",
  props: {
    movie: {
      required: true,
      type: Object,
    },
  },
  components: { TitleYear },
};
</script>
