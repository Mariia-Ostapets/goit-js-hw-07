const registerForm = document.querySelector(".login-form");
registerForm.addEventListener("submit", event => {
    event.preventDefault();
    const loginForm = event.target;
    const email = loginForm.elements.email.value.trim();
    const password = loginForm.elements.password.value.trim();
    if (email === "" || password === "") {
        return alert("All form fields must be filled in");
    }
    const formFieldsObject = {
        Email: email,
        Password: password,
    };
    console.log(formFieldsObject);
    loginForm.reset();
});
