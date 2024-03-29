import './App.scss'
import Home from './pages/home/Home'
import Lists from './pages/list/List'
import New from './pages/new/New'
import Single from './pages/single/Single'
import Login from './pages/login/Login'
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import { productInput, usersInput } from './formSc'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path='login' element={<Login />} />
            <Route path='users' >
              <Route index element={<Lists />} />
              <Route path=':userId' element={<Single />} />
              <Route path='new' element={<New inputs={usersInput} title="Add new User " />} />
            </Route>

            <Route path='products'>
              <Route index element={<Lists />} />
              <Route path=':productId' element={<Single />} />
              <Route path='new' element={<New inputs={productInput} title="Add new product" />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
