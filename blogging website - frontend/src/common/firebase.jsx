import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA9P0WZJ-9X-Hn7wHWT9JAglnf0Cwmv12c",
  authDomain: "fullstack-blog-yt.firebaseapp.com",
  projectId: "fullstack-blog-yt",
  storageBucket: "fullstack-blog-yt.firebasestorage.app",
  messagingSenderId: "1051866828331",
  appId: "1:1051866828331:web:ace600f1b232640258e46e"
};

const app = initializeApp(firebaseConfig);

//Google Auth
const provider = new GoogleAuthProvider();

const auth = getAuth();

export const authWithGoogle = async () => {

    let user = null;

    await signInWithPopup(auth, provider)
    .then((result) => {
        user = result.user
    })
    .catch((err) => {
        console.log(err);
    })

    return user;

}