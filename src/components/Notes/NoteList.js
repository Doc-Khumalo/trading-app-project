import React, { Component } from 'react';
import Note from './Note';

class NoteList extends Component {
    render() {
        return (
          <div>
              {this.props.notes.map((note)=> {
                  return <Note note={note} key={note.id}/>
              })
              }
          </div>
        );
    }
}

export default NoteList;