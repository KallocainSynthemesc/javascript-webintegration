<script>
export default {
  name: "TimeMod",

  data: function () {
    return {
      isActive: false,
      mins: 0,
      hours: 0,
      draggedElem: null,
      time: null,
    };
  },

  mounted: function () {
    this.$nextTick(function () {
      this.time = this.$refs.time;
    });
  },

  methods: {
    showTime: function () {
      const minsStr = `${this.mins}`.padStart(2, "0");
      this.$refs.timestamp.textContent = `${this.hours}:${minsStr}`;
    },
    updateTime: function (handName, angle) {
      let pos = (Math.round(angle / 6) + 60) % 60;

      if (handName === "hours") {
        this.hours = Math.floor(pos / 5);
        if (this.hours === 0) this.hours = 12;
      } else {
        this.mins = pos;
      }

      this.showTime();
    },
    setHandPosition: function (elem, angle) {
      elem.style.transform = `rotateZ(${angle}deg)`;

      const isHourHand = elem.classList.contains("hour-hand");
      this.updateTime(isHourHand ? "hours" : "minutes", angle);
    },
    onMouseMove: function (e) {
      if (this.draggedElem) {
        const rect = this.draggedElem.parentElement.getBoundingClientRect();
        const xOffset = e.pageX - rect.left.toFixed();
        const xDelta = xOffset - this.draggedElem.parentElement.clientWidth / 2;

        const yOffset = e.pageY - rect.top.toFixed();
        const yDelta =
          yOffset - this.draggedElem.parentElement.clientHeight / 2;

        let angle = Math.atan2(yDelta, xDelta) * (180 / Math.PI);
        angle += 90;
        this.setHandPosition(this.draggedElem, angle);
      }
    },
    onMouseDown: function (e) {
      this.draggedElem = e.target;
      this.draggedElem.onmousemove = this.onMouseMove;
      this.time.onmousemove = this.onMouseMove;
    },
    onMouseUp: function (e) {
      e = e || window.event;
      e.preventDefault();
      if (this.draggedElem) {
        this.draggedElem.onmousemove = null;
        this.time.onmousemove = null;
        this.draggedElem = null;
      }
    },
  },
};
</script>

<template>
  <div id="time" class="time" @mouseup="onMouseUp" ref="time">
    <img class="unselectable" src="../../assets/illustrations/clock.svg" />
    <div
      class="hand hour-hand"
      @mousedown="onMouseDown"
      @mouseup="onMouseUp"
    ></div>
    <div
      class="hand minute-hand"
      @mousedown="onMouseDown"
      @mouseup="onMouseUp"
    ></div>
  </div>
  <div>
    <h2>The time is <span ref="timestamp" id="timestamp"></span></h2>
  </div>
</template>

<style scoped>
.unselectable {
  pointer-events: none;
  user-select: none;
}

img {
  display: inline;
  height: 200px;
  width: 200px;
  position: absolute;
}

.time {
  border-radius: 50%;
  background-color: none;
  width: 200px;
  height: 200px;
  display: inline;
  position: absolute;
  left: 10%;
  top: 50%;
}

.hand {
  width: 4%;
  transform-origin: 50% 100%;
  left: 48%;
  position: absolute;
  display: inline-block;
  cursor: pointer;
}

.hour-hand {
  background-color: #777bb3ff;
  height: 70px;
  top: 15%;
  z-index: 2;
}

.minute-hand {
  background-color: black;
  height: 90px;
  top: 5%;
  z-index: 1;
}
</style>
