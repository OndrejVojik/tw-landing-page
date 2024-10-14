import reactLogo from './imgs/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'

function App() {

  return (
    <div className='bg-gray-200 font-sans flex flex-col items-center'> 
      <Header />
      <Main />
      <Footer />
      <img src={reactLogo} alt="" />
    </div>
  )
}

export default App
