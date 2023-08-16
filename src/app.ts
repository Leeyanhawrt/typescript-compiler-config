const button = document.querySelector(".button");

if (button) {
  // StrictNullChecks helps with possible null values (e.g this button does not appear). In order to combat it, use ! at the end of selector OR wrap in if statement so that it is also checked during runtime
  button.addEventListener("click", () => {
    console.log("Clicked on button");
  });
}

const favoritePerson = "Ellissa";
console.log(favoritePerson);
