document.getElementById('loan-form').addEventListener('submit', calculateresults);

function calculateresults(e) {
    console.log("calculating");
    e.preventDefault();
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
    } else {

        showError('Please check your umbers');

    }
    e.preventDefault();



}

function showError(error) {
    const errorDiv = document.createElement('div');
    const card = document.querySelector('.card');
    const heading = document.querySelector('.heading');
    errorDiv.className = 'alert alert-danger';
    errorDiv.appendChild(document.createTextNode(error));
    card.insertBefore(errorDiv, heading);
    setTimeout(clearError, 3000);
}
function clearError(){
    document.querySelector('.alert').remove();
}
