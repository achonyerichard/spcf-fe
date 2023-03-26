import axios from 'axios'
import React ,{useState} from 'react'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'


import { useAuthContext } from './useAuthContext'

const useLogin = (props) => {
    const navigate = useNavigate();
    const [error, setError]= useState(null)
    const [loading, setLoading]= useState(null)
    // const  { dispatch }  = useAuthContext()
    const { dispatch } = useAuthContext();


    const login = async (email,password,type) =>{
        setLoading(true)
        setError(null)

        const response = await axios.post(`https://spcf-api.onrender.com/beneficiary/login`, {
            email: email,
            password: password,
            type:type
        });
        const json = await response.data

        

        if (json.err) {
          setLoading(false);
          setError(json.err);
         
        }
        if(!json.err){
            console.log("welcome");
           
            localStorage.setItem("user", JSON.stringify(json.beneficiary));
               

            dispatch({type:'LOGIN', payload:json.beneficiary})
            setLoading(false)
            navigate("/")
        }
    }

  return {login, loading, error}
}

export default useLogin