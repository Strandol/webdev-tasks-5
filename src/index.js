import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './containers/App'
import style from './styles/app.css'
import configureStore from './store/configureStore'

const store = configureStore();

let bodyElement = document.getElementsByTagName('body')[0];
let selectedNote = null;

bodyElement.addEventListener('click', (event) => {
    if (!selectedNote) {
        return;
    }

    let deleteBtn = selectedNote.querySelector('.note__deleteNote');
    let saveBtn = selectedNote.querySelector('.note__saveNote');

    deleteBtn.style.display = 'none';
    saveBtn.style.display = 'none';

    selectedNote = null;
})

render(
    <Provider store={store}>
        <App selectedNote={selectedNote}/>
    </Provider>,
    document.getElementById('root')
)
