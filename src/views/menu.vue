<template>
  <div>
    <button @click="go">go</button>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    go() {
      this.$router.push({
        path: "about?",
        query: {
          name: "formosa",
        },
      });
    },
  },
};
</script>

<style></style>
