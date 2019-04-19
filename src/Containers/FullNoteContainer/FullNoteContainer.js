import React, { Component }  from 'react';
import URL from '../../Constants'
import FullNote from '../../Components/FullNote'

const Note ={
    id : 'new', //автоматически заполняется
    title:"",
    fullText:"",
    tags:[],
    date:null,
    importance:1
};
class FullNoteContainer extends Component{

    constructor(props){
        super(props);
        this.state={
            id: this.props.match.params.id
        };
        this.onSave = this.onSave.bind(this)
        this.onDelete = this.onDelete.bind(this)
    }

    //update Note (from FullNote)
    onSave() {
            //POST
            fetch(`${URL}note`, {
                method: 'post',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(this.state.Note)

            }).then((error) => {
                console.log(error);

            })
    }
    //delete Note
    onDelete(id){
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
            fetch(`${URL}${this.state.id}`)
                .then((response) => response.json())
                .then((response) => {
                    this.setState({Note: response});
                })
                .then((error) => {
                    this.setState({false: true},{error});
                })
        }
    }

    render(){
        return (
            <FullNote Note={this.state.Note} onSave={this.onSave}/>
        )
    }
}
export default FullNoteContainer;