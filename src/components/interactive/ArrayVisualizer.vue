<script>
export default {
  name: "LightSwitch",

  data: function () {
    return {
      extraItems: [
        "Bacon",
        "Butter",
        "Cereal",
        "Coffee",
        "Creamer",
        "Fruit",
        "Mayo",
        "Milk",
        "Yogurt",
      ],
      items: ["Meat", "Eggs", "Juice", "Vegetables"],
      theArrayUl: this.$refs.arrayui,
    };
  },

  mounted: function () {
    this.$nextTick(function () {
      this.theArrayUl = this.$refs.arrayui;
    });
  },

  methods: {
    pushListener: function () {
      const value =
        this.extraItems[Math.floor(Math.random() * this.extraItems.length)];
      this.items.push(value);
    },
    popListener: function () {
      this.items.pop();
    },
    reverseListener: function () {
      this.items.reverse();
    },
    sortListener: function () {
      this.items.sort();
    },
    shiftListener: function () {
      this.items.shift();
    },
    unshiftListener: function () {
      const value =
        this.extraItems[Math.floor(Math.random() * this.extraItems.length)];
      this.items.unshift(value);
    },
  },
};
</script>

<template>
  <div class="maincontent">
    <div id="arrayContainer">
      <ul id="theArrayUl">
        <li class="listItem show" v-for="(item, index) in items" :key="item.id">
          {{ item }}
          <div>{{ index }}</div>
        </li>
      </ul>
    </div>

    <div id="controls">
      <button id="push" @click="pushListener">push()</button>
      <button id="pop" @click="popListener">pop()</button>
      <button id="reverse" @click="reverseListener">reverse()</button>
      <button id="sort" @click="sortListener">sort()</button>
      <button id="sort" @click="unshiftListener">unshift()</button>
      <button id="sort" @click="shiftListener">shift()</button>
    </div>
  </div>
</template>

<style scoped>
.maincontent {
  background: lightgray;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 1500px;
}

h1 {
  color: teal;
}

#arrayContainer {
  border: 3px #555 dashed;
  border-radius: 4px;
  margin: 20px;
}

ul {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin: 10px 10px;
  padding: 0;
}

li {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  background: #feb322ff;
  color: black;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.4s ease-in-out;
  opacity: 0;
  transform: translateX(-1000px);
  width: 0;
  height: 30px;
}

li.show {
  width: 110px;
  margin: 10px;
  padding: 20px;
  opacity: 1;
  transform: translateX(0px);
  font-size: 0.95rem;
  height: 60px;
}

li div {
  display: block;
  margin-top: 6px;
  color: white;
}

#controls {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

button {
  border: none;
  border-radius: 4px;
  margin: 0 20px 20px 0;
  margin-right: 20px;
  padding: 10px 20px;
  box-shadow: 0px 8px #feb322ff;
  cursor: pointer;
  font-size: 1em;
  font-weight: 600;
}

button:last-of-type {
  margin-right: 0;
}

button:hover {
  background-color: #afafaf;
}

button:active {
  box-shadow: 0px 3px #feb322ff;
  transform: translateY(5px);
}
</style>
