
import { Navbar } from "./Components/Navbar"
import { CardThree } from "./Components/VendorCard"

function App() {


  return (
    <>
      <Navbar/>
      <div className="container flex justify-center items-center mt-20 md:ml-11">
      <div className=" m-auto flex-column md: items-center  grid grid-cols-3 gap-20 justify-center">
      <CardThree/>
      <CardThree/>
      <CardThree/>
      <CardThree/>
      <CardThree/>
      <CardThree/>
      <CardThree/>
      <CardThree/>
      <CardThree/>
      </div>
      </div>
      
      
    </>
  )
}

export default App
