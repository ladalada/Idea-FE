import './notespage.css';
import React, { Component }  from 'react';
import Filter from "../Filter";
import NoteContainer from '../../Containers/NotesContainer'

class NotesPage extends Component {
    render() {
        return (

            <div>
                <div className="grid_two">
                    <Filter/>
                    <NoteContainer user_id={2}/>
                </div>
            </div>
        )
    }

};

export default NotesPage;