import React, { Component, PropTypes } from 'react'
import Note from './Note.js'

export default class Notes extends Component {
    render() {
        var actions = {
            deleteNote: this.props.noteActions.deleteNote,
            saveNote: this.props.noteActions.saveNote,
            editNote: this.props.noteActions.editNote,
            defineNote: this.props.noteActions.defineNote,
            selectNote: this.props.noteActions.selectNote,
            rewriteValue: this.props.noteActions.rewriteValue
        }

        var notesTemplate = this.props.data.map(function(note, i) {
            return <Note note={note}
                    key={i}
                    id={i}
                    rewriteValue={actions.rewriteValue}
                    deleteNote={actions.deleteNote}
                    saveNote={actions.saveNote}
                    editNote={actions.editNote}
                    defineNote={actions.defineNote}
                    selectNote={actions.selectNote}
                  />
        })
        return (
            <div className="notes">
                {notesTemplate}
            </div>
        )
    }
}
