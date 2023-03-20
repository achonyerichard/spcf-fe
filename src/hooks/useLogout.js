import axios from 'axios'
import React ,{useState} from 'react'


import { useAuthContext } from './useAuthContext'

const useLogout = (props) => {
   
    // const  { dispatch }  = useAuthContext()
    const { dispatch } = useAuthContext();


    const logout = async (email,password) =>{
        localStorage.removeItem("user")

        dispatch({type:'LOGOUT'})
      
      
       
       
    }

  return {logout}
}

export default useLogout