import React from "react";
import Header from "./components/Header";
import TodoForm from "./components/TodoForm";
import TodoList from './components/TodoList'
import TodoContextProvider from "./context/TodoContext";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"

function App() {
  return (
    <>
      <ToastContainer />
      <TodoContextProvider>
        <div className="App">
          <Header />
          <TodoForm />
          <TodoList />
        </div>
      </TodoContextProvider>
    </>
    
  );
}

export default App;
