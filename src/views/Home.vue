<template>
  <div class="home">
    <div class="container">
      <h1 class="home__title">Shomurodov (๑╹ω╹๑)</h1>
      <div class="home__text">
        <p>
          Lorem ipsum dolor sit amet, <a href="#!">Telegram</a> consectetur
          adipisicing elit. Recusandae eveniet dicta consequuntur doloremque
          quis odio cumque inventore
        </p>
        <p align="center">
          Sehr yuz berishi uchun ` ⌘ + K ` yoki ` Alt + K ` tugmalarini bosing.
          Agarda ushbu usul ish bermasa, yuqoridagi ` ⌘ ` tugmasi orqali
          harakatni davom ettirishingiz mumkin...
        </p>
      </div>
    </div>
  </div>
</template>
<style scoped>
.home__title {
  font-size: 40px;
  font-weight: 600;
  background: var(--title-gradient);
  background-size: 300%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: title-animation 10s ease-in-out infinite;
  -moz-animation: title-animation 10s ease-in-out infinite;
  -webkit-animation: title-animation 10s ease-in-out infinite;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  margin-bottom: 33px;
}
.home__text p {
  line-height: 1.9;
  color: var(--article-color);
  margin-top: 2em;
}
.home__text p a {
  color: var(--fg);
  border-bottom: 1px dotted var(--gray);
}
.home__text p a:hover {
  color: var(--gray);
}
/* home title animation  */
@keyframes title-animation {
  0% {
    background-position: 0 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0 50%;
  }
}
</style>
