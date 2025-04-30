import TodoCard from "./TodoCard"

const TodoList = ({ todos, onEdit, onDelete, onComplete }) => {
  if (!Array.isArray(todos) || todos.length === 0) {
    return (
      <div className='text-center py-8 px-4'>
        <p className='bg-gray-200 p-6 rounded-lg shadow-sm text-gray-600 font-medium'>
          No Todos Yet. Click "+ TODO" to add one!
        </p>
      </div>
    )
  }
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {todos.map((todo) => (
        <TodoCard 
          key={todo.id}
          todo={todo}
          onEdit={onEdit}
          onComplete={onComplete}
          onDelete={onDelete}
        />
      ))}
    </div>
  )
}

export default TodoList