import { auth } from "./Firebase.js"

const loginWithEmailAndPassword = async (email, password)=> {
    auth.loginWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // User successfully logged in
        const user = userCredential.user;
        console.log('User logged in:', user);
      })
      .catch((error) => {
        // Handle login error
        console.error('Login error:', error);
      });
  }
/*

// Create a new user.
const createUser = async (email, password) => {
    const user = await auth.createUserWithEmailAndPassword(auth, email, password);
    if (!user) {
      // throw error
      return [false, null];
    }
    return [true, user];
  };
  
  // Sign in a user.
  const signIn = async (email, password) => {
    const user = await auth.signInWithEmailAndPassword(auth, email, password);
    if (!user) {
      // throw error
      return [false, null];
    }
    return [true, user];
  };
  
  
  // Get currently logged in user.
  const getCurrentUser = async () => {
    const user = await onAuthStateChanged(auth);
    if (!user) {
      return [false, null];
    }
    return [true, user];
  };
  
  
  // Signs out currently logged in user.
  const signOutUser = () => {
    try {
      await auth.signOutUsersignOut(auth);
      return [true, "User logged out"];
    } catch (error) {
      return [false, error];
    }
  };
  
  // Update User's Password
  const updatePasword = async (password) => {
    const user = auth.currentUser; // Or the above mentioned way
    if (!user) {
      return [false, "No logged in user"];
    }
    try {
      await updatePassword(user, password);
      return [true, "Passwored changed successfully"];
    } catch (error) {
      return [false, null];
    }
  };
  
  // Send password reset email
  const sendPaswordResetEmail = async (email) => {
    try {
      await sendPasswordResetEmail(auth, email);
      return [true, "Email sent"];
    } catch (error) {
      return [false, error];
    }
  };

*/

export { loginWithEmailAndPassword };