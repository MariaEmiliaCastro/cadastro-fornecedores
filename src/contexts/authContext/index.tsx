import { onAuthStateChanged, User } from "firebase/auth";
import { createContext, ReactNode, useEffect, useState } from "react";
import { auth } from "../../firebase/firebase";

type AuthContextType = {
  currentUser: User | null;
  userLoggedIn: boolean;
  loading: boolean;
};

export const AuthContext = createContext<AuthContextType>({
  currentUser: null,
  userLoggedIn: false,
  loading: true,
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);
        setUserLoggedIn(true);
        setLoading(false);
        return;
      }

      setCurrentUser(null);
      setUserLoggedIn(false);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    userLoggedIn,
    loading,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
