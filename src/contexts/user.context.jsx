import { createContext, useState, useEffect} from "react";
import { createUserDocumentFromAuth,
     getUserLocation,
     onAuthStateChangedListerner, 
     userLocation
    } from "../utils/firebase/firebase";


export const UserContext = createContext({
    currentUserLocation: null,
    currentUser: null,
    setCurrentUserLocation: () => null,
    setCurrentUser: () => null,
    
});


export const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    
    const value = { currentUser, 
        setCurrentUser, 
        
    };
    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}