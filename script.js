const pass = document.querySelector("#pwd");
const passConfirm = document.querySelector("#pwdconfirm");
const btn = document.querySelector("button");
const lastRowInputs = document.querySelectorAll(".input-row:last-child input");

// for providing password feedback to user
const lastRow = document.querySelector(".input-row:last-child");
const errorContainer = document.createElement("p");
errorContainer.setAttribute("style", "position: absolute; right:0; bottom:-18px; font-size:0.7rem; color:grey;");
lastRow.appendChild(errorContainer);

btn.addEventListener("click", (e) => {
    if (pass.value !== passConfirm.value) {
        e.preventDefault();
        errorContainer.textContent = "Password does not match";
        lastRowInputs.forEach((input) => {
            input.setAttribute("style", "background-color:white; border-color:red;")
        });
    }
});

lastRowInputs.forEach((input) => {
    input.addEventListener("focusout", () => {
        if (input.checkValidity())
            input.setAttribute("style", "border-color: green; background-color: rgb(243, 255, 243);")
    })
})