"use strict";

const resultWindow = document.querySelector(".result-window");
const btnResult = document.querySelector(".check");
const overlayBlur = document.querySelector(".overlay");
const overlayContainer = document.querySelector(".overlay-container");
const containerMpg = document.querySelector(".container-mpg");
const btnClose = document.querySelector(".close-window");

const radioKilo = document.querySelectorAll("input[name=distance]");
const radioFuel = document.querySelectorAll("input[name=fuel]");
const choiceMpg = document.querySelector("#choice-mpg");
const choiceTime = document.querySelector("#choice-time");
const counterWindow = document.querySelector(".counter");
//Timer
const timerWindow = document.querySelector(".counter-time");
const overlayContainerTime = document.querySelector(".overlay-container-time");
const containerTime = document.querySelector(".container-time");
const btnResult2 = document.querySelector(".check2");
const btnClose2 = document.querySelector(".close-window2");
const getStart = document.querySelector(".start");
const getFinish = document.querySelector(".finish");
//******************************** M P G ***************************************//

// First Choice
// Open MPG  Window
const mpgWindow = function () {
  counterWindow.classList.remove("hidden");
  overlayBlur.classList.remove("hidden");
};
choiceMpg.addEventListener("click", mpgWindow);

//MPG Function
function obliczMpg(x, y) {
  return x / y;
}

// Result Window
const showMpg = function () {
  // resultWindow.classList.remove("hidden");
  containerMpg.classList.add("hidden");
  overlayContainer.classList.remove("hidden");

  // DISTANCE. Take data
  let selectedValueDistance;
  for (const rb of radioKilo) {
    if (rb.checked) {
      selectedValueDistance = rb.value;
      break;
    }
  }

  // Check Value in Distance
  let multiplierDist;
  selectedValueDistance === "k"
    ? (multiplierDist = 0.62137)
    : (multiplierDist = 1);

  let miles = Number(document.querySelector(".milage").value) * multiplierDist;

  // FUEL. Take data
  let selectedValueFuel;
  for (const rb of radioFuel) {
    if (rb.checked) {
      selectedValueFuel = rb.value;
      break;
    }
  }
  // Check Value in FUEL
  let multiplierFuel;
  selectedValueFuel === "l"
    ? (multiplierFuel = 0.219969)
    : (multiplierFuel = 1);

  let litres = Number(document.querySelector(".fuel").value) * multiplierFuel;
  // Get Decimal Numbers
  let obliczMpgResult = obliczMpg(miles, litres);
  let decimalNumber = Math.round((obliczMpgResult * 100) / 100).toFixed(2);

  document.querySelector(".show-numbers").textContent = decimalNumber;
};

// Closing Window MPG
const closeMpg = function () {
  //resultWindow.classList.add("hidden");
  overlayContainer.classList.add("hidden");
  overlayBlur.classList.add("hidden");
  counterWindow.classList.add("hidden");
  containerMpg.classList.remove("hidden");
};

btnClose.addEventListener("click", closeMpg);
btnResult.addEventListener("click", showMpg);

// END MPG

// START TIME
//******************************** TIMER ***************************************//
// Open Time Window
const timeWindow = function () {
  timerWindow.classList.remove("hidden");
  overlayBlur.classList.remove("hidden");
};
choiceTime.addEventListener("click", timeWindow);

const ileGodzin = function () {
  containerTime.classList.add("hidden");
  overlayContainerTime.classList.remove("hidden");
  console.log("Mamy");
  const minusBreak = getFinish.value - getStart.value - 0.5;
  const totalworked = getFinish.value - getStart.value;
  document.querySelector(".show-total").textContent = totalworked;
  document.querySelector(".show-break").textContent = minusBreak;
};

const closeTimer = function () {
  //resultWindow.classList.add("hidden");
  overlayContainerTime.classList.add("hidden");
  overlayBlur.classList.add("hidden");
  timerWindow.classList.add("hidden");
  containerTime.classList.remove("hidden");
};

btnClose2.addEventListener("click", closeTimer);
btnResult2.addEventListener("click", ileGodzin);
