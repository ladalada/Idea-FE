import './content.css';
import React, { Component }  from 'react';
import Note from "../Note/note";
import {Link } from 'react-router-dom';
class Content extends Component {
    constructor(props){
        super(props);
        this.state={
            Notes: props.Notes
        };
        console.log(this.state.Notes)
    }

    render() {
        return (
            <div>
                <ul>{this.state.Notes.map((note) =>
                    //let to = "/note/"+note.id;
                    <li key={note.toString()}>
                        <Note id={note.id} title={note.title} text={note.text} onClick={this.load}/>
                    </li>
                )}
                </ul>
            </div>
        )
    }
};


export default Content;