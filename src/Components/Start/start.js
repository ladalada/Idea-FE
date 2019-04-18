import './start.css';
import React, { Component }  from 'react';
import Idea from '../../Icons/idea.png';

class Start extends Component {
    render() {
        return (
            <div>
                <img src={Idea} className="big_idea_icon"/>
                <div className="big_idea_title"> Idea </div>
                <div className="statement">genius ideas <br/> should not <br/> be forgotten</div>
                <button className="log_in"> Log in </button>
                <button className="sign_up"> Sign up </button>
                <button className="question"/>
            </div>
        )
    }
};

export default Start;