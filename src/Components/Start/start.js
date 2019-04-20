import './start.css';
import React, { Component }  from 'react';
import Idea from '../../Icons/idea.png';
import {Link} from "react-router-dom";

class Start extends Component {
    render() {
        return (
            <div>
                <img src={Idea} className="big_idea_icon"/>
                <div className="big_idea_title"> Idea </div>
                <div className="statement">genius ideas <br/> should not <br/> be forgotten</div>

                <button className="log_in">
                    <Link to={{ pathname: '/login' }} style={{ textDecoration: 'none', color: '#F2F2F2'}}>
                        Log in
                    </Link>
                </button>

                <button className="sign_up">
                    <Link to={{ pathname: '/signup' }} style={{ textDecoration: 'none', color: '#FFD15C'}}>
                        Sign up
                    </Link>
                </button>
                <button className="question"/>
            </div>
        )
    }
};

export default Start;