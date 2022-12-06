<template>
  <div class="df-col-с gap10">
    <div class="scores">
      <p class="scores__quantity">
        {{ getTeamPoints.two }}
      </p>
    </div>
    <tablo-errors :disabled="getTeam !== '2'" />
    <label class="main__label df-col-c">
      <input
        type="radio"
        name="time"
        :value="getTeam"
        v-model="numberComand"
        @input="teamSelection(numberComand)"
      />
      Ход второй команды
    </label>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "ComandTwo",
  data() {
    return {
      numberComand: "2",
      pointsTwo: Number,
    };
  },
  mounted() {
    if (this.getFundPoints == 0) {
      this.pointsTwo = this.getTeamPoints.two;
    } else {
      if (this.getTeam === "2") {
        this.pointsTwo = this.getFundPoints;
      } else {
        this.pointsTwo = this.getTeamPoints.two;
      }
    }
  },
  computed: {
    ...mapGetters(["getTeam", "getTeamPoints", "getFundPoints"]),
  },
  methods: {
    ...mapMutations(["teamSelection"]),
  },
};
</script>

<style lang="scss">
.scores {
  &__quantity {
    background: $white;
    height: 70px;
    width: 140px;
    text-align: center;
    border-radius: 3px;
    padding: 15px;
    font-size: 35px;
    font-weight: 700;
  }
}

.scores {
  &__label {
  }

  &__input {
    height: 70px;
    width: 140px;
    text-align: center;
    border-radius: 3px;
    padding: 15px;
    font-size: 35px;
    font-weight: 700;
  }
}
</style>
