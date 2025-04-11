import { getInputs, getInputsRadio } from '../utils/get-inputs.mjs';
import { showEmptyCard } from '../utils/show-hidden-card.mjs';
export function clearInputs() {
    const $inputs = getInputs();
    const $inputsRadio = getInputsRadio();
    const $btnClear = document.getElementById('btn-clear');
    const $priceMonthly = document.getElementById('monthly');
    const $priceRepay = document.getElementById('repay');
    $btnClear.addEventListener('click', () => {
        $priceMonthly.textContent = '';
        $priceRepay.textContent = ' ';
        $inputs.forEach(($input) => {
            $input.value = ' ';
        });
        $inputsRadio.forEach(($input) => {
            $input.checked = false;
        });
        showEmptyCard();
    });
}
