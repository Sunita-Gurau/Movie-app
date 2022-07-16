<template>
  <div>
    <div class="flex justify-center items-center my-10">
      <!-- <button
        @click="prev(pageNo)"
        type="button"
        class="px-8 py-3 page bg-black border-[1px] border-white px-3 py-2 font-bold text-base text-white mr-2 rounded focus:outline-none disabled:opacity-25"
        disabled
      >
        Previous
      </button> -->
      <button
        class="px-8 py-3 page bg-black border-[1px] border-white px-3 py-2 font-bold text-base text-white mr-2 rounded"
        @click="prev(pageNo)"
      >
        Previous
      </button>
      <span v-for="(item, index) in new Array(5)" :key="index">
        <button
          class="px-8 py-3 bg-black border-[1px] border-white px-3 py-2 font-bold text-base text-white mr-2 rounded active:bg-green-500 focus:outline-none focus:ring focus:ring-green-500"
          @click="increase(index)"
        >
          {{ index + 1 }}
        </button>
      </span>
      <!-- <button
        class="px-8 py-3 page bg-black border-[1px] border-white px-3 py-2 font-bold text-base text-white mr-2 rounded"
      >
        ...
      </button>
      <span v-for="(item, index) in new Array(3)" :key="index">
        <button
          class="px-8 py-3 page bg-black border-[1px] border-white px-3 py-2 font-bold text-base text-white mr-2 rounded"
          @click="pageIncrease(index)"
        >
          {{ index + 1 }}
        </button>
      </span> -->
      <button
        class="px-8 py-3 page bg-black border-[1px] border-white px-3 py-2 font-bold text-base text-white mr-2 rounded"
        @click="increase(pageNo)"
      >
        Next
      </button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      pageNumber: 1,

      perPage: 20,
    };
  },
  computed: {
    numberPages() {
      return Math.ceil(this.total / this.perPage);
    },
  },
  props: {
    total: {
      required: true,
      type: Number,
    },
    pageNo: {
      required: true,
      type: Number,
    },
  },
  methods: {
    increase(page) {
      this.$emit("pageNoClick", page);
    },
    prev(page) {
      if (this.page == 0) {
        return;
      }
      this.$emit("pageNoDecrease", page);
    },
  },
};
</script>
<!-- <style>
button:active {
  border: green;
  color: green;
}
</style> -->
