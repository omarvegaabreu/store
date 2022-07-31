import { createContext, useState, useEffect } from "react";

import {
  onAuthStateChangeListener,
  createUserFromGoogleAuth,
} from "../utils/firebase";

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    const unSubscribe = onAuthStateChangeListener((user) => {
      if (user) {
        console.log(user);
        createUserFromGoogleAuth(user);
      }
      setCurrentUser(user);
    });
    return unSubscribe;
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
