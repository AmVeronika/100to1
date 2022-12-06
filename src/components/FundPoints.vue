<template>
  <div class="df-col-с">
    <div class="scores"
          @click="runningNumbers">
      <p class="scores__quantity fund-points">
        {{ getFundPoints }}
      </p>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "FundPoints",

  computed: {
    ...mapGetters(["getFundPoints"]),
  },
  methods: {
    ...mapActions(["runningNumbers"]),
  },
};
</script>

<style lang="scss">
.fund-points {
  height: 40px;
  padding: 5px;
  font-size: 30px;
  background: black;
  color: white;
}
</style>
