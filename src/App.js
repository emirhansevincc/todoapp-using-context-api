import React from "react";
import Header from "./components/Header";
import TodoForm from "./components/TodoForm";
import TodoList from './components/TodoList'
import TodoContextProvider from "./context/TodoContext";

function App() {
  return (
    <TodoContextProvider>
      <div className="App">
        <Header />
        <TodoForm />
        <TodoList />
      </div>
    </TodoContextProvider>
    
  );
}

export default App;
