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
          <i
            class="fa-solid fa-star text-green-500 md:text-xl lg:text-3xl sm:text-xs md:pb-3 sm:pb-px"
          ></i>
          <p class="text-white md:text-xl lg:text-2xl sm:text-xs font-bold">
            {{ movie.rating }}
          </p>
          <p
            v-for="genre in movie.genres"
            :key="genre"
            class="text-white lg:text-2xl md:text-xl sm:text-xs font-bold md:pt-1 md:mb-1 sm:pt-px sm:mb-px lg:pt-2 lg:mb-2"
          >
            {{ genre }}
          </p>
          <!-- <p class="text-white text-2xl font-bold mb-5">
            {{ movie.genres[1] }}
          </p> -->
          <router-link
            :to="'/movies/' + movie.id"
            class="bg-green-500 text-white md:text-sm sm:text-xs md:px-2 md:py-2 sm:px-0.5 sm:py-0.5 md:mt-5 sm:mt-px font-semibold rounded"
            >View Details</router-link
          >
        </div>
      </div>
    </div>

    <!-- slot -->
    <div class="pl-2">
      <p class="text-white lg:text-lg sm:text-xs font-bold truncate">
        <TitleYear>
          ><template v-slot:Title>
            {{ movie.title }}
          </template>
        </TitleYear>
      </p>
      <p class="text-neutral-300 lg:text-sm sm:text-xs">
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
