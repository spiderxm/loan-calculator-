document.getElementById('loan-form').addEventListener('submit', function(e) {
    //show loader
    document.getElementById('results').style.display = 'none';
    document.getElementById('loading').style.display = 'block';
    setTimeout(calculateresults, 2000);
    e.preventDefault();
});

function calculateresults(e) {
    console.log("calculating");

    const amount = document.getElementById('amount');
    const interest = document.getElementById('interest');
    const years = document.getElementById('years');
    const monthlypayment = document.getElementById('monthly-payment');
    const totalpayment = document.getElementById('total-payment');
    const totalinterest = document.getElementById('total-interest');
    const principal = parseFloat(amount.value);
    const calculateinterest = parseFloat(interest.value) / 100 / 12;
    const calculatedpayments = parseFloat(years.value) * 12;
    //monthlypayment
    const x = Math.pow(1 + calculateinterest, calculatedpayments);
    const monthly = (principal * x * calculateinterest) / (x - 1);
    if (isFinite(monthly)) {
        monthlypayment.value = monthly.toFixed(2);
        totalpayment.value = (monthly * calculatedpayments);
        totalinterest.value = ((monthly * calculatedpayments) - principal).toFixed(2);
        document.getElementById('results').style.display = 'block';
        document.getElementById('loading').style.display = 'none';
        setTimeout(erase, 5000);

    } else {

        showError('Please check your numbers');
        document.getElementById('loading').style.display = 'none';

    }
    e.preventDefault();



}

function erase() {
    amount.value = '';
    interest.value = '';
    years.value = '';
    monthlypayment.value = '';
    totalinterest.value = '';
    totalpayment.value = '';
}

function showError(error) {
    const errorDiv = document.createElement('div');
    const card = document.querySelector('.card');
    const heading = document.querySelector('.heading');
    errorDiv.className = 'alert alert-danger';
    errorDiv.appendChild(document.createTextNode(error));
    card.insertBefore(errorDiv, heading);
    setTimeout(clearError, 3000);
    setTimeout(erase, 5000);
}

function clearError() {
    document.querySelector('.alert').remove();
}
