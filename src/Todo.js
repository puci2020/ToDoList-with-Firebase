import React, {useState} from 'react';
import styled from 'styled-components'
import {List, ListItem, ListItemText, Button, Modal, InputLabel, Input, FormControl} from "@material-ui/core";
import db from './firebase'
import firebase from "firebase";

const ModalWrapper = styled(Modal)`
  display: flex;
  align-items: center;
  justify-content: center;
  .modal__item{
  background-color: white;
  padding: 20px;
  }
  Button{
  margin-top: 10px;
  }
`;


const Todo = (props) => {

    const [open, setOpen] = useState(false);
    const [input, setInput] = useState('');

    const handleClose = () =>{
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    const updateTodo = () => {
        db.collection('todos').doc(props.text.id).set({
            todo: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        }, {merge: true});

        setInput('');
        setOpen(false);
    };

    return (
        <>
            <ModalWrapper open={open}
                   onClose={handleClose}>
                <div className="modal__item">
                <FormControl>
                    {/*<InputLabel>{props.text.todo}</InputLabel>*/}
                    <Input placeholder={props.text.todo} value={input} onChange={event => setInput(event.target.value)}/>
                    <Button disabled={!input} variant="contained" color="primary" type="submit" onClick={updateTodo}>Update
                        Todo</Button>
                </FormControl>
                </div>
            </ModalWrapper>
        <List>
            <ListItem>
                <ListItemText primary={props.text.todo} secondary="Deadline!!!"/>
            </ListItem>
            <Button variant="contained" color="secondary" onClick={event => db.collection('todos').doc(props.text.id).delete()}>Delete</Button>
            <Button variant="contained" color="primary" onClick={handleOpen}>Edit</Button>
        </List>
            </>
    );
};

export default Todo;
