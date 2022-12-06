<template>
  <form class="answer-sheet__form">
    <div v-for="answer in 5" :key="answer" class="answer-sheet__line">
      <input type="text" />
      <answer-sheet-quantity/>
    </div>
  </form>
</template>

<script>
import AnswerSheetQuantity from "./AnswerSheetQuantity";

export default {
  name: "AnswerSheetForm",
  components: {
    AnswerSheetQuantity,
  },
  data() {
    return {
      value: 0,
    };
  },
  mounted() {},
  computed: {},
  methods: {
  },
};
</script>

<style lang="scss">
.answer-sheet {
  &__form {
    position: absolute;
    top: 15px;
    bottom: 15px;
    left: 35px;
    right: 15px;
    display: flex;
    flex-direction: column;
    gap: 25px;
  }
  &__line {
    display: flex;
    gap: 5%;
    input {
      border-bottom: 1px black solid;
      background: transparent;
      font-size: 24px;
      padding: 3px 15px;
    }
    input:first-child {
      width: 75%;
    }
    input:last-child {
      width: 20%;
    }
  }
}
</style>
