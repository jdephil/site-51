import './App.css';
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import HomePage from './HomePage'
import HomeWorldHotline from './HomeWorldHotline'
import Banking from './Banking'
import ReportHuman from './ReportHuman'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav></nav>
        <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path='/hwh' component={HomeWorldHotline} /> 
             <Route path='/banking' component={Banking} />
            <Route path='/reporting' component={ReportHuman} /> 
        </Switch>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
