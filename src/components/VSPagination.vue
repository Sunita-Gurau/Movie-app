<template>
  <div>
    <div class="flex justify-center items-center my-10">
      <button
        :disabled="pageNo <= 1"
        class="active:bg-green-500 focus:outline-none focus:ring focus:ring-green-500 px-8 py-3 page bg-black border-[1px] border-white px-3 py-2 font-bold text-base text-white mr-2 rounded disabled:opacity-25"
        @click="prev(pageNo - 1)"
      >
        Previous
      </button>
      <span v-for="(item, index) in new Array(5)" :key="index">
        <button
          :class="[
            'pagination-button',
            pageNo + index == $route.query.page ? 'active' : '',
          ]"
          class="active:!bg-green-500 px-8 py-3 bg-black border-[1px] border-white px-3 py-2 font-bold text-base text-white mr-2 rounded cursor"
          @click="increase(pageNo + index)"
        >
          {{ pageNo + index }}
        </button>
      </span>

      <button
        :disabled="pageNo >= getTotalPageCount"
        class="px-8 py-3 page bg-black border-[1px] border-white px-3 py-2 font-bold text-base text-white mr-2 rounded disabled:opacity-25"
        @click="increase(pageNo + 1)"
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
    getTotalPageCount() {
      return Math.ceil(this.total / this.perPage);
    },
  },
  watch: {
    pageNo: function (value) {
      console.log(value);
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
  mounted() {},
};
</script>
<style>
.pagination-button {
  cursor: pointer;
}
.active {
  background-color: green;
  border: 1px solid #fff;
  cursor: auto;
}
</style>
