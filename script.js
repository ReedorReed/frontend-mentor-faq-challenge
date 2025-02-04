

document.querySelectorAll('.ques').forEach((question) => {
	question.addEventListener('click', () => {
		// Get the related answer and icons
		let answer = question.nextElementSibling;
		let plus = question.querySelector('.plus');
		let minus = question.querySelector('.minus');

		// Check if the clicked answer is already open
		let isOpen = answer.style.display === 'block';

		// Close all answers first
		document.querySelectorAll('.answers').forEach((ans) => {
			ans.style.display = 'none';
		});

		document.querySelectorAll('.plus').forEach((p) => {
			p.style.display = 'block';
		});

		document.querySelectorAll('.minus').forEach((m) => {
			m.style.display = 'none';
		});

		// Toggle only if it was NOT already open
		if (!isOpen) {
			answer.style.display = 'block';
			plus.style.display = 'none';
			minus.style.display = 'block';
		}
	});
});
