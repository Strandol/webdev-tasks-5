import * as actions from '../constants/Note'

export function addNote(text) {
    return {
        type: actions.ADD_NOTE,
        content: text
    }
}

export function deleteNote(id) {
    return {
        type: actions.DELETE_NOTE,
        id: id
    }
}

export function selectNote(note) {
    return {
        type: actions.SELECT_NOTE,
        selectedNote: note
    }
}

export function resetNote(note) {
    return {
        type: actions.RESET_NOTE,
        selectedObject: note
    }
}

export function rewriteValue(id) {
    return {
        type: actions.REWRITE_VALUE,
        id: id
    }
}

export function saveNote(text, id) {
    return {
        type: actions.SAVE_NOTE,
        text: text,
        id: id
    }
}

export function editNote(content, id) {
    return {
        type: actions.EDIT_NOTE,
        text: content,
        id: id
    }
}

export function defineNote(content, id) {
    return {
        type: actions.DEFINE_NOTE_CONTENT,
        initNote: {
            text: content,
            id: id
        }
    }
}
