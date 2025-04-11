export function getInputs() {
	const $inputs = document.querySelectorAll(
		'.form__input'
	) as NodeListOf<HTMLInputElement>
	return $inputs
}
export function getInputsRadio() {
	const $inputs = document.querySelectorAll(
		'.form__radio'
	) as NodeListOf<HTMLInputElement>
	return $inputs
}
