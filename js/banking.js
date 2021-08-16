let depositBtn = document.getElementById('deposit-btn');
let depositField = document.getElementById('deposit-field');
let withdrawBtn = document.getElementById('withdraw-btn');
let withDrawField = document.getElementById('withdraw-field');

let deposit = document.getElementById('deposit')
let withdraw = document.getElementById('withdraw')   // innerText & previous Value
let balance = document.getElementById('balance')


// functions 
function getMoneyFromInputField(inputField) {
    let currentValueText = inputField.value
    let currentValueNum = parseFloat(currentValueText);
    // clear inputField
    inputField.value = '';
    return currentValueNum;
}

function getInnerTextNumber(elementName) {
    let innerValueText = elementName.innerText
    let innerValueNum = parseFloat(innerValueText)
    return innerValueNum;
}
//////////////////////
// deposit button event

depositBtn.addEventListener('click', function () {
    //updating deposit
    let previousDeposit = deposit.innerText;
    let previousDepositAmount = parseFloat(previousDeposit)
    let newDepositAmount = getMoneyFromInputField(depositField)
    let currentDepositAmount = previousDepositAmount + newDepositAmount;
    let prevBlanaceAmount = getInnerTextNumber(balance);
    let totalBalanceAmount = prevBlanaceAmount + newDepositAmount;
    balance.innerText = totalBalanceAmount;
    deposit.innerText = currentDepositAmount


})

//withdraw btn


withdrawBtn.addEventListener('click', function () {

    let prevWithdrawAmount = getInnerTextNumber(withdraw);
    let currentWithdrawAmount = getMoneyFromInputField(withDrawField);
    let totalWithdraw = prevWithdrawAmount + currentWithdrawAmount;
    withdraw.innerText = totalWithdraw;
    //balance
    let currentBalanceAmount = getInnerTextNumber(balance);
    let newBalanceAmount = currentBalanceAmount - currentWithdrawAmount;
    balance.innerText = newBalanceAmount;

})


