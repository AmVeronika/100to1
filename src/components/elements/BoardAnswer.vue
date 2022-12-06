<template>
  <div
    class="board-answer"
    @mousedown="
      (openBoard = !openBoard), calculationOfPoints(openBoard, points, $event)
    "
  >
    <transition name="mode-fade" mode="out-in">
      <div v-if="!openBoard" key="off" class="board-answer__start df-row-c-c">
        <p>{{ number }}</p>
      </div>
      <div v-else key="on" class="board-answer__end df-row-sb-c gap10">
        <p>{{ answer }}</p>
        <p>{{ points }}</p>
      </div>
    </transition>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "board-answer",
  props: {
    number: {
      type: String,
    },
    answer: {
      type: String,
    },
    points: {
      type: String,
    },
    coefficient: {
      type: Number,
      default: 1,
    },
  },
  data() {
    return {
      openBoard: false,
      on: false,
    };
  },
  computed: {
    ...mapGetters(["getTeam"]),
  },
  methods: {
    ...mapMutations(["setFundPoints"]),
    cmenu() {
      return false;
    },
    calculationOfPoints(openBoard, points, event) {
      if (event.which === 3) {
        document.oncontextmenu = this.cmenu;
      }
      if (event.which === 1) {
        if (openBoard) {
          if (this.getTeam !== "3") {
            this.setFundPoints(points, this.coefficient);
          }
        } else {
          if (this.getTeam !== "3") {
            this.setFundPoints(-points, this.coefficient);
          }
        }
      }
    },
  },
};
</script>

<style lang="scss">
.board-answer {
  color: $white;
  font-size: 26px;
  height: 50px;
  background: $gray;

  &__start {
    border: 1px solid $blue-pressed;
    text-align: center;
    background: $blue;
    padding: 5px;
    height: inherit;
  }

  &__end {
    border: 1px solid $green;
    background: $green-pressed;
    padding: 5px;
    height: inherit;
  }
}

.mode-fade-enter-active,
.mode-fade-leave-active {
  transition: opacity 0.5s ease;
}

.mode-fade-enter-from,
.mode-fade-leave-to {
  opacity: 0;
}
</style>
