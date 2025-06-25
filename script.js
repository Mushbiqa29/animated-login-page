const card = document.getElementById("card");
const flipToSignup = document.getElementById("flipToSignup");
const flipToLogin = document.getElementById("flipToLogin");

flipToSignup.addEventListener("click", () => {
  card.classList.add("flipped");
});

flipToLogin.addEventListener("click", () => {
  card.classList.remove("flipped");
});