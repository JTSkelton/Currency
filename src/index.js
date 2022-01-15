import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import CurrencyConverter from "./currency";

async function makeApiCall(currency){
  const response = await CurrencyConverter.convert(currency);
  getElements(response);
}

function getElements(reposnse){
  if(reposnse.conversion_rates){
    console.log(reposnse.conversion_rates)
  }
}

$(document).ready(function () {
  
}