import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleTask, editTask, deleteTask } from './features/tasksSlice'

function Tasks() {
  const dispatch = useDispatch()
  const [editingId, setEditingId] = useState(null);
  const [draftTask, setDraftTask] = useState("");

  const tasks = useSelector(state => state.tasks.items)
  const filter = useSelector(state => state.tasks.filter)

  const filteredTasks = tasks.filter(task => {
    if (filter === "all") return true;
    if (filter === "Done") return task.isDone;
    if (filter === "Not Done") return !task.isDone;
    return true;
  });

  function startEdit(task) {
    setEditingId(task.id);
    setDraftTask(task.description);
  }

  function saveEdit(id) {
    dispatch(editTask(id, draftTask));
    setEditingId(null);
    setDraftTask("");
  }
  
  return (
    <div>
      <h2 className="text-2xl font-bold text-fuchsia-600 mb-4 drop-shadow">Tasks</h2>
      <ul>
        {filteredTasks.map(task => (
          <li key={task.id}>
            <input 
              type="checkbox" 
              checked={task.isDone} 
              onChange={() => dispatch(toggleTask(task.id))}
            />
            
            {editingId === task.id ? (
              <div>
                <input
                  type="text"
                  value={draftTask}
                  onChange={(e) => setDraftTask(e.target.value)}
                />
                <button
                  onClick={() => saveEdit(task.id)}
                  className="px-3 py-1 rounded font-bold uppercase tracking-wider bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 text-white border-2 border-cyan-400 shadow-lg animate-pulse hover:from-purple-500 hover:via-cyan-400 hover:to-blue-500 hover:scale-105 transition-all duration-300 mr-2"
                >
                  Save
                </button>
              </div>
            ) : (
              <div>
                <span style={{ textDecoration: task.isDone ? 'line-through' : 'none' }}>
                  {task.description}
                </span>
                <button
                  onClick={() => startEdit(task)}
                  className="px-3 py-1 rounded font-bold uppercase tracking-wider bg-gradient-to-r from-fuchsia-400 via-pink-500 to-yellow-400 text-white border-2 border-fuchsia-400 shadow-lg animate-pulse hover:from-yellow-400 hover:via-fuchsia-400 hover:to-pink-500 hover:scale-105 transition-all duration-300 mr-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => dispatch(deleteTask(task.id))}
                  className="px-3 py-1 rounded font-bold uppercase tracking-wider bg-gradient-to-r from-green-400 via-cyan-500 to-blue-500 text-white border-2 border-green-400 shadow-lg animate-pulse hover:from-blue-500 hover:via-green-400 hover:to-cyan-500 hover:scale-105 transition-all duration-300"
                >
                  Delete
                </button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Tasks