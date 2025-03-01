import React, {useEffect, useState} from 'react';
import styled from 'styled-components'
import Layout from "./Theme/Layout";
import {Button, FormControl, Input, InputLabel} from '@material-ui/core'
import Todo from "./Todo";
import db from './firebase'
import firebase from "firebase";

const InputField = styled(Input)`
  margin-bottom: 10px;
  margin-top: 20px;
`;

const H1 = styled.h1`
  text-align: center;
  margin: 20px;
`;

const Wrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
Button{
margin: 5px;
}

`;

const FormWrapper = styled(FormControl)`
width: 300px;
`;

function App() {
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState('');

    useEffect(() => {
        db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
            setTodos(snapshot.docs.map(doc => ({id: doc.id, todo: doc.data().todo})));
        })
    }, []);

    const addTodo = (event) => {
        event.preventDefault();

        db.collection('todos').add({
            todo: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        });
        // setTodos([...todos, input]);
        setInput('');

    };

    return (
        <Layout>
            <Wrapper>
                <H1>To Do App with Firebase</H1>
                <FormWrapper>
                    <InputLabel>Write a new ToDo</InputLabel>
                    <InputField value={input} onChange={event => setInput(event.target.value)}/>
                    <Button disabled={!input} variant="contained" color="primary" type="submit" onClick={addTodo}>Add
                        Todo</Button>
                </FormWrapper>
                <ul>
                    {todos.map(todo => (
                        <Todo text={todo}/>
                    ))}
                </ul>
            </Wrapper>
        </Layout>
    );
}

export default App;
