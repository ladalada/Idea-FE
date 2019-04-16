import './fullnote.css';
import React, { Component }  from 'react';

class Fullnote extends Component{
    constructor(props){
        super(props);
        this.state = {
            Note: props.Note, //если новая - пусто, если существующаяя - передаем ее
            onSave: props.onSave,
            onDelete:props.onDelete,
            cancel:'cancel',
            create:'create',
            first:props.Note.importance[0],
            second:props.Note.importance[1],
            third:props.Note.importance[2],
            tagsEdit:false
        };
        this.handleMOver = this.handleMOver.bind(this);
        this.handleMouseOut = this.handleMouseOut.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
        this.handleCreate = this.handleCreate.bind(this);
        this.handleClickTags = this.handleClickTags.bind(this);
        this.setImportance = this.setImportance.bind(this);
        this.handleAddTags = this.handleAddTags.bind(this);
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
                this.setState(state => ({
                    first: true,
                    second:false,
                    third:false
                }));
                break;
            case '1':
                this.setState(state => ({
                    first: true,
                    second:  !state.second,
                    third: false
                    })
                );
               break;
            case '2':
                this.setState(state => ({
                    first: true,
                    second: true,
                    third: !state.third
                    })
                );
                break;
        }
    }

    //удаление заметки
    handleCancel(){
        let result = confirm("Are you sure?x`x`");
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
        }
        //если обновляем старую заметку, здесь только формируется список тегов
        else{
            this.state.tag = <ul>{this.state.Note.tags.map((tag) =>
                <li key={tag.toString()}>#{tag}</li>)}
            </ul>
        }

        return(
            <nav className="note active">
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
                        <button id="prev"></button>
                        <button id="next"></button>
                    </div>
                    <div className="importance">
                        <div>
                            <button className = {this.state.first ? 'activeLamp' : 'inactiveLamp'} onClick={this.setImportance}></button>
                            <button className =  {this.state.second ? 'activeLamp' : 'inactiveLamp'} onClick={this.setImportance}></button>
                            <button className =  {this.state.third ? 'activeLamp' : 'inactiveLamp'} onClick={this.setImportance}></button>
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