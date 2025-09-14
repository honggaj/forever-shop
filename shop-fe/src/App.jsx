import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import AppRouter from './routes/AppRouter'
import './App.css'
import { ShopProvider } from './context/ShopProvider'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


function App() {

  return (
    <>
      <div className='px-4'>
        <ShopProvider>
          <BrowserRouter>
            <Navbar />
            <AppRouter />
          </BrowserRouter>
        </ShopProvider>

      </div>
    </>
  )
}

export default App
