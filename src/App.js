import './App.css';
import Content from './components/Content';
import DishesWrapper from './components/Dishes';
import GetStarted from './components/Categories';
import Navbar from './components/Navbar';

import {Route,BrowserRouter as  Router,Routes} from 'react-router-dom'
import ViewDishHandler from './components/ViewDish';
import About from './components/About';
const App=()=> {
  return (
  <div className='app-container ' >
    <Router>
    <Navbar/>
    <Routes>
    <Route path="/" element={<Content/>}/>
   <Route exact path="/getStarted" element={<GetStarted/>}/>
   <Route exact path="/about" element={<About/>}/>
   <Route path="/getStarted/:category" element={<DishesWrapper />} />
   <Route path="/getStarted/:category/:dishName" element={<ViewDishHandler />} />
   </Routes>
  </Router>
  </div>
  );
}

export default App;
