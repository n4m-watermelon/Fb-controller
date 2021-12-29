import React from "react";
import { useHistory } from "react-router-dom";
export default function AuthProvider({ children }) {
  const history = useHistory();
   let checkLogin  = localStorage.getItem('isLogin')
      if (!checkLogin) {
        history.push("/login");
      }
  return (<AuthContext.Provider value={{checkLogin}}> {children} </AuthContext.Provider>)
};

export const AuthContext = React.createContext();


