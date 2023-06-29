const title = document.querySelectorAll('.focus')
const answer = document.querySelectorAll('.hidden')
const img = document.querySelectorAll('img')
const container = document.querySelector('.container__text')
// const show = document.querySelector('.show')
// const next = document.querySelectorAll('.focus').nextElementSibling

const showPara = e => {
	
	if (e.target.matches('.focus')) {
		e.target.firstElementChild.classList.toggle('arrow')
		e.target.nextElementSibling.classList.toggle('show')
		e.target.classList.toggle('boldfocus')
	} else if (e.target.matches('img')) {
		// e.target.firstElementChild.classList.toggle('arrow')
		// e.target.nextElementSibling.classList.toggle('show')
		// e.target.classList.toggle('boldfocus')
		console.log(e);

	}
}

container.addEventListener('click', showPara)
