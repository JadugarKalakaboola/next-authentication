import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { userAccessToken, fetchUser} from '../Utils/fetchUserData'
import { useRouter } from "next/router";
import { useEffect, useState } from 'react';

export default function Home() {
  const router = useRouter();
  const [user, setUser] = useState({})

  useEffect(() => {

    return () => {

      const accessToken = userAccessToken();
      if(!accessToken) return router.push("/login")
      
      const [ userInfo ] = fetchUser();
      setUser(userInfo)
    };
  }, [])

  const logOut = () => {
    localStorage.clear()
    router.push("/login")
  }


  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center">
      <div className='flex items-center justify-center bg-slate-200 p-5 rounded-md'>
        <img src={user?.photoURL} className="rounded-md	"></img>
        <div className='px-5'>
          <p className='text-gray-500 text-left	text-xl'>{user.displayName}</p>
          <p className='text-gray-500 text-left	 text-l'>{user.email}</p>
        </div>
      </div>
      <button className='flex items-center text-gray-50 justify-center bg-slate-700 px-5 py-2 m-5 rounded-md' onClick={logOut}>
          Log Out
      </button>
    </div>
  )
}
