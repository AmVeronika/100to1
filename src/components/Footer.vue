<template>
  <div class="footer">
    <div class="footer__block">
      <nav class="nav">
        <router-link
          v-for="link in links"
          :key="link.link"
          :to="link.link"
          class="nav__link"
        >
          {{ link.text }}
        </router-link>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      links: [
        {
          link: "/",
          text: "Главная страница",
        },
        {
          link: "/round-one",
          text: "Первый раунд",
        },
        {
          link: "/round-two",
          text: "Второй раунд",
        },
        {
          link: "/round-three",
          text: "Третий раунд",
        },
        {
          link: "/round-four",
          text: "Четвёртый раунд",
        },
        {
          link: "/round-five",
          text: "Пятый раунд",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.footer {
  background: $purple-dark;
  padding-top: 10px;
  z-index: 5;

  &__block {
    display: flex;
    height: 0;
    opacity: 0;
    background: $gray-dark;
    transition: ease-out 0.2s;
  }

  &:hover {
    .footer__block {
      height: 100%;
      opacity: 1;
      transition: ease-out 0.2s;
    }
  }
}

.nav {
  height: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  padding: 0 15px;

  &__link {
    min-width: 60px;
    color: black;
    font-size: 14px;
    font-weight: 600;
    padding: 4px 7px;
    border-radius: 3px;
    background: $gray-btn;
    transition: ease-out 0.2s;
    &:hover {
      transform: scale(1.2);
      transition: ease-out 0.2s;
    }
  }
}
</style>
