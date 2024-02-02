import React, { useState } from 'react';
import add from '../assets/add.png'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase';



const Register = () => {
    const [values, setValues] = useState({
        name : "",
        email : "",
        password : ""
    })

    const [errmassge, setErrmassge] = useState('')

    const handlesubmit = (e)=>{
        e.preventDefault()

        if(!values.name || !values.email || !values.password){
            setErrmassge("Fill all the fields")
            return
        }
        createUserWithEmailAndPassword(auth, values.name, values.email, values.password).then(res=>{
            console.log(res)
        }).catch((err)=>console.log('error',err))
    }

    return (
        <div className='fromContainer'>
            <div className='fromWrapper'>
                <span className='logo'>DOZE</span>
                <span className='title'>Register</span>
                <form onSubmit={handlesubmit}>
                    <input type="text" placeholder='Display Name' onChange={(event)=>{
                        setValues((prev)=>(
                            {...prev, name: event.target.value}
                        ))
                    }}/>
                    <input type="email" placeholder='email' onChange={(event)=>{
                        setValues((prev)=>(
                            {...prev, email: event.target.value}
                        ))
                    }}/>
                    <input type="password" placeholder='password' onChange={(event)=>{
                        setValues((prev)=>(
                            {...prev, password: event.target.value}
                        ))
                    }} />

                    <input style={{display:'none'}} type="file" id='file' />
                    <label htmlFor="file">
                        <img src={add} alt="" />
                        <span>Add an avatar</span>
                    </label>
                    <button>Sign up</button>
                    
                </form>
                <p>You do have an account? Login</p>

            </div>
        </div>
    );
};

export default Register;