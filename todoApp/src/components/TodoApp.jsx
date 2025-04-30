import React, { useState } from 'react'
import TodoModel from './TodoModel'
import TodoList from './TodoList'

const TodoApp = () => {
  const STATUS = ["TODO", "STARTING SOON", "IN PROGRESS", "IN QA", "COMPLETED"]
   
  // State for list of todos
  const [todos, setTodos] = useState([])
  
  // Show or hide state for todo title description pop up
  const [showModel, setShowModel] = useState(false)

  // State for currently editing todo
  const [currentTodo, setCurrentTodo] = useState(null)

  // Generate unique id for new todos 
  const generateId = () => {
    return Date.now().toString()
  }

  // Handle for adding todo
  const handleAddTodo = (todoData) => {
    const newTodo = {
      id: generateId(),
      title: todoData.title,
      description: todoData.description,
      status: todoData.status,
      completed: todoData.status === "COMPLETED"
    }     
    setTodos([...todos, newTodo])
    setShowModel(false)
  }

  // Handle for updating existing todo
  const handleUpdateTodo = (todoData) => {
    const updatedTodos = todos.map(todo => {
      if (todo.id === currentTodo.id) {
        return {
          ...todo,
          title: todoData.title,
          description: todoData.description,
          status: todoData.status,
          completed: todoData.status === "COMPLETED"    
        }
      }
      return todo
    })
    setTodos(updatedTodos)
    setCurrentTodo(null)
    setShowModel(false)
  }

  // Handle for submission 
  const handleSubmitTodo = (todoData) => {
    if (currentTodo) {
      handleUpdateTodo(todoData)
    } else {
      handleAddTodo(todoData)
    }
  }

  // Handle for edit the todo
  const handleEdit = (todoId) => {
    const todoToEdit = todos.find(todo => todo.id === todoId)
    if (todoToEdit) {
      setCurrentTodo(todoToEdit)
      setShowModel(true)
    }
  }

  // Handle for deleting todo 
  const handleDelete = (todoId) => {
    const updatedTodos = todos.filter(todo => todo.id !== todoId)
    setTodos(updatedTodos)
  }

  // Handler for marking todo as completed
  const handleComplete = (todoId) => {
    const updatedTodos = todos.map(todo => {
      if (todo.id === todoId) {           
        return { ...todo, status: "COMPLETED", completed: true }
      }
      return todo
    })
    setTodos(updatedTodos)
  }

  // Open the popup
  const openAddModel = () => {
    setCurrentTodo(null)
    setShowModel(true)
  }

  // Close the popup
  const closeModel = () => {
    setCurrentTodo(null)
    setShowModel(false)
  }

  return (
    <div className='min-h-screen flex flex-col items-center p-4 bg-gray-100'>
      <div className='w-full max-w-5xl'>
        <h1 className="text-2xl font-bold mb-4">My Todo List</h1>
        <button 
          onClick={openAddModel}
          className='px-4 py-2 bg-blue-500 text-white rounded-lg mb-4'>
          TODO +
        </button>
      
        <TodoList   
          todos={todos}
          onEdit={handleEdit}
          onDelete={handleDelete}
          onComplete={handleComplete}
        />

        {showModel && ( 
          <TodoModel
            isOpen={showModel}
            isClose={closeModel}
            onSubmit={handleSubmitTodo}
            initialData={currentTodo}
            statues={STATUS}
          />
        )}
      </div>
    </div>
  )
}

export default TodoApp