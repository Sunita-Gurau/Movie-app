<template>
  <div>
    <p>{{ msg }}</p>
    <div class="border-4 border-white hover:border-green-500 relative group">
      <a href="">
        <img :src="`image`" :alt="`title`" />
      </a>
      <div
        class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
      >
        <div
          class="text-center hidden group-hover:block hover:transition-all hover:duration-500 hover:delay-300 hover:ease-in-out"
        >
          <i class="fa-solid fa-star text-green-500 text-3xl pb-3"></i>
          <p class="text-white text-2xl font-bold">{{ rating }}</p>
          <p class="text-white text-2xl font-bold pt-5">
            {{ genres[0] }}
          </p>
          <p class="text-white text-2xl font-bold">{{ genres[1] }}</p>
          <router-link
            :to="'/movie/' + movie.id"
            class="bg-green-500 text-white text-sm px-2 py-2 mt-5 font-semibold rounded"
            >View Details</router-link
          >
        </div>
      </div>
    </div>

    <div class="pl-2">
      <p class="text-white text-lg font-bold truncate">{{ title }}</p>
      <p class="text-neutral-300 text-sm">{{ year }}</p>
    </div>
  </div>
</template>

<script>
// import Movies from "@/components/Movies.vue";
export default {
  name: "MovieCard",
  props: ["title", "rating", "genres", "id", "year", "image", "msg"],
};
</script>
