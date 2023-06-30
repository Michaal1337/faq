const title = document.querySelectorAll('.focus')
const answer = document.querySelectorAll('.hidden')
const img = document.querySelectorAll('img')
const container = document.querySelector('.container__text')
// const show = document.querySelector('.show')
// const next = document.querySelectorAll('.focus').nextElementSibling

const showPara = e => {
	// console.log(e);
	if (e.target.matches('.focus')) {
		e.target.nextElementSibling.classList.toggle('arrow')
		e.target.nextElementSibling.nextElementSibling.classList.toggle('show')
		e.target.classList.toggle('boldfocus')
		// console.log(e.target.previousSibling);
		// console.log(e.target.previousElementSibling);
	
		
	} else if (e.target.matches('img')) {
	// 	e.target.firstElementChild.classList.toggle('arrow')
	// 	e.target.nextElementSibling.classList.toggle('show')
	// 	e.target.classList.toggle('boldfocus')
	// 	console.log(e);
		// console.log(e.target.previousSibling);
		console.log(e.target.previousElementSibling);
		console.log(e.target.nextElementSibling);
		// console.log(e.target.nextSibling);

	} else {
		console.log('elo');
	}
}

container.addEventListener('click', showPara)
