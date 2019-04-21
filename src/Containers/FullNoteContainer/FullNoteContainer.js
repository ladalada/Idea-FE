import React, { Component }  from 'react';

import FullNote from '../../Components/FullNote'

const URL = 'http://localhost:8083/'
const Note ={
    id : 'new', //автоматически заполняется
    title:"",
    text:"",
    tags:[],
    creationDate:null,
    priority:1
};
class FullNoteContainer extends Component{

    constructor(props){
        super(props);
        this.state={
            id: this.props.match.params.id
        };
        this.onSave = this.onSave.bind(this)
        this.onDelete = this.onDelete.bind(this)
        this.getTags = this.getTags.bind(this);
        this.setTags = this.setTags.bind(this);
    }
    setTags(tags){
       //console.log(tags);
        for(let i of tags) {
            fetch(`${URL}tag`, {
                method: 'post',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(i)
            }).then((error) => {
                console.log(error);
            }).then(()=>{ this.getTags(tags)})
        }
    }
    getTags(tags){
        fetch(`${URL}tags`)
            .then((response) => response.json())
            .then((response) => {
                for(let i of response) {
                    for (let j of tags) {
                        if (j.name === i.name) {
                            j.id = i.id;
                        }
                    }
                }
            })
            .then((error) => {
                this.setState({false: true});
            })
    }
       //update Note (from FullNote)
    onSave(Note) {
        console.log(Note)
            //POST
            fetch(`${URL}note`, {
                method: 'put',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(Note)
            }).then((error) => {
                console.log(error);
            })
    }
    //delete Note
    onDelete(id){
        alert("")
        //DELETE
        fetch(`${URL}note/${id}`,
            {
                method: 'delete'
            }).then((error) =>{
                console.log(error);
        })

    }


    componentWillMount() {

        if(this.state.id==='new'){
            this.state.Note = Note;
        }
        else {
            fetch(`${URL}note/${this.state.id}`)
                .then((response) => response.json())
                .then((response) => {
                   this.setState({
                      Note: response
                   });
                })
                .then((error) => {
                    this.setState({false: true});
                })

        }

    }

    render() {
        if(this.state.Note!=undefined) {
            return (
                <FullNote Note={this.state.Note} onSave={this.onSave} onDelete={this.onDelete}
                          setTags={this.setTags}
                          getTags={this.getTags}/>
            )
        }
        else{
            return(
                <h1>Waiting please...</h1>
            )
        }

    }
}
export default FullNoteContainer;