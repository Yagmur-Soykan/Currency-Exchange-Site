async function exchangeCurrency(amount, from, to) {
    const response = await fetch(`https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_AXMUHbh0shfLJ5pxmrAuDzUatA4C4QVGgy4t0PsC&base_currency=${from}`);
    const data = await response.json();
    const rate = data.data[to];
    return amount * rate;
}

const amountInput = document.getElementById("amount");
const firstSelection = document.getElementById("firstCurrencyOption");
const secondSelection = document.getElementById("secondCurrencyOption");
const resultInput = document.getElementById("result");

function runEventListener() {
    amountInput.addEventListener("input", exchange);
    firstSelection.addEventListener("change", exchange);
    secondSelection.addEventListener("change", exchange);
}

async function exchange() {
    const amount = Number(amountInput.value.trim());
    const from = firstSelection.value;
    const to = secondSelection.value;
    const result = await exchangeCurrency(amount, from, to);
    resultInput.value = result.toFixed(3);
}

runEventListener();
