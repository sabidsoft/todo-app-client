import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';
import '../styles/login.css'
import Loading from '../components/Loading'

const Login = () => {
    const { login, loading } = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()

    const handleOnSubmit = event => {
        event.preventDefault()
        const email = event.target.email.value
        const password = event.target.password.value

        login(email, password)
        .then(result => {
            console.log(result)
            navigate(location.state?.from?.pathname || '/todo-list', { replace: true })

        })
        .catch(err => {
            console.log(err)
        })
    }

    if(loading){
        return <Loading/>
    }

    return (
        <section className='login_section'>
            <div className='form_container'>
                <h1>Please Login</h1>
                <form onSubmit={handleOnSubmit}>
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
                    <input type="submit" value='Login' className='login_btn' />
                </form>
                <p className='isAccount'>Don't have an account? <Link to='/register'>Register here</Link> </p>
            </div>
        </section>
    );
};

export default Login;