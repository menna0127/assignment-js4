
var signEmailInput = document.getElementById("signEmail");
var signPasswordInput = document.getElementById("signPassword");
var signNameInput = document.getElementById("signName");
var loginEmailInput = document.getElementById("loginEmail");
var loginPasswordInput = document.getElementById("loginPassword");
var loginBtn = document.getElementById("login");
var regexEmailLogin =  /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/ ;
var signUpBtn = document.getElementById('signUp')
var regexEmail =  /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/ ;
var logout = document.getElementById('logout');
var h1 = document.getElementById("username");


console.log(users);
var users = [] ;

if (localStorage.getItem("userId") == null) {
    users = [] ;
} else {
    users = JSON.parse(localStorage.getItem("userId"))
}

// check inpts is empty or not 

function isEmpty() {
    if (signNameInput == '' || signEmailInput == '' || signPasswordInput == '' ) {
        return false;
    }else{
        return true;
    }
}

// check email in localStorage

function isEmailExist() {
    for (let i = 0; i < users.length; i++) {
        if (users[i].email == signEmailInput.value ) {
            return false;
        }
        
    }
}

function signUp() {
    if (isEmpty() == false) {
        document.getElementById("text").innerHTML = `<span class="text-danger m-3">All inputs are required</span>`
    }

    if (isEmailExist() == false) {
        document.getElementById("text").innerHTML = `<span class="text-danger m-3">email is exisit</span>`
    } 

    if ( regexEmail.test(signEmailInput.value) == true && isEmailExist() != false ) {

        var userInfo = {
            name : signNameInput.value ,
            email : signEmailInput.value , 
            password : signPasswordInput.value   
        } ;

        users.push(userInfo);

        localStorage.setItem("userId" , JSON.stringify(users) );

        document.getElementById("text").innerHTML = `<span class="text-success m-3">Success</span>`;

        // window.location = '../index.html';

        return true;
      

        
    } else {
        document.getElementById("text").innerHTML = `<span class="text-danger m-3">in valid inputs</span>`;
        // return false;
    }

    
}


signUpBtn?.addEventListener('click' , function(){
    if (signUp() == true) {
        window.location = '../index.html';

    }
})



function isLoginEmailExist() {
    for (let i = 0; i < users.length; i++) {
        if (users[i].email == loginEmailInput.value ) {
            return false;
        }
        
    }
}

function isLoginEmpty() {
    if (loginPasswordInput == '' || loginEmailInput == ''  ) {
        return false;
    }else{
        return true;
    }
}

function login() {

    if (isLoginEmpty() == false) {
        document.getElementById("text2").innerHTML = `<span class="text-danger m-3">All inputs are required</span>`
    }

    if (regexEmailLogin.test(loginEmailInput.value) == true &&  isLoginEmailExist != false ) {

        var email = loginEmailInput.value;
        var password = loginPasswordInput.value;

        for (let i = 0; i < users.length; i++) {
            if (users[i].email == email && users[i].password == password ) {
                document.getElementById("text2").innerHTML = `<span class="text-success m-3">Success</span>`;
                localStorage.setItem('userName', users[i].name);
                

                // if (name != null) {
                //         h1.innerHTML = `Welcom ${name}` ;
                // }
            } 
            
        }


        return true;

        
    } else {
        document.getElementById("text2").innerHTML = `<span class="text-danger m-3">in valid inputs</span>`;
        return false;
    }
    
}


loginBtn?.addEventListener('click' , function(){
    if (login() == true) {
        window.location = '../home.html';
    }
})

var h1 = document.getElementById("username");


h1.innerHTML = `Welcom ${localStorage.getItem('userName')}`;



function logOut() {
    localStorage.removeItem('userName');
    window.location = '../index.html'
}

logout?.addEventListener('click' , function(){
    logOut();
})


