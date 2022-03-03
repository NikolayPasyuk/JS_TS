import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    const names = ["Dimych", "Sveta", "Katya", "Viktor", "Ignat"];

    const users = [{id:1, name: "Dimych"}, {id: 2, name: "Sveta"}, {id: 3, name: "Katya"}, {id: 4, name: "Viktor"}, {id: 5, name: "Ignat"}];

    const liElements = users.map(u => <div key={u.id}><li >{u.name}</li></div>)

    return (
        <div className="App">
            <ul>
                {liElements}
            </ul>
        </div>
    );
}

export default App;
