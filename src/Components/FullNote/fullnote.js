import './fullnote.css';
import React, { Component }  from 'react';

class Fullnote extends Component{
    render(){
        return(
            <nav className="note active">
                <div className="title">
                    <h1>{this.props.title}</h1>
                    <h1>{this.props.date}</h1>
                </div>
                <div className="body">
                    <div className="text">{this.props.fulltext}</div>
                </div>
                <div className="tags">
                    Tags:
                    <ul>
                        <li>#1</li>
                        <li>#2</li>
                        <li>#3</li>
                    </ul>
                </div>
                <div className="footer">
                    <div className="buttons">
                        <button>prev</button>
                        <button>next</button>
                    </div>
                    <div className="importance">
                        1 2 3
                    </div>
                    <div className="action">
                        <button>delete</button>
                        <button>save</button>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Fullnote;