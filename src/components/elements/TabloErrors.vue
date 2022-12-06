<template>
  <div class="tablo-errors df-col-с">
    <div class="attempts">
      <p class="attempts__text">{{ quantity }}</p>
    </div>
    <svg
      class="tablo-errors__svg"
      width="145"
      height="94"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g class="layer">
        <rect
          fill="#FF0000"
          height="78.66667"
          id="svg_1"
          stroke="#ff7f00"
          stroke-width="2"
          width="134"
          x="4.94762"
          y="8.12381"
        ></rect>
        <ellipse
          @click="errorCounter($event)"
          class="mistakeLeft"
          cx="72.61429"
          cy="47.45714"
          id="svg_4"
          rx="70.33333"
          ry="44"
          stroke="#ff7f00"
          stroke-dasharray="null"
          stroke-linecap="null"
          stroke-linejoin="null"
          stroke-width="2"
        ></ellipse>
        <line
          fill="none"
          id="svg_6"
          stroke="#ff7f00"
          stroke-dasharray="null"
          stroke-linecap="null"
          stroke-linejoin="null"
          stroke-width="2"
          x1="30.28095"
          x2="112.28096"
          y1="75.45714"
          y2="20.12381"
        ></line>
        <line
          fill="none"
          id="svg_8"
          stroke="#ff7f00"
          stroke-dasharray="null"
          stroke-linecap="null"
          stroke-linejoin="null"
          stroke-width="2"
          x1="26.94763"
          x2="112.28096"
          y1="20.79047"
          y2="76.12381"
        ></line>
      </g>
    </svg>
    <svg
      class="tablo-errors__svg"
      width="145"
      height="94"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g class="layer">
        <rect
          fill="#FF0000"
          height="78.66667"
          id="svg_1"
          stroke="#ff7f00"
          stroke-width="2"
          width="134"
          x="4.94762"
          y="8.12381"
        ></rect>
        <ellipse
          @click="errorCounter($event)"
          class="mistakeLeft"
          cx="72.61429"
          cy="47.45714"
          id="svg_4"
          rx="70.33333"
          ry="44"
          stroke="#ff7f00"
          stroke-dasharray="null"
          stroke-linecap="null"
          stroke-linejoin="null"
          stroke-width="2"
        ></ellipse>
        <line
          fill="none"
          id="svg_6"
          stroke="#ff7f00"
          stroke-dasharray="null"
          stroke-linecap="null"
          stroke-linejoin="null"
          stroke-width="2"
          x1="30.28095"
          x2="112.28096"
          y1="75.45714"
          y2="20.12381"
        ></line>
        <line
          fill="none"
          id="svg_8"
          stroke="#ff7f00"
          stroke-dasharray="null"
          stroke-linecap="null"
          stroke-linejoin="null"
          stroke-width="2"
          x1="26.94763"
          x2="112.28096"
          y1="20.79047"
          y2="76.12381"
        ></line>
      </g>
    </svg>
    <svg
      class="tablo-errors__svg"
      width="145"
      height="94"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g class="layer">
        <rect
          fill="#FF0000"
          height="78.66667"
          id="svg_1"
          stroke="#ff7f00"
          stroke-width="2"
          width="134"
          x="4.94762"
          y="8.12381"
        ></rect>
        <ellipse
          @click="errorCounter($event)"
          class="mistakeLeft"
          cx="72.61429"
          cy="47.45714"
          id="svg_4"
          rx="70.33333"
          ry="44"
          stroke="#ff7f00"
          stroke-dasharray="null"
          stroke-linecap="null"
          stroke-linejoin="null"
          stroke-width="2"
        ></ellipse>
        <line
          fill="none"
          id="svg_6"
          stroke="#ff7f00"
          stroke-dasharray="null"
          stroke-linecap="null"
          stroke-linejoin="null"
          stroke-width="2"
          x1="30.28095"
          x2="112.28096"
          y1="75.45714"
          y2="20.12381"
        ></line>
        <line
          fill="none"
          id="svg_8"
          stroke="#ff7f00"
          stroke-dasharray="null"
          stroke-linecap="null"
          stroke-linejoin="null"
          stroke-width="2"
          x1="26.94763"
          x2="112.28096"
          y1="20.79047"
          y2="76.12381"
        ></line>
      </g>
    </svg>
  </div>
</template>

<script>
export default {
  name: "tablo-errors",
  props: {
    disabled: {
      type: Boolean
    }
  },
  data() {
    return {
      quantity: 3
    };
  },

  methods: {
    errorCounter(e) {
      if (!this.disabled) {
        e.target.classList.toggle("error");
        if (Object.values(e.target.classList).includes("error")) {
          this.quantity = --this.quantity;
        } else {
          this.quantity = ++this.quantity;
        }
      }
    }
  }
};
</script>

<style lang="scss">
.tablo-errors {
  &__svg {
    fill: #b80404;
    transition: ease-out 0.2s;
  }

  .error {
    fill: yellow;
    transition: ease-out 0.2s;
  }
}

.attempts {
  width: 100px;
  height: 100px;
  background: red;
  border-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center;

  &__text {
    font-size: 80px;
    font-weight: 900;
    color: #66402d;
  }
}
</style>
