
const dropdown = document.querySelector(".dropdown"),
    dropdownBtn = dropdown.querySelector(".dropdown-btn"),
    options = dropdown.querySelectorAll(".option"),
    sBtnText = dropdownBtn.querySelector(".sBtn-text");


dropdownBtn.addEventListener("click", () => dropdown.classList.toggle("active"));
options.forEach(option => {
    option.addEventListener("click", () => {
        let selectedOption = option.querySelector(".option-text").innerText;
        sBtnText.innerText = selectedOption;

        dropdown.classList.remove("active");
    });
});

