import React, { createContext, useContext, useState, useEffect } from 'react';
import { auth } from '../firebase/firebase.config';

import {createUserWithEmailAndPassword} from "@firebase/auth";
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

  useEffect(() => {
    let unsub = auth.onAuthStateChanged( user => {
      setCurrentUser(user);
      setLoading(false);
    })

    return unsub
  }, [])


  let value = {
    currentUser,
    signup
  }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}

export { AuthProvider, useAuth };
