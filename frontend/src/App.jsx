import { Outlet } from "react-router-dom"
import Header from "./component/Header"
import HomeScreen from "./pages/HomeScreen"




function App() {
  

  return (
    <>
     <Header/>

     <div className="container mx-auto">
      <Outlet/>
     </div>
    </>
  )
}

export default App
