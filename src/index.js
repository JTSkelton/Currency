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
  if (response.conversion_rates) return;
  else {
    $("#showCurrency").text(`There was an error: ${response}`);
  }
}

function makeCurrencyList() {
  let myMoneyParse = JSON.parse(sessionStorage.getItem("currencyObject"));
  for (let key in myMoneyParse) {
    const newOption = document.createElement("option");
    newOption.value = [key, myMoneyParse[key]];
    newOption.text = key;
    newOption.id = key;
    console.log(newOption);
    document.getElementById("currencyList").appendChild(newOption);
  }
}

window.onload = function () {
  makeApiCall();
  makeCurrencyList();
};

$(document).ready(function () {
  $("#convertButton").click(function () {
    let conversionValue = $("#currencyList").val().split(",");
    let money = $("#usdInput").val();
    $("#showCurrency").html(`Your $${money} USD is worth: ` + money * conversionValue[1] + " In " + conversionValue[0]);
  });
});
