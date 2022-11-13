import './App.css';
import Form from './Component/Form/Form';
import Home from './Component/Home/Home.js';
import NavBar from './Component/NavBar/NavBar';
import Prueba from './Component/Prueba';
import { Route } from 'react-router-dom';




function App() {
  return (
     <div className="App">
         <NavBar/>
<Prueba/>
    //   <Route path="/home">
    //     <Home />
    //   </Route>


    //   <Route path="/post">
    //     <Form />
    //   </Route>


    </div>
  );
}

export default App;