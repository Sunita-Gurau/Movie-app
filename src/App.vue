<template>
  <div>
    <router-link
      to="/movies/"
      class="text-green-700 text-2xl mx-48 my-8 font-extrabold font-mono"
    >
      YTS Movies</router-link
    >

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>
