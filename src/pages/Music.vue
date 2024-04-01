<template>
  <div class="music">
    <div class="container">
      <div class="music__title">List of collected musics</div>
      <div class="music__cards">
        <a
          href="#!"
          class="card"
          target="_blank"
          v-for="(music, index) in musics"
          :key="index"
          :style="{ 'background-image': 'url(' + music.bg + ')' }"
        >
          <div class="card__text">
            <p class="card__title">{{ music.title }}</p>
            <p class="card__desc">{{ music.desc }}</p>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { mainKey } from "@/assets/api.js";
export default {
  data() {
    return {
      musics: null,
      key: mainKey,
    };
  },
  mounted() {
    this.axios
      .get(`https://${this.key}.mokky.dev` + "/music")
      .then((res) => {
        this.musics = res.data;
      })
      .catch((err) => {
        console.log("nimadir xato buvoti", err);
      });
  },
};
</script>
<style>
.music {
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
  bottom: 2rem;
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
</style>
