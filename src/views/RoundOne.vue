<template>
  <div class="round df-row-sb-c gap40">
    <ComandOne />
    <div class="df-col gap5 central-block">
      <fund-points />
      <quest
        :name="getRound.roundOne.nameGame"
        :question="getRound.roundOne.question"
      />
      <board-answer
        v-for="ans in getRound.roundOne.answers"
        :key="ans.answer"
        :number="ans.number"
        :answer="ans.answer"
        :points="ans.points"
      ></board-answer>
    </div>
    <ComandTwo />
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import ComandOne from "@/components/ComandOne";
import ComandTwo from "@/components/ComandTwo";
import FundPoints from "../components/FundPoints";

export default {
  name: "RoundOne",
  components: {
    ComandOne,
    ComandTwo,
    FundPoints,
  },
  mounted() {
    this.teamSelection("3");
  },
  computed: {
    ...mapGetters(["getRound"]),
  },
  methods: {
    ...mapMutations(["teamSelection"]),
  },
};
</script>

<style lang="scss">
.round {
  &__answer {
  }
}
</style>
