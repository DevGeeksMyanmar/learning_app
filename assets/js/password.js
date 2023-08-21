const eye = document.querySelector(".fa-eye");
const eye_slash = document.querySelector(".fa-eye-slash");
const password = document.querySelector(".password");


eye.addEventListener("click", () => {
    eye.classList.add("active");
    eye_slash.classList.remove("active");
    password.type = "text";
})

eye_slash.addEventListener("click", () => {
    eye.classList.remove("active");
    eye_slash.classList.add("active");
    password.type = "password";
})