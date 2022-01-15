import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import CurrencyConverter from "./currency";

async function makeApiCall(currency) {
  const response = await CurrencyConverter.convert(currency);
  sessionStorage.setItem(
    "currencyObject",
    JSON.stringify(response.conversion_rates)
  );
  getElements(response);
}

function getElements(response) {
  if (response.conversion_rates) {
    console.log(response.conversion_rates);
  } else {
    $("#showCurrency").text(`There was an error: ${response}`);
  }
}

function makeCurrencyList() {
  let myMoneyParse = JSON.parse(sessionStorage.getItem("currencyObject"));
  for (let key in myMoneyParse) {
    const newOption = document.createElement("option");
    newOption.value = myMoneyParse[key];
    newOption.text = key;
    newOption.id = key;
    document.getElementById("currencyList").appendChild(newOption);
  }
}

window.onload = function () {
  makeApiCall();
  makeCurrencyList();
};

$(document).ready(function () {
  $("#convertButton").click(function () {
    let conversionValue = $("#currencyList").val();
    let conversionName = $("#currencyList").text();
    console.log(typeof conversionName);
    let money = $("#usdInput").val();
    $("#showCurrency").html("Your USD is worth: " + money * conversionValue);
  });
});
