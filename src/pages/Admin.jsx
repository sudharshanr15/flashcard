import React, { useEffect, useState } from 'react'
import Login from '../components/admin/Login'
import Dashboard from '../components/admin/Dashboard';
import { authorize } from '../server_api';

const Admin = () => {
    const [isAuthorized, setIsAuthorized] = useState(false);

    useEffect(() => {
        authorize().then(res => {
            if(res.status){
                setIsAuthorized(true)
            }else{
                setIsAuthorized(false)
            }
        }).catch(err => setIsAuthorized(false))
    }, [])

    if(isAuthorized) return <Dashboard />;
    else return <Login />
}

export default Admin