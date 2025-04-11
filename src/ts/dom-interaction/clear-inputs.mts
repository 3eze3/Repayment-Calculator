import { getInputs, getInputsRadio } from '../utils/get-inputs.mjs'

export function clearInputs() {
	const $inputs = getInputs()
	const $inputsRadio = getInputsRadio()
	const $btnClear = document.getElementById('btn-clear') as HTMLButtonElement
	$btnClear.addEventListener('click', () => {
		$inputs.forEach(($input) => {
			$input.value = ' '
		})

		$inputsRadio.forEach(($input) => {
			$input.checked = false
		})
	})
}
