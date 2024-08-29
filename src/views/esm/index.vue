<template>
  <div>esm</div>
</template>

<script>
import { name, say } from './index';
export default {
  mounted() {
    this.init();
  },
  methods: {
    init() {
      console.log(name);
      say();
    },
  },
};
</script>

<style lang="scss" scoped></style>
