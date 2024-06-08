import { ReactNode, createContext, useState } from "react";
import { User, onAuthStateChanged } from "firebase/auth";
import { auth } from "@/services/auths";


export const authContext = createContext<{ user: User | null }>({
    user: null
})

export const AuthProvider = ({ children }: { children: ReactNode }) => {

    const [user, setUser] = useState<User | null>(null)


    onAuthStateChanged(auth, (user) => {
        if (user) {
            setUser(user)

        } else {
            setUser(null)
        }
    });

    return (
        <authContext.Provider value={{ user }}>{children}</authContext.Provider>
    )
}