import { getAuth, signInWithEmailAndPassword,setPersistence,browserSessionPersistence } from "firebase/auth";


function signIn(email,password)
{

console.log("hai")
const auth = getAuth();


    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log(user.email)
      localStorage.setItem("email",user.email)
      localStorage.setItem("uid",user.uid)
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage)
    });
  
  


}

export default signIn;


  