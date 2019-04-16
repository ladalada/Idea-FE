import './signup.css';
import '../Header/header.css'
import React, { Component }  from 'react';

class SignUp extends Component {
    render() {
        return (
            <body>
                <div className="form"/>
                <input type="text" placeholder="Username" maxlength="15" className="username"/>
                <input type="password" placeholder="Password" maxlength="15" className="password"/>
                <button className="signup_button"> Sign up </button>
                <button className="go_to_log_in"> Wanted to log in? </button>
            </body>
        )
    }
};

export default SignUp;