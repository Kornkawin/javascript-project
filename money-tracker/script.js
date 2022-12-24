const balance = document.getElementById('balance');
const money_plus = document.getElementById('money-plus');
const money_minus = document.getElementById('money-minus');
const list = document.getElementById('list');
const form = document.getElementById('form');
const item_title = document.getElementById('item-title');
const amount = document.getElementById('amount');

let transactions = [
    {id:1, text:"Food", amount:-100},
    {id:2, text:"Rent", amount:-3000},
    {id:3, text:"Salary", amount:18000}
];

const init = () => {
    list.innerHTML = ``;
    transactions.forEach(addDataToList);
    calculateMoney();
}
const addDataToList = (transaction) => {
    const item = document.createElement('li');
    const abs_amt = Math.abs(transaction.amount);
    if (transaction.amount >= 0) {
        item.classList.add("plus");
        item.innerHTML = `${transaction.text}<span>${formatNumber(abs_amt)}</span><button class="delete-btn" onclick="removeTransaction(${transaction.id})">X</button>`
    } else {
        item.classList.add("minus");
        item.innerHTML = `${transaction.text}<span>(${formatNumber(abs_amt)})</span><button class="delete-btn" onclick="removeTransaction(${transaction.id})">X</button>`
    }
    list.appendChild(item);
}
const formatNumber = (num) => {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
}
const autoID = () => {
    if (transactions.length === 0) {
        return 1;
    }
    const prev_id = transactions.at(-1)['id'];
    return prev_id+1;
}
const calculateMoney = () => {
    const amounts = transactions.map(transaction => transaction.amount);
    const total = amounts.reduce((sum, amount) => sum += amount, 0).toFixed(2);
    const revenue = amounts.filter(amount => amount >= 0).reduce((sum, amount) => sum += amount, 0);
    const expense = amounts.filter(amount => amount < 0).reduce((sum, amount) => sum += amount, 0);

    // display
    balance.innerText = `฿${formatNumber(total)}`;
    money_plus.innerText = `${formatNumber(revenue)}`;
    money_minus.innerText = `(${formatNumber(Math.abs(expense))})`;
}
const addTransaction = (e) => {
    // e = event
    e.preventDefault();
    if (item_title.value.trim() === '' || amount.value.trim() === '') {
        alert("Please input complete data into the form");
    } else {
        const data = {
            id: autoID(),
            text: item_title.value,
            amount: +amount.value
        }
        transactions.push(data);
        addDataToList(data);
        calculateMoney();
        item_title.value = '';
        amount.value = '';
    }
}
const removeTransaction = (id) => {
    transactions = transactions.filter(transaction => transaction.id !== id);
    init();
}

form.addEventListener('submit', addTransaction);
init();
