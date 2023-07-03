// const title = document.querySelectorAll('.focus')
// const answer = document.querySelectorAll('.hidden')
// const img = document.querySelectorAll('img')
// const container = document.querySelector('.container__text')
const faq = document.querySelectorAll('.container-faq')

faq.forEach(item => item.addEventListener('click', () => {
	if(item.classList.contains('active')) {
		item.classList.remove('active')
	} else {
		faq.forEach(item2 => item2.classList.remove('active'))
		item.classList.toggle('active')
	}
	
}))