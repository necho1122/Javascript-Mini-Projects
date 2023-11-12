const category = document.querySelectorAll(".category");
const btn = document.querySelectorAll(".button");
const breakfast = document.querySelector(".breakfast");
const lunch = document.querySelector(".lunch");
const snakes = document.querySelector(".snakes");
const dinner = document.querySelector(".dinner");

btn.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.currentTarget.classList;
    if (button.classList.contains("button_all")) {
      category.forEach((ele) => ele.classList.remove("show_menu--none"));
    } else if (button.classList.contains("button_breakfast")) {
      category.forEach((ele) => ele.classList.add("show_menu--none"));
      breakfast.classList.remove("show_menu--none");
    } else if (button.classList.contains("button_lunch")) {
      category.forEach((ele) => ele.classList.add("show_menu--none"));
      lunch.classList.remove("show_menu--none");
    } else if (button.classList.contains("button_snakes")) {
      category.forEach((ele) => ele.classList.add("show_menu--none"));
      snakes.classList.remove("show_menu--none");
    } else if (button.classList.contains("button_dinner")) {
      category.forEach((ele) => ele.classList.add("show_menu--none"));
      dinner.classList.remove("show_menu--none");
    }
  });
});
