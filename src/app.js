import Vue from 'vue';

document.addEventListener('DOMContentLoaded',() => {
  new Vue({
    el: "#app",
    data: {
      todos: ["One", "Two", "Three"]
    },
  });
});
