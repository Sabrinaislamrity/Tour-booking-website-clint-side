import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
export const AuthContext = createContext();
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";



const auth = getAuth(app);
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    console.log(user);
    

     const createUser = (email, password) => {
      
        return createUserWithEmailAndPassword(auth, email,password);
    };


      const signIn = (email, password) => {
    
        return signInWithEmailAndPassword(auth, email, password);
      };


        const updateUser = (updatedData) =>{
        return updateProfile(auth.currentUser, updatedData)
      };
      



     const logOut=() =>{
        return signOut(auth);

    };

   useEffect(()=>{
     const unsubscribe =   onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser);
            
            
        });
        return () => {
            unsubscribe();

        }
    },[]);



     const googleProvider = new GoogleAuthProvider();

const signInWithGoogle = () => {
  
  return signInWithPopup(auth, googleProvider);
};



    const authData = {
        user,
        setUser,
        createUser,
        logOut,
        signIn,
        signInWithGoogle,
        updateUser,

    }
    return <AuthContext value={authData}>
        {children}
    </AuthContext>;
};

export default AuthProvider;