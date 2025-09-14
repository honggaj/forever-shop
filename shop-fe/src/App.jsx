import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import AppRouter from './routes/AppRouter'
import './App.css'

function App() {

  return (
    <>
      <div className='px-4'>
        <BrowserRouter>
          <Navbar />
          <AppRouter />
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
