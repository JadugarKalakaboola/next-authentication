import React from "react";
import { firebaseApp } from "../firebase-config";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { FcGoogle } from 'react-icons/fc'
import { async } from "@firebase/util";
import { useRouter } from "next/router";

export default function Login(){

    const router = useRouter()
    
    const firebaseAuth = getAuth(firebaseApp);
    const provider = new GoogleAuthProvider()

    const signIn = async () => {
        const { user } = await signInWithPopup(firebaseAuth, provider);
        const { refreshToken, providerData } = user;
        
        localStorage.setItem("user", JSON.stringify(providerData))
        localStorage.setItem("accessToken", JSON.stringify(refreshToken))

        router.push("/")
    }


    return(
        <div className="h-screen w-screen flex items-center justify-center">
            <div className="border-4 border-black-800 flex cursor-pointer px-5 py-2" onClick={signIn}>
                <FcGoogle size={25}/>
                <span className="px-5">Login</span>
            </div>
        </div>
    )
}