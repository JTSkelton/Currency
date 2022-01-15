import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import CurrencyConverter from "./currency";

async function makeApiCall(currency) {
  const response = await CurrencyConverter.convert(currency);
  console.log(response);
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
    let money = $("#showCurrency").val();
    makeApiCall(money);
  });
});
