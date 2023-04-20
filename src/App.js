
import './App.css';
import Footer from './PortpolioContainer/Home/Footer/Footer';
import Home from './PortpolioContainer/Home/Home';
import Profile from './PortpolioContainer/Home/Profile/Profile';
import '../src/PortpolioContainer/Home/Home.css'
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <Home/>
  </BrowserRouter>,
  
    </div>
  );
}

export default App;
