<template>
  <header class="header">
    <div class="container">
      <a href="#!" class="header__logo"><img src="/img/logo.svg" /></a>
      <button class="header__command">
        <img src="/img/icons/command-icon.svg" />
      </button>
      <span class="header__title">Home</span>
    </div>
  </header>
</template>
<style>
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
.header__command img,
.header__logo img {
  width: 35px;
}
.header__command:hover,
.header__logo:hover {
  background-color: var(--light-gray);
}
.header__title {
  margin-left: 1rem;
  font-size: 16px;
  color: var(--gray-alpha);
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
