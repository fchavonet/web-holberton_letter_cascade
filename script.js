/*********************
* RESPONSIVE WARNING *
*********************/

const responsiveWarning = document.getElementById("responsive-warning");
// "true" if the site is optimized for responsive design, "false" if not.
const responsiveDesign = false;

// Show mobile warning if the user is on mobile and responsive-design is false.
if (!responsiveDesign && window.innerWidth <= 768) {
	responsiveWarning.classList.add("show");
}


/***********************
* MODE TOGGLE BEHAVIOR *
***********************/

// Get elements that change with the mode.
const toggleModeBtn = document.getElementById("toggle-mode-btn");
const portfolioLink = document.getElementById("portfolio-link");
const body = document.body;

// Function to apply mode.
function applyMode(mode) {
	body.classList.remove("light-mode", "dark-mode");
	body.classList.add(mode);

	if (mode === "dark-mode") {
		// Set dark mode styles.
		toggleModeBtn.style.color = "rgb(245, 245, 245)";
		toggleModeBtn.innerHTML = '<i class="bi bi-sun-fill"></i>';

		portfolioLink.style.color = "rgb(245, 245, 245)";

		responsiveWarning.style.backgroundColor = "rgb(2, 4, 8)";
	} else {
		// Set light mode styles.
		toggleModeBtn.style.color = "rgb(2, 4, 8)";
		toggleModeBtn.innerHTML = '<i class="bi bi-moon-stars-fill"></i>';

		portfolioLink.style.color = "rgb(2, 4, 8)";

		responsiveWarning.style.backgroundColor = "rgb(245, 245, 245)";
	}
}

// Check and apply saved mode on page load
let savedMode = localStorage.getItem("mode");

if (savedMode === null) {
	savedMode = "light-mode"; // Default mode.
}
applyMode(savedMode);

// Toggle mode and save preference.
toggleModeBtn.addEventListener("click", function () {
	let newMode;

	if (body.classList.contains("light-mode")) {
		newMode = "dark-mode";
	} else {
		newMode = "light-mode";
	}

	applyMode(newMode);

	// Save choice.
	localStorage.setItem("mode", newMode);
});


/*****************
* LETTER CASCADE *
*****************/

function randomHolbertonLetters() {
	const text = ("HOLBERTON");
	holbertonLetters = text[Math.floor(Math.random() * text.length)];
	return holbertonLetters;
}

function letterCascade() {
	const letterCascade = document.getElementById("letter-cascade");
	const letterElement = document.createElement("div");

	letterElement.classList.add("drop");
	letterCascade.appendChild(letterElement);

	const left = Math.floor(Math.random() * 290);
	const size = Math.random() * 1.5;
	const duration = Math.random() * 1;

	letterElement.innerText = randomHolbertonLetters();
	letterElement.style.left = left + "px";
	letterElement.style.fontSize = 0.5 + size + "rem";
	letterElement.style.animationDuration = 1 + duration + "s";

	setTimeout(function () {
		letterCascade.removeChild(letterElement);
	}, 2000)
}

setInterval(function () {
	letterCascade()
}, 20)