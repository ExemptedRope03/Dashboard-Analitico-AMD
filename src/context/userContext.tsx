import React, { Children, createContext,ReactNode, useContext, useEffect, useState  } from "react";

interface UserContextType { 

    userName: string | null;
    setUser: (value:string) => void;
    closeUser: () => void;

}

const UserContext = createContext<UserContextType | undefined>(undefined)

export const UserProvider = ({ children }: { children: ReactNode }) => {

    const [userName, setUserName] = useState<string | null>(null);


    const handleSetUser = (value:string) => {
        setUserName(value);
    }

    const handleCloseUser = () => {
        setUserName(null);
        localStorage.clear();

    }
    
    useEffect(() => {
        
        if(localStorage.getItem('sessionName')){
           setUserName(localStorage.getItem('sessionName')); 
        }
        
      }, []);

    return (
        <UserContext.Provider value={{ 
            userName,setUser:handleSetUser,
            closeUser:handleCloseUser,
             }}>
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