const balance = document.getElementById('balance');
const money_plus = document.getElementById('money-plus');
const money_minus = document.getElementById('money-minus');
const list = document.getElementById('list');
const form = document.getElementById('form');
const text = document.getElementById('text');
const amount = document.getElementById('amount');

const dataTransaction = [
    {id:1, text:"Food", amount:-100},
    {id:2, text:"Rent", amount:-3000},
    {id:3, text:"Salary", amount:18000}
];

const transactions = dataTransaction;

const init = () => {
    transactions.forEach(addDataToList);
    calculateMoney();
}
const addDataToList = (transaction) => {
    const item = document.createElement('li');
    const abs_amt = Math.abs(transaction.amount);
    if (transaction.amount >= 0) {
        item.classList.add("plus");
        item.innerHTML = `${transaction.text}<span>${formatNumber(abs_amt)}</span><button class="delete-btn">X</button>`
    } else {
        item.classList.add("minus");
        item.innerHTML = `${transaction.text}<span>(${formatNumber(abs_amt)})</span><button class="delete-btn">X</button>`
    }
    list.appendChild(item);
}

const formatNumber = (num) => {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
}

const calculateMoney = () => {
    const amounts = transactions.map(transaction => transaction.amount);
    const total = amounts.reduce((sum, amount) => sum += amount, 0).toFixed(2);
    const revenue = amounts.filter(amount => amount >= 0).reduce((sum, amount) => sum += amount, 0);
    const expense = amounts.filter(amount => amount < 0).reduce((sum, amount) => sum += amount, 0);

    // display
    balance.innerText = `฿${formatNumber(total)}`;
    console.log(`฿${formatNumber(total)}`);
    money_plus.innerText = `${formatNumber(revenue)}`;
    money_minus.innerText = `(${formatNumber(Math.abs(expense))})`;
}

init();
