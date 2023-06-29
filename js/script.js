const title = document.querySelectorAll('.focus')
const answer = document.querySelectorAll('.hidden')
const img = document.querySelectorAll('img')
const container = document.querySelector('.container__text')
// const show = document.querySelector('.show')
// const next = document.querySelectorAll('.focus').nextElementSibling

const showPara = e => {
	// hidden.forEach(deleteStyle)
	// answer.forEach(item => item.classList.remove('show'))
	e.target.nextElementSibling.classList.toggle('show')
	title.forEach(item => item.classList.remove('boldfocus'))
	e.target.classList.add('boldfocus')
	img.forEach(item => item.classList.remove('arrow'))
	e.target.firstElementChild.classList.add('arrow')
	
	if (e.target.matches('.boldfocus')) {
	console.log('elo');
	}
}

title.forEach(item => item.addEventListener('click', showPara))
// container.forEach(item => item.addEventListener('click', showPara))
