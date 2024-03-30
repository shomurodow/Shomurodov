<template>
  <Header />
  <div class="content">
    <router-view />
  </div>
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
