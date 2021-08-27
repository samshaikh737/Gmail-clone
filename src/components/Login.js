import React from 'react';

//css
import "./components_css/Login.css";

//firebase authentication
import { auth , firebaseProvider } from "../firebaseConfig";

//own redux
import { useStateValue } from "../MyRedux/Provider"

function Login() {
    const [ {user}, updateUser ] = useStateValue();
    
    const loginFun = ()=>{
        auth.signInWithPopup(firebaseProvider).then((user)=>{
            updateUser({
                "type": "update_user",
                'payload' : {
                    'userName' : user?.user?.displayName,
                    "email": user?.user?.email,
                    "photo" : user?.user?.photoURL
                }
            })
        }).catch((err)=>{
            alert(err.message)
        })
    }

    return (
        <div className="login" >
            <div className="login-container">
                <img src="login-gmail-logo.jpg" alt="gmail logo" />
                <button onClick={loginFun} >Login</button>
            </div>
        </div>
    )
}

export default Login
