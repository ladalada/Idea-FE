import React, { Component }  from 'react';
class FullNoteContainer extends Component{

    constructor(props){
        super(props);
        this.state={
            id: this.props.router.id
        };
        this.onSave = this.onSave.bind(this)
        this.onDelete = this.onDelete.bind(this)
    }

    //update Note
    onSave(newNote) {
        //POST
        fetch("http://localhost:8083/note/" + this.state.id, {
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
    onDelete(){
        //DELETE
        fetch("http://localhost:8083/note/"+this.state.id,
            {
                method: 'delete'
            }).then((error) =>{
                console.log(error);
        })

    }


    componentDidMount() {
     fetch("http://localhost:8083/note/"+this.state.id)
            .then((response) => response.json())
            .then((response) => {
                this.setState({Note: response});
            })
            .then((error) => {
                this.setState({false: true});
                this.setState({error});
            })

    }

    render(){
        <Fullnote Note={this.state.Note} onSave={this.onSave}/>
    }
}