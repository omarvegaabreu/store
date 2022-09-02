import { createContext, useEffect, useReducer } from "react";

import {
  onAuthStateChangeListener,
  createUserFromGoogleAuth,
} from "../utils/firebase";

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const UserProvider = ({ children }) => {
  const [{ currentUser }, dispatch] = useReducer(userReducer, INITIAL_STATE);

  const setCurrentUser = (user) => {
    dispatch({ type: USER_ACTION_TYPES.SET_CURRENT_USER, currentUser: user });
  };
  const value = {
    currentUser,
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChangeListener((user) => {
      if (user) {
        createUserFromGoogleAuth(user);
      }
      setCurrentUser(user);
    });
    return unSubscribe;
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
