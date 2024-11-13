import { initializeApp } from 'firebase/app';

const firebaseConfig = {
};

const app = initializeApp(firebaseConfig);
const loginDiv = document.querySelector(".login");
const email = document.querySelector(".Emailinput");
const passwd = document.querySelector(".Passwordinput");


function user(email, password, type) {
    this.email = email;
    this.password = password;
    this.type = type;
  }
function login(params) {
    
    
}