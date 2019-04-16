import './login.css';
import '../Header/header.css'
import React, { Component }  from 'react';

class LogIn extends Component {
    render() {
        return (
            <body>
                <div className="form"/>
                <input type="text" placeholder="Username" maxlength="15" className="username"/>
                <input type="password" placeholder="Password" maxlength="15" className="password"/>
                <button className="login_button"> Log In </button>
                <button className="go_to_sign_up"> Wanted to sign up? </button>
            </body>
        )
    }
};

export default LogIn;