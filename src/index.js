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

$(document).ready(function () {
  $("#convertButton").click(function () {
    let money = $("#showCurrency").load(
      `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`
    );
    makeApiCall(money);
  });
});
