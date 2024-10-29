
import NavigationBar from './NavigationBar';
import Home from './Home';
import About from './About';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App(){
  return(
  
    <Router>
      <NavigationBar/>
      <Routes> 
        <Route path = '/' element = {<><Home/></> }/>
        <Route path = '/About' element = {<About/>}/>
      </Routes>
    </Router>
  
  );
}
export default App;


 