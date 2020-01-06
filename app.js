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
    


}
