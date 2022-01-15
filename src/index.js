import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import CurrencyConverter from "./currency";

async function makeApiCall(currency) {
  const response = await CurrencyConverter.convert(currency);
  sessionStorage.setItem(
    "currencyObjec",
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

window.onload = function () {
  makeApiCall();
};
