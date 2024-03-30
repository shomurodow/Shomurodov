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
              <a
                :href="listItem.path"
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
              </a>
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
        {
          label: "Social",
          list: [
            {
              icon: "M12 3c-4.973 0-9 4.13-9 9.228 0 4.083 2.576 7.532 6.154 8.754.45.081.618-.196.618-.438 0-.22-.01-.946-.01-1.719-2.262.427-2.847-.565-3.027-1.084-.101-.265-.54-1.084-.923-1.303-.315-.173-.764-.6-.01-.612.708-.011 1.214.67 1.383.946.81 1.396 2.104 1.004 2.621.762.079-.6.315-1.004.574-1.235-2.003-.23-4.095-1.026-4.095-4.556 0-1.003.349-1.834.922-2.48-.09-.23-.404-1.176.09-2.445 0 0 .754-.242 2.475.946a8.159 8.159 0 012.25-.312c.765 0 1.53.104 2.25.312 1.722-1.2 2.475-.946 2.475-.946.495 1.269.18 2.215.09 2.445.574.646.923 1.465.923 2.48 0 3.541-2.104 4.326-4.106 4.556.326.289.607.842.607 1.707 0 1.235-.011 2.227-.011 2.538 0 .242.169.53.619.438a9.036 9.036 0 004.439-3.366A9.402 9.402 0 0021 12.228C21 7.129 16.973 3 12 3z",
              title: "Github",

              path: "https://github.com/shomurodow",
              target: "_blank",
            },
            {
              icon: "M21.45,3.377c-0.485-0.415-1.209-0.492-1.935-0.205c-0.45,0.177-7.501,3.144-14.074,5.911L3.27,9.997c-0.841,0.341-1.267,0.894-1.267,1.641c0,0.523,0.222,1.234,1.278,1.652l3.667,1.467c0.317,0.951,1.053,3.159,1.238,3.746c0.11,0.348,0.388,1.225,1.09,1.43c0.144,0.049,0.294,0.074,0.447,0.074c0.443,0,0.762-0.206,0.918-0.326l2.329-1.97l2.831,2.617C15.91,20.439,16.486,21,17.261,21c0.967,0,1.701-0.805,1.854-1.584c0.083-0.427,2.812-14.129,2.812-14.127C22.172,4.19,21.733,3.62,21.45,3.377z M17.166,18.866l-4.137-3.826l-3.03,2.565c-0.359-1.107-1.301-3.922-1.301-3.922l-0.146-0.439l-4.021-1.608l1.687-0.709c4.299-1.81,11.956-5.033,13.692-5.755C19.533,7.062,17.478,17.379,17.166,18.866z",
              title: "Telegram",
              path2:
                "M16.8,8c-0.125,0-0.294,0.119-0.384,0.175c-1.288,0.803-7.746,4.478-9.517,5.484C7.398,13.859,7.75,14,7.75,14s1.151,3.445,1.39,4.2c0.239,0.756,0.431,0.774,0.431,0.774c0.053,0.023,0.105,0.032,0.153,0.032c0.039,0,0.066-0.014,0.099-0.023L11,14.375c0,0,5.363-5.428,5.686-5.744C16.946,8.378,17,8.289,17,8.201C17,8.084,16.939,8,16.8,8z",
              path: "https://t.me/tamekage",
              target: "_blank",
            },
            {
              icon: "fa-brands fa-instagram",
              title: "Instagram",

              path: "https://www.instagram.com/user333244665654/",
              target: "_blank",
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
