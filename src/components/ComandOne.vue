<template>
  <div class="df-col-с gap10">
    <div class="scores">
      <p class="scores__quantity">
        {{ getTeamPoints.one }}
      </p>
    </div>
    <tablo-errors :disabled="getTeam !== '1'" />
    <label class="main__label df-col-c">
      <input
        type="radio"
        name="time"
        :value="getTeam"
        v-model="numberComand"
        @input="teamSelection(numberComand)"
      />
      Ход первой команды
    </label>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "ComandOne",
  props: {
    lastProps: Number,
  },
  data() {
    return {
      numberComand: "1",
      pointsOne: Number,
    };
  },
  mounted() {
    if (this.getFundPoints == 0) {
      this.pointsOne = this.getTeamPoints.one;
    } else {
      if (this.getTeam === "1") {
        this.pointsOne = this.getFundPoints;
      } else {
        this.pointsOne = this.getTeamPoints.one;
      }
    }
  },
  computed: {
    ...mapGetters(["getTeam", "getTeamPoints", "getFundPoints"]),
    // eslint-disable-next-line
  },
  methods: {
    ...mapMutations(["teamSelection", "transferringPoints"]),
  },
};
</script>

<style lang="scss"></style>
