import './App.css';
import Nav from '../navigation/Nav';
import Header from '../header/Header';
import Liste from '../Liste/Liste';

function App() {
  return (
   <div className='container'>
     <Nav/> 
     <Header/>
     <Liste/>
   </div>
  );
}

export default App;
