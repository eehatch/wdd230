const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#password2");
const message = document.querySelector("#formmessage");

confirmPassword.addEventListener("focusout", validatePassword);

// This should be refactored.
function checkSame() {
	if (password.value !== confirmPassword.value) {
		message.textContent = "❗Key Phrases DO NOT MATCH!";
		message.style.visibility = "show";
		confirmPassword.style.backgroundColor = "#fff0f3";
		confirmPassword.value = "";
		confirmPassword.focus();
	} else {
		message.style.display = "none";
		confirmPassword.style.backgroundColor = "#fff";
		confirmPassword.style.color = "#000";
	}
}

document.addEventListener("DOMContentLoaded", function () {
	// Function to handle form submission
	function handleSubmit(event) {
		// Prevent default form submission
		event.preventDefault();

		// Access form elements
		let formt = event.target;
		let formData = new FormData(formt);

		// Display form element values
		for (let pair of formData.entries()) {
			console.log(pair[0] + ": " + pair[1]);
		}
	}

	const form = document.querySelector("form");
	form.addEventListener("submit", handleSubmit);
});

const range1 = document.getElementById("range");

// RANGE event listener
range1.addEventListener('change', displayRatingValue);
range1.addEventListener('input', displayRatingValue);


