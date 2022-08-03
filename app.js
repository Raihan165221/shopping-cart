function updateValue(product, isIncrease, price) {
    const caseInput = document.getElementById(product + '-number');
    let caseNumber = caseInput.value;

    if (isIncrease) {
        caseNumber = parseInt(caseNumber) + 1;
    }
    else if (caseNumber > 0) {
        caseNumber = parseInt(caseNumber) - 1;
    }
    caseInput.value = caseNumber;
    const caseTotal = document.getElementById(product + '-total');
    caseTotal.innerText = caseNumber * price;
    calculateTotal();
}

function calculateNumber(product) {
    const productNumber = document.getElementById(product + '-number');
    const productValue = parseInt(productNumber.value);
    return productValue;
}

function calculateTotal() {
    const phoneNumber = calculateNumber('phone') * 1219;
    const caseNumber = calculateNumber('case') * 59;
    const subTotal = phoneNumber + caseNumber;
    const tax = subTotal / 10;
    const total = subTotal + tax;

    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax').innerText = tax;
    document.getElementById('total').innerText = total;
}

// update phone total
document.getElementById('phone-plus').addEventListener('click', function () {
    updateValue('phone', true, 1219);
});
document.getElementById('phone-minus').addEventListener('click', function () {
    updateValue('phone', false, 1219);
});

// update case total
document.getElementById('case-plus').addEventListener('click', function () {
    updateValue('case', true, 59);

});
document.getElementById('case-minus').addEventListener('click', function () {
    updateValue('case', false, 59);
});

