import Header from "./Header"
import Main from "./MainMenu.jsx"
import './App.css'

const apiKey = import.meta.env.VITE_HF_API_KEY;

function App() {

  return (
    <>
      <Header />
      <Main />
    </>
  )
}

export default App
