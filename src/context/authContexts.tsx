import React, {createContext, useState, ProviderProps} from "react";

export type UserType = {
  email: string;
  password: string;
}

type PropsUserContext = {
  user: UserType;
  setUser: React.Dispatch<React.SetStateAction<UserType>>;
}

const DEFAULT_VALUE = {
  user: {
    email: "",
    password: "",
  },
  setUser: () => {},
}


const AuthContext = createContext<PropsUserContext>(DEFAULT_VALUE);

const AuthProvider: React.FC = ({children}) => {
  const [user, setUser] = useState(DEFAULT_VALUE.user)

  return(
   <AuthContext.Provider value={{user, setUser}}>
    {children}
   </AuthContext.Provider>
  )
}

export { AuthProvider, AuthContext }

