document.addEventListener("DOMContentLoaded", () => {
	const hider = document.getElementById('hider');
	const section1 = document.getElementById('solution');
	const section2 = document.getElementById('start');

	hider.addEventListener('click', function () {
		hider.classList.toggle("change");
		section1.classList.toggle("hided");
		section2.classList.toggle("hided");
	})



	// hider.onclick = function () {
	// 	hider.classList.toggle("change");
	// 	if (!section1.hidden) {
	// 		section1.hidden = true;
	// 	} else {
	// 		section1.hidden = false;
	// 	}
	// 	section1.hidden = true;
	// 	section2.hidden = true;
	// }

	// hider.onclick = function () {
	// 	hider.classList.remove("change");
	// 	document.getElementById('solution').hidden = false;
	// 	document.getElementById('start').hidden = false;
	// }
});

