import React, { Component, PropTypes } from 'react'

export default class AddNote extends Component {
    onAcceptBtnClick(event) {
        let parent = event.target.parentNode;
        let value = parent.querySelector('.addNoteArea__content').value;
        this.props.addNote.addNote(value);
    }
    onRefuseBtnClick(event) {

    }
    render() {
        return (
            <div>
                <input type='button' name='addNote' value='Добавить' />
                <div className='addNoteArea'>
                    <textarea className='addNoteArea__content'></textarea>
                    <button onClick={::this.onRefuseBtnClick} name='refuse'>Отмена</button>
                    <button onClick={::this.onAcceptBtnClick} name='accept'>Ок</button>
                </div>
            </div>
        )
    }
}
