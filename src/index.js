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

function convertCurrency(money) {
  console.log(money);
  let myMoneyParse = JSON.parse(sessionStorage.getItem("currencyObject"));
  console.log(myMoneyParse);
  $("#showCurrency").text(myMoneyParse[money]);
}

window.onload = function () {
  makeApiCall();
};

$(document).ready(function () {
  $("#convertButton").click(function () {
    let money = $("#usdInput").val();
    convertCurrency(money);
  });
});
