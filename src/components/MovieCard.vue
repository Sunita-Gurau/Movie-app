<template>
   <section class="">
      <div id="Movie1" class="grid gap-x-8 gap-y-4 grid-cols-5">
        <div>
          <div
            class="border-4 border-white hover:border-green-500 relative group"
          >
            <a href="">
              <img src="https://img.yts.mx/assets/images/movies/13_2010/medium-cover.jpg" alt="movie" />
            </a>
            <div
              class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
            >
              <div
                class="text-center hidden group-hover:block hover:transition-all hover:duration-500 hover:delay-300 hover:ease-in-out"
              >
                <i class="fa-solid fa-star text-green-500 text-3xl pb-3"></i>
                <p class="text-white text-2xl font-bold">7.8</p>
                <p class="text-white text-2xl font-bold pt-5">Action</p>
                <p class="text-white text-2xl font-bold">Comedy</p>
                <button
                  class="bg-green-500 text-white text-sm px-2 py-2 mt-5 font-semibold rounded"
                >
                  View Details
                </button>
              </div>
            </div>
          </div>

          <div class="pl-2">
            <p class="text-white text-lg font-bold truncate">Spider Man</p>
            <p class="text-neutral-300 text-sm">2007</p>
          </div>
        </div>
        
      </div>
    </section>
</template>

<script>
export default {
  name: "MovieCard",
};
</script>