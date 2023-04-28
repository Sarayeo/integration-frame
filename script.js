
const dropdown = document.querySelector(".dropdown"),
    dropdown1 = document.querySelector(".dropdown1"),
    dropdownBtn = dropdown.querySelector(".dropdown-btn"),
    dropdownBtn1 = dropdown.querySelector(".dropdown-btn1"),
    options = dropdown.querySelectorAll(".option"),
    options1 = dropdown.querySelectorAll(".option1"),
    sBtnText = dropdownBtn.querySelector(".sBtn-text");
    sBtnText1 = dropdownBtn.querySelector(".sBtn-text1");


dropdownBtn.addEventListener("click", () => dropdown.classList.toggle("active"));
dropdownBtn1.addEventListener("click", () => dropdown1.classList.toggle("active"));
options.forEach(option => {
    option.addEventListener("click", () => {
        let selectedOption = option.querySelector(".option-text").innerText;
        sBtnText.innerText = selectedOption;

        dropdown.classList.remove("active");
    });
});
options1.forEach(option1 => {
    option1.addEventListener("click", () => {
        let selected = option1.querySelector(".option-text").innerText;
        sBtnText1.innerText = selected;

        dropdown1.classList.remove("active");
    });
});

