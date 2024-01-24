import React from 'react';

const Login = () => {
    return (
        <div className='fromContainer'>
        <div className='fromWrapper'>
            <span className='logo'>DOZE</span>
            <span className='title'>Login</span>
            <form>
                <input type="text" placeholder='email' />
                <input type="password" placeholder='password' />
                
                <button>Login</button>
            </form>
            <p>Do you have any account? Register</p>

        </div>
    </div>
    );
};

export default Login;