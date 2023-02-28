import React from 'react'
import {createRoot} from 'react-dom/client'
import App from './App'
import Timer from './Timer'
import TodoApp from './ToDoApp'
import MarkDownEditor from './MarkDownEditor'
import './index.css'

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <React.StrictMode>
    <MarkDownEditor/>
    </React.StrictMode>
);


