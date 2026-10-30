function Login() {
    const un = document.getElementById('userName').value.trim();
    const ps = document.getElementById('password').value;

    console.log(un, ps);

}

const loginForm = document.getElementById('loginForm');
loginForm.addEventListener('submit', (e)=> {
    e.preventDefault();
    
    const fromData = new FormData();

    const UN = FormData.get("userName");
    const PS = FormData.get("password");

    console.log(UN, PS);

  loginFromData.forEach((value, key) => console.log(key, value));
});

