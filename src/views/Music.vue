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
export default {
  data() {
    return {
      musics: [
        {
          title: "Something Comforting",
          desc: "Porter Robinson (Official Music Video)",
          bg: "https://res.cloudinary.com/dsdlhtnpw/image/fetch/q_60,w_1000/https%3A%2F%2Fi.ytimg.com%2Fvi%2F-C-2AqRD8io%2Fmaxresdefault.jpg",
        },
        {
          title: "Fullmoon Lullaby",
          desc: "Porter Robinson (Official Music Video)",
          bg: "https://res.cloudinary.com/dsdlhtnpw/image/fetch/q_60,w_1000/https%3A%2F%2Fi.ytimg.com%2Fvi%2FC39xz8IZ9Fs%2Fmaxresdefault.jpg",
        },
        {
          title: "Something Comforting",
          desc: "Porter Robinson (Official Music Video)",
          bg: "https://res.cloudinary.com/dsdlhtnpw/image/fetch/q_60,w_1000/https%3A%2F%2Fi.ytimg.com%2Fvi%2FC39xz8IZ9Fs%2Fmaxresdefault.jpg",
        },
        {
          title: "Something Comforting",
          desc: "Porter Robinson (Official Music Video)",
          bg: "https://res.cloudinary.com/dsdlhtnpw/image/fetch/q_60,w_1000/https%3A%2F%2Fi.ytimg.com%2Fvi%2FC39xz8IZ9Fs%2Fmaxresdefault.jpg",
        },
      ],
    };
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
  background-image: url();
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
}
.card:hover::before {
  background: rgba(0, 0, 0, 0.3);
  transition: background 0.3s ease-in-out;
}

.card:hover .card__text {
  opacity: 1;
  transform: translateY(0);
}
.card__text {
  position: absolute;
  left: 2rem;
  bottom: 2rem;
  z-index: 2;
  opacity: 0;
  transform: translateY(10%);
  transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
}

.card__title {
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
</style>
