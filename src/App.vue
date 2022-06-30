<template>
  <div>
    <router-link to="/movies" class="text-white">Movies</router-link>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>
