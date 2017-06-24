import * as actions from '../constants/Note'

const initState = {
    notes: [
        {text: 'Learn React', oldText: 'Learn React', currentValue: ''},
        {text: 'Learn English', oldText: 'Learn English', currentValue: ''},
        {text: 'Call my Kate', oldText: 'Call my Kate', currentValue: ''}
    ]
}

export default function noteState(state = initState, action) {
    switch (action.type) {
        case actions.ADD_NOTE:
            return Object.assign({},state, {
                notes: [{ text: action.content, oldText: action.content, currentValue: ''}].concat(state.notes)
            });
            break;
        case actions.DELETE_NOTE:
            return Object.assign({},state, {
                notes: state.notes.slice(0, action.id).concat(state.notes.slice(action.id + 1))
            });
            break;
        case actions.SAVE_NOTE:
            return Object.assign({},state, {
                notes: state.notes.map((note, i) => {
                    if (i === action.id) {
                        note.text = note.currentValue || note.oldText;
                        note.oldText = note.text;
                        return note;
                    }

                    return note;
                })
            });
            break;
        case actions.REWRITE_VALUE:
            return Object.assign({}, state, {
                notes: state.notes.map((note, i) => {
                    if (i === action.id) {
                        note.text = note.oldText;
                        console.log(note);
                    }

                    return note;
                })
            });
            break;
        case actions.EDIT_NOTE:
            return Object.assign({}, state, {
                notes: state.notes.map((note, i) => {
                    if (i === action.id) {
                        note.text = action.text;
                        note.currentValue = action.text;
                    }

                    return note;
                })
            });
            break;
        case actions.SELECT_NOTE:
            if (!state.selectedNote) {
                return Object.assign({}, state, {
                    selectedNote: action.selectedNote,
                    currentNote: action.selectedNote
                })
            }

            return Object.assign({}, state, {
                currentNote: action.selectedNote
            })
            break;
        case actions.RESET_NOTE:
            if (!state.selectedNote || state.selectedNote === action.selectedObject) {
                return Object.assign({}, state, {});
            }

            var note = state.selectedNote;
            var saveNote = note.querySelector('.note__saveNote');
            var deleteNote = note.querySelector('.note__deleteNote');
            saveNote.style.display = 'none';
            deleteNote.style.display = 'none';

            if (action.selectedObject.className.includes('notes__note')) {
                return Object.assign({}, state, {
                    selectedNote: state.currentNote,
                    currentNote: null
                })
            }

            return Object.assign({}, state, {
                selectedNote: null,
                currentNote: null
            })
            break;
        case actions.DEFINE_NOTE_CONTENT:
            return Object.assign({},state, {
                initNote: {
                    text: action.initNote.text,
                    id: action.initNote.id
                }
            });
            break;
        default:
            return state;
    }
}
