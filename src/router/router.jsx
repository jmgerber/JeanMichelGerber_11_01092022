import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Error from '../components/Error'
import Rent from '../pages/Rent'

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/rent">
        <Route path=":id" element={<Rent />} />
      </Route>
      <Route path="*" element={<Error />} />
    </Routes>
  )
}

export default Router
