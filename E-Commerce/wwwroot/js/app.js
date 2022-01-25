    $(document).ready(function () {
        $('#singup').click(function (e) {
            console.log("click");
            location.href = '/Account/singup/';
        });
        $('#sign-in').click(function (c) {
            console.log("click");
            location.href = '/Account/Index/';
        });
    });
const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});
