const $cardCompleted = document.querySelector(
	'.result__completed'
) as HTMLElement
const $cardEmpty = document.querySelector('.result__empty') as HTMLElement
export function showEmptyCard() {
	$cardCompleted.classList.remove('completed-show')
	$cardCompleted.classList.add('completed-hidden')

	$cardEmpty.classList.remove('empty-hidden')
	$cardEmpty.classList.add('empty-show')
}

export function showCompletedCard() {
	$cardCompleted.classList.add('completed-show')
	$cardCompleted.classList.remove('completed-hidden')

	$cardEmpty.classList.add('empty-hidden')
	$cardEmpty.classList.remove('empty-show')
}
