// const faqs = document.querySelectorAll('.faqs');

// faqs.forEach((faqs) => {
// 	faqs.addEventListener('click', () => {
// 		faqs.classList.toggle('active');
// 	});
// });

// const ques = document.querySelectorAll('.answers');

function openQues() {
	let qS = document.getElementsByClassName('answers');
	let plus = document.getElementsByClassName('plus');
	let minus = document.getElementsByClassName('minus');

	Array.from(qS).forEach((x) => {
		if (x.style.display === 'none') {
			x.style.display = 'block';
		} else {
			x.style.display = 'none';
		}
	});

	Array.from(plus).forEach((y) => {
		if (y.style.display === 'block') {
			y.style.display = 'none';
		} else {
			y.style.display = 'block';
		}
	});

	Array.from(minus).forEach((z) => {
		if (z.style.display === 'none') {
			z.style.display = 'block';
		} else {
			z.style.display = 'none';
		}
	});
}
