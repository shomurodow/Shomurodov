<template>
  <Transition>
    <Command :showCommand="show" :commandRemove="removeCommand" />
  </Transition>
  <header class="header">
    <div class="container">
      <a href="#!" class="header__logo"><img src="/img/logo.svg" /></a>
      <button class="header__command" @click="show = true">
        <img src="/img/icons/command-icon.svg" />
      </button>
      <span class="header__title">{{ currentRouteName }}</span>
    </div>
  </header>
</template>
<script>
import Command from "@/components/Command.vue";
export default {
  components: {
    Command,
  },
  data() {
    return {
      command: false,
      show: false,
      scrollEnabled: true,
      scrollPosition: 0,
    };
  },
  mounted() {
    window.addEventListener("keydown", this.handleKeyDown);
  },

  methods: {
    // openCommand() {
    //   let body = document.querySelector("body");
    //   if ((this.show = true)) {
    //     body.style.overflowY = "hidden";
    //   }
    // },
    removeCommand() {
      this.show = false;
    },
    handleKeyDown(event) {
      if (event.key === "g") {
        this.waitingForKeyG = true;
      } else if (this.waitingForKeyG) {
        if (event.key === "h") {
          this.$router.push("/");
        } else if (event.key === "c") {
          this.$router.push("/contact");
        } else if (event.key === "b") {
          this.$router.push("/blog");
        }
        this.waitingForKeyG = false;
      }
    },
  },
  computed: {
    currentRouteName() {
      return this.$route.name;
    },
  },
};
</script>
<style>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.2s ease !important;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
.header {
  margin: 60px 0;
  padding: 10px 0;
  background: var(--pattern);
  backdrop-filter: saturate(180%) blur(20px);
  animation: header-animation 80s linear infinite;
}
.header .container {
  display: flex;
  align-items: center;
  gap: 10px;
}
.header__command,
.header__logo {
  width: 50px;
  height: 50px;
  display: grid;
  place-items: center;
  background: var(--bllury-gray);
  border-radius: var(--radius);
}
.header__logo img {
  width: 38px;
}
.header__command img {
  width: 41px;
}

.header__command:hover,
.header__logo:hover {
  background-color: var(--light-gray);
}
.header__title {
  margin-left: 0.5rem;

  font-size: 16px;
  color: var(--gray-alpha);
  text-transform: capitalize;
}
/* header animation  */
@keyframes header-animation {
  from {
    background-position: 0 0;
  }
  to {
    background-position: -1512px -1512px;
  }
}
</style>
