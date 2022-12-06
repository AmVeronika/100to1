<template>
<div class="header">
  <img class="header__logo"
       src="../assets/img/logo-lib.jpg" alt="">
  <img class="header__img"
    src="../assets/img/logo-110k1.png" alt="">
</div>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style lang="scss">
.header {
  text-align: center;
  background: $gray-dark;
  position: relative;
  &__logo {
    height: 100%;
  }
  &__img {
    position: absolute;
    width: 75px;
    bottom: -37px;
    right: 20%;
    z-index: 5;
  }
}
</style>