import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { 
    getAuth, 
    signInWithPopup, 
    GoogleAuthProvider 
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyB6dz1GREueNHbvlBqDAxOkY2OZ89zzLTU",
    authDomain: "gest-c9436.firebaseapp.com",
    projectId: "gest-c9436",
    storageBucket: "gest-c9436.firebasestorage.app",
    messagingSenderId: "631199034647",
    appId: "1:631199034647:web:94b7fc0bdf2155cd365b52",
    measurementId: "G-1ZN2TYMV4N"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const btnGoogle = document.getElementById('btn-google');

if (btnGoogle) {
    btnGoogle.addEventListener('click', async () => {
        try {
            const resultado = await signInWithPopup(auth, provider);
            console.log("Usuário logado com sucesso:", resultado.user.displayName);
            
            window.location.href = "produtos.html";
        } catch (erro) {
            console.error("Erro no login com Google:", erro);
            alert("Erro ao entrar com o Google. Verifique o console do navegador.");
        }
    });
}