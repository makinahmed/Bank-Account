let email = document.getElementById('email')
let password = document.getElementById('password')
let submitBtn = document.getElementById('submit-btn')




submitBtn.addEventListener('click', function () {
    const userEmail = email.value;
    const userPassword = password.value;

    if (userEmail == 'abc@gmail.com' && userPassword == 'abc') {
        window.location.href = 'bank.html'
    }
   
})