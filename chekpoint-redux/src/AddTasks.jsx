import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTask } from './features/tasksSlice'


function AddTasks() {
    const [value, setValue] = useState("")
    const dispatch = useDispatch()

    function onSubmit(e) {
        e.preventDefault();
        if (value.trim() !== "") {
            dispatch(addTask(value));
            setValue("");
        }
    }
    
    return (
        <div style={{ margin: '20px 0' }}>
            <h2 className="text-2xl font-bold text-pink-500 mb-4 drop-shadow">Add New Task</h2>
            <form onSubmit={onSubmit} style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
                <input 
                    type="text" 
                    value={value} 
                    onChange={(e) => setValue(e.target.value)} 
                    placeholder="Enter task description"
                    className="px-4 py-2 w-72 rounded border-2 border-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-400 bg-white text-gray-800 shadow"
                />
                <button
                    type="submit"
                    className="px-4 py-2 rounded font-bold uppercase tracking-wider bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white border-2 border-pink-400 shadow-lg animate-pulse hover:from-blue-500 hover:via-pink-500 hover:to-purple-500 hover:scale-105 transition-all duration-300"
                >
                    Add Task
                </button>
            </form>
        </div>
    )
}


export default AddTasks