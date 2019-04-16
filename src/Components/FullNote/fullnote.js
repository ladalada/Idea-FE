import './fullnote.css';
import React, { Component }  from 'react';

class Fullnote extends Component{
    constructor(props){
        super(props);
        this.state = {
            Note: props.Note, //если новая - пусто, если существующаяя - передаем ее
            cancel:'cancel',
            create:'create',
            importance:props.Note.importance,
            tagsEdit:false
        };

        this.handleMOver = this.handleMOver.bind(this);
        this.handleMouseOut = this.handleMouseOut.bind(this);
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
            if(this.state.tags.includes(tags[i])){
                continue;
            }
            this.state.tags.push(tags[i])
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
        switch (j){
            case '0':
                this.setState({
                    importance : 1
                });
                break;
            case '1':
                this.setState(state => ({
                    importance : 2
                    })
                );
               break;
            case '2':
                this.setState(state => ({
                    importance : 3
                    })
                );
                break;
        }
    }

    //удаление заметки
    handleCancel(){
        const result = window.confirm("Are you sure?");
        if(result)
        this.props.onDelete(this.state.Note.id);
    }

    //создание заметки
    handleCreate(){
        this.props.onSave(this.state.Note); //обращаемся к FullNoteContainer
        alert("created successful!")
    }

    //наведение мыши на значки
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

    render(){
        let note = this.state.Note;
        //если новая заметка, создаем поля, создаем поле для добавления тегов
        if(Object.keys(note).length===0){
            note.id = 'default'; //автоматически заполняется
            note.fullText="";
            note.tags=[];
            note.title = "";
            note.date=null;
            note.importance = [true,false,false];
            this.state.tag = <textarea placeholder="#Tags"></textarea>
            this.state.Note = note;
            this.state.isNew = true; //для скрытия стрелочек
        }
        //если обновляем старую заметку, здесь только формируется список тегов
        else{
            this.state.isNew = false; //для отображения стрелочек перехода к другой заметке
            this.state.tag = <ul>{this.state.Note.tags.map((tag) =>
                <li key={tag.toString()}>#{tag}</li>)}
            </ul>
        }

        return(

            <nav className="fullnote active">
                {this.state.isNew ? ( null ):(<div id="prev"><button onClick={this.getPrevNote}></button></div>)}
                <div className="noteBody">
                <div className="title">
                    <textarea placeholder="Title" defaultValue ={this.state.Note.title}></textarea>
                    <h1>{this.state.Note.date}</h1>
                </div>
                <div className="body">
                    <textarea className="text"
                              placeholder="I really need to write it down..." value={this.state.Note.fullText}>
                    </textarea>
                </div>
                <div className="tags" onClick={this.handleClickTags} >
                    {
                        this.state.tagsEdit ? (
                               <div className="edit">
                                 <textarea placeholder='#newtag' onClick='return false'>
                                 </textarea>
                                   <button onClick={this.handleAddTags}>add</button>
                               </div>
                        ) : (this.state.tag)
                    }
                    </div>
                <div className="footer">
                    <div className="buttons">
                        <button id="back"></button>
                    </div>
                    <div className="importance">
                        <div>
                            <button className = {(this.state.importance>=1) ? 'activeLamp' : 'inactiveLamp'} onClick={this.setImportance}></button>
                            <button className =  {(this.state.importance>=2) ? 'activeLamp' : 'inactiveLamp'} onClick={this.setImportance}></button>
                            <button className =  {(this.state.importance==3) ? 'activeLamp' : 'inactiveLamp'} onClick={this.setImportance}></button>
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
                </div>
                {this.state.isNew ? (null) :(<div id="next"><button onClick={this.getNextNote}></button></div>)}
            </nav>
        );
    }
}

export default Fullnote;