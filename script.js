import { initializeApp } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-app.js";
			import { getDatabase, ref, get, set, child, update, remove, onValue } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-database.js";
			import { getAuth, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-auth.js";

			const firebaseConfig = {
				apiKey: "AIzaSyDhQPjLDSDtyFLLLgrKRnQ5Gnk8Z6Z6q7M",
				authDomain: "polymonote.firebaseapp.com",
				databaseURL: "https://polymonote-default-rtdb.firebaseio.com",
				projectId: "polymonote",
				storageBucket: "polymonote.firebasestorage.app",
				messagingSenderId: "36644175050",
				appId: "1:36644175050:web:792b2904c84b5da9ca0833"
			};

			const app = initializeApp(firebaseConfig);
			const db = getDatabase(app);

			function saveData(key, value) {
				set(ref(db, key), value);
			}

			function removeData(key) {
				set(ref(db, key), null);
			}

			/*
			get(child(ref(db), ---------key---------)).then((value) => {
				value = value.val();
				

			});
			onValue(ref(db, ---------key---------), (snapshot) => {
				snapshot = snapshot.val();

				
			});
			*/

			function changeScreen(screen) {
				for (var con of document.querySelectorAll("div.con")) {
					con.classList.add("hidden");
				}

				document.querySelector("div.con." + screen).classList.remove("hidden");
			}


			window.onload = () => {
				document.styleSheets[1].deleteRule(4);
			}

			for (var txt of document.querySelectorAll("div.signin p.signintext span.login")) {
				txt.addEventListener("click", () => {
					changeScreen("logincon");
				});
			}

			for (var txt of document.querySelectorAll("div.signin p.signintext span.signup")) {
				txt.addEventListener("click", () => {
					changeScreen("signupcon");
				});
			}

			document.querySelector("div.signupcon button.googlesignin").addEventListener("click", () => {
				
			});

			document.querySelector("div.signupcon div.email button.signinbtn").addEventListener("click", () => {
				let email = document.querySelector("div.signupcon div.email input#emailInp").value;
				
			});



			document.querySelector("div.logincon button.googlesignin").addEventListener("click", () => {
				
			});

			document.querySelector("div.logincon div.emailpassword button.signinbtn").addEventListener("click", () => {
				let email = document.querySelector("div.logincon div.emailpassword input#emailEP").value;
				let password = document.querySelector("div.logincon div.emailpassword input#passwordEP").value;
				
				
			});

			document.querySelector("div.logincon div.emaillink button.signinbtn").addEventListener("click", () => {
				let email = document.querySelector("div.logincon div.emaillink input#emailEL").value;
				
			});
