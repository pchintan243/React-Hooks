import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {

    const diffToast = () => {
        // toastify in one type of alert function which looks better ui ux provide
        // You can see different color or position on react-toastify-npm
        toast.success("Login Button Clicked..!!", {
            position: "top-center"
        })
        toast("Login Button Clicked..!!");
        toast.warn("Login Button Clicked..!!", {
            position: "top-left"
        });
    };

    return (
        <>
            <button onClick={diffToast} className="btn btn-danger">Login</button>
            <ToastContainer />
        </>
    )
}

export default Login