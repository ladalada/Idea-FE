import React, { Component }  from 'react';
import Content from "../../Components/Content/content";

const URL = 'http://localhost:8083/'

class NoteContainer extends Component{

    constructor(props){
        super(props);
        this.state={
            user_id:props.user_id,
            Notes:[]
        }
    }
    componentWillMount() {

        fetch(`${URL}notes`)
            .then((response) => response.json())
            .then((response) => {
                console.log(this.state.user_id)
                for(let i of response){
                    if(i.userId!=this.state.user_id)
                        continue;
                    this.state.Notes.push(i);
                }
            })
            .then((error) => {
                this.setState({false: true});
                console.log(error)
            })
    }
    render(){
        if(this.state.Notes!=undefined) {
            return (
                <Content Notes={this.state.Notes}/>
            )
        }
    }
}
export default NoteContainer