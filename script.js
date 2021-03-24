"use strict";

const resultWindow = document.querySelector(".result-window");
const btnResult = document.querySelector(".check");
const overlayBlur = document.querySelector(".overlay");
const btnClose = document.querySelector(".close-window");
const radioKilo = document.querySelectorAll("input[name=distance]");
const radioFuel = document.querySelectorAll("input[name=fuel]");

//MPG Function
const obliczMpg = function (x, y) {
  return x / y;
};

// Result Window
const showMpg = function () {
  resultWindow.classList.remove("hidden");
  overlayBlur.classList.remove("hidden");

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
  if (selectedValueDistance === "k") {
    multiplierDist = 0.62137;
    console.log(`Multiplier Dis: ${multiplierDist}`);
  } else if (selectedValueDistance === "m") {
    multiplierDist = 1;
    console.log(`Multiplier Dis: ${multiplierDist}`);
  }
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
  if (selectedValueFuel === "l") {
    multiplierFuel = 0.219969;
    console.log(`Multiplier Fuel: ${multiplierFuel}`);
  } else if (selectedValueFuel === "g") {
    multiplierFuel = 1;
    console.log(`Multiplier Fuel: ${multiplierFuel}`);
  }
  console.log(`Miles: ${miles}`);
  let litres = Number(document.querySelector(".fuel").value) * multiplierFuel;
  // Get Decimal Numbers
  let obliczMpgResult = obliczMpg(miles, litres);
  let decimalNumber = Math.round((obliczMpgResult * 100) / 100).toFixed(2);

  document.querySelector(".show-numbers").textContent = decimalNumber;
};

// Funkcja zamykająca wynik
const closeMpg = function () {
  resultWindow.classList.add("hidden");
  overlayBlur.classList.add("hidden");
};

btnClose.addEventListener("click", closeMpg);
btnResult.addEventListener("click", showMpg);
