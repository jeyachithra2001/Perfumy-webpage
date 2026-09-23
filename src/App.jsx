import Navbar from "./components/navbar"
import Searchbar from "./components/search"
import Card from "./components/cards"
import About from "./components/about"
import Footer from "./components/footer"

function App() {

  return (
    <div className="body">
      <Navbar />
      <Searchbar />
      <Card />
      <About />
      <Footer />
    </div>
  )
}

export default App
