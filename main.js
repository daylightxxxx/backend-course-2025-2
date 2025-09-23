const currency = "USD";
const date_from = "20220707";
const date_to = "20220719";

const myURL = new URL("/NBUStatService/v1/statdirectory/exchange", "https://bank.gov.ua/");

myURL.searchParams.append("valcode", currency);
myURL.searchParams.append("date", date_from);
myURL.searchParams.append("date", date_to);
myURL.searchParams.append("json", "");

console.log(myURL.toString());
