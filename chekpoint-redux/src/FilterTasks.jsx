import { useDispatch, useSelector } from 'react-redux'
import { setFilter } from './features/tasksSlice'

function FilterTasks() {
  const dispatch = useDispatch()            // Hook to dispatch actions
  const currentFilter = useSelector(state => state.tasks.filter)   // Get current filter from Redux state

   // Button component for filter options
  const Btn = ({id, label}) => {
    return (
      <button
        onClick={() => dispatch(setFilter(id))}
        className={`mx-1 px-3 py-1 rounded font-bold uppercase tracking-wider transition-all duration-300
          ${currentFilter === id
            ? 'bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 text-white border-2 border-yellow-400 shadow-lg animate-pulse scale-105'
            : 'bg-black text-gray-400 border border-gray-600 hover:bg-gradient-to-r hover:from-yellow-400 hover:via-pink-500 hover:to-purple-500 hover:text-white hover:border-yellow-400 hover:scale-105 hover:shadow-lg'}`}
      >
        {label}
      </button>
    )
  }

  return (
    <div>
      <h2 className="text-2xl font-bold text-orange-500 mb-4 drop-shadow">Filter Tasks</h2>
      <Btn id="all" label="All" />
      <Btn id="Done" label="Done" />
      <Btn id="Not Done" label="Not Done" />
    </div>
  )
}

export default FilterTasks
