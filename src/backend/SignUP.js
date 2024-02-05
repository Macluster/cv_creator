import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


function SignUP(email,password)
{


const auth = getAuth();
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 

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
    // ..
  });

}
export default SignUP;