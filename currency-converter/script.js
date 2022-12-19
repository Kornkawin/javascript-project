const currency_one=document.getElementById('currency-one');
const currency_two=document.getElementById('currency-two');

const amount_one=document.getElementById('amount-one');
const amount_two=document.getElementById('amount-two');

// will be displayed
const rate_text=document.getElementById('rate');
const convert_btn=document.getElementById('btn');

currency_one.addEventListener('change', calculateMoney);
currency_two.addEventListener('change', calculateMoney);
amount_one.addEventListener('change', calculateMoney);
amount_two.addEventListener('change', calculateMoney);

function calculateMoney(){
    const one = currency_one.value;
    const two = currency_two.value;
    fetch(`https://api.exchangerate-api.com/v4/latest/${one}`)
        .then(res => res.json())
        .then(data => {
            const rate = data.rates[two];
            rate_text.innerText = `1 ${one} = ${rate} ${two}`;
            amount_two.value = (amount_one.value * rate).toFixed(2);
        })
}

convert_btn.addEventListener('click', () => {
    const temp = currency_one.value;
    currency_one.value = currency_two.value;
    currency_two.value = temp;
    calculateMoney();
});

calculateMoney()