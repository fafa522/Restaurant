import React, { useCallback, useContext, useMemo, useState } from 'react';

export const UserContext = React.createContext('');

export function useUser(defaultUser = null) {
  const [user, setUser] = useState(defaultUser);

  const logout = useCallback(() => setUser(null), []);

  return {
    user,
    login: setUser,
    logout,
  };
}

export function useCurrentUser() {
  return useContext(UserContext);
}

export const UserContextProvider = ({ children }) => {
  const { user, login, logout } = useUser();

  const userContextValue = useMemo(
    () => ({ user, login, logout }),
    [user, login, logout]
  );

  return (
    <UserContext.Provider value={userContextValue}>
      {children}
    </UserContext.Provider>
  );
};
