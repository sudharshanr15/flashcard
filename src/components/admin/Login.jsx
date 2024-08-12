import React, { useRef } from "react";
import { login } from "../../server_api";
import { toast } from "react-toastify";

const Login = () => {
    const usernameRef = useRef();
    const passwordRef = useRef();

    function onSubmit(e) {
        e.preventDefault();

        login(usernameRef.current.value, passwordRef.current.value).then(res => {
          if(res.status){
            window.location.reload()
          }else{
            return Promise.reject("Unable to login. Please try again")
          }
        }).catch(err => {
          toast.error(err)
        })
    }

    return (
        <main className="flex h-full items-center justify-center">
            <div className="bg-red-900 p-4 rounded">
                <h1 className="mb-4">Login</h1>
                <form action="" className="" onSubmit={onSubmit}>
                    <div className="mb-2">
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            id="username"
                            className="p-2 w-full rounded text-black"
                            required
                            ref={usernameRef}
                        />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            className="p-2 w-full rounded text-black"
                            required
                            ref={passwordRef}
                        />
                    </div>
                    <button className="w-full bg-green-900 p-2 rounded mt-4">
                        Submit
                    </button>
                </form>
            </div>
        </main>
    );
};

export default Login;
