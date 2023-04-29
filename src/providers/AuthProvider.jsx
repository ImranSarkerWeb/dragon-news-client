import React, { createContext } from "react";

export const AuthContex = createContext(null);

const AuthProvider = ({ children }) => {
  const user = null;
  const authInfo = {
    user,
  };
  return <AuthContex.Provider value={authInfo}>{children}</AuthContex.Provider>;
};

export default AuthProvider;
