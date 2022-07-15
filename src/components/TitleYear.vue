<template>
  <div class="pl-2">
    <p class="text-white text-lg font-bold truncate">
      <slot name="Title"></slot>
    </p>
    <p class="text-neutral-300 text-sm"><slot name="Year"></slot></p>
  </div>
</template>
<script>
export default {
  name: "TitleYear",
};
</script>
