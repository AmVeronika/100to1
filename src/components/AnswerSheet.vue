<template>
  <div class="answer-sheet">
    <img src="../assets/img/bloknot.png" alt="" class="answer-sheet__img">
    <slot></slot>
  </div>
</template>

<script>

export default {
  name: "AnswerSheet",
  props: {
    lastProps: Number,
  },
  data() {
    return {
    };
  },
  mounted() {
  },
  computed: {
  },
  methods: {
  },
};
</script>

<style lang="scss">
.answer-sheet {
  width: 100%;
  max-width: 40vw;
  height: 40vw;
  position: relative;
  &__img {
    width: 100%;
    height: 100%;
  }
}
</style>
