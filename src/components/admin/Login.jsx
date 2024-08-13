import React, { useRef } from "react";
import { login } from "../../server_api";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

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
        <main className="flex h-screen items-center justify-center">
            <div className="bg-bluegray p-8 rounded">
                <h1 className="mb-4 text-xl font-bold">Login</h1>
                <form action="" className="" onSubmit={onSubmit}>
                    <div className="mb-4">
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            id="username"
                            className="p-2 mt-2 w-full rounded text-black bg-gray-100"
                            required
                            ref={usernameRef}
                            placeholder="Enter your username"
                        />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            className="p-2 mt-2 w-full rounded text-black bg-gray-100"
                            required
                            placeholder="Enter password"
                            ref={passwordRef}
                        />
                    </div>
                    <button className="w-full bg-white text-black p-2 rounded mt-4">
                        Submit
                    </button>
                </form>
                <Link to={"/"} className="underline text-md mt-6 text-center block">Go Back</Link>
            </div>
        </main>
    );
};

export default Login;
