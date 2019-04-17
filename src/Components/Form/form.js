import './form.css';
import '../Header/header.css';
import '../../Containers/SignUpContainer';
import React, { Component }  from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            login_page: true
        };

        this.login_page = this.login_page.bind(this);
        this.sign_up_button = this.sign_up_button.bind(this);
    }

    login_page() {
        this.setState(state => ({
            login_page: !state.login_page
        }));
    }

    sign_up_button(){
        this.props.sign_up();
        alert("Welcome to Idea!");
    }

    render() {
        return (
            <body>
                <div className="form"/>
                <input type="text" placeholder="Username" maxLength="15" className="username"/>
                <input type="password" placeholder="Password" maxLength="15" className="password"/>
                {
                    this.state.login_page ? (
                        <div>
                            <button className="submit_button"> Log in </button>
                            <button className="switch_button" onClick={this.login_page}> Wanted to sign up? </button>
                        </div>
                    ) : (
                        <div>
                            <button className="submit_button" onClick={this.sign_up_button}> Sign up </button>
                            <button className="switch_button" onClick={this.login_page}> Wanted to log in? </button>
                        </div>
                    )
                }
            </body>
        )
    }
};

export default Form;