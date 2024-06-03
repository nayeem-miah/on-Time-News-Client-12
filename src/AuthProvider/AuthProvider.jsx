import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { useEffect, useState } from "react";
import { createContext } from "react";
import auth from "../Firebase/firebase.config";

export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // sign in user
  const logIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // google login
  const googleLogin = () => {
    setUser("");
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const updateUserProfile = (name, image) => {
    setLoading(true);

    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: image,
    });
  };

  //  sign out
  const logout = () => {
    // setLoading(true)
    return signOut(auth);
  };

  // onAuthStateChanged
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      // const userEmail = currentUser?.email || user?.email;
      // const loggedUSer = { email: userEmail };
      // console.log(user)
      setLoading(false);
      setUser(currentUser);
      // token
      // // if (currentUser) {

      // //   axios.post('http://localhost:5000/jwt',loggedUSer,
      // //   { withCredentials: true })
      // //   .then(res => {
      // //     // console.log("token response ", res.data);
      // //   });
      // // }
      // // else {
      // //   axios.post('http://localhost:5000/logout', loggedUSer, {
      // //     withCredentials : true,

      // //   })
      //   .then(res=> {
      //     console.log(res.data);
      //   })
      // }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  //  auth info
  const authInfo = {
    user,
    loading,
    createUser,
    logout,
    googleLogin,
    logIn,
    updateUserProfile,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
