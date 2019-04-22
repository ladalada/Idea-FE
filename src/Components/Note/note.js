import './note.css';
import React, { Component }  from 'react';
import {Link } from 'react-router-dom';


class Note extends Component {
    constructor(props) {
        super(props);
        this.load = this.load.bind(this);
        this.state={to:
            '/note/'+props.id}

    }
    load(){
        this.props.load(this.props.id)
    }
    render() {
        return (
            <div>
                <nav className="note">
                    <div className="title">
                        {/*<input type='checkbox'></input>*/}
                        <h1>{this.props.title}</h1>
                    </div>
                    <div className="body">

                        <Link to={this.state.to}><div className="text">{this.props.text}</div></Link>

                    </div>
                </nav>
            </div>
        );
    }
}

export default Note;