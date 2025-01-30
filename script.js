// const faqs = document.querySelectorAll('.faqs');

// faqs.forEach((faqs) => {
// 	faqs.addEventListener('click', () => {
// 		faqs.classList.toggle('active');
// 	});
// });

// const ques = document.querySelectorAll('.answers');
const plus = document.querySelectorAll('.plus');
const minus = document.querySelectorAll('.minus');

function openQues() {
	let ques = document.getElementsByClassName('answers');
	let display = document.getComputedStyle('ques').display;
	if (ques.style.display === '') {
		ques.style.display = 'block';
	} else {
		ques.style.display = ques.style.display === 'none' ? 'block' : 'none';
	}
}
