import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';

const Register = () => {
    const { signup, updateUserProfile } = useContext(AuthContext)
    const [error, setError] = useState('')

    const handleOnSubmit = event => {
        event.preventDefault()
        const name = event.target.name.value
        const email = event.target.email.value
        const password = event.target.password.value

        const profile = {
            displayName: name
        }
        
        signup(email, password)
        .then(result => {
            console.log(result)
            updateUserProfile(profile)
        })
        .catch(error => {
            console.log(error.code)
            if(error.code === 'auth/email-already-in-use'){
                setError(`User already exist!`)
            }
            if(error.code === 'auth/weak-password'){
                setError(`Password must be 6 characters long!`)
            }
        })

    }

    return (
        <section className='login_section'>
            <div className='form_container'>
                <h1>Please Register</h1>
                <form onSubmit={handleOnSubmit}>
                    <div className='form_control'>
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            name='name'
                            id='name'
                            placeholder='Enter your name'
                            required
                        />
                    </div>
                    <div className='form_control'>
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            name='email'
                            id='email'
                            placeholder='Enter your email'
                            required
                        />
                    </div>
                    <div className='form_control'>
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            name='password'
                            id='password'
                            placeholder='Enter your password'
                            required
                        />
                    </div>
                    {error && <p style={{ color: 'red' }}>{error}</p> }
                    <input type="submit" value='Register' className='login_btn' />
                </form>
                <p className='isAccount'>Already have an account? <Link to='/login'>Login here</Link> </p>
            </div>
        </section>
    );
};

export default Register;