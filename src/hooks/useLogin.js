import axios from 'axios'
import React ,{useState} from 'react'
import { useContext } from 'react'

import { useAuthContext } from './useAuthContext'

const useLogin = (props) => {
    const [error, setError]= useState(null)
    const [loading, setLoading]= useState(null)
    // const  { dispatch }  = useAuthContext()
    const { dispatch } = useAuthContext();


    const login = async (email,password) =>{
        setLoading(true)
        setError(null)

        const response = await axios.post(`https://spcf-api.onrender.com/beneficiary/login`, {
            email: email,
            password: password,
        });
        const json = await response.data

        console.log("json",json);
        console.log("res", response);

        if (json.err) {
          setLoading(false);
          setError(json.err);
          console.log("error", json.err);
        }
        if(!json.err){
            console.log("welcome");
           
            localStorage.setItem("user", JSON.stringify(json.beneficiary));
                console.log(dispatch);

            dispatch({type:'LOGIN', payload:json.beneficiary})
            setLoading(false)
        }
    }

  return {login, loading, error}
}

export default useLogin