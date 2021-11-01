import React, { createContext, useContext, useState, useEffect } from 'react';
import { auth } from '../firebase/firebase.config';

import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from "@firebase/auth";
let AuthContext = createContext();

let useAuth = () => {
  return useContext(AuthContext);
}

const AuthProvider = ({children}) => {

  let [currentUser, setCurrentUser] = useState(null);
  let [loading, setLoading] = useState(true);

  let signup = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  let login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  }

  useEffect(() => {
    let unsub = auth.onAuthStateChanged( user => {
      setCurrentUser(user);
      setLoading(false);
    })

    return unsub
  }, [])


  let value = {
    currentUser,
    login,
    signup
  }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}

export { AuthProvider, useAuth };
