<template>
    <section class="mx-48 my-8 flex">
      <div class="w-1/4 mr-5">
         <img
            :src="details.medium_cover_image"
            :alt="details.title"
            class="w-full border-4 border-white mb-2"
          />
        <button
          class="w-full bg-green-500 rounded py-2 mb-2 text-white text-xl font-bold"
        >
          <i class="fa-solid fa-download text-black"></i>
          Download
        </button>
        <button
          class="w-full bg-cyan-400 rounded py-2 text-white text-xl font-bold"
        >
          Watch Now
        </button>
      </div>
      <div class="w-2/4 px-12 ml-6">
        <h1 class="text-4xl text-white font-bold pb-5">
         {{details.title}}
        </h1>
        <p class="text-white text-sm font-bold">{{details.year}}</p>
        <p class="text-white font-bold">{{details.genres}}</p>
        <div class="flex items-center">
          <p class="text-white font-bold italic mr-2">Available in:</p>
          <p class="text-white text-xs border-[1px] border-white px-2 mr-2">
            2160p.WEB
          </p>
        </div>
        <p class="text-white text-sm my-2 font-semibold">
          WEB: same quality as BlueRay, but ripped earlier from a streaming
          service
        </p>
        <p class="text-white text-sm mb-4 font-semibold">
          BlueRay estimated Date:
          <span class="text-green-500 font-bold pl-2">{{details.date_uploaded}}</span>
        </p>
        <button
          class="rounded py-2 px-4 text-white text-xs border-[1px] border-white font-bold my-4"
        >
          <i class="fa-solid fa-download text-green-500 pr-2"></i>
          Request Subtitles
        </button>
        <div class="flex items-center">
          <i class="fa-solid fa-heart text-green-500 text-2xl mr-8"></i>
          <p class="text-white text-xl font-bold px-2 mr-2">{{details.like_count}}</p>
        </div>
        <div class="flex items-center">
          <i class="fa-solid fa-popcorn"></i>
          <i class="fa-solid fa-heart text-green-500 text-2xl mr-8"></i>
          <p class="text-white text-xl font-bold px-2 mr-2">86% Critics</p>
        </div>
        <div class="flex items-center">
          <i class="fa-solid fa-people-group text-green-500 text-2xl mr-8"></i>
          <p class="text-white text-xl font-bold px-2 mr-2">97% - Audience</p>
        </div>
        <div class="flex items-center">
          <i class="fa-solid fa-heart text-green-500 text-2xl mr-8"></i>
          <p class="text-white text-xl font-bold px-2 mr-2">
           {{details.rating}}}<i class="fa-solid fa-star text-green-500 text-xl pb-3 ml-2"></i>
          </p>
        </div>
        <div class="flex items-center mt-8">
          <p class="text-white font-bold italic mr-2">Keyboards:</p>
          <p
            class="text-white font-bold text-xs border-[1px] border-white rounded px-4 py-2 mr-2"
          >
            period drama
          </p>
          <p
            class="text-white font-bold text-xs border-[1px] border-white rounded px-4 py-2 mr-2"
          >
            country house
          </p>
          <p
            class="text-white font-bold text-xs border-[1px] border-white rounded px-4 py-2 mr-2"
          >
            britian
          </p>
        </div>
      </div>
      <div class="w-1/4">
        <p class="pl-3 pb-3 text-xl text-white font-bold">Similar Movies</p>
        <div class="flex mb-3" v-for="suggestion in suggestions" :key="suggestion">
          <img
            class="border-4 border-white ml-3 w-48 h-48"
             :src="suggestion.medium_cover_image"
            :alt="suggestion.title"
          />
          
        </div>
      </div>
    </section>

</template>

<script>
import axios from 'axios'
export default {
  name: "DetailPage",
  data()
  {
      return{
          details:[],
          suggestions:[]
      }
  },
  async mounted()
  {
      let result=await axios.get("https://yts.mx/api/v2/movie_details.json?movie_id=5");
      console.warn("api data",result.data.data.movie)
      this.details=result.data.data.movie


      let response=await axios.get("https://yts.mx/api/v2/movie_suggestions.json?movie_id=5");
      console.warn("api data",response.data.data.movies)
      this.suggestions=response.data.data.movies

      
  },
};
</script>
