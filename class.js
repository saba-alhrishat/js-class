
const heightInput = document.getElementById("heightInput");
const weightInput = document.getElementById("weightInput");
const cBMIBtn = document.getElementById("cBMI");
const result = document.getElementById("result");
const statusSpan = document.getElementById("status");
function calculateBMI() {
  var h = +heightInput.value;
  var w = +weightInput.value;
  var r = w / (h * h);
  r = r.toFixed(2);
  var s = "";
  if (r < 18.5) {
    s = "underweight";
    // statusSpan.style.color = "green";
    statusSpan.classList.add("underweight");
  } else if (r >= 18.5 && r < 24.9) {
    s = "normal";
    statusSpan.classList.add("normal");
  } else if (r >= 25 && r < 29.9) {
    s = "overweight";
    statusSpan.classList.add("overweight");
  } else {
    s = "Obese";
  }
  result.innerText = r + " ";
  statusSpan.innerText = s;
}
// cBMIBtn.addEventListener("click", () => {
// });