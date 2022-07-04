import './main.scss'
import Poster from './Components/Poster/Poster'
import Schedule from './Components/Schedule/Schedule'
import Promo from './Components/Promo/Promo'
import Footer from './Components/Footer/Footer'

function App() {
  function downloadApp() {
    alert('I am here: App.js 10:5')
  }

  return (
    <div className="App">
      <Poster downloadApp={downloadApp} />
      <Schedule downloadApp={downloadApp} />
      <Promo />
      <Footer />
    </div>
  )
}

export default App
