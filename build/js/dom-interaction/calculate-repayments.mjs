import { showCompletedCard } from '../utils/show-hidden-card.mjs';
export function calculateRepayments() {
    const $btnCalcular = document.querySelector('.form__btn');
    const $amountInput = document.getElementById('amount');
    const $years = document.getElementById('years');
    const $interestRate = document.getElementById('interest-rate');
    const $repayment = document.getElementById('repayment');
    const $interest = document.getElementById('interest');
    const $priceMonthly = document.getElementById('monthly');
    const $priceRepay = document.getElementById('repay');
    $btnCalcular.addEventListener('click', (e) => {
        e.preventDefault();
        if ($amountInput.value.trim() == '' ||
            $years.value.trim() == ' ' ||
            $interestRate.value.trim() == '')
            return;
        const amount = parseFloat($amountInput.value);
        const years = parseFloat($years.value);
        const interest = parseFloat($interestRate.value);
        if ($repayment.checked) {
            const monthlyRepayment = repayment(amount, interest, years);
            const totalRepayment = totalRepaymentAmount(amount, interest, years);
            $priceMonthly.textContent = monthlyRepayment;
            $priceRepay.textContent = totalRepayment;
        }
        else if ($interest.checked) {
            const monthlyInterestOnly = interestOnly(amount, interest);
            const totalInterestOnly = totalInterestOnlyAmount(amount, interest, years);
            $priceMonthly.textContent = monthlyInterestOnly;
            $priceRepay.textContent = totalInterestOnly;
        }
        showCompletedCard();
    });
}
function repayment(monto, tasaInteresAnual, años) {
    const r = tasaInteresAnual / 12;
    const n = años * 12;
    const M = monto * ((r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1));
    return M.toFixed(2);
}
function interestOnly(monto, tasaInteresAnual) {
    const r = tasaInteresAnual / 12;
    const M = monto * r;
    return M.toFixed(2);
}
function totalRepaymentAmount(monto, tasaInteresAnual, años) {
    const monthlyRepayment = parseFloat(repayment(monto, tasaInteresAnual, años));
    const n = años * 12;
    const totalRepayment = monthlyRepayment * n;
    return totalRepayment.toFixed(2);
}
function totalInterestOnlyAmount(monto, tasaInteresAnual, años) {
    const monthlyInterestOnly = parseFloat(interestOnly(monto, tasaInteresAnual));
    const n = años * 12;
    const totalInterestOnly = monthlyInterestOnly * n + monto;
    return totalInterestOnly.toFixed(2);
}
