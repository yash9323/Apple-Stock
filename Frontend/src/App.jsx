import Navbar from "./components/Navbar"
import Graph from "./components/Graph"
import Stats from "./components/Stats"
import Footer from "./components/Footer"

export default function App() {
  return (
    <div className="flex flex-col m-5 gap-y-2">
      <Navbar/>
      <Graph/>
      <Stats />
      <Footer/>
    </div>
  )
}

