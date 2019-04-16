import './note.css';
import React, { Component }  from 'react';
import Fullnote from '../FullNote'

const Note2 ={
    id : 'new', //автоматически заполняется
    title:"",
    fullText:"",
    tags:[],
    date:null,
    importance:1
};
class Note extends Component {
    constructor(props) {
        super(props);
        // Эта привязка обязательна для работы `this` в колбэке.
        this.handleClick = this.handleClick.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
        this.state={result:''}
    }
    handleAdd(){
        const result = this.state.result;
        if(result){
            this.setState({
                result:   ""
            });
        }
        else {
            this.setState({
                result: <Fullnote Note = {Note2} onSave={false}/>
            });
        }
    }
    handleClick(){
        const result = this.state.result;
        if(result){
            this.setState({
                result:   ""
            });
        }
        else {
            this.setState({
                result: <Fullnote Note = {{id:"1",title:'First Note',
                                  fullText:'Необходимо до 22.04.2019 доделать проект!', date:'11.04.19',
                                  tags:['работа', 'увлечения', 'срочно'],
                 importance:3}} onSave={false}/>
            });
        }
    }
    render() {
        return (
            <div>
            <div className="menu">
                <nav className="note" onClick={this.handleAdd}>
                        <div className="text" id="plus">+</div>
                </nav>
            <nav className="note" onClick={this.handleClick}>
                <div className="title">
                    <input type='checkbox'></input>
                    <h1>{this.props.title}</h1>
                </div>
                <div className="body">
                    <div className="text">{this.props.text}</div>
                </div>
            </nav>
            </div>
            <nav className = "fullnote">
            {this.state.result}
            </nav>
            </div>
        );
    }
}

export default Note;