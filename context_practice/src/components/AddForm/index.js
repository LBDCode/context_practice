import React, { Component } from "react";
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import {ListContext } from '../../context/ListContext';


class AddForm extends Component {
    state = {
        newToDo: ""
    }

    updateForm = event => {
        const{ name, value } = event.target;
        this.setState({
            [name]: value
        });
    }

    submitNewToDo = (updateContextToDos) => {
        updateContextToDos(this.state.newToDo);
        this.setState({ newToDo: "" });
    }

    render() {
        return (
            <ListContext.Consumer>{(context)=>{
                const addToDo = context.addToDo;
                return(
                    <InputGroup onChange={this.updateForm} className="mb-3 itemAddForm">
                    <FormControl
                      placeholder="ToDo item"
                      aria-label="ToDo item"
                      aria-describedby="basic-addon2"
                      name="newToDo"
                      value={this.state.newToDo}
                      onChange={this.updateForm}
                    />
                    <InputGroup.Append>
                      <Button onClick={() => this.submitNewToDo(addToDo)} variant="outline-secondary">Add</Button>
                    </InputGroup.Append>
                  </InputGroup>
        
                )
            }}            
            </ListContext.Consumer>

        )
    }
}

export default AddForm;