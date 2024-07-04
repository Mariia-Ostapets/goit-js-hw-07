const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output"); 
nameInput.addEventListener("input", () => {
    const trimmedNameInput = nameInput.value.trim();
    nameOutput.textContent = trimmedNameInput ? trimmedNameInput : "Anonymous";
});