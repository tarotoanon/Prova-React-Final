
import './App.css';
import Header from './components/Header';
import {BrowserRouter,Switch,Route,} from "react-router-dom";
import PageNotFound from './components/Pagenotfound';
import Page2 from './components/Page2';




function App() {
  return (


    

  <BrowserRouter>   
    <Switch>
       <Route path="/" exact component={Header}/>    
       <Route path="/Page2"component={Page2}/>         
       <Route path="*"component={PageNotFound}/>      
       

    </Switch>  

          
    
            
</BrowserRouter> 


    
    
  );
}

export default App;
