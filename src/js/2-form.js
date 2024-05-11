const form = document.querySelector(".feedback-form");
form.addEventListener("input", handleInput);
form.addEventListener("submit", handleSubmit);

const formData = {
    email: "",
    message: ""
};

function handleInput(event) {
    const key = event.target.name;
    formData[key] = event.target.value;
    localStorage.setItem("feedback-form-state", JSON.stringify(formData));

};

function handleSubmit(event) {
    event.preventDefault();
    if (formData.email === "" || formData.message === "") {
        alert("Fill please all fields");
        return;
    }
    console.log(formData);
    localStorage.removeItem("feedback-form-state");
    form.reset();
};

function populateText() {
    const data = JSON.parse(localStorage.getItem("feedback-form-state"));

    if (!data) {
        return;
    }
    const { email, message } = form.elements;
    email.value = data.email;
    message.value = data.message;
}

populateText();