import { useState,useEffect } from "react";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import {v4 as uuid} from 'uuid'
import { Box } from "@mui/material";


import List from '@mui/material/List';


const initialTodo = ()=>{
      const data=JSON.parse(localStorage.getItem('todos'))
      if(!data){
            return [];
      }
      return data;
}

export default function Todos() {

      const [todos, setTodo] = useState(initialTodo)

      useEffect(()=>{
            localStorage.setItem('todos',JSON.stringify(todos))
      },[todos])

      function removeTodo(id){
            setTodo(curr=>curr.filter(ele=>ele.id!==id))
      }

      function addTodo(text){
            setTodo(curr=>{
                  return [...curr,{id:uuid(),text:text,complete:false}]
            })
      }

      function toggleTodo(id){
            setTodo(curr=>{
                  return curr.map((ele)=>{
                        if(ele.id===id){
                              return {...ele,complete:!ele.complete};
                        }
                        else{
                              return ele;
                        }
                  })
            })
      }

      return <>
      <Box sx={{
            display:'flex',
            justifyContent:'center',
            m:10,
      }}>

            <List sx={{ width: '100%', maxWidth: 340, bgcolor: 'background.paper', display:'flex',flexDirection:'column',alignItems:'center' }}>
                  <TodoForm addTodo={addTodo}/>
                  <br />
                  {todos.map((todo) => {
                     return <TodoList todo={todo} key={todo.id} remove={removeTodo} toggle={toggleTodo}/>  
                  })}
            </List>
      </Box>
      </>
}