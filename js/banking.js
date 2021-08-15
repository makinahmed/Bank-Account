let depositBtn = document.getElementById('deposit-btn');
let depositField = document.getElementById('deposit-field');
let withdrawBtn = document.getElementById('withdraw-btn');
let withDrawField = document.getElementById('withdraw-field');

let deposit = document.getElementById('deposit')
let withdraw = document.getElementById('withdraw')   // innerText & previous Value
let balance = document.getElementById('balance')


//deposit

let previousDeposit = deposit.innerText;
let previousDepositAmount = parseFloat(previousDeposit)
let newDeposit = depositField.value
let newDepositAmount = parseFloat(newDeposit)
let currentDepositAmount = previousDeposit + newDepositAmount;
let previousBalance = balance.innerText

// deposit button event

depositBtn.addEventListener('click', function () {
    //updating deposit
    let previousDeposit = deposit.innerText;
    let previousDepositAmount = parseFloat(previousDeposit)
    let newDeposit = depositField.value
    let newDepositAmount = parseFloat(newDeposit)
    let currentDepositAmount = previousDepositAmount + newDepositAmount;
    deposit.innerText = currentDepositAmount
    // clear deposit input field 
    depositField.value = ''

})

withdrawBtn.addEventListener('click', function () {

    let withDrawAmount = parseFloat(withDrawField.value)
    withdraw.innerText = withDrawAmount;


    // balance 
    balance.innerText = 'তোর টাকা থাকলেও নাই যা ভাগ!!';

    // let previousBalanceAmount = parseFloat(previousBalance)
    // let newBalance = currentDepositAmount + previousBalanceAmount;
    // balance.innerText = newBalance


})

















        // withdraw



        // let previousBalance = balance.innerText;
        // let previousBalanceAmount = parseFloat(previousBalance)
        // let newBalance = currentDepositAmount + previousBalanceAmount;
        // balance.innerText = newBalance


