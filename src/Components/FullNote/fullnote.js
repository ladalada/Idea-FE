import './fullnote.css';
import React, { Component }  from 'react';
import { Link } from 'react-router-dom';

class Fullnote extends Component{
    constructor(props){
        super(props);
        this.state = {
            Note: props.Note, //если новая - пусто, если существующаяя - передаем ее\
            tags:props.Note.tags,
            priority:props.Note.priority,
            tagsEdit:false,
            new_tags:[]
        };

        this.handleCancel = this.handleCancel.bind(this);
        this.handleCreate = this.handleCreate.bind(this);
        this.handleClickTags = this.handleClickTags.bind(this);
        this.setImportance = this.setImportance.bind(this);
        this.handleAddTags = this.handleAddTags.bind(this);
        this.getNextNote = this.getNextNote.bind(this);
        this.getPrevNote = this.getPrevNote.bind(this);
    }
    //->
    getNextNote(e) {

    }
    //<-
    getPrevNote(e){

    }
    //Обработка события изменения списка тегов
    handleClickTags(e){
        this.setState(state => ({
            tagsEdit: !state.tagsEdit
        }));

    }
    //добавление тегов
    handleAddTags(e){
        let tags = e.target.parentNode.children[0].value.split(" ");
        for(let i in tags){
            if(tags[i]=="")
                continue;
            let stop = false;
            for (let j of this.state.tags) {
                if (j.name == tags[i]){
                    stop = true;
                    break;
                }
            }
            if(stop){
                continue;
            }
           else{
                this.state.tags.push({id:"",name:tags[i]})
                this.state.new_tags.push({id:"",name:tags[i]})
            }
        }
        if(this.state.new_tags.length>0){
            this.props.setTags(this.state.new_tags);
        }
    }

//изменение важности заметки
    setImportance(e){
        const target = e.target;
        const parent = e.target.parentNode;
        let j;
        for(let i in parent.children) {
            if(parent.children[i]===target){
                j=i;
            }
        }
        this.setState({
            priority : ++j
        });

    }

    //удаление заметки
    handleCancel(){
        const result = window.confirm("Are you sure?");
        if(result)
        this.props.onDelete(this.state.Note.id);
    }

    //создание заметки
    handleCreate(){
        if(this.state.Note.id ==="new"){
            this.state.Note.id = Math.floor(Math.random()*100);
        }

        this.state.tags = this.props.Note.tags;
        for(let i of this.state.tags){
            if(i.id === ""){
                for(let j of this.state.new_tags){
                    if(i.name === j.name){
                        i.id = j.id;
                    }
                }
            }
        }
        this.state.Note.title = document.getElementById("note_title").value;
        this.state.Note.text = document.getElementsByClassName("text")[0].value;
        this.state.Note.priority = this.state.priority;
        this.state.Note.tags = this.state.tags;
        this.props.onSave(this.state.Note); //обращаемся к FullNoteContainer
        alert("created successful!")
    }

    render(){
        let note = this.state.Note;
        let tags = note.tags;

        return(
            <nav className="fullnote active">
                {this.state.Note.id==='new' ? ( null ):(<div id="prev"><button onClick={this.getPrevNote}></button></div>)}
                <div className="noteBody">
                <div className="title">
                    <textarea id='note_title' placeholder="Title" defaultValue ={this.state.Note.title} ></textarea>
                    <h1>{this.state.Note.creationDate===null? "":this.state.Note.creationDate.substring(0,10)}</h1>
                </div>
                <div className="body">
                    <textarea className="text"
                              placeholder="I really need to write it down..." defaultValue={this.state.Note.text}>
                    </textarea>
                </div>
                    <div className="tags"  onClick={this.handleClickTags}>
                        {
                            this.state.tagsEdit ? (
                                <div className="display_tag">
                                 <textarea placeholder='#newtag' onClick='return false'>

                                 </textarea>
                                    <button className="add_button" onClick={this.handleAddTags}>Add</button>
                                </div>
                            ) : (this.state.tags.length===0 ? (<textarea placeholder="#Tags"></textarea>):(<ul>{this.state.tags.map((tag) =>
                                <li key={tag.name.toString()}>#{tag.name}</li>)}
                            </ul>))
                        }
                    </div>
                <div className="footer">
                    <div className="buttons">
                        <a href='/notes'><button id="back"/></a>
                    </div>
                    <div className="importance">
                        <div>
                            <button className = {(this.state.priority>=1) ? 'activeLamp' : 'inactiveLamp'} onClick={this.setImportance}></button>
                            <button className =  {(this.state.priority>=2) ? 'activeLamp' : 'inactiveLamp'} onClick={this.setImportance}></button>
                            <button className =  {(this.state.priority==3) ? 'activeLamp' : 'inactiveLamp'} onClick={this.setImportance}></button>
                        </div>
                    </div>
                    <div className="action">
                        <button className='cancel'
                                onClick={this.handleCancel}
                        ></button>
                        <button className='create'
                                onClick={this.handleCreate}
                        ></button>
                    </div>
                </div>
                </div>
                {this.state.Note.id==='new' ? ( null ):(<div id="next"><button onClick={this.getPrevNote}></button></div>)}
            </nav>
        );
    }
}

export default Fullnote;