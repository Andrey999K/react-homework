import React, { createContext, useContext, useState } from "react";
import { Callback, User } from "../../types";

type AuthContextType = {
  user: User | null;
  signIn?: (newUser: User, callback: Callback) => void;
  signOut?: (callback: Callback) => void;
};

const AuthContext: React.Context<AuthContextType | null> = createContext(null);

interface AuthProviderProps {
  children: React.ReactNode | Array<React.ReactNode>;
}

export const useAuth = () => {
  return useContext(AuthContext);
};

const AuthProvider = ({ children }: AuthProviderProps) => {
  const localStorageUser = localStorage.getItem("user");
  const [user, setUser] = useState<User | null>(localStorageUser ? { email: localStorageUser } : null);
  const signIn = (newUser: User, callback: () => void) => {
    console.log(newUser);
    setUser(newUser);
    localStorage.setItem("user", newUser.email);
    callback();
  };

  const signOut = (callback: () => void) => {
    setUser(null);
    localStorage.removeItem("user");
    callback();
  };

  const value = {
    user,
    signIn,
    signOut
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
