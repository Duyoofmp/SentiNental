import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './Components/Home';


function App() {
  return (
    <Router>
      <Routes>
           <Route path="/" exact element={<Home/>}/>
           

          </Routes>
    </Router>
  );
}

export default App;