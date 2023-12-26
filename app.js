let input_group__div = document.querySelector(".input-group__div");
let inputs = document.querySelectorAll("input");
let form = document.querySelector("form");
let warningPs = document.querySelectorAll(".input-group p");
let warningPic = document.querySelectorAll(".input-group__div img");
form.addEventListener("submit", (e) => {
  inputs.forEach((input) => {
    if (input.value == "") {
      input.nextElementSibling.style.display = "block";
      input.parentElement.classList.add("border-red");
      input.parentElement.nextElementSibling.style.display = "block";
    } else {
      input.nextElementSibling.style.display = "none";
      input.parentElement.classList.remove("border-red");
      input.parentElement.nextElementSibling.style.display = "none";
    }
  });
  e.preventDefault();
});
