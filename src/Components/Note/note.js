import './note.css';
import React, { Component }  from 'react';



class Note extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <nav className="note">
                <div className="title">
                    <input type='checkbox'></input>
                    <h1>{this.props.title}</h1>
                </div>
                <div className="body">
                    <div className="text">{this.props.text}</div>
                </div>
            </nav>
        );
    }
}

export default Note;