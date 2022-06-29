<template>
  <div>
    <router-link to="/movies" style="color: #fff">Movies</router-link>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>
