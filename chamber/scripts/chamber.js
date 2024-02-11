const modeButton = document.querySelector(".switch");
const body = document.querySelector("body");
modeButton.addEventListener("click", () => {
	if (modeButton.textContent.includes("☀️")) {
		body.style.background = "#eee";
		body.style.color = "#000";
		modeButton.Content = "☀️";
	} else {
        body.style.background = "#000";
		body.style.color = "#fff";
        // main.style.background = "#E0E1DD";
		// footer.style.background = "#1B263B";
		// header.style.background = "#1B263B";
		// main.style.color = "#E0E1DD";
		// body.style.color = "#E0E1DD";
		// footer.style.color = "#E0E1DD";
		// header.style.color = "#E0E1DD";
		modeButton.Content = "🌑";
	}
});