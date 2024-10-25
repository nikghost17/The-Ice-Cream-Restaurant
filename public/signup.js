const form = document.querySelector(".signup_form");
const err = document.querySelector(".pass_error");


function checkLength(input) {
    const maxLength = 10;
    const value = input.value;
    if (value.length > maxLength) {
        input.value = value.slice(0, maxLength);
        alert("Please Enter a valid phone number!!");
    } else {
        document.getElementById('error').style.display = 'none';
    }
}

form.addEventListener("submit", (event) =>{
    const password = document.querySelector(".password");
    const cpassword = document.querySelector(".cpassword");

    const phone = document.querySelector(".phone");

    if(phone.value.length != 10){
        event.preventDefault();
        alert("Please Enter a 10 digit phone number!!");
    }

    if(password.value != cpassword.value){
        event.preventDefault();
        const el = document.createElement('div');
        const text = document.createElement('div');
        const cancel = document.createElement('div');

        el.className = 'error';
        text.className = 'text';
        cancel.className = 'cancel';

        cancel.innerText = 'x';
        text.innerText = 'Confirm Password and your Password do not match!!';

        el.appendChild(text);
        el.appendChild(cancel);
        
        err.appendChild(el);
        const choose = document.querySelector(".cancel");

        choose.addEventListener("click", () =>{
            err.innerHTML = '';
        })
    }
})