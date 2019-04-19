import React, { Component }  from 'react';
import URL from '../Constants/index'; //настроить URL
import Form from '../Components/Form';

const user = {
    username: '',
    password: ''
};

const is_login = true;

class LogInContainer extends Component {

    constructor(props) {
        super(props);

        this.log_in = this.log_in.bind(this);
    }

    log_in() {
        //get
        fetch(`http://localhost:8083/user/${user.username}`, {
            method: 'get',
            headers: {'Content-Type': 'application/json'}
        }).then(function(response) {
            console.log(response);
                response.json().then(function (data) {
                    if (user.password === data.password) console.log('log in');
                    if (user.password !== data.password) alert('Wrong password!');
            })
        }).catch((error) => {
            console.log(error);
        });

    }

    render() {
        return (
            <Form log_in={this.log_in} user={user} is_login={is_login}/>
        )
    }
}

export default LogInContainer;
