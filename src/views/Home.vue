<template>
  <div class="home">
    <video
      src="../assets/video/100video.mp4"
      class="home__video"
      controls
      loop
    ></video>
    <router-link to="round-one" class="nav__link home__link"
      >Поехали</router-link
    >
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
};
</script>
<style lang="scss">
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  position: relative;
  &__video {
    width: 66vw;
  }
  &__link {
    position: absolute;
    top: 91%;
    left: 43%;
    color: #c2cfe0;
    background: #fc4747;
    min-width: 100px;
    padding: 25px;
    opacity: 0;
    transition: ease-out 0.2s;
  }
  &:hover {
    .home__link {
      opacity: 1;
      transition: ease-out 1.7s;
    }
  }
}
</style>
