const signInBtn = document.getElementById("signIn");
const signUpBtn = document.getElementById("signUp");
const fistForm = document.getElementById("form1");
const secondForm = document.getElementById("form2");
const container = document.querySelector(".container");


fistForm.onsubmit = (e) => {
    e.preventDefault ();
}

secondForm.onsubmit = (e) => {
    e.preventDefault ();
}


signInBtn.onclick = () => {
    container.classList.remove('right-panel-active');
}



signUpBtn.onclick = () => {
    container.classList.add('right-panel-active');
}
