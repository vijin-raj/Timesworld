//import './App.css';
import List from './component/List';
import Login from './component/Login';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {

  return (
<>
<Router>
<Routes>

  <Route path = '/'  element= {<Login/> }/>
  <Route path = '/home'  element= {<List/> }/>

</Routes>

</Router>

</>

  )
}

export default App
