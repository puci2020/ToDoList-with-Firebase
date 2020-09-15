import React, {useState} from 'react';
import Layout from "./Theme/Layout";
import {Button} from '@material-ui/core'



function App() {
    const [todos, setTodos] = useState(['one', 'two','three']);
    const [input, setInput] = useState('');

    const addTodo = (event) => {
        event.preventDefault();
        setTodos([...todos, input]);
        setInput('');
    };

    return (
        <Layout>
            <div className="App">
                <h1>To Do App with Firebase</h1>
                <form>
                <input value={input} onChange={event => setInput(event.target.value)}/>
                <Button variant="contained" color="primary" type="submit" onClick={addTodo}>Add Todo</Button>
                </form>
                <ul>
                    {todos.map(todo => (
                        <li>{todo}</li>
                    ))}
                    {/*<li></li>*/}
                    {/*<li></li>*/}
                </ul>
            </div>
        </Layout>
    );
}

export default App;
