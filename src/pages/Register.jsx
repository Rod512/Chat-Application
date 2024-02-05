import React, { useState } from 'react';
import add from '../assets/add.png'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';




const Register = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [err, setErr] = useState(false)

    const handlesubmit = async (e)=>{
        e.preventDefault();
        try{
            const res = createUserWithEmailAndPassword(auth,name,email,password)
        }catch(err){
            setErr(true)
        }
       
    }

    return (
        <div className='fromContainer'>
            <div className='fromWrapper'>
                <span className='logo'>DOZE</span>
                <span className='title'>Register</span>
                <form onSubmit={handlesubmit}>
                    <input type="text" placeholder='Display Name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required/>

                    <input type="email" placeholder='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required/>

                    <input type="password" placeholder='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required/>

                    <input style={{display:'none'}} type="file" id='file' />
                    <label htmlFor="file">
                        <img src={add} alt="" />
                        <span>Add an avatar</span>
                    </label>
                    <button>Sign up</button>
                    {err && <span>Something wend wrong</span>}
                    
                </form>
                <p>You do have an account? Login</p>

            </div>
        </div>
    );
};

export default Register;