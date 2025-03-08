import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-auth.js";
const firebaseConfig = {
    apiKey: "AIzaSyDqjhHH0GWjfeeOMTzXWhOYbtunjSeypiw",
    authDomain: "sign-up-page-b4054.firebaseapp.com",
    projectId: "sign-up-page-b4054",
    storageBucket: "sign-up-page-b4054.appspot.com",  // Fixed storageBucket URL
    messagingSenderId: "836726854946",
    appId: "1:836726854946:web:0809ab93581b007e6e417b",
    measurementId: "G-6S001XKBEW"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

let getbtn = document.getElementById('btn');

getbtn.addEventListener('click', function () {
    const email = document.getElementById('semail').value;
    const pass = document.getElementById('spass').value;

    createUserWithEmailAndPassword(auth, email, pass)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log("User created:", user);
            alert("Sign up successfully");
        })
        .catch((error) => {
            console.error("Error:", error.code, error.message);
            alert("Error: " + error.message);
        });
});
