<template>
      <input type="number"
             v-model="value"
             @change="setFundPoints(value)" />
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "AnswerSheetForm",
  data() {
    return {
      value: null,
    };
  },
  mounted() {},
  computed: {},
  methods: {
    ...mapMutations(["setFundPoints"]),
  },
};
</script>

<style lang="scss">
</style>
