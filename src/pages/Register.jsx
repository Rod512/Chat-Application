import React from 'react';
import add from '../assets/add.png'

const Register = () => {
    return (
        <div className='fromContainer'>
            <div className='fromWrapper'>
                <span className='logo'>DOZE</span>
                <span className='title'>Register</span>
                <form>
                    <input type="text" placeholder='Display Name'/>
                    <input type="text" placeholder='email' />
                    <input type="password" placeholder='password' />
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