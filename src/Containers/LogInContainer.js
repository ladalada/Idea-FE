import React, { Component }  from 'react';
import URL from '../Constants/index'; //настроить URL
import Form from '../Components/Form';

const user = {
    id: 3, //исправить на аутозаполнение!
    username: '',
    password: ''
};

const is_login = true;

class LogInContainer extends Component {

    constructor(props) {
        super(props);

        this.log_in = this.log_in.bind(this);
    }

    //добавить поиск по имени!!!
    log_in() {
        fetch(`http://localhost:8083/user/${user.id}`, {
            method: 'get',
            headers: {'Content-Type': 'application/json'}
        }).then((error) => {
            console.log(error)
        });
    }

    render() {
        return (
            <Form log_in={this.log_in} user={user} is_login={is_login}/>
        )
    }
}

export default LogInContainer;
