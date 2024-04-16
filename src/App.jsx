
import './App.css'
import About from './components/about'
import Features from './components/features'
import Home from './components/home'
import Navbar from './components/navbar'
import Newsletter from './components/newsletter'
import Pricing from './components/pricing'
import Footer from './shared/footer'

function App() {
  

  return (
    <>
      <Navbar/>
      <Home/>
      <Features/>
      <About/>
      <Pricing/>
      <Newsletter/>
      <Footer/>
    </>
  )
}

export default App
