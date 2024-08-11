import React from 'react'
import Login from '../components/admin/Login'
import Dashboard from '../components/admin/Dashboard';

const Admin = () => {
    const loggedIn = true

    if(loggedIn) return <Dashboard />;
    else return <Login />
}

export default Admin