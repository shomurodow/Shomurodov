<template>
  <div class="edit container">
    <form @submit.prevent class="edit__form">
      <div class="form__inputs">
        <input
          type="text"
          class="inputTitle"
          placeholder="Enter title"
          v-model="data.title"
        />
        <input
          type="text"
          class="inputDesc"
          placeholder="Enter description"
          v-model="data.desc"
        />
        <input
          type="text"
          class="inputBg"
          placeholder="Enter image link"
          v-model="data.bg"
        />
      </div>
      <div class="form__btn-wrap">
        <button class="form__btn" @click="postData">send</button>
      </div>
    </form>
  </div>
  <div class="music">
    <div class="container">
      <div class="music__title">List of collected musics</div>
      <div class="music__cards">
        <div
          href="#!"
          class="card"
          v-for="music in musics"
          :key="music"
          :style="{ 'background-image': 'url(' + music.bg + ')' }"
        >
          <div class="card__text">
            <p class="card__title">{{ music.title }}</p>
            <p class="card__desc">{{ music.desc }}</p>
          </div>
          <div class="api__buttons">
            <button @click="deleteData(music.id)">Delete</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mainKey } from "@/assets/api.js";
export default {
  data() {
    return {
      data: {
        title: null,
        desc: null,
        bg: null,
      },
      musics: null,
      key: mainKey,
    };
  },
  methods: {
    postData() {
      let inputTitle = document.querySelector(".inputTitle");
      let inputDesc = document.querySelector(".inputDesc");
      let inputBg = document.querySelector(".inputBg");
      if (
        inputTitle.value.length <= 3 ||
        inputDesc.value.length <= 3 ||
        inputBg.value.length <= 3
      ) {
        inputTitle.style.borderColor = "red";
        inputDesc.style.borderColor = "red";
        inputBg.style.borderColor = "red";
      } else {
        this.axios
          .post(`https://${this.key}.mokky.dev` + "/music", this.data)
          .then((res) => {
            window.location.reload();
          })
          .catch((err) => {
            console.log("nimadir xato buvoti", err);
          });
      }
    },
    deleteData(id) {
      this.axios
        .delete(`https://${this.key}.mokky.dev` + `/music/${id}`)
        .then((res) => {
          console.log(res);
          window.location.reload();
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted() {
    this.axios
      .get(`https://${this.key}.mokky.dev` + "/music")
      .then((res) => {
        this.musics = res.data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>
<style scoped>
.form__inputs {
  display: grid;
  gap: 20px;
  margin-bottom: 40px;
}
.edit__form input {
  height: 50px;
  padding: 0 20px;
  border: 1px solid rgba(255, 255, 255, 0.432);
  border-radius: var(--radius);
}
.form__btn-wrap button {
  width: 100%;
  height: 40px;
  background: white;
  color: black;
  border-radius: var(--radius);
}

/* musics  */
.music {
  margin-top: 70px;
  padding-bottom: var(--small-gap);
}
.music__title {
  margin-bottom: 33px;
  font-size: 2.4rem;
  font-weight: 600;
}
.music__cards {
  display: grid;
  gap: 2rem;
}
.card {
  width: 100%;
  height: 224px;
  background-size: cover;
  background-position: center;
  border-radius: var(--radius);
  overflow: hidden;
  position: relative;
}
.card::before {
  content: "";
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.1);
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  transition: all 0.3s ease-in;
}
.card:hover::before {
  transition: background 0.3s ease-in-out;
  background: rgba(0, 0, 0, 0.678);
}

.card:hover .card__text {
  opacity: 1;
  transform: translateY(0);
}
.card__text {
  position: absolute;
  right: 2rem;
  left: 2rem;
  bottom: 3.5rem;
  z-index: 2;
  opacity: 0;
  transform: translateY(10%);
  transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
}

.card__title {
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  /* font style  */
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: var(--gap);
  color: white;
}
.card__desc {
  font-size: 1.125rem;
  font-size: 500;
  color: #eaeaea;
}
@media (max-width: 730px) {
  .card__text {
    left: 1rem;
    right: 1rem;
  }
  .card__title {
    margin-bottom: unset;
  }
}

/* api butons  */
.api__buttons {
  width: 100%;
  position: absolute;
  bottom: 10px;
  left: 0;
  right: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
}
.api__buttons button {
  display: grid;
  place-items: center;
  width: 100px;
  height: 30px;
  background-color: rgba(0, 0, 0, 0.527);
  border-radius: var(--radius);
}
.api__buttons button:hover {
  border-bottom: 1px solid white;
  background-color: rgba(0, 0, 0, 0.459);
}
</style>
