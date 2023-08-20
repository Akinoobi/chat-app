import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { appAuth } from "../lib/db/firebase";

function App({ Component, pageProps }) {
    const [user, setUser] = useState(null);
    const router = useRouter()
    useEffect(() => {
        if (!user) {
            router.push("/login")
        } else {
            return onAuthStateChanged(appAuth, (streamUser) => {
                
            })
        }
    }, [])
  return (
    <Component {...pageProps}/>
  );
}

export default App;
