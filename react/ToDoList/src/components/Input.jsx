import React,{useState} from 'react'
import { v4 as uuidv4 } from 'uuid';
import './input.css'
const Input = () => {
    const [input, setInput] = useState('');
    const [todos, setTodos] = useState([]);
    const [completedTodos, setCompletedTodos] = useState([]);
  
    const addTodo = () => {
      if (input !== '') {
        setTodos([...todos, input]);
        setInput('');
      }
    };
  
    const deleteTodo = (id) => {
      setTodos(todos.filter((todo, index) => index !== id));
    };
  
    const completeTodo = (id) => {
      const completedTodo = todos[id];
      setTodos(todos.filter((todo, index) => index !== id));
      setCompletedTodos([...completedTodos, completedTodo]);
    };
  
    const deleteCompletedTodo = (id) => {
      setCompletedTodos(completedTodos.filter((todo, index) => index !== id));
    };
  
    return (
      <div className="min-h-screen flex justify-center  bg-gray-100 p-6">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-5xl">
          <h2 className="text-3xl font-semibold text-center mb-6 text-gray-800">Todo List</h2>
          
          {/* Input Section */}
          <div className="mb-6 flex justify-between">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Add a new task"
            />
            <button
              onClick={addTodo}
              className="ml-4 px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:ring-2 focus:ring-blue-400"
            >
              Add
            </button>
          </div>
  
          {/* Todo and Completed List Section */}
          <div className="flex gap-8">
            {/* Left Column: Todo List */}
            <div className="flex-1">
              <h2 className="text-2xl font-semibold text-center mb-4 text-gray-800">Todos</h2>
              <ul className="space-y-3">
                {todos.map((todo, index) => (
                  <li key={uuidv4()} className="flex justify-between items-center p-4 bg-gray-50 rounded-md shadow-sm hover:bg-gray-100 transition duration-300">
                    <span className="text-gray-700">{todo}</span>
                    <div className="flex space-x-2">
                      <button
                        onClick={() => deleteTodo(index)}
                        className="text-red-500 hover:text-red-700 transition duration-200"
                      >
                        Delete
                      </button>
                      <button
                        onClick={() => completeTodo(index)}
                        className="text-green-500 hover:text-green-700 transition duration-200"
                      >
                        Complete
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
  
            {/* Right Column: Completed Todos */}
            <div className="flex-1">
              <h2 className="text-2xl font-semibold text-center mb-4 text-gray-800">Completed Todos</h2>
              <ul className="space-y-3">
                {completedTodos.map((todo, index) => (
                  <li key={index} className="flex justify-between items-center p-4 bg-gray-100 rounded-md shadow-sm hover:bg-gray-200 transition duration-300">
                    <span className="text-gray-500 line-through">{todo}</span>
                    <div className="flex space-x-2">
                      <button
                        onClick={() => deleteCompletedTodo(index)}
                        className="text-red-500 hover:text-red-700 transition duration-200"
                      >
                        Delete
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Input