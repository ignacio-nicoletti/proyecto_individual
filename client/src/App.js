import './App.css';
import Form from './Component/Form/Form';
import Home from './Component/Home/Home';
import NavBar from './Component/NavBar/NavBar';
import LandingPage from './Component/LandingPage/LandingPage'
import DetailGame from './Component/DetailGame/DetailGame';
import About from './Component/About/About';
import { Route } from 'react-router-dom';

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

      <Route exact path='/home/:id' component={DetailGame} />

      <Route exact path="/about" >
        <About/>
      </Route>
    </div>

  );
}
export default App;