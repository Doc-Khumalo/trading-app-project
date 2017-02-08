import React, { Component } from 'react';

class Note extends Component {
    render() {
        return (
          <p>
              { this.props.note.date } { this.props.note.author }: { this.props.note.text}
          </p>
        );
    }
}

export default Note;