import { HomePage } from "./pages/HomePage"
import "./styles/index.scss"
import { register } from "swiper/element/bundle"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/scrollbar"

register()


function App() {

  return (
    <>
      <HomePage />
    </>
  )
}

export default App
