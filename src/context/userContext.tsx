import React, { Children, createContext,ReactNode, useContext, useState  } from "react";

interface UserContextType { 

    userName: string | null;
    setUser: (value:string) => void;

}

const UserContext = createContext<UserContextType | undefined>(undefined)

export const UserProvider = ({ children }: { children: ReactNode }) => {

    const [userName, setUserName] = useState<string | null>(null);

    const handleSetUser = (value:string) => {
        setUserName(value);
    }
    

    return (
        <UserContext.Provider value={{ userName,setUser:handleSetUser }}>
            {children}
        </UserContext.Provider>
    );
    

}

export const useUser = () => {
    const context = useContext(UserContext);
    if (!context) {
      throw new Error('useAuth debe ser usado dentro de un AuthProvider');
    }
    return context;
  };