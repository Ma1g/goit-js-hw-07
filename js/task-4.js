const formElem = document.querySelector(".login-form");

formElem.addEventListener("submit", onFormSubmit);

function onFormSubmit(e) {
    e.preventDefault();

    const userEmail = formElem.elements.email;
    const userPassword = formElem.elements.password;

    if (!userEmail.value || !userPassword.value) {
        alert("All form fields must be filled in")
    } else {
        const obj = {
            email: userEmail.value,
            password: userPassword.value,
        };
        console.log(obj);
        formElem.reset();
    }
}
