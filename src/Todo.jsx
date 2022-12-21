import React, { useState, useReducer } from 'react';
import {Button, TextField, Typography} from '@mui/material';
import { Stack } from '@mui/system';
import { useForm } from "react-hook-form";
import Item from './components/Card';
import uuid from 'react-uuid';
import { reducer, todos } from './Reducer/todoreducer';
import { useHttp } from './hook/http.hook';

const Todo = () => {
    const [state, dispatch] = useReducer(reducer, {todos: []})

    const {request} = useHttp()

    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            isDone: false, 
            time: "11:00"
        }
    });
    const onSubmit = data => {
        // dispatch({type: "ADD", payload: {...data, id: uuid()}})

        request('http://localhost:7777/todos', "POST", {id: Math.random(), ...data})
            .then(res => console.log(res))
                
    };

    return (
        <div>
            <center>
                <Typography>Todo List</Typography>
            </center>
            <Stack flexDirection="row" width="fit-content" gap={2} sx={{margin: "0 auto"}} >
                <form onSubmit={handleSubmit(onSubmit)} >
                    <TextField {...register("task", { required: true })} id="outlined-basic" label="Outlined" variant="outlined" />
                    <Button variant='contained' type='submit' >add</Button>
                    {errors.task && <Typography color="red" >This field is required</Typography>}
                </form>
            </Stack>
            <div className="container-grid">
                {
                    state.todos.map(item => <Item {...item} dispatch={dispatch} /> )
                }
            </div>            
        </div>
    );
};


export default Todo;