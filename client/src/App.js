import './App.css';
import Form from './Component/Form/Form';
import Home from './Component/Home/Home';
import NavBar from './Component/NavBar/NavBar';
import LandingPage from './Component/LandingPage/LandingPage'
import { Route, Switch } from 'react-router-dom';



function App() {
  return (
   
   < div className='app'>
 
        <Route exact path="/">
          <LandingPage />
        </Route>

        <Route path="/home">
          <NavBar/>
          <Home />
        </Route>
        
        <Route path="/create">
          <Form />
        </Route>

        <Route path="/:id">
          <videoGames />
        </Route>

        </div>
    
  );
}

export default App;