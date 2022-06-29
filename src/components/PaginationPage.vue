<template>
  <div class="text-white mx-48 my-8 flex justify-center items-center">
    <button
      class="bg-black border-[1px] border-white px-3 py-2 font-bold text-base text-white mr-2 rounded curser-pointer"
    >
      &lt;-
    </button>
    <span v-for="(item, index) in new Array(10)" :key="index">
      <button
        class="truncate bg-black border-[1px] border-white px-3 py-2 font-bold text-base text-white mr-2 rounded curser-pointer"
      >
        {{ index + 1 }}
      </button>
    </span>
    <button
      class="bg-black border-[1px] border-white px-3 py-2 font-bold text-base text-white mr-2 rounded curser-pointer"
    >
      -&gt;
    </button>
  </div>
</template>

<script>
export default {
  name: "PaginationPage",
};
</script>
