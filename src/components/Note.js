import React, { Component, PropTypes } from 'react'

export default class Note extends Component {
    hideButtons(event) {
        var note = event.target.parentNode;
        let deleteNote = note.querySelector('.note__deleteNote');
        let saveNote = note.querySelector('.note__saveNote');
        deleteNote.style.display = 'none';
        saveNote.style.display = 'none';
    }

    onFocusCanceled(event) {
        //this.hideButtons(event);
        var note = event.target.parentNode;
        let deleteNote = note.querySelector('.note__deleteNote');
        let saveNote = note.querySelector('.note__saveNote');
        this.props.rewriteValue(this.props.id);
    }

    saveBtnClick(event) {
        var parent = event.target.parentNode;
        var value = parent.querySelector('.note__textarea').value;
        //this.hideButtons(event);
        this.props.saveNote(value, this.props.id);
    }

    deleteBtnClick(event) {
        this.props.deleteNote(this.props.id);
    }
    onChangeText(event) {
        event.target.innerHTML = event.target.value;
        this.props.editNote(event.target.value, this.props.id);
    }
    onNoteClick(event) {
        var note = null;
        if (event.target.className.includes('notes__note')) {
            note = event.target;
        } else {
            note = event.target.parentNode;
        }

        var value = note.querySelector('.note__textarea').value;
        let deleteNote = note.querySelector('.note__deleteNote');
        let saveNote = note.querySelector('.note__saveNote');
        deleteNote.style.display = 'block';
        saveNote.style.display = 'block';
        this.props.selectNote(note);
    }
    render() {
        var text = this.props.note.text;
        var id = this.props.id;
        return (
            <div onClick={::this.onNoteClick} className={"notes__note " + id}>
                <textarea onBlur={::this.onFocusCanceled} className='note__textarea' onChange={::this.onChangeText} value={text}></textarea>
                <button className='note__deleteNote' onClick={::this.deleteBtnClick}>Удалить</button>
                <input className='note__saveNote' onClick={::this.saveBtnClick} type='button' value='Сохранить' />
            </div>
        )
    }
}
