

document.querySelectorAll('.ques').forEach((question) => {
	question.addEventListener('click', () => {
		let answer = question.nextElementSibling;
		let plus = question.querySelector('.plus');
		let minus = question.querySelector('.minus');

		let isOpen = answer.style.display === 'block';

		document.querySelectorAll('.answers').forEach((ans) => {
			ans.style.display = 'none';
		});

		document.querySelectorAll('.plus').forEach((p) => {
			p.style.display = 'block';
		});

		document.querySelectorAll('.minus').forEach((m) => {
			m.style.display = 'none';
		});

		if (!isOpen) {
			answer.style.display = 'block';
			plus.style.display = 'none';
			minus.style.display = 'block';
		}
	});
});
