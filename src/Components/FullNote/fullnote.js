import './fullnote.css';
import React, { Component }  from 'react';

class Fullnote extends Component{
    constructor(props){
        super(props);


        this.state = {
            newnote:props.newnote,
            tag:"",
            cancel:'cancel',
            create:'create',
            importance:props.importance
        };
        let k=0;
        for(let i of this.state.importance){
            if(i===true){
                k++;
            }
        }
        switch (k){
            case 1:
                this.state.first="firstTrue";
                this.state.second="second";
                this.state.third="third";
                break;
            case 2:
                this.state.first="firstTrue";
                this.state.second="secondTrue";
                this.state.third="third";
                break;
            case 3:
                this.state.first="firstTrue";
                this.state.second="secondTrue";
                this.state.third="thirdTrue";
                break;
            default:
                this.state.first="first";
                this.state.second="second";
                this.state.third="third";
                break;

        }
        this.handleMouseOver = this.handleMouseOver.bind(this);
        this.handleMouseUp = this.handleMouseUp.bind(this);
        this.handleMOver = this.handleMOver.bind(this);
        this.handleMouseOut = this.handleMouseOut.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
        this.handleCreate = this.handleCreate.bind(this);
        this.handleClickTags = this.handleClickTags.bind(this);
    }
    handleClickTags(){

        this.setState(state => ({

        }));

    }
    handleCancel(){
        alert("Are you sure?")
    }
    handleCreate(){
        alert("created successful!")
    }
    handleMOver(e) {

        if (e.target.className === 'cancel') {
            this.setState(state => ({
                cancel: 'cancelActive'
            }));
        }
        else if (e.target.className === 'create') {

            this.setState(state => ({
                create: 'createActive'
            }));
        }
    }
    handleMouseOut(e){

        if (e.target.className === 'cancelActive') {
            this.setState(state => ({
                cancel: 'cancel'
            }));
        }
        else if (e.target.className === 'createActive') {
            this.setState(state => ({
                create: 'create'
            }));
        }
    }
    handleMouseUp(){
        this.state.class = !this.state.class;
    }
    handleMouseOver(e){

        if (e.target.className === 'first') {
            this.setState(state => ({
                first: "firstTrue"
            }));
        }
        else if (e.target.className === 'second') {
            this.setState(state => ({
                second:   "secondTrue"
            }));
        }
        else if (e.target.className === 'third') {
            this.setState(state => ({
                third:  "thirdTrue"
            }));
        }
        else if (e.target.className === 'firstTrue') {
            this.setState(state => ({
                first: "first"
            }));
        }
        else if (e.target.className === 'secondTrue') {
            this.setState(state => ({
                second:   "second"
            }));
        }
        else if (e.target.className === 'thirdTrue') {
            this.setState(state => ({
                third:  "third"
            }));
        }
    }
    render(){
        const newnote = this.state.newnote;
        if(newnote){
            this.state.fullText="";
            this.state.tags=[];
            this.state.title ="";
            this.state.date="";
            this.state.tag =  <textarea placeholder="#Tags"></textarea>
        }
        else{
            this.state.title=this.props.title;
            this.state.fullText=this.props.fullText;
            this.state.date=this.props.date;
            this.state.tags=this.props.tags;

            this.state.tag = <ul>{this.state.tags.map((tag) =>
                <li key={tag.toString()}>#{tag}</li>)}
            </ul>
        }

        return(
            <nav className="note active">
                <div className="title">
                    <textarea placeholder="Title">{this.state.title}</textarea>
                    <h1>{this.state.date}</h1>
                </div>
                <div className="body">
                    <textarea className="text"
                              placeholder="I really need to write it down...">{this.state.fullText}
                    </textarea>
                </div>
                <div className="tags" onClick={this.handleClickTags} >
                    {this.state.tag}</div>
                <div className="footer">
                    <div className="buttons">
                        <button id="prev"></button>
                        <button id="next"></button>
                    </div>
                    <div className="importance">
                        <div>
                            <button className = {this.state.first} onMouseOver={this.handleMouseOver} onMouseUp={this.handleMouseUp}></button>
                            <button className =  {this.state.second} onMouseOver={this.handleMouseOver} onMouseUp={this.handleMouseUp}></button>
                            <button className =  {this.state.third} onMouseOver={this.handleMouseOver} onMouseUp={this.handleMouseUp}></button>
                        </div>
                    </div>
                    <div className="action">
                        <button className={this.state.cancel} onMouseOver={this.handleMOver}
                                onMouseOut={this.handleMouseOut}
                                onClick={this.handleCancel}
                        ></button>
                        <button className={this.state.create} onMouseOver={this.handleMOver}
                                onMouseOut={this.handleMouseOut}
                                onClick={this.handleCreate}
                        ></button>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Fullnote;