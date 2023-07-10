const faq = document.querySelectorAll('.container-faq')

faq.forEach(item => item.addEventListener('click', () => {
	if(item.classList.contains('active')) {
		item.classList.remove('active')
	} else {
		// faq.forEach(item2 => item2.classList.remove('active'))
		item.classList.toggle('active')
	}
	
}))