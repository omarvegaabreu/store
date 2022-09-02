// import { createContext, useReducer } from "react";

// export const UserContext = createContext({
//   currentUser: null,
//   setCurrentUser: () => null,
// });

// export const UserProvider = ({ children }) => {
//   const [{ currentUser }, dispatch] = useReducer(userReducer, INITIAL_STATE);

//   const setCurrentUser = (user) => {
//     dispatch({ type: USER_ACTION_TYPES.SET_CURRENT_USER, currentUser: user });
//   };
//   const value = {
//     currentUser,
//   };

//   return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
// };
