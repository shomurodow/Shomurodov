<template>
  <div class="command" v-if="showCommand">
    <div class="command__wrapper">
      <div class="command__search">
        <input
          type="text"
          placeholder="Type a command or search..."
          v-model="search"
        />
      </div>
      <ul class="search__list">
        <li class="list__wrap" v-for="item of filteredCommands" :key="item">
          <label class="list__label">{{ item.label }}</label>
          <ul class="list">
            <li
              v-for="listItem in item.list.filter((listItem) =>
                listItem.title.toLowerCase().includes(search)
              )"
              :key="listItem.title"
            >
              <router-link
                :to="listItem.path"
                class="list__link"
                :target="listItem.target"
              >
                <div class="list__right">
                  <div class="list__icon">
                    <svg
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                      fill="currentColor"
                    >
                      <path :d="listItem.icon"></path>
                      <path :d="listItem.path2"></path>
                    </svg>
                  </div>
                  {{ listItem.title }}
                </div>
                <div class="list__shortcuts">
                  <kbd v-for="keys in listItem.shortcuts" :key="keys.key">{{
                    keys.key
                  }}</kbd>
                </div>
              </router-link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <div class="remove__command" @click="commandRemove"></div>
  </div>
</template>

<script>
export default {
  props: {
    showCommand: Boolean,
    commandRemove: Function,
  },
  data() {
    return {
      search: "",
      commands: [
        {
          label: "Blog",
          list: [
            {
              icon: "M20.108 4.222l.655-.696c.31-.33.319-.79.01-1.1l-.21-.226c-.282-.292-.737-.254-1.028.047l-.665.677 1.238 1.298zm-10.474 9.78l1.774-.799 8.027-8.295-1.247-1.27-8.017 8.296-.82 1.768c-.072.16.11.376.283.3zM5.857 21h10.684c1.629 0 2.584-.978 2.584-2.916V7.617L17.66 9.131v8.878c0 .978-.518 1.477-1.146 1.477H5.876c-.91 0-1.41-.499-1.41-1.477V7.335c0-.978.5-1.486 1.41-1.486h7.871l1.465-1.514H5.857C3.955 4.335 3 5.313 3 7.25v10.834C3 20.031 3.955 21 5.857 21z",
              path: "/blog",
              title: "Blog",
              shortcuts: [{ key: "G" }, { key: "B" }],
            },
          ],
        },
        {
          label: "Navigation",
          list: [
            {
              icon: "M20 11.603c0-.335-.147-.687-.376-.907l-5.303-5.304c-.262-.261-.572-.392-.867-.392-.727 0-1.209.498-1.209 1.16 0 .376.155.662.384.883l1.863 1.863 1.684 1.56-1.757-.097H5.283c-.768 0-1.283.498-1.283 1.234 0 .735.515 1.225 1.283 1.225h9.136l1.765-.09-1.692 1.553-1.863 1.855c-.22.229-.384.515-.384.883 0 .662.482 1.168 1.21 1.168.294 0 .596-.13.857-.384l5.312-5.311c.229-.221.376-.572.376-.9z",
              title: "Home",
              shortcuts: [{ key: "G" }, { key: "H" }],
              path: "/",
            },
            {
              icon: "M20 11.603c0-.335-.147-.687-.376-.907l-5.303-5.304c-.262-.261-.572-.392-.867-.392-.727 0-1.209.498-1.209 1.16 0 .376.155.662.384.883l1.863 1.863 1.684 1.56-1.757-.097H5.283c-.768 0-1.283.498-1.283 1.234 0 .735.515 1.225 1.283 1.225h9.136l1.765-.09-1.692 1.553-1.863 1.855c-.22.229-.384.515-.384.883 0 .662.482 1.168 1.21 1.168.294 0 .596-.13.857-.384l5.312-5.311c.229-.221.376-.572.376-.9z",
              title: "Portfolio",
              shortcuts: [{ key: "G" }, { key: "P" }],
              path: "/portfolio",
            },
            {
              icon: "M20 11.603c0-.335-.147-.687-.376-.907l-5.303-5.304c-.262-.261-.572-.392-.867-.392-.727 0-1.209.498-1.209 1.16 0 .376.155.662.384.883l1.863 1.863 1.684 1.56-1.757-.097H5.283c-.768 0-1.283.498-1.283 1.234 0 .735.515 1.225 1.283 1.225h9.136l1.765-.09-1.692 1.553-1.863 1.855c-.22.229-.384.515-.384.883 0 .662.482 1.168 1.21 1.168.294 0 .596-.13.857-.384l5.312-5.311c.229-.221.376-.572.376-.9z",
              title: "Contact",
              shortcuts: [{ key: "G" }, { key: "C" }],
              path: "/contact",
            },
          ],
        },
        {
          label: "Collection",
          list: [
            {
              icon: "M12 3c-4.972 0-9 4.028-9 9s4.028 9 9 9 9-4.028 9-9-4.028-9-9-9zm-5.806 9H5.032A6.974 6.974 0 0112 5.032v1.162A5.814 5.814 0 006.194 12zM12 15.484a3.485 3.485 0 010-6.968 3.485 3.485 0 010 6.968zm0-4.645a1.16 1.16 0 100 2.322 1.16 1.16 0 100-2.322z",
              title: "Music",
              shortcuts: [{ key: "G" }, { key: "M" }],
              path: "/music",
            },
          ],
        },
      ],
    };
  },
  mounted() {
    window.addEventListener("keydown", this.handleKeyDown);
  },
  methods: {},
  computed: {
    filteredCommands() {
      const search = this.search.toLowerCase();
      const filteredData = this.commands.filter((command) => {
        return command.list.some((item) =>
          item.title.toLowerCase().includes(search)
        );
      });

      let list = document.querySelector(".search__list");
      if (list) {
        if (filteredData.length <= 2) {
          list.style.height = "max-content";
        } else {
          list.style.height = "300px";
        }
      }
      return filteredData;
    },
  },
};
</script>

<style scoped>
/* responsive  */

.command {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 990;
  height: 100%;
}
.command__wrapper {
  max-width: 690px;
  margin: 0 auto;
  position: relative;
  top: calc(30px + var(--big-gap) + (3 * var(--gap-double)));
  z-index: 1000;
  overflow: hidden;
  background-color: var(--bg);
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.4), 0 0 60px rgba(0, 0, 0, 0.5),
    inset 0 1px 0 rgba(0, 0, 0, 0.6);
  border: 1px solid var(--fg);
  border-radius: var(--radius);
}
/* command search */
.command__search {
  padding: var(--padding);
}
.command__search input {
  width: 100%;
  height: 60px;
  user-select: none;
}
/* search list  */
.search__list {
  height: 300px;
  overflow-y: scroll;
  border-top: 1px solid var(--lighter-gray);
}
.search__list::-webkit-scrollbar {
  width: 0;
}
.search__list::-webkit-scrollbar-thumb {
  background-color: var(--lightest-gray);
}
.list__label {
  min-height: 5px;
  display: flex;
  align-items: center;
  padding: var(--padding);
  padding-top: 4px;
  padding-bottom: 4px;
  background: var(--lighter-gray);
  color: var(--gray);
  font-size: 0.875rem;
}
.list__link {
  min-height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--padding);
  cursor: pointer;
}
.list li:hover {
  background-color: var(--lightest-gray);
}

.list li:hover .list__right {
  color: var(--fg);
}
.list__right {
  display: flex;
  align-items: center;
  gap: var(--gap);
  font-size: 1rem;
  color: var(--gray);
}
.list__icon {
  margin-top: 3px;
}

.list__shortcuts {
  display: flex;
  align-items: center;
  gap: 5px;
}

.list__shortcuts kbd {
  width: 24px;
  height: 24px;
  display: grid;
  place-items: center;
  font-size: 15px;
  font-weight: 200;
  color: var(--gray);
  background: var(--lighter-gray);
  border-radius: 5px;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
}
/* remove command  */
.remove__command {
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  --overlay: rgba(0, 0, 0, 0.6);
  background: var(--overlay);
}
@media (max-width: 960px) {
  .command__wrapper {
    top: 140px !important;
    border-radius: 15px !important;
  }
}
</style>
