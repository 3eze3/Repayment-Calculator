import { showCompletedCard } from '../utils/show-hidden-card.mjs'

export function calculateRepayments() {
	const $btnCalcular = document.querySelector('.form__btn') as HTMLButtonElement
	const $amountInput = document.getElementById('amount') as HTMLInputElement
	const $years = document.getElementById('years') as HTMLInputElement
	const $interestRate = document.getElementById(
		'interest-rate'
	) as HTMLInputElement
	const $repayment = document.getElementById('repayment') as HTMLInputElement
	const $interest = document.getElementById('interest') as HTMLInputElement
	//
	const $priceMonthly = document.getElementById('monthly') as HTMLButtonElement
	const $priceRepay = document.getElementById('repay') as HTMLButtonElement
	//
	$btnCalcular.addEventListener('click', (e) => {
		e.preventDefault()

		if (
			$amountInput.value.trim() == '' ||
			$years.value.trim() == ' ' ||
			$interestRate.value.trim() == ''
		)
			return
		const amount = parseFloat($amountInput.value)
		const years = parseFloat($years.value)
		const interest = parseFloat($interestRate.value)

		if ($repayment.checked) {
			const monthlyRepayment = repayment(amount, interest, years)
			const totalRepayment = totalRepaymentAmount(amount, interest, years)
			$priceMonthly.textContent = monthlyRepayment
			$priceRepay.textContent = totalRepayment
		} else if ($interest.checked) {
			const monthlyInterestOnly = interestOnly(amount, interest)
			const totalInterestOnly = totalInterestOnlyAmount(amount, interest, years)
			$priceMonthly.textContent = monthlyInterestOnly
			$priceRepay.textContent = totalInterestOnly
		}
		showCompletedCard()
	})
}

function repayment(monto: number, tasaInteresAnual: number, años: number) {
	const r = tasaInteresAnual / 12
	const n = años * 12

	const M = monto * ((r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1))
	return M.toFixed(2)
}

function interestOnly(monto: number, tasaInteresAnual: number) {
	const r = tasaInteresAnual / 12

	const M = monto * r
	return M.toFixed(2)
}

function totalRepaymentAmount(
	monto: number,
	tasaInteresAnual: number,
	años: number
) {
	const monthlyRepayment = parseFloat(repayment(monto, tasaInteresAnual, años))
	const n = años * 12
	const totalRepayment = monthlyRepayment * n
	return totalRepayment.toFixed(2)
}

function totalInterestOnlyAmount(
	monto: number,
	tasaInteresAnual: number,
	años: number
) {
	const monthlyInterestOnly = parseFloat(interestOnly(monto, tasaInteresAnual))
	const n = años * 12
	const totalInterestOnly = monthlyInterestOnly * n + monto
	return totalInterestOnly.toFixed(2)
}
