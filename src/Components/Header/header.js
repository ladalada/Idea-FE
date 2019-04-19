import './header.css';
import React, { Component }  from 'react';
import idea from '../../Icons/idea.png';
import { BrowserRouter, Link } from 'react-router-dom';

class Header extends React.Component {
    constructor() {
        super();

        this.state = {show_menu: false};

        this.show_menu = this.show_menu.bind(this);
        this.close_menu = this.close_menu.bind(this);
    }

    show_menu(event) {
        event.preventDefault();

        this.setState({ show_menu: true }, () => {
            document.addEventListener('click', this.close_menu);
        });
    }

    close_menu() {
        this.setState({show_menu: false}, () => {
            document.removeEventListener('click', this.close_menu);
        });
    }

   render() {
        return (
            <div className="header">

                <img src={idea} className="idea_icon"/>
                <div className="idea_title"> Idea </div>
                <Link to='/note/new'><button className="plus_icon"/></Link>
                <button className="menu_button" onClick={this.show_menu}/>
                {
                    this.state.show_menu ? (
                    <div className="menu_content">
                        <a> Username </a>
                        <a> Something </a>
                        <a> Something </a>
                        <a> Sign out </a>
                    </div>
                    ) : (null)
                }

            </div>
        )
    }
}

export default Header;
