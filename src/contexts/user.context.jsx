import { createContext, useEffect, useState } from "react";

import {
  createUserProfileDocument,
  onAuthStateChangedListener,
} from "../utils/firebase/firebase.utils";

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    (async () => {
      return onAuthStateChangedListener((user) => {
        if (user) {
          createUserProfileDocument(user);
        }
        setCurrentUser(user);
      });
    })();
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};