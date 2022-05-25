// document.getElementById('deposit-button').addEventListener('click', function(){
//     const depositInputText = document.getElementById('deposit-input');
//     const newInputText = depositInputText.value;
//     const newInputValue = parseFloat(newInputText);

//     // add deposit with previous amount
//     const totalDeposit = document.getElementById('deposit-total');
//     const totalDepositText = totalDeposit.innerText;
//     const totalDepositValue = parseFloat(totalDepositText);
//     const newTotalDeposit = totalDepositValue + newInputValue;
//     console.log(totalDeposit.innerText);
//     totalDeposit.innerText = newTotalDeposit;

//     depositInputText.value = ' ';

// });

// function doubleIt (num){
//     const result = num *2;
//     return result;
// }
// const first = doubleIt(5);
// const second = doubleIt(7);

function getInputValue(inputId){
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const amountValue = parseFloat(inputAmountText);

    //clear input field
    inputField.value = '';
    return amountValue;   
}

function updateTotalField(totalFieldId,amount){

    const totaElement = document.getElementById(totalFieldId);
    const totalText = totaElement.innerText;
    const previousTotal = parseFloat(totalText);
    totaElement.innerText = previousTotal + amount;
}

function updateBalance(amount, isAdd){
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    if(isAdd == true){
        balanceTotal.innerText = previousBalanceTotal + amount;
    }
    else{
        balanceTotal.innerText = previousBalanceTotal - amount;
    }
}


document.getElementById('deposit-button').addEventListener('click', function(){
    // const depositInput = document.getElementById('deposit-input');
    // const depositAmountText = depositInput.value;
    // const depositAmount = parseFloat(depositAmountText);
    //console.log(depositAmount);
    

    // get and update deposit total

    /* const depositTotal = document.getElementById('deposit-total');
    const depositTotalText = depositTotal.innerText;
    const previousDepositTotal = parseFloat(depositTotalText);
    depositTotal.innerText = previousDepositTotal + depositAmount; */
    
    

    //update balance
    /* const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    balanceTotal.innerText = previousBalanceTotal + depositAmount; */

    const depositAmount = getInputValue('deposit-input');
    updateTotalField('deposit-total',depositAmount);
    updateBalance(depositAmount, true);
    

});

document.getElementById('withdraw-button').addEventListener('click', function(){
    // const withdrawInput = document.getElementById('withdraw-input');
    // const withdrawAmountText = withdrawInput.value;
    // const withdrawAmount = parseFloat(withdrawAmountText);

    

    //get and update withdraw total

    /* const withdrawTotal = document.getElementById('withdraw-total');
    const previouseWithdrawTotalText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(previouseWithdrawTotalText);

    withdrawTotal.innerText = previousWithdrawTotal + withdrawAmout; */

    

    // update blance after withdraw
    /* const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    balanceTotal.innerText = previousBalanceTotal - withdrawAmout; */

    const withdrawAmout = getInputValue('withdraw-input');
    updateTotalField('withdraw-total',withdrawAmout);
    updateBalance(withdrawAmout, false);

  
});
