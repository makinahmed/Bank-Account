let depositBtn = document.getElementById('deposit-btn');
let depositField = document.getElementById('deposit-field');
let withdrawBtn = document.getElementById('withdraw-btn');
let withDrawField = document.getElementById('withdraw-field');

let deposit = document.getElementById('deposit')
let withdraw = document.getElementById('withdraw')   // innerText & previous Value
let balance = document.getElementById('balance')


// deposit button event

depositBtn.addEventListener('click', function () {
    //updating deposit
    let previousDeposit = deposit.innerText;
    let previousDepositAmount = parseFloat(previousDeposit)
    let newDeposit = depositField.value
    let newDepositAmount = parseFloat(newDeposit)
    let currentDepositAmount = previousDepositAmount + newDepositAmount;

    let prevBlanace = balance.innerText
    let prevBlanaceAmount = parseFloat(prevBlanace)

    let totalBalanceAmount = prevBlanaceAmount + newDepositAmount;
    balance.innerText = totalBalanceAmount;

    deposit.innerText = currentDepositAmount
    // clear deposit input field 
    depositField.value = ''

})

//widthdraw btn


withdrawBtn.addEventListener('click', function () {

    let prevWithdraw = withdraw.innerText;
    let prevWithdrawAmount = parseFloat(prevWithdraw)

    let currentWithdraw = withDrawField.value;
    let currentWithdrawAmount = parseFloat(currentWithdraw);

    let totalWithdraw = prevWithdrawAmount + currentWithdrawAmount;

    withdraw.innerText = totalWithdraw;

    //balance

    let currentBalance = balance.innerText;

    let currentBalanceAmount = parseFloat(currentBalance);

    let newBalanceAmount = currentBalanceAmount - currentWithdrawAmount;

    balance.innerText = newBalanceAmount;

    // clear deposit input field 
    withDrawField.value = ''
})

















        // withdraw



        // let previousBalance = balance.innerText;
        // let previousBalanceAmount = parseFloat(previousBalance)
        // let newBalance = currentDepositAmount + previousBalanceAmount;
        // balance.innerText = newBalance


