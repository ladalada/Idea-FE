import React, { Component }  from 'react';
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
            fetch("http://localhost:8083/note/", {
                method: 'post',
                headers: {'Content-Type': 'application/json'},
                body: {
                    "Note": this.state.Note
                }
            }).then((error) => {
                console.log(error);

            })
    }
    //delete Note
    onDelete(id){
        //DELETE
        fetch("http://localhost:8083/note/"+id,
            {
                method: 'delete'
            }).then((error) =>{
                console.log(error);
        })

    }


    componentDidMount() {
        if(this.state.id.length===0){
            this.state.Note = {};
        }
        else {
            fetch("http://localhost:8083/note/" + this.state.id)
                .then((response) => response.json())
                .then((response) => {
                    this.setState({Note: response});
                })
                .then((error) => {
                    this.setState({false: true});
                    this.setState({error});
                })
        }
    }

    render(){
        <Fullnote Note={this.state.Note} onSave={this.onSave}/>
    }
}