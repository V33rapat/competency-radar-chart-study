import CompetencyRadar from './components/CompetencyRadar'
import './App.css' 
import Navbar from './components/Navbar'
import Infouser from './components/Infouser'

function App() {

  return (
    <>
      <Navbar />
      <div className="App">
        <div className="dashboard-user">
          <Infouser />
          <CompetencyRadar />
        </div>
      </div>
    </>
  )
}

export default App
