import './note.css';
import {Component} from "react";

class Note extends Component {
    constructor(props) {
        super(props);
        // Эта привязка обязательна для работы `this` в колбэке.
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        alert("здесь я открою полную версию")
    }
    render() {
        return (
            <nav className="note" onClick={this.handleClick}>
                <div className="title">
                    <input type='checkbox'></input>
                    <h1>{this.props.title}</h1>
                    <h1></h1>
                </div>
                <div className="body">
                    <div className="text">{this.props.text}</div>
                </div>
            </nav>
        );
    }
}

export default Note;