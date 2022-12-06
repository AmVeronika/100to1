<template>
  <div class="app">
    <Header></Header>
    <main class="main df-row-c-c">
      <router-view/>
    </main>
    <Footer></Footer>
  </div>
</template>
<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default {
  components: {
    Header,
    Footer,
  },
};
</script>
<style lang="scss">
.app {
  position: relative;
  height: 100vh;
  display: grid;
  grid-template-rows: 10% 80% 10%;
}

.main {
  background: $purple-dark;
  padding: 20px;
  &__label {
    align-self: self-end;
  }
}
</style>
