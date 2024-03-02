<script>
export default {
  name: "LightSwitch",

  data: function () {
    return {
      isSortActive: false,
      isFilterActive: false,
      data: [
        {
          name: "Eloise",
          droitier: true,
          age: 21,
        },
        {
          name: "Charlotte",
          droitier: true,
          age: 47,
        },
        {
          name: "Josephine",
          droitier: false,
          age: 28,
        },
        {
          name: "Remy",
          droitier: false,
          age: 16,
        },
        {
          name: "Louis",
          droitier: true,
          age: 34,
        },
      ],
      storeData: [],
      sortOptions: [
        {
          name: "Nom",
          type: "A - Z",
        },
        {
          name: "Nom",
          type: "Z - A",
        },
        {
          name: "Age",
          type: "ASC",
        },
        {
          name: "Age",
          type: "DESC",
        },
      ],
      filterOptions: ["Droitier", "Gaucher"],
    };
  },

  mounted: function () {
    this.$nextTick(function () {
      this.storeData = [...this.data];
    });
  },

  methods: {
    sortArr: function (sortType) {
      if (sortType === "A - Z") {
        this.data.sort((a, b) => (a.name < b.name ? -1 : 1));
      } else if (sortType === "Z - A") {
        this.data.sort((a, b) => (a.name > b.name ? -1 : 1));
      } else if (sortType === "ASC") {
        this.data.sort((a, b) => a.age - b.age);
      } else if (sortType === "DESC") {
        this.data.sort((a, b) => b.age - a.age);
      }
    },
    filterArr: function (filterType) {
      if (filterType === "Droitier") {
        this.data = this.storeData.filter((person) => person.droitier);
      } else if (filterType === "Gaucher") {
        this.data = this.storeData.filter((person) => !person.droitier);
      }
    },
    reset: function () {
      this.data = [...this.storeData];
    },
  },
};
</script>

<template>
  <div class="navbar">
    <div class="dropdown">
      <button class="dropbtn">
        Sort
        <i class="fa fa-caret-down"></i>
      </button>
      <div class="dropdown-content">
        <a
          href="#"
          class="sortOption"
          v-for="item in sortOptions"
          :key="item.id"
          @click="sortArr(item.type)"
        >
          {{ item.name }}
          <span> {{ item.type }}</span>
        </a>
      </div>
    </div>
    <div class="dropdown">
      <button class="dropbtn">
        Filter
        <i class="fa fa-caret-down"></i>
      </button>
      <div class="dropdown-content">
        <a
          href="#"
          class="filterOption"
          v-for="item in filterOptions"
          :key="item.id"
          @click="filterArr(item)"
        >
          {{ item }}
        </a>
      </div>
    </div>
    <a href="#" class="filterOption" @click="reset">Reset</a>
  </div>
  <div id="list">
    <div class="listItem show" v-for="item in data" :key="item.id">
      <h2>{{ item.name }}</h2>
      <p>{{ item.droitier ? "droitier" : "gaucher" }}</p>
      <p>{{ item.age }}</p>
    </div>
  </div>
</template>

<style scoped>
.navbar {
  overflow: hidden;
  background-color: #555;
}

.navbar a {
  float: left;
  font-size: 16px;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

.dropdown {
  float: left;
  overflow: hidden;
}

.dropdown .dropbtn {
  font-size: 16px;
  border: none;
  outline: none;
  color: white;
  padding: 14px 16px;
  background-color: inherit;
  font-family: inherit;
  margin: 0;
}

.navbar a:hover,
.dropdown:hover .dropbtn {
  background-color: #333;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.dropdown-content a {
  float: none;
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
}

.dropdown-content a:hover {
  background-color: #ddd;
}

.dropdown:hover .dropdown-content {
  display: block;
}

#list {
  width: 90%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
#list div {
  background-color: #feb322ff;
  width: 200px;
  box-sizing: border-box;
  padding: 5px;
  margin: 5px;
  border-radius: 5px;
}
#list div h2 {
  font-size: 20px;
  margin: 0;
}
</style>
