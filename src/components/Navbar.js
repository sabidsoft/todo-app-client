import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';
import './Navbar.css'

const Navbar = () => {
    const { user, logout } = useContext(AuthContext)

    const handleLogOut = () => {
        logout()
            .then(() => { })
            .catch(err => console.log(err))
    }

    return (
        <div className='navbar'>
            <h1 className='brand_name'>Todo App</h1>
            <div>
                <ul className='menu'>
                    <li><Link to='/'>Home</Link></li>
                    {
                        user?.uid ? (
                            <>
                                <li><Link to='/todo-list'>Todo List</Link></li>
                                <li><Link onClick={handleLogOut}>Logout</Link></li>
                            </>
                        ) : (
                            <>
                                <li><Link to='/login'>Login</Link></li>
                                <li><Link to='/register'>Register</Link></li>
                            </>
                        )
                    }
                </ul>
            </div>
        </div>
    );
};

export default Navbar;