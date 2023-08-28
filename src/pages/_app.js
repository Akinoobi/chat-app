import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { appAuth, firebaseAppDB } from "../lib/db/firebase";
import { onAuthStateChanged } from "firebase/auth";
import AuthContext from "../context/ContextProvider";
import { doc, onSnapshot } from "firebase/firestore";
import LinearIndeterminate from "../components/Loading";

function App({ Component, pageProps }) {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true)
    const router = useRouter()
    const getUsers = () => {
            //     const userDocRef = doc(firebaseAppDB, 'users', user?.uid);
            //    onSnapshot(userDocRef, (snapshot) => {
            //         console.log("usersssall", snapshot.data())
            //       if (snapshot.exists()) {
            //         const userData = snapshot.data();
            //         return {userData}
            //       }
            //     });
    }
    useEffect(() => {
   
            return onAuthStateChanged(appAuth, (streamUser) => {
                if (!streamUser) {
                    setUser(streamUser);
                    setIsLoading(false);
                    router.push("/login")
                } else {
                    console.log("streamuser", streamUser)
                setUser(streamUser);
                setIsLoading(false);
        
                // Fetch user document from /users collection
                
            }
            })
        
    }, [])
    if (isLoading) {
            <LinearIndeterminate/>
    }
    console.log("streamsUsers", user, isLoading, "getUsers", getUsers())
  return (
    <AuthContext.Provider value={{user}}>
        {/* {isLoading ? 
        <LinearIndeterminate/> :  <Component {...pageProps}/>} */}
       <Component {...pageProps}/>
    </AuthContext.Provider>
  );
}

export default App;
