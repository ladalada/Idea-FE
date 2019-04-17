import React, { Component }  from 'react';
import URL from '../../Constants';
import Form from '../../Components/Form';

const new_user = {
    id: 'new',
    username: '',
    password: ''
};

class SignUpContainer extends Component {

    constructor() {
        super();

        this.sign_up = this.sign_up.bind(this);
    }

    sign_up() {
        //post
        fetch(`${URL}user`, {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: {
                'username': this.state.username,
                'password': this.state.password,
            }
        }).then((error) => {
            console.log(error);

        })
    }

    render() {
        return (
            <Form sign_up={this.sign_up}/>
        )
    }
}

export default SignUpContainer;
