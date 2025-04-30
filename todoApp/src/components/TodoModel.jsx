import React, { useEffect, useState } from 'react'
import ReactQuill from 'react-quill'
import "quill/dist/quill.snow.css"

const TodoModel = ({ isClose, statues, initialData, onSubmit, isOpen }) => {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [status, setStatus] = useState("TODO")

  useEffect(() => {
    if (initialData) {
      setTitle(initialData.title || "")
      setDescription(initialData.description || "")
      setStatus(initialData.status || "TODO")
    } else { 
      resetForm()
    }
  }, [initialData])

  const resetForm = () => {
    setTitle("")
    setDescription("")
    setStatus("TODO")
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Form validation
    if (!title.trim()) {
      alert("Title is required")
      return
    }
    
    const formData = {
      title,
      description,
      status
    }
    
    onSubmit(formData)
    resetForm()
  }

  if (!isOpen) return null
  
  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50'> 
      <div className='rounded-lg bg-white shadow-lg p-6 w-full max-w-2xl relative'>
        <button
          onClick={isClose}
          className='absolute top-4 right-4 text-gray-500 hover:text-gray-700'
          aria-label="Close"
        >
          ❌ 
        </button>
        
        <h2 className='text-center text-2xl mb-6 font-bold'>
          {initialData ? "Edit TODO" : "Add New Todo"}
        </h2>

        <form onSubmit={handleSubmit}>
          <div className='mb-4'>
            <label className='block font-semibold mb-2' htmlFor="title">Title</label>
            <input 
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              type="text" 
              required
              className='w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500' 
            />
          </div>

          <div className='mb-6'>
            <label className='block font-semibold mb-2' htmlFor="description">Description</label>
            <ReactQuill
              value={description}
              onChange={setDescription}
              theme='snow'
            />
          </div>
          
          <div className='mb-6'>
            <label className='block font-semibold mb-2' htmlFor="status">Status</label>
            <select
              id="status"
              className='w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500' 
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            > 
              {statues.map((statusOption, index) => (
                <option key={index} value={statusOption}>{statusOption}</option>
              ))}
            </select>
          </div>
          
          <button 
            type='submit' 
            className='w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500'
          >
            {initialData ? "Update Todo" : "Add Todo"}
          </button>
        </form>
      </div>
    </div>
  )
}

export default TodoModel