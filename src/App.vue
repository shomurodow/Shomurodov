<template>
  <div>
    <Header />
  </div>
  <router-view />
</template>
<script>
import Command from "./components/Command.vue";
import Header from "./components/Header.vue";

export default {
  components: {
    Header,
    Command,
  },

  methods: {},
};
</script>

<style></style>
