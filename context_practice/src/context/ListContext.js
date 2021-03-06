import React, {createContext, Component} from "react";


export const ListContext = createContext();

class ListContextProvider extends Component {
    state = {
        toDos: ["get a card for zach", "do laundry", "walk the dogs"]
    }

    addToDo = (todo) => {
        let newToDos = [...this.state.toDos];
        newToDos.push(todo);
        this.setState({ toDos: newToDos });
    }

    deleteToDo = (todo) => {
        let newToDos = [...this.state.toDos];
        newToDos = newToDos.filter(item => item !== todo["item"]);
        this.setState({ toDos: newToDos });
    }

    render() {
        return(
            <ListContext.Provider value={{...this.state, addToDo: this.addToDo, deleteToDo: this.deleteToDo}}> 
                {this.props.children}
            </ListContext.Provider>
        );
    }
}

export default ListContextProvider;