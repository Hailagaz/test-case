document.addEventListener("DOMContentLoaded", () => {
	const hider = document.getElementById('hider');
	const section1 = document.getElementById('solution');
	const section2 = document.getElementById('start');

	hider.addEventListener('click', function () {
		hider.classList.toggle("change");
		section1.classList.toggle("hided");
		section2.classList.toggle("hided");
	});





	const phoneInputField = document.querySelector("#phone");
	const phoneInput = window.intlTelInput(phoneInputField, {
		preferredCountries: ["ua", "us", "pl", "de"],
		utilsScript:
			"https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
	});


	const info = document.querySelector(".alert-info");

	function process(event) {
		event.preventDefault();
		const phoneNumber = phoneInput.getNumber();
		info.style.display = "";
		info.innerHTML = `Phone number in E.164 format: <strong>${phoneNumber}</strong>`;
	}
});




$(function () {
	$(".video").click(function () {
		var theModal = $(this).data("target"),
			videoSRC = $(this).attr("data-video"),
			videoSRCauto = videoSRC + "?modestbranding=1&rel=0&controls=1&showinfo=1&html5=1&autoplay=1&mute=1";
		$(theModal + ' iframe').attr('src', videoSRCauto);
		$(theModal + ' button.close').click(function () {
			$(theModal + ' iframe').attr('src', videoSRC);
		});
	});
});