import './App.css'
import Background from './components/Background/Background'
import CreateNewTask from './components/CreateNewTask/CreateNewTask'
import Header from './components/Header/Header'
import TaskList from './components/TaskList/TaskList'

function App() {
  return (
    <Background>
      <Header />

      <CreateNewTask />

      <TaskList />
    </Background>
  )
}

export default App
