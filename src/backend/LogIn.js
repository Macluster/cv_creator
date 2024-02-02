import { getAuth, signInWithEmailAndPassword } from "firebase/auth";


function signIn(email,password)
{

console.log("hai")
const auth = getAuth();
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage)
  });


}

export default signIn;


  