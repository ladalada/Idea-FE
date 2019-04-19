import './notespage.css';
import React, { Component }  from 'react';
import Filter from "../Filter";
import Content from "../Content";

class NotesPage extends Component {
    render() {
        return (
            <div>
                <div className="grid_two">
                    <Filter/>
                    <Content/>
                </div>
            </div>
        )
    }
};

export default NotesPage;