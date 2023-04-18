console.log("Siemanko wszystkim!");
{
const formElement = document.querySelector(".js-form");
const currencyElement = document.querySelector(".js-currency");
const moneyElement = document.querySelector(".js-money");
const resultElement = document.querySelector(".js-result");

const EUR = 4.72;
const USD = 4.37;

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    const money = +moneyElement.value;
    const currency = currencyElement.value;

    let result;

    switch (currency) {

        case "EUR":
            result = money / EUR;
            break;

        case "USD":
            result = money / USD;
            break;
    }

    resultElement.innerText = result.toFixed(2) + " " + currency;
});
}