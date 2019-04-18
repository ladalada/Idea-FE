import './form.css';
import '../Header/header.css';
import React, { Component }  from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            new_user: props.user,
            check_user: props.user,
            login_page: true
        };

        this.login_page = this.login_page.bind(this);
        this.sign_up_button = this.sign_up_button.bind(this);
        this.log_in_button = this.log_in_button.bind(this);
    }

    login_page() {
        this.setState(state => ({
            login_page: !state.login_page
        }));
    }

    sign_up_button() {
        this.state.new_user.username = document.getElementById("username").value;
        this.state.new_user.password = document.getElementById("password").value;
        this.props.sign_up(this.state.new_user.username,this.state.new_user.password);
    }


    log_in_button() {
        this.state.check_user.username = document.getElementById("username").value;
        this.state.check_user.password = document.getElementById("password").value;
        this.props.log_in(this.state.check_user.username,this.state.check_user.password);
    }

    render() {
        return (
            <div>
                <div className="form"/>
                <input type="text" id="username" placeholder="Username" maxLength="15" className="username"/>
                <input type="password" id="password" placeholder="Password" maxLength="15" className="password"/>
                {
                    this.state.login_page ? (
                        <div>
                            <button className="submit_button" onClick={this.log_in_button}> Log in </button>
                            <button className="switch_button" onClick={this.login_page}> Wanted to sign up? </button>
                        </div>
                    ) : (
                        <div>
                            <button className="submit_button" onClick={this.sign_up_button}> Sign up </button>
                            <button className="switch_button" onClick={this.login_page}> Wanted to log in? </button>
                        </div>
                    )
                }
            </div>
        )
    }
};

export default Form;