// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore,doc, setDoc, getDoc } from "firebase/firestore";
import { getAuth, onAuthStateChanged , createUserWithEmailAndPassword , signInWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


export default class firebase
{
  constructor()
  {
      const firebaseConfig = {
      apiKey: "AIzaSyD8mkHHsFpGl_cOgUEbgqgn4D8fqW-_kAc",
      authDomain: "netflixclone-d9feb.firebaseapp.com",
      projectId: "netflixclone-d9feb",
      storageBucket: "netflixclone-d9feb.firebasestorage.app",
      messagingSenderId: "846008916765",
      appId: "1:846008916765:web:56037f692632c0d0e49ff4",
      measurementId: "G-BQ24HR3GJV"
    }
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    this.auth = getAuth(app);
    this.db = getFirestore(app);
  }
  async sign_in_user(email, password) {
  try {
    const userCredential = await signInWithEmailAndPassword(this.auth, email, password);
    const user = userCredential.user;

    const docRef = doc(this.db, "users", `${user.email}`);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return docSnap.data().name;
    } else {
      console.log("No such document!");
      return null;
    }
  } catch (error) {
    console.log("ERROR in firebase sign_in_user:");
    console.log(`errorMessage = ${error.message} \n errorCode= ${error.code}`);
    return null;
  }
}

async sign_up_user(email, password, name) {
  try {
    const userCredential = await createUserWithEmailAndPassword(this.auth, email, password);
    const user = userCredential.user;

    await setDoc(doc(this.db, "users", `${user.email}`), {
      email: user.email,
      uid: user.uid,
      name: name
    });

    return name;
  } catch (error) {
    console.log("ERROR in firebase sign_up_user:");
    console.log(`errorMessage = ${error.message} \n errorCode= ${error.code}`);
    return null;
  }
}




  
} 



