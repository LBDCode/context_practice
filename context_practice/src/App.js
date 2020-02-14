import React from 'react';
import Nav from './components/Nav';
import AddForm from './components/AddForm';
import ToDoList from './components/List';
import ListContextProvider from './context/ListContext';


function App() {
  return (
    <div className="App">
      <ListContextProvider>
        <Nav/>
        <AddForm/>
        <ToDoList/>
      </ListContextProvider>
    </div>
  );
}

export default App;
