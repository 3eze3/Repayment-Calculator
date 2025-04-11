import { getInputs } from '../utils/get-inputs.mjs';
export function animationInput() {
    const $inputs = getInputs();
    const $labels = document.querySelectorAll('.form__label');
    $inputs.forEach(($input, index) => {
        $input.addEventListener('input', () => {
            const text = $input.value;
            if (!isNumber(text))
                return;
            $labels[index]?.classList.toggle('form__label-active', text.trim() != '');
            if ($labels[index]?.classList.contains('form__label-specification'))
                $labels[index]?.classList.toggle('form__label-specification-active', text.trim() != '');
        });
    });
}
function isNumber(value) {
    return !isNaN(Number(value));
}
