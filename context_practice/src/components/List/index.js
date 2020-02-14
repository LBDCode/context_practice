import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import {ListContext } from '../../context/ListContext';

class TodoList extends Component {

    render() {
        return(
        <ListContext.Consumer>{(context)=>{
            const toDos = context.toDos;
            return(
                <Container className="todoList">
                    <ListGroup>
                            {toDos.map(item => {
                            return <ListGroup.Item><span className="todoItem">{item}</span> <Button className="deleteButton" variant="outline-danger" size="sm">delete</Button></ListGroup.Item>
                        })}
                    </ListGroup>
    
                </Container>    
            )
        }}
        </ListContext.Consumer>
        )
    }
}

export default TodoList;