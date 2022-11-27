import { Navbar, Welcome, Footer, Transactions, Services, Loader } from "./components"
import logo from "../images/logo.png"
import Favicon from "react-favicon";

const App = () => {
  <Favicon>{logo}</Favicon>

  return (
    <div className="min-h-screen">
      <div className="gradient-bg-welcome">
        <Navbar />
        <Welcome />
      </div>
      <Services />
      <Transactions />
      <Footer />
    </div>
  )
}

export default App
