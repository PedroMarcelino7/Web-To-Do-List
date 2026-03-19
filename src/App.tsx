import './App.css'
import Background from './components/Background/Background'
import CreateNewTask from './components/CreateNewTask/CreateNewTask'
import Header from './components/Header/Header'

function App() {
  return (
    <Background>
      <Header />

      <CreateNewTask />
    </Background>
  )
}

export default App
