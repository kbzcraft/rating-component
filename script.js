const usrRating = document.querySelector("#usr-rating");
const ratingNums = document.querySelectorAll(".rating-nums span");
const submitBtn = document.querySelector(".submit-btn");
const ratingDiv = document.querySelector(".container>div:first-child");
const thanksDiv = document.querySelector(".container>div:last-child");
let rating = 0;
ratingNums.forEach(num => {
  num.addEventListener("click", () => {
    ratingNums.forEach(n => {
      n.style.background = "#252d37";
    });
    num.style.background = "hsl(var(--Orange))";
    rating = Math.floor(num.textContent);
    submitBtn.style.opacity = "1"
    submitBtn.style.cursor = "pointer"


  });
});

submitBtn.addEventListener("click", () => {
  if (rating <= 0) { return };
  usrRating.textContent = rating;
  ratingDiv.style.display = "none";
  thanksDiv.style.display = "flex";
})