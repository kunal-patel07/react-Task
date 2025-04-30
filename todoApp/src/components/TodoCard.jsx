import React from "react"

const TodoCard = ({ todo, onEdit, onDelete, onComplete }) => {
  if (!todo) return null
  
  const statusColor = getStatusColor(todo.status)
  
  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-4 border border-gray-100">
      <h3 clnpassName="font-bold text-xl mb-3 break-words">{todo.title}</h3>

      <div
        className="bg-gray-50 p-4 rounded mb-4 min-h-32 description-container"
        dangerouslySetInnerHTML={{ __html: todo.description || '' }}
      ></div>
      
      <p className="text-sm font-semibold mb-4">
        Status: <span className={statusColor}>{todo.status}</span>
      </p>
      
      <div className="flex flex-wrap gap-3">
        {!todo.completed && (
          <button
            className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-md transition-colors"
            onClick={() => onEdit && onEdit(todo.id)}
            aria-label="Edit Todo"
          >
            Edit
          </button>
        )}
        
        <button
          className="bg-red-600 hover:bg-red-700 text-white rounded-md px-4 py-2 transition-colors"
          onClick={() => {
            if (window.confirm("Are you sure you want to delete this TODO?")) {
              onDelete && onDelete(todo.id)
            }
          }}
          aria-label="Delete Todo"
        >
          Delete
        </button>

        {!todo.completed && (
          <button
            className="bg-green-500 hover:bg-green-600 text-white rounded-md px-4 py-2 transition-colors"
            onClick={() => {
              if (window.confirm("Mark this todo as completed?")) {
                onComplete && onComplete(todo.id)
              }
            }}
            aria-label="Mark as Completed"
          >
            Mark as Completed
          </button>
        )}
      </div>
    </div>
  )
}

const getStatusColor = (status) => {
  switch (status) {
    case "COMPLETED":
      return "text-green-600 font-bold"
    case "IN QA":
      return "text-purple-600 font-bold"
    case "IN PROGRESS":
      return "text-blue-600 font-bold"
    case "STARTING SOON":
      return "text-orange-600 font-bold"
    default:
      return "text-gray-600 font-bold"
  }
}

export default TodoCard