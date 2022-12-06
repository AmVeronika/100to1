<template>
<div class="quest df-col-с gap5">
  <h2 class="quest__name-game"> {{ name }} </h2>
  <h3 class="quest__text"> {{ question }} </h3>
</div>
</template>

<script>
export default {
  name: "quest",
  props: {
    name: String,
    question: String
  }
};
</script>

<style lang="scss">
.quest {
  height: fit-content;
  padding: 15px 25px;
  border:0;
  box-shadow:4px 4px 10px rgba(0,0,0,0.06);
  &__name-game {
    font-size: 30px;
    font-weight: 600;
    color: #efdd00e0;
  }
  &__text {
    font-size: 24px;
    font-weight: 500;
    color: #eaddff;
  }
}
</style>