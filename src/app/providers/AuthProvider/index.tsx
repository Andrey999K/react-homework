import React, { createContext, useContext, useState } from "react";
import { Callback, User } from "../../../types";

export type AuthContextType = {
  user: User | null;
  signIn?: (newUser: User, callback: Callback) => void;
  signOut?: (callback: Callback) => void;
};

const AuthContext = createContext<AuthContextType | null>(null);

interface AuthProviderProps {
  children: React.ReactNode | Array<React.ReactNode>;
}

export const useAuth = () => {
  return useContext(AuthContext);
};

const USER_LS_KEY = "user";

const AuthProvider = ({ children }: AuthProviderProps) => {
  const localStorageUser = localStorage.getItem(USER_LS_KEY);
  const [user, setUser] = useState<User | null>(
    localStorageUser ? { email: localStorageUser } : null
  );
  const signIn = (newUser: User, callback: () => void) => {
    console.log(newUser);
    setUser(newUser);
    localStorage.setItem(USER_LS_KEY, newUser.email);
    callback();
  };

  const signOut = (callback: () => void) => {
    setUser(null);
    localStorage.removeItem(USER_LS_KEY);
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
