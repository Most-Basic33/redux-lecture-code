 
import Header from './Components/Header';
import routes from './routes';
import './App.css';
 

import React  from 'react'
 
const App = (props) => {
    
         return (
      <div className="App">
            <Header />
             {routes}
           </div>
    )
 }
 
 export default App;
  
  
  
//I might have to remove null

