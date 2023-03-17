document.addEventListener("DOMContentLoaded", () => {
	const hider = document.getElementById('hider');
	const section1 = document.getElementById('solution');
	const section2 = document.getElementById('start');

	hider.addEventListener('click', function () {
		hider.classList.toggle("change");
		section1.classList.toggle("hided");
		section2.classList.toggle("hided");
	})
});


