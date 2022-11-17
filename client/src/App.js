import './App.css';
import Form from './Component/Form/Form';
import Home from './Component/Home/Home';
import NavBar from './Component/NavBar/NavBar';
import LandingPage from './Component/LandingPage/LandingPage'
import { Route } from 'react-router-dom';
import Videogames from './Component/Videogames/Videogames';
import DetailGame from './Component/DetailGame/DetailGame';





function App() {

  return (

    < div className='app'>


      <Route exact path="/">
        <LandingPage />
      </Route>

      <Route exact path="/home">

        <NavBar />
        <Home />

      </Route>

      <Route path="/create">
        <NavBar />
        <Form />
      </Route>

      {/* <Route exact path="/home/:id">
        <DetailGame />
      </Route> */}

      <Route exact path='/home/:id' component={DetailGame} />

    </div>


  );
}
export default App;