import React, { useState } from 'react';
import add from '../assets/add.png'
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from 'firebase/auth';

const Register = () => {
    const [err,setErr] = useState(false)

    const handleSubmit = async (e)=> {
        e.preventDefault()
        const displayName = e.target[0].value
        const email = e.target[1].value
        const password = e.target[2].value
        const file = e.target[3].files[0]

        try{
            const res = await createUserWithEmailAndPassword(auth, email, password);
            console.log(res)
        }catch(err){
            setErr(true)
        }
    }

    return (
        <div className='fromContainer'>
            <div className='fromWrapper'>
                <span className='logo'>DOZE</span>
                <span className='title'>Register</span>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder='Display Name'/>
                    <input type="text" placeholder='email' />
                    <input type="password" placeholder='password' />
                    <input style={{display:'none'}} type="file" id='file' />
                    <label htmlFor="file">
                        <img src={add} alt="" />
                        <span>Add an avatar</span>
                    </label>
                    <button>Sign up</button>
                    {err && <span>Something went wrong</span>}
                </form>
                <p>You do have an account? Login</p>

            </div>
        </div>
    );
};

export default Register;