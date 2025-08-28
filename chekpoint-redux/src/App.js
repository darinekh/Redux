import './App.css';
import AddTasks from './AddTasks';
import FilterTasks from './FilterTasks';
import Tasks from './Tasks';

function App() {
  return (
    <div
  className="App min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-200 via-orange-100 to-yellow-100 shadow-2xl p-8"
      style={{ fontFamily: 'Orbitron, Arial, sans-serif', maxWidth: '800px', margin: '0 auto' }}
    >
  <h1 className="text-4xl font-extrabold text-fuchsia-600 drop-shadow-lg animate-pulse mb-8 uppercase tracking-widest" style={{textShadow: '0 0 16px #f472b6, 0 0 32px #f472b6'}}>Redux Todo List</h1>
      <AddTasks />
      <FilterTasks />
      <Tasks />
    </div>
  );
}

export default App;