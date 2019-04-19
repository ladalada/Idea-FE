import React, { Component }  from 'react';
import URL from '../Constants/index'; //настроить URL
import Form from '../Components/Form';

const user = {
    id: 3, //исправить на автозаполнение!
    username: '',
    password: ''
};

const is_login = false;

class SignUpContainer extends Component {

    constructor(props) {
        super(props);
        this.sign_up = this.sign_up.bind(this);
    }

    sign_up() {
        //post
        fetch('http://localhost:8083/user', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body:
                JSON.stringify({
                    "id": user.id,
                    "userName": user.username,
                    "password": user.password,
                })

        }).then((error) => {
            console.log(error);

        });

        alert(user.username + " " + user.password);
    }

    render() {
        return (
            <Form sign_up={this.sign_up} user={user} is_login={is_login}/>
        )
    }
}

export default SignUpContainer;
