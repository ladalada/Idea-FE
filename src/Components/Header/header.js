import './header.css';
import React, { Component }  from 'react';
import idea from '../../Icons/idea.png';

class Header extends Component {
   render() {
        return (
            <div className="header">

                <img src={idea} className="idea_icon"/>
                <div className="idea_title"> Idea </div>
                <button className="plus_icon"/>

                <button className="menu_button" onClick={this.show_menu}/>
                {
                    this.state.show_menu ? (
                    <div className="menu_content">
                        <a href="#"> Username </a>
                        <a href="#"> Something </a>
                        <a href="#"> Something </a>
                        <a href="#"> Sign out </a>
                    </div>
                    ) : (null)
                }

            </div>
        )
    }
}

export default Header;
