<template>
  <div class="round df-row-sb-c gap40">
    <answer-sheet>
      <answer-sheet-form />
    </answer-sheet>
    <fund-points />
    <answer-sheet>
      <answer-sheet-form />
    </answer-sheet>
  </div>
</template>

<script>
import FundPoints from "@/components/FundPoints";
import AnswerSheet from "@/components/AnswerSheet";
import AnswerSheetForm from "@/components/AnswerSheetForm";

export default {
  name: "RoundFive",

  components: {
    AnswerSheet,
    AnswerSheetForm,
    FundPoints,
  },
};
</script>

<style lang="scss"></style>
