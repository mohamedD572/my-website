import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCDKdgCghOBxP68OgdihbL9brrG-y7Ay4E",
  authDomain: "days-d0a15.firebaseapp.com",
  projectId: "days-d0a15",
  storageBucket: "days-d0a15.firebasestorage.app",
  messagingSenderId: "982589362978",
  appId: "1:982589362978:web:78f345551a8336c01dcb7b"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
